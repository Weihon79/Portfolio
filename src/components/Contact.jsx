import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <form className="contact__form">
        <input type="text" name="lastname" placeholder="Nom" required />
        <input type="text" name="firstname" placeholder="Prénom" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Sujet" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
