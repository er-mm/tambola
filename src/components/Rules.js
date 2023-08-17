import React, { useState } from "react";
import "../css/Rules.css";
import Modal from "./Modal";
import { winningPtLists } from "../Constants";

const Rules = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ruleName, setRuleName] = useState("");
  const openModal = (winningName) => {
    setModalIsOpen(true);
    setRuleName(winningName);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setRuleName("");
  };

  const renderRulesList = () => {
    return winningPtLists.map(({ winningLabel, winningName }) => (
      <button
        className="winning-button ruleBtn"
        onClick={() => openModal(winningName)}
      >
        {winningLabel}
      </button>
    ));
  };
  return (
    <div className="rules">
      <header className="heading">Winning Patterns</header>
      <div className="button-container ruleList">{renderRulesList()}</div>
      <Modal isOpen={modalIsOpen} onClose={closeModal} ruleName={ruleName} />
    </div>
  );
};

export default Rules;
