<script>
	import '../app.css';
	import { base } from '$app/paths';
</script>

<div class="flex flex-col min-h-full">
	<main class="flex-1 p-8">
		<slot />
	</main>

	<footer class="flex-0 px-8 py-4 mt-auto text-gray-600 bg-gray-200">
		<p>
			<strong><a href={base}>WA Loader</a></strong> by Pronoun | <a href="{base}/about">Credits</a>
		</p>
	</footer>
</div>
