import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Curriculo from "./Curriculo";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
		switch (currentPage) {
			case "Sobre":
				return <About />;
			case "Portfolio":
				return <Portfolio />;
			case "Contato":
				return <Contact />;
			case "Currículo":
				return <Curriculo/>;

			default:
				return <About />;
		}
  };

  return (
    <div>
		<nav className="navbar">
			<div className="navbar-brand">
				<span className="content is-large">Alexandre Emiliano Rocha</span>
			</div>
		</nav>
		<Navigation
			currentPage={currentPage}
			handlePageChange={handlePageChange}
		/>
		<main>
			<div>{renderPage(currentPage)}</div>
		</main>
		</div>
  );
}

export default Header;
