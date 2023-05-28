<script>
	import Icon from '@iconify/svelte';
	import logo from '../assets/logo.svg';
    import icon_moon from "../assets/icon-moon.svg"

	const fontFamily = [
		{ name: 'Sans', value: 'sans' },
		{ name: 'Serif', value: 'serif' },
		{ name: 'Mono', value: 'mono' }
	];
</script>

<header class="flex gap-2 items-center justify-between h-12">
	<!-- Logo -->
	<img src={logo} alt="logo" />

	<!-- Actions -->
	<div class="flex items-center divide-x-2 h-full">
		<div class="flex items-center gap-2 text-lg pr-4">
			<span>Sans Serif</span>
			<Icon icon="tabler:chevron-down" />
		</div>
        <div class="pl-4 h-full flex items-center">
            <img src={icon_moon} alt="moon icon">
        </div>
	</div>
</header>
