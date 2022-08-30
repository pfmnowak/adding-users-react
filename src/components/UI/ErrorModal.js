import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

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
      <div className={styles.backdrop} onClick={hideModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid input</h2>
        </header>
        <div className={styles.content}>{message}</div>
        <footer className={styles.actions}>
          <Button type="button" onClick={hideModal}>
            Okay
          </Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
