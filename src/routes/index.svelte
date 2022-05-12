<script>
	import FilePond, { registerPlugin } from 'svelte-filepond';

	import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

	import { onMount } from 'svelte';

	import { parseISO, formatISO, formatDistance } from 'date-fns';

	let PostalMime;

	onMount(async () => {
		let postalMime = await import('postal-mime');
		PostalMime = postalMime.default;
	});

	registerPlugin(FilePondPluginFileValidateType);

	// a reference to the component, used to call FilePond methods
	let pond;

	let applications = [];
	let unique = [];

	async function handleAddFile(err, fileItem) {
		const email = await new PostalMime().parse(fileItem.file);

		const nation = email.to[0].name;
		const date = parseISO(email.date);
		const link = email.text.match(
			/^https:\/\/www\.nationstates\.net\/page=join_WA\?nation=.*&appid=.*$/gm
		)[0];
		const id = fileItem.id;

		applications.push({
			nation: nation,
			date: date,
			link: link,
			id: id
		});

		processUniqueApplications();
	}

	async function handleRemoveFile(err, fileItem) {
		applications = applications.filter((application) => application.id !== fileItem.id);
		processUniqueApplications();
	}

	function processUniqueApplications() {
		unique = [];

		for (const app of applications) {
			const nations = unique.map((app) => app.nation);
			if (!nations.includes(app.nation)) {
				unique.push(app);
			} else if (unique[nations.indexOf(app.nation)].date < app.date) {
				unique[nations.indexOf(app.nation)] = app;
			}
		}

		unique.sort((a, b) => {
			return a.nation.localeCompare(b.nation, 'en', {
				sensitivity: 'base',
				numeric: true
			});
		});

		unique = unique;
	}

	function isExpired(date) {
		return new Date() - date > 28 * (24 * 60 * 60 * 1000);
	}
</script>

<svelte:head>
	<title>WA Loader</title>
</svelte:head>

<h1 class="mb-4 text-5xl font-extrabold text-gray-900">WA Application Loader</h1>

<h2 class="mb-4 text-xl text-gray-700">Quickly extract WA admit links from emails.</h2>

<div class="grid grid-cols-2 gap-4">
	<section>
		<h3 class="mb-2 text-2xl font-bold text-gray-900">Upload Emails</h3>
		<p class="my-2 text-sm text-gray-600">
			Upload <code class="bg-gray-200 rounded p-0.5">.eml</code> files. Multiple files and folders are
			supported.
		</p>
		<FilePond
			bind:this={pond}
			name="filepond"
			allowMultiple={true}
			onaddfile={handleAddFile}
			onremovefile={handleRemoveFile}
			acceptedFileTypes={['message/rfc822']}
			fileValidateTypeLabelExpectedTypes="Expects .eml file (message/rfc822)"
		/>
	</section>
	<section>
		<h3 class="mb-2 text-2xl font-bold text-gray-900">Admit Links</h3>
		<div class="space-y-1">
			{#if unique.length === 0}
				<p class="my-2 text-sm text-gray-600">Looks like you haven’t uploaded any files yet.</p>
			{/if}
			{#each unique as application}
				<div class="p-1 bg-gray-100 rounded-md">
					<a
						href={application.link}
						class="inline-block px-2.5 py-1.5 text-sm font-medium leading-5 text-gray-800 transition active:transition-none duration-150 ease-in-out bg-white rounded shadow-sm hover:text-gray-600 focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2 ring-offset-gray-100 active:bg-gray-200 active:text-gray-800 mr-2"
						target="_blank"
						rel="noreferrer noopener">Admit</a
					>
					<span
						class="font-medium align-middle {isExpired(application.date)
							? 'text-gray-500'
							: 'text-gray-800'}">{application.nation}</span
					>
					<span
						class="text-sm leading-4 align-middle {isExpired(application.date)
							? 'text-red-400'
							: 'text-gray-500'}"
					>
						applied <time
							datetime={formatISO(application.date)}
							title={application.date.toLocaleDateString('en')}
							>{formatDistance(application.date, new Date(), {
								addSuffix: true
							})}</time
						></span
					>
				</div>
			{/each}
		</div>
	</section>
</div>
