import React, { useState, useEffect } from "react";
import Users from "./components/users";
import API from "./api";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    API.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {
    console.log("handleToogleBookmark", id);
    setUsers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, bookmark: !user.bookmark } : user
      )
    );
  };

  return (
    <div>
      {users && (
        <Users
          onDelete={handleDelete}
          onToggleBookMark={handleToggleBookMark}
          users={users}
        />
      )}
    </div>
  );
}

export default App;
