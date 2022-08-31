import { useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0) {
      props.onUserNameInvalid(true);
      return;
    }

    if (enteredAge.trim().length === 0 || +enteredAge < 1) {
      props.onAgeInvalid(true);
      return;
    }

    props.onAddUser({ name: enteredName, age: enteredAge });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="name">Username</label>
        <input id="name" type={"text"} ref={nameInputRef} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type={"number"} ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
