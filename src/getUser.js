import React from "react";
// import axios from "axios";

const APIURL = "https://jsonplaceholder.typicode.com/users";

function GetUser() {
  let [userList, setUser] = React.useState([]);
  let [defaultList, setDefault] = React.useState([]);
  let [count, setCount] = React.useState(0);
  const getUsers = async () => {
    // let user = await axios.get(APIURL);
    // setUser(user.data);
    let user = await fetch(APIURL);
    user = await user.json();
    setUser(user);
    setDefault(user);
  };
  const sortList = () => {
    if (count === 0) {
      let ascendingSort = [...userList];
      ascendingSort.sort((a, b) => {
        return a.name.length - b.name.length;
      });
      setUser(ascendingSort);
      setCount(1);
    }
    if (count === 1) {
      let ascendingSort = [...userList];
      ascendingSort.sort((a, b) => {
        return b.name.length - a.name.length;
      });
      setUser(ascendingSort);
      setCount(2);
    }
    if (count === 2) {
      setUser(defaultList);
      setCount(0);
    }
  };

  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list by name's length</button>
      </div>
      <ul>
        {userList.map((user, key) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default GetUser;
