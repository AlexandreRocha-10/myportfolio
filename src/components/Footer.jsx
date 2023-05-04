import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My FullStack Development Portfolio</strong> - a React site by{" "}
						<a href="https://github.com/AlexandreRocha-10" target="_blank" rel="noreferrer">
							Alexandre Emiliano Rocha
						</a>
						.
					<hr />
					<a
						href="https://www.linkedin.com/in/alexandrerocha10/"
						target="_blank" rel="noreferrer"
					>
						<i class="fi fi-brands-linkedin"></i> LinkedIn
					</a>{" "}
					|{" "}{" "}
					<a href="mailto:alexandre.e.rocha@gmail.com" target="_blank" rel="noreferrer">
            <i class="fi fi-sr-envelope"></i> {" "}
            alexandre.e.rocha@gmail.com
					</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;