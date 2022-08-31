import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

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
