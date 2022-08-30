import { useState } from "react";
import Card from "../UI/Card";
import Button from "./Button";
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
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.content}>
          {message}
          <div className={styles.actions}>
            <Button type="button" onClick={hideModal}>
              Okay
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ErrorModal;
