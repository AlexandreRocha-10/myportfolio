import React from "react";

function Navigation( { currentPage, handlePageChange }) {
  const menuOptions = ["Sobre", "Portfolio", "Contato", "Currículo"];
  return (
	<div className="tabs is-centered">
	<ul className="nav nav-tabs">
	  {menuOptions.map((item) => (
	  <li
		className={
		currentPage === item ? "nav-item is-active" : "nav-item"
		}
		key={item}
	  >
		<a
		href={"#" + item.toLowerCase()}
		onClick={() => handlePageChange(item)}
		className={
		  currentPage === item ? "nav-link active" : "nav-link"
		}
		>
		  {item}
		</a>
	  </li>
	  ))}
	</ul>
	</div>
  );
}

export default Navigation;
