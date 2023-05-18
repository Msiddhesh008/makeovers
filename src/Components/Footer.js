import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [emali, setEmail] = useState("");
  const [mobile, setMoblie] = useState("");

  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6euwe01",
        "template_6q38agh",
        form.current,
        "JISQq4l30W0-Bskc7"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast("We will get back to you soon.!", {
            theme: "light",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong", {
            theme: "dark",
          });
        }
      );
    setName("");
    setMoblie("");
    setEmail("");
  };

  return (
    <div id="footer" className="container-fluid">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="container">
        <div className="row flex-wrap-reverse">
          <div className="col-lg-6 col-12 p-4 pb-5 pt-0 pt-lg-5 footer-col-left">
            <h3 className="text-center">Contact</h3>
            <h6>HOURS: BY APPOINTMENT ONLY</h6>
            <h6>
              <i class="bi bi-telephone-fill"></i> +919892429530
            </h6>
            <h6>
              <i class="bi bi-envelope-at-fill"></i> abc@gmail.com
            </h6>
            <h6>
              <i class="bi bi-geo-fill"></i> 313 W. Liberty St. Suite E,
              Lancaster, PA 17603
            </h6>

            <h4>
              <i class="bi bi-facebook p-2"></i>
              <i class="bi bi-snapchat p-2"></i>
              <i class="bi bi-youtube p-2"></i>
            </h4>
          </div>

          <div className="col-lg-6 col-12 p-4 p-lg-5">
            <form ref={form} onSubmit={submitHandler}>
              <h3 className="text-center">Lets Talk</h3>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={emali}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMoblie(e.target.value)}
              />

              <button
                type="Submit"
                className="contactBtn ps-4 pt-1 pb-1 pe-4 fw-normal text-white border-0"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
