import { useEffect, useState } from "react";

import Title from "./components/Title";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data.users))
      .catch((err) => console.err);
    // getUsers()
    //   .then((data) =>
    //     setUsers([
    //       { email: "abc@gmail.com", phone: "123", gender: "male" },
    //       { email: "abc1@gmail.com", phone: "1231", gender: "female" },
    //     ])
    //   )
    //   .catch((err) => console.err);
  }, []);

  return (
    <div class="content-wrap">
      <div class="content">
        {/* <!-- Title --> */}
        <Title />
        {/* <!-- Navbar-Search --> */}
        <Search />

        {/* <!-- Table --> */}
        <div class="panel">
          <Table users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
