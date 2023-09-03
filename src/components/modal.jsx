import React from 'react';
import Modal from 'react-modal';
import { FaPhoneSquareAlt, FaCopy } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import css from "./css/modal.module.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: "15px",
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "#a52222",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function Modalll() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [copiedPopup, setcopiedPopup] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'white';
  }

  function closeModal() {
    setIsOpen(false);
  }

function copy() {
  navigator.clipboard.writeText("+54 11 2532-1708");
  setcopiedPopup(true);
  setTimeout(()=>{
    setcopiedPopup(false);
  }, 2000)
  // setimeout // "phone number copied!"
}
  return (
    <div>
        
      <FaPhoneSquareAlt className={css.phone_btn} style={{"backgroundColor": "sex-green"}} onClick={openModal} />
  

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={css.modal_container}>
        
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Phone Number</h2>
        <br/>
        <div className={css.num_container}>
          <p >+54 11 2532-1708 <FaCopy onClick={()=> {copy()}}/> </p> 
          {!copiedPopup?null:(<div className={css.copied}>Copied!</div>)}
        
        
        
        <br/>
        <h3 className={css.or}>or</h3>
        <br/>
        <a href='https://wa.link/nrkmm9'> <BsWhatsapp className={css.wpp_btn}/> </a>
        </div>
        </div>
      </Modal>
      
    </div>
  );
}



export default Modalll;