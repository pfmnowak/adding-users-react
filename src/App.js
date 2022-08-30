import { useState } from "react";
import AddUser from "./components/AddUser";
import ErrorModal from "./components/ErrorModal";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [userNameInvalid, setUserNameInvalid] = useState(false);
  const [ageInvalid, setAgeInvalid] = useState(false);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  const setUserNameInvalidHandler = (value) => {
    setUserNameInvalid(value);
  };

  const setAgeInvalidHandler = (value) => {
    setAgeInvalid(value);
  };

  return (
    <>
      <AddUser
        onAddUser={addUserHandler}
        onUserNameInvalid={setUserNameInvalidHandler}
        onAgeInvalid={setAgeInvalidHandler}
      />
      <UsersList usersList={users} />
      <ErrorModal
        userNameInvalid={userNameInvalid}
        ageInvalid={ageInvalid}
        onUserNameInvalid={setUserNameInvalidHandler}
        onAgeInvalid={setAgeInvalidHandler}
      />
    </>
  );
}

export default App;
