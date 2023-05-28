<script>
	export let info;
	import play_icon from '../assets/icon-play.svg';
	import Icon from '@iconify/svelte';
</script>

<div class="flex justify-between mb-10">
	<div class="flex flex-col">
		<h1 class="text-6xl font-bold">{info.word}</h1>
        <h2 class="text-2xl text-purple-500 mt-6">{info.phonetics[0].text}</h2>
	</div>
	<img src={play_icon} alt="Play" />
</div>

{#each info.meanings as meaning}
	<div class="flex items-center mb-10">
		<h3 class="text-lg mr-7 italic font-semibold">
			{meaning.partOfSpeech}
		</h3>
		<div class="w-full bg-gray-200 h-[1px]" />
	</div>

	<div class="mb-10">
		<p class="mb-4">Meaning</p>
		<ul class="list-disc ml-4 gap-5 marker:text-purple-400 space-y-4">
			{#each meaning.definitions as definition}
				<li class="space-y-2">
					<div>
						{definition.definition}
					</div>

					{#if definition.example}
						<div class="text-gray-400">
							{definition.example}
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>

	<div class="space-y-4 mb-12">
		{#if meaning.synonyms.length > 0}
			<p>
				<span class="mr-4 text-gray-400">Synonyms</span>
				<span class="text-purple-500">
					{meaning.synonyms.join(', ')}
				</span>
			</p>
		{/if}

		{#if meaning.antonyms.length > 0}
			<p>
				<span class="mr-4 text-gray-400">Antonyms</span>
				<span class="text-purple-500">
					{meaning.antonyms.join(', ')}
				</span>
			</p>
		{/if}
	</div>
{/each}

<hr />

<h3>Source</h3>
<ul class="list-disc ml-4 gap-5 marker:text-purple-400 space-y-4">
	{#each info.sourceUrls as url}
		<li>
			<div class="flex items-center gap-2">
				<a href={url}>{url}</a>
				<Icon class="text-gray-400" icon="tabler:external-link" />
			</div>
		</li>
	{/each}
</ul>
<!-- <pre>
{JSON.stringify(info, null, 2)}
</pre> -->
