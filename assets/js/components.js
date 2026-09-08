    // nav
function loadNav() {

    // nav
    const nav = `
        <nav class="nav-arcade">
			<div class="wrap">
				<!--
      			<div class="logo">HOME</div>
				-->
				<a href="index.html" class="nav-home">
					<img src="media/Website/avatar_pixel_purple.png" alt="">
					<span class="logo">HOME</span>
				</a>

				

				<ul>
					<li><a href="index.html#projects">Projects</a></li>
					<li><a href="cv.html">CV</a></li>
					<li><a href="index.html#about">About me</a></li>
					<li><a href="index.html#contact">Contact</a></li>
				</ul>
    		</div>
		</nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', nav);
}

function loadProjectNav() {

    // nav
    const nav = `
        <header class="nav-arcade">
            <div class="wrap">

                <a href="../index.html" class="nav-home">
					<img src="../media/Website/avatar_pixel_purple.png" alt="">
					<span class="logo">HOME</span>
				</a>

                <nav aria-label="Main navigation">
                    <ul>
                        <li><a href="#init">Init</a></li>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#network">Network</a></li>
                    </ul>
                </nav>

            </div>
        </header>

    `;

    document.body.insertAdjacentHTML('afterbegin', nav);
}


function loadFooter() {

    // footer
    const footer = document.getElementById('site-footer');

    if (footer) {
        footer.innerHTML = `

                <div class="wrap">

                    <p>
                        LAURA ISIDRO GÓMEZ - GAME DEVELOPER
                    </p>

                    <p>
                        <a
                            href="https://www.linkedin.com/in/laura-isidro-590930180/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LINKEDIN
                        </a>

                        &nbsp;//&nbsp;

                        <a
                            href="https://github.com/avocadolau"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GITHUB
                        </a>
                    </p>

                </div>

        `;
    }
}
    // FOOTER