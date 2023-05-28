<script>
	import Header from '../components/Header.svelte';
	import search_icon from '../assets/icon-search.svg';
    import WordView from '../components/WordView.svelte';

	const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/good';

	const fetchData = (async () => {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		return data;
	})();
</script>

<Header />
<div class="py-12">
	<section>
		<div class="flex items-center justify-between bg-gray-200 p-4 rounded-2xl outline duration-200 outline-transparent hover:outline-purple-400">
			<input
				type="text"
				class="bg-transparent placeholder:text-gray-500 w-full outline-none"
				placeholder="Search for any word..."
			/>
			<img src={search_icon} alt="Search" />
		</div>
	</section>
	<section class="pt-6">
		{#await fetchData}
			<p>Waiting ...</p>
		{:then data}
			{#if data.length > 0}
             <WordView info={data[0]} />
			{:else}
				<p>No results found</p>
			{/if}
		{:catch error}
			<p>{error}</p>
		{/await}
	</section>
</div>
