/*
  contact.js
  Validates the contact form, then POSTs JSON to Formspree.

  Replace FORMSPREE_ID with the ID from https://formspree.io
  (the last part of https://formspree.io/f/xxxxxxxx).
*/

const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

(function () {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const submit = form.querySelector('button[type="submit"]');

  function setError(name, message) {
    const field = form.querySelector('[name="' + name + '"]');
    const error = form.querySelector('[data-error-for="' + name + '"]');
    if (field) field.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message || "";
  }

  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function field(name) {
    return form.elements[name];
  }

  function validate() {
    const name = field("name").value.trim();
    const email = field("email").value.trim();
    const message = field("message").value.trim();
    let ok = true;

    if (!name) {
      setError("name", t("contact.nameRequired"));
      ok = false;
    } else {
      setError("name", "");
    }

    if (!email) {
      setError("email", t("contact.emailRequired"));
      ok = false;
    } else if (!validEmail(email)) {
      setError("email", t("contact.emailInvalid"));
      ok = false;
    } else {
      setError("email", "");
    }

    if (message.length < 10) {
      setError("message", t("contact.messageShort"));
      ok = false;
    } else {
      setError("message", "");
    }

    return ok;
  }

  ["input", "blur"].forEach(function (eventName) {
    form.addEventListener(eventName, function (event) {
      if (!event.target.name) return;
      validate();
    }, true);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.className = "form-status";
    status.textContent = "";

    if (!validate()) {
      status.classList.add("is-error");
      status.textContent = t("contact.check");
      return;
    }

    if (!FORMSPREE_ID || FORMSPREE_ID === "YOUR_FORMSPREE_ID") {
      status.classList.add("is-error");
      status.textContent = t("contact.unconfigured");
      return;
    }

    submit.disabled = true;
    status.textContent = t("contact.sending");

    fetch("https://formspree.io/f/" + FORMSPREE_ID, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: field("name").value.trim(),
        email: field("email").value.trim(),
        message: field("message").value.trim(),
      }),
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Request failed");
        status.classList.add("is-success");
        status.textContent = t("contact.thanks");
        form.reset();
        setError("name", "");
        setError("email", "");
        setError("message", "");
      })
      .catch(function () {
        status.classList.add("is-error");
        status.textContent = t("contact.fail");
      })
      .finally(function () {
        submit.disabled = false;
      });
  });
})();
