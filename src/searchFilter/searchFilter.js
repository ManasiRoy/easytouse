// src/components/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchFilter = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        // console.log(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user.id)}
            style={{
              cursor: "pointer",
              backgroundColor: selectedUser === user.id ? "yellow" : "white",
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
