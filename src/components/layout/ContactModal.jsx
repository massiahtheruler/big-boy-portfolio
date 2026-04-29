import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "../../data/siteContent";
import { emailConfig } from "../../utils/email";

const focusableSelectors =
  'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';

function ContactModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle");
  const dialogRef = useRef(null);
  const formRef = useRef(null);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      return undefined;
    }

    firstFieldRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll(focusableSelectors);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formRef.current) {
      return;
    }

    try {
      setStatus("sending");
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey
      );
      formRef.current.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <div
      className={`contact-modal ${isOpen ? "contact-modal--open" : ""}`}
      aria-hidden={!isOpen}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="contact-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
      >
        <section className="contact-modal__panel contact-modal__panel--intro">
          <p className="contact-modal__eyebrow">Let’s build something sharp</p>
          <h2 id="contact-title">Frontend polish, product thinking, and clean execution.</h2>
          <p>
            If you are hiring, building, or looking for someone who can make the
            work feel premium without losing clarity, reach out.
          </p>
          <div className="contact-modal__direct">
            <span>Direct email</span>
            <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
          </div>
        </section>

        <section className="contact-modal__panel contact-modal__panel--form">
          <button
            type="button"
            className="contact-modal__close"
            aria-label="Close contact modal"
            onClick={onClose}
          >
            ×
          </button>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input ref={firstFieldRef} name="user_name" type="text" required />
            </label>

            <label>
              Email
              <input name="user_email" type="email" required />
            </label>

            <label>
              Message
              <textarea name="user_message" rows="5" required />
            </label>

            <button type="submit" className="button button--primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
          </form>

          {status === "success" && (
            <p className="contact-form__feedback contact-form__feedback--success">
              Message sent. Looking forward to talking with you.
            </p>
          )}

          {status === "error" && (
            <p className="contact-form__feedback contact-form__feedback--error">
              Email service missed this one. Use{" "}
              <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a> instead.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

export default ContactModal;
