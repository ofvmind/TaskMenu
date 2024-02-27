import { useState } from "react";
import cl from "./Modal.module.css";

export const Modal = ({ children, visible, setVisible, ...props }) => {
  const [close, setClose] = useState(false);
  const rootClasses = [cl.modal];
  if (visible) {
    rootClasses.push(cl.active);
    document.body.style.overflow = "hidden";
  }
  if (close) {
    rootClasses.push(cl.close);
    document.body.style.overflow = "auto";
  }

  return (
    <div className={rootClasses.join(" ")}>
      {children}
      <button
        className={cl.close_modal_btn}
        onClick={() => {
          setClose(true);
          setTimeout(() => {
            setVisible(false);
            setClose(false);
          }, 200);
        }}
      >
        Close
      </button>
    </div>
  );
};
