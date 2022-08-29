import { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList usersList={users} />
    </>
  );
}

export default App;
