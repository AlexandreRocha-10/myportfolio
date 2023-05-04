import React from "react";

function Curriculo() {
  return (
	<div className="columns">
	  <div className="column">
		<p className="content is-medium">Currículo</p>
		<hr />
		<a
		className="button is-link is-light"
		href={process.env.PUBLIC_URL + "/colocarCurriculoAqui.pdf"}
		target="_blank" rel="noreferrer"
		>
		<span className="icon">
		<i className="fas fa-download"></i>
		</span>
		<span>Download Currículo</span>
		</a>
	  </div>
		<div className="column">
		  <p className="content is-medium">Skills</p>
		  <hr />
		  <ul>
			<li>HTML | CSS | Javascript </li>
			<li>React | Redux | Context API </li>
			<li>Git | Jest & RTL </li>
            <li>Docker | Node.JS | SQL </li>
		  </ul>
	  </div>
	</div>
  );
}

export default Curriculo;