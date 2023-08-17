import React from "react";
import "../css/Modal.css";
import { winningPtLists } from "../Constants";
import ticket from "../assets/tambola-ticket.jpg";

const Modal = ({ isOpen, onClose, ruleName }) => {
  if (!isOpen) return null;

  const labelAndDesc = () => {
    const labelAndDescrip = winningPtLists.find(
      ({ winningName }) => winningName === ruleName
    );
    const { winningLabel = "", description = "" } = labelAndDescrip;
    return { winningLabel, description };
  };

  const corners = () => (
    <>
      <div class="corner1"></div>
      <div class="corner2"></div>
      <div class="corner3"></div>
      <div class="corner4"></div>
    </>
  );
  const even = () => (
    <>
      <div class="even1"></div>
      <div class="even2"></div>
      <div class="even3"></div>
      <div class="even4"></div>
      <div class="even5"></div>
    </>
  );
  const odd = () => (
    <>
      <div class="odd1"></div>
      <div class="odd2"></div>
      <div class="odd3"></div>
      <div class="odd4"></div>
      <div class="odd5"></div>
      <div class="odd6"></div>
      <div class="odd7"></div>
      <div class="odd8"></div>
      <div class="odd9"></div>
    </>
  );
  const bp = () => (
    <>
      <div class="bp1"></div>
      <div class="bp2"></div>
    </>
  );
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>
          {labelAndDesc().winningLabel}
          {" - "}
          {labelAndDesc().description}
        </p>
        <div className="image-container">
          <img src={ticket} alt="Tambola ticket" />
          {ruleName === "corners" ? (
            corners()
          ) : ruleName === "even" ? (
            even()
          ) : ruleName === "odd" ? (
            odd()
          ) : ruleName === "bp" ? (
            bp()
          ) : (
            <div className={ruleName}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
