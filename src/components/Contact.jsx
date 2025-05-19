/* eslint-disable prettier/prettier */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q49ry8b",
        "template_scev27l",
        form.current,
        "jP2XFiXiVXsDXFRNU"
      )
      .then(
        () => {
          setSuccessMessage("✅ Message envoyé avec succès !");
          form.current.reset();

          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        },
        (error) => {
          setSuccessMessage("❌ Une erreur est survenue. Réessayez.");
          console.error(error.text);

          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        }
      );
  };

  return (
    <section className="contact flex-center flex-column" id="contact">
      <h2 className="contact__title animate-on-load animate-delay-1">
        Contact
      </h2>

      <form
        className="contact__form flex flex-column gap-2 w-100 animate-on-load animate-delay-2"
        ref={form}
        onSubmit={handleSubmit}
      >
        <input type="text" name="user_lastname" placeholder="Nom" required />
        <input
          type="text"
          name="user_firstname"
          placeholder="Prénom"
          required
        />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Sujet" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit" className="align-s-center">
          Envoyer
        </button>

        {successMessage && (
          <p className="contact__notification mt-2">{successMessage}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
