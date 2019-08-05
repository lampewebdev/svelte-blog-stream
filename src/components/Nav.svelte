<script>
	export let segment;
	export let showNavBar = false;
	const handleClick = () => showNavBar = !showNavBar;
</script>

<nav class="navbar is-black" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">LAMPES BLOG</a>

		<span role="button" class="navbar-burger {showNavBar === true ? 'is-active' : ''}" aria-label="menu"
			aria-expanded="false" on:click={handleClick}>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</span>
	</div>

	<div class="navbar-menu {showNavBar === true ? 'is-active' : ''}">
		<div class="navbar-end">
			<a class="navbar-item" href="http://www.twitch.tv/lampewebdev" target="_blank">
				Twitch
			</a>
			<a class="navbar-item" href="http://www.twitter.com/lampewebdev" target="_blank">
				Twitter
			</a>
		</div>
	</div>
</nav>