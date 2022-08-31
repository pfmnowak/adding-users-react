import { useState } from "react";
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
      <div className={styles.content}>{props.message}</div>
      <footer className={styles.actions}>
        <Button type="button" onClick={props.onClick}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const hideModal = () => {
    setModalVisible(false);
    props.onUserNameInvalid(false);
    props.onAgeInvalid(false);
  };

  const showModal = () => {
    if (modalVisible) {
      return;
    }
    setModalVisible(true);
  };

  let message = <p>Please enter a valid name and age (non-empty values).</p>;

  if (props.userNameInvalid) {
    showModal();
  } else if (props.ageInvalid) {
    message = <p>Please enter a valid age ({">"}0)</p>;
    showModal();
  }

  if (!modalVisible) {
    return;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={hideModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title="Invalid input"
          message={message}
          onClick={hideModal}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
