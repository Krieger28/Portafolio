import React from "react";
import Modal from "react-modal";
import css from "./css/form.module.css";
import { SiGmail } from "react-icons/si";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    background: "#a52222",
  },
};

function Form() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "white";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <SiGmail className={css.mail_btn} onClick={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={css.modal_container}>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Let's talk</h2>
          <p>
            {" "}
            To request a quote or want to meet up for coffee, contact me
            directly or fill out the form and i will get back to you promptly.
          </p>
          <form
            action="https://formsubmit.co/ae906fd13b6a1ec5401b9eaf79b2364f"
            method="POST"
          >
            <div>
              <h3> Subject</h3>
              <input type="text" name="_subject" required />

              <h3> Email</h3>
              <input type="email" name="email" required />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://localhost:3000" />
              <h3> Message</h3>
              <textarea placeholder="Hi!" name="Message" required />
              <button className={css.send_btn} type="submit">
                {" "}
                Send
              </button>
            </div>
          </form>
          {/* foto de un correo o algo asi decorativooo */}
        </div>
      </Modal>
    </div>
  );
}

export default Form;
