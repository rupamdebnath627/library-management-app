import { useRef, useCallback, useEffect } from "react";
// import { useSpring, animated } from "react-spring";

import "./ModalContainer.css";

import close_icon from "../../assets/close_icon.png";

const ModalContainer = ({ content, showModal, setShowModal }) => {
  const modalRef = useRef();

  // const animation = useSpring({
  //   config: {
  //     duration: 250,
  //   },
  //   opacity: showModal ? 1 : 0,
  //   transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  // });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div className="background" onClick={closeModal} ref={modalRef}>
          {/* <animated.div style={animated}> */}
          <div className="modalWrapper">
            {content}
            <div
              className="closeModalButton"
              aria-label="Close modal"
              onClick={() => setShowModal(false)}
            >
              <img
                src={close_icon}
                alt="close_icon"
                style={{ maxWidth: "30px", maxHeight: "30px" }}
              />
            </div>
          </div>
          {/* </animated.div> */}
        </div>
      ) : null}
    </>
  );
};

export default ModalContainer;
