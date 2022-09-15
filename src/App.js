import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUserName] = useState("");
  return (
    <div className="App">
      <div className="addUser">
        <h2 style={{ color: "#fff" }}>Napat Jaiyim</h2>
        <input
          className="customInput"
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          className="customInput"
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          className="addButton"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div className="listContainer">
              <div className="infoContainer">
                <div style={{ display: "flex", gap: "5px" }}>
                  <p>{user.id}.</p>
                  <p>{user.name}</p>
                  <p>{user.username}</p>
                </div>
              </div>
              <input
                className="customInput"
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUserName(event.target.value);
                }}
              />
              <button
                className="updateButton"
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                Update Username
              </button>
              <button
                className="deleteButton"
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
