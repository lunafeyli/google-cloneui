const DarkMode = {
	$switcher: document.querySelector(".dark-switcher"),
	$body: document.body,
	$logo: document.querySelector(".logo"),

	toggleDarkMode() {
		DarkMode.$switcher.classList.toggle("dark-on")
		DarkMode.$body.classList.toggle("dark")
		DarkMode.$logo.classList.toggle("dark-on")
	}
}