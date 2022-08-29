import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  let content = <h2>No users found.</h2>;

  if (props.usersList.length > 0) {
    content = (
      <ul>
        {props.usersList.map((user) => (
          <li key={Math.random()}>
            {user[0]} ({user[1]} years old)
          </li>
        ))}
      </ul>
    );
  }

  return <Card className={styles.users}>{content}</Card>;
};

export default UsersList;
