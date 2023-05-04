import React from "react";

function About() {
  return (
	<div>
	  <p className="content is-medium">Desenvolvedor Web Front-End</p>
	  <hr />
	  <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpeg'} alt="Minha Foto de Perfil"/>
	  <p className="content is-italic mt-4">
        Olá! Meu nome é Alexandre e eu sou um Engenheiro Mecânico em transição de carreira para a área de Desenvolvimento Web. Através da experiência que adquiri nos últimos dez anos trabalhando na engenharia, do setor comercial ao chão de fábrica, percebi como a tecnologia pode mudar a vida das pessoas.
	  </p>
	  <p className="content">
        No momento estou finalizando o curso da Trybe para me tornar Desenvolvedor FullStack e hoje tenho experiência com as seguintes tecnologias: HTML, CSS, JavaScript, React, Redux, Context API, Hooks, Git, Jest & RTL, Docker, Node, SQL e continuo estudando para evoluir minhas habilidades não só com essas mas com outras tecnologias. Obrigado por dedicar seu tempo para visualizar meu portfólio; sinta-se à vontade para entrar em contato comigo!
	  </p>
	</div>
  );
}

export default About;