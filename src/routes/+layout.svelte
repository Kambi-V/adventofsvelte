<script>
	import '../app.css';
</script>

<div class="w-full">
	<nav class="flex py-4 px-3 w-full">
		<a href="/" class="flex items-center gap-4">
			<img
				src="https://advent.sveltesociety.dev/_app/immutable/assets/santa-svelte.0521f016.png"
				width="70"
				alt="adventlogo"
			/>Elf Dashboard</a
		>
	</nav>
  <slot><!-- optional fallback --></slot>
</div>
