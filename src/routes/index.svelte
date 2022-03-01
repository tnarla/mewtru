<script context="module" lang="ts">
	export const prerender = true;
	import { siTwitter, siInstagram, siTiktok, siYoutube, siGithub } from 'simple-icons/icons';
</script>

<script lang="ts">
	const socialsMap = {
		twitter: { icon: siTwitter.svg, href: 'https://www.twitter.com/trunarla' },
		instagram: { icon: siInstagram.svg, href: 'https://www.instagram.com/mewtru' },
		tiktok: { icon: siTiktok.svg, href: 'https://www.tiktok.com/@mewtru' },
		youtube: { icon: siYoutube.svg, href: 'https://www.youtube.com/c/mewtru' },
		github: { icon: siGithub.svg, href: 'https://www.github.com/tnarla' }
	};

	const socials = Object.keys(socialsMap);

	const links = [{ href: '', text: 'Check me out' }];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center py-8 px-16 text-white space-y-8">
	<div class="bg-indigo-500 rounded-full w-24 h-24" />
	<div>
		<div>mewtru</div>
		<div>subtitle</div>
	</div>

	<div class="flex justify-center items-center space-x-6">
		{#each socials as social}
			<a href={socialsMap[social].href} class="h-6 w-6 fill-white"
				>{@html socialsMap[social].icon}</a
			>
		{/each}
	</div>

	{#each links as link}
		<a
			href={link.href}
			class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-8 w-full flex justify-center rounded-md"
		>
			{link.text}
		</a>
	{/each}
</section>
