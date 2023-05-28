<script>
	import { getContext, setContext } from 'svelte';
	import './styles.css';

	import { writable } from 'svelte/store';

	const fontFamily = writable();
	setContext('fontFamily', 'sans');

	console.log(getContext('fontFamily'));
</script>

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Inter:wght@200;400;700&family=Playfair:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
</head>

<div class="max-w-7xl w-full p-5 font-mono mx-auto">
	<slot />
</div>
