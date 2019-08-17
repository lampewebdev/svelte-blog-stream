<script>
	export let segment;
	export let showNavBar = false;
	const handleClick = () => showNavBar = !showNavBar;
</script>

<style>
	.smallgap {
		padding-left: 0.75rem;
	}
</style>

<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item is-white" href="/">
			<img src="/githublogo.png" alt="lampesblog">
			<span class="smallgap">Web Development and more</span>
		</a>
		<span role="button" class="navbar-burger {showNavBar === true ? 'is-active' : ''}" aria-label="menu"
			aria-expanded="false" on:click={handleClick}>
			<span aria-hidden="true" class="white"></span>
			<span aria-hidden="true" class="white"></span>
			<span aria-hidden="true" class="white"></span>
		</span>
	</div>

	<div class="navbar-menu {showNavBar === true ? 'is-active' : ''}">
		<div class="navbar-end">
			<a class="navbar-item white" href="http://www.twitch.tv/lampewebdev" target="_blank" rel="noopener">
				Twitch
			</a>
			<a class="navbar-item white" href="http://www.twitter.com/lampewebdev" target="_blank" rel="noopener">
				Twitter
			</a>
			<a class="navbar-item white" href="http://www.github.com/lampewebdev" target="_blank" rel="noopener">
				Github
			</a>
			<a class="navbar-item white" href="http://www.instagram.com/lampewebdev" target="_blank" rel="noopener">
				Instagram
			</a>
			<a class="navbar-item white" href="http://www.dev.to/lampewebdev" target="_blank" rel="noopener">
				Dev.to
			</a>
			<a class="navbar-item white" href="http://www.youtube.to/lampewebdev" target="_blank" rel="noopener">
				Youtube
			</a>
		</div>
	</div>
</nav>