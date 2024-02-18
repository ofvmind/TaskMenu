import cl from "./Modal.module.css";

export const Modal = ({ children, visible, setVisible, ...props }) => {
  const rootClasses = [cl.modal];
  if (visible) rootClasses.push(cl.active);

  return (
    <div className={rootClasses.join(" ")}>
        <div className={cl.modal__body}>
            {children}
            <p onClick={() => {
                setVisible(false)
            }}>Close</p>
        </div>
    </div>
  );
};