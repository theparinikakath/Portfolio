import { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [labelClass, setLabelClass] = useState("text-white");

  useEffect(() => {
    const updateLabelColor = () => {
      const isLightMode = document.body.classList.contains("light-mode");
      setLabelClass(isLightMode ? "text-dark" : "text-white");
    };

    updateLabelColor();
    const observer = new MutationObserver(updateLabelColor);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:parinikakath@gmail.com?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="container py-5">
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 className={`mb-4 text-center ${labelClass}`}>Contact</h2>
        <p className="text-center">Feel free to mail me on <strong>parinikakath@gmail.com</strong> to discuss about collaborations
          or future opportunities & projects or even just to talk.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className={`form-label ${labelClass}`}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className={`form-label ${labelClass}`}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className={`form-label ${labelClass}`}>
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Type your message here..."
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>

          {sent && (
            <div className="mt-3 alert alert-success text-center">
              Message sent!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
