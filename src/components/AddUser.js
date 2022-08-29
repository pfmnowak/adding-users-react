import { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "./Button";

const AddUser = (props) => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [userNameInvalid, setUserNameInvalid] = useState(false);
  const [ageInvalid, setAgeInvalid] = useState(false);

  const inputUserNameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setUserNameInvalid(false);
    }
    setInputUserName(event.target.value);
  };

  const inputAgeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setAgeInvalid(false);
    }
    setInputAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputUserName.trim().length === 0) {
      setUserNameInvalid(true);
      return;
    }

    if (inputAge.trim().length === 0) {
      setAgeInvalid(true);
      return;
    }

    props.onAddUser([inputUserName, inputAge]);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="name">Username</label>
        <input id="name" type={"text"} onChange={inputUserNameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type={"number"} onChange={inputAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
