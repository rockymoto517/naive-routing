import { useState } from "react";

export default function UserInfo() {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);

  function searchUser() {
    fetch("http://localhost:8791/api/users/" + id)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }

  return (
    <div>
      {user && (
        <>
          <p>{`${user.firstName} ${user.lastName} (id: ${user.userId})`}</p>
        </>
      )}
      <input
        name="userId"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="user id"
      />
      <br />
      <br />
      <button onClick={searchUser}>Get User</button>
    </div>
  );
}
