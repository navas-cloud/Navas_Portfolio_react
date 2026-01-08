import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_4pd23tm",
        "template_5r2omlo", 
        formData,
        "NKo_152wNv5Hc_rIm" 
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-5 dark-section">
      <div className="container">
        <h2 className="text-center mb-4 heading fw-bold">Contact</h2>
        <p className="text-center mb-5">
          I'd be happy to hear from you! Reach out for collaborations, job opportunities, or any questions.
        </p>

        <div className="row gx-4">
          {/* Contact Info */}
          <div className="col-lg-5 mb-4">
            <div className="contact-info p-4">
              <h5>Address</h5>
              <p>TNHB 3040, Mela Anuppanadi, Madurai - 625009</p>

              <h5>Call Us</h5>
              <p>+91 9626673909</p>

              <h5>Email</h5>
              <p>navash.a.v012@gmail.com</p>

              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1758610379224!6m8!1m7!1syj9A4X3ZyMf68ocqn50-TQ!2m2!1d9.90455960760114!2d78.13580937907689!3f286.790290891809!4f5.803367039010482!5f0.4000000000000002"
                width="100%"
                height="215"
                style={{ border: 0, marginTop: "1rem", borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <form
              onSubmit={handleSubmit}
              className="contact-form p-4"
            >
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label fw-bold">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control dark-input"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-bold">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control dark-input"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label fw-bold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control dark-input"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">Message</label>
                <textarea
                  id="message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control dark-input"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
