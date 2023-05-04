import React from 'react';

function Contact() {
  return (
    <div>
      <p className="content is-medium">Entre em Contato</p>
      <hr />
      <form>
        <div className="field">
          <label className="label" htmlFor="name">Nome</label>
          <input className="input" type="text" name="name" />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="email" name="email" />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">Mensagem</label>
          <textarea className="textarea" name="message" rows="5" />
        </div>
        <button className="button is-medium is-link is-light is-fullwidth" type="submit">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Contact;