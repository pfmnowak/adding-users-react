import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button type="button" onClick={props.onClick}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onHideModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onHideModal}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
