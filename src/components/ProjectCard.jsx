import React from "react";

function ProjectCard({ projects }) {
  return (
		<div>
		<div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
			{projects.map((project) => (
			<div className="column is-half">
				<div className="card">
				<div className="card-image">
					<figure className="image is-4by3">
					<a href={project.live} target="_blank" rel="noreferrer">
						<img src={process.env.PUBLIC_URL + project.image} alt="Imagem do projeto" />
					</a>
					</figure>
				</div>
				<div className="card-content">
					<div className="media">
					<div className="media-left"></div>
					<div className="media-content">
						<p className="title is-4" key={project.id}>
						{project.title}
						</p>
					</div>
					</div>

					<div className="content has-text-left">
					{project.description}
					<br />
					<br />
					<div className="content is-family-code">
						Ferramentas e Linguagens: {project.languages}
					</div>
					<div className="card">
						<footer className="card-footer">
						<a
							href={project.repo}
							className="card-footer-item"
							target="_blank" rel="noreferrer"
						>
							Github Repo
						</a>
						<br />
						<a
							href={project.live}
							className="card-footer-item"
							target="_blank" rel="noreferrer"
						>
							Live Site/App
						</a>
						</footer>
					</div>
					</div>
				</div>
				</div>
			</div>
			))}
		</div>
		</div>
  );
}

export default ProjectCard;
