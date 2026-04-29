import emailjs from "@emailjs/browser";
import { useState } from "react";
import { siteContent } from "../../data/siteContent";
import { emailConfig } from "../../utils/email";

function InquiryForm({ offer, helperCopy, questions }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    goal: "",
    scope: ""
  });
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const userMessage = [
      `Selected offer: ${offer?.title ?? "Manifest Method"}`,
      "",
      `${questions[0]}`,
      formValues.goal,
      "",
      `${questions[1]}`,
      formValues.scope
    ].join("\n");

    try {
      setStatus("sending");
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          user_name: formValues.name,
          user_email: formValues.email,
          user_message: userMessage
        },
        emailConfig.publicKey
      );
      setFormValues({
        name: "",
        email: "",
        goal: "",
        scope: ""
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <label>
        Selected offer
        <input
          name="offer"
          value={offer?.title ?? ""}
          readOnly
          aria-label="Selected offer"
        />
      </label>

      <label>
        Name
        <input
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
        />
      </label>

      <label>
        {questions[0]}
        <textarea
          name="goal"
          rows="4"
          value={formValues.goal}
          onChange={handleChange}
          placeholder="Tell me what you want this to become."
          required
        />
      </label>

      <label>
        {questions[1]}
        <input
          name="scope"
          value={formValues.scope}
          onChange={handleChange}
          placeholder="Refresh, rebuild, new launch, or not sure yet"
          required
        />
      </label>

      <p className="inquiry-form__helper">{helperCopy}</p>

      <div className="inquiry-form__actions">
        <button
          type="submit"
          className="button button--primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send inquiry"}
        </button>

        <a
          href={`mailto:${siteContent.email}`}
          className="button button--ghost"
        >
          Email directly
        </a>
      </div>

      {status === "success" && (
        <p className="inquiry-form__feedback inquiry-form__feedback--success">
          Inquiry sent. I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="inquiry-form__feedback inquiry-form__feedback--error">
          The form missed this one. Use{" "}
          <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}

export default InquiryForm;
