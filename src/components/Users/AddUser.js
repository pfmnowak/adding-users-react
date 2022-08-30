import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const inputUserNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      props.onUserNameInvalid(false);
    }
    setInputUserName(event.target.value);
  };

  const inputAgeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      props.onAgeInvalid(false);
    }
    setInputAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputUserName.trim().length === 0) {
      props.onUserNameInvalid(true);
      return;
    }

    if (inputAge.trim().length === 0 || +inputAge < 1) {
      props.onAgeInvalid(true);
      return;
    }

    props.onAddUser({ name: inputUserName, age: inputAge });
    setInputUserName("");
    setInputAge("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="name">Username</label>
        <input
          id="name"
          type={"text"}
          value={inputUserName}
          onChange={inputUserNameHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type={"number"}
          value={inputAge}
          onChange={inputAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
