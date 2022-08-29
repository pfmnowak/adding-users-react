import { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
    console.log(users);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList />
    </>
  );
}

export default App;
