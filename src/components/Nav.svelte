<script>
	export let segment;
	export let showNavBar = false;
	const handleClick = () => showNavBar = !showNavBar;
</script>

<style>
	.navbar{
		background-color: #40a798;
	}

	a {
		color: white;
	}
	.navbar-brand a:hover,
	.navbar-brand a:focus {
		color: white;
	}
	.navbar-end a:hover,
	.navbar-end a:focus {
		color: #40a798;
	}

</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item is-white" href="/">
			<img src="/githublogo.png" alt="lampesblog">
			<!-- TODO: come up with something fancy! -->
			Web Development and more
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
			<a class="navbar-item white" href="http://www.twitch.tv/lampewebdev" target="_blank">
				Twitch
			</a>
			<a class="navbar-item white" href="http://www.twitter.com/lampewebdev" target="_blank">
				Twitter
			</a>
		</div>
	</div>
</nav>