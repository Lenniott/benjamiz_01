import React, { useState, useEffect } from 'react';

const ModalComponent = ({ showModal, setShowModal }) => {
  useEffect(() => {
    function handleClickOutside(event) {
      const modalElement = document.getElementById("modal");

      if (
        showModal &&
        modalElement &&
        !modalElement.contains(event.target)
      ) {
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div
          id="modal"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            zIndex: 1000
          }}
        >
          This is a modal. Click outside to close.
        </div>
      )}
    </>
  );
};

export default ModalComponent;
