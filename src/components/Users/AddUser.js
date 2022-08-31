import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const hideModalHandler = () => {
    setError(null);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (enteredAge.trim().length === 0 || +enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser({ name: enteredName, age: enteredAge });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHideModal={hideModalHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="name">Username</label>
          <input id="name" type={"text"} ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type={"number"} ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
