import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "./Button";

const AddUser = (props) => {
  return (
    <Card className={styles.input}>
      <form>
        <label htmlFor="name">Username</label>
        <input id="name" type={"text"} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type={"number"} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
