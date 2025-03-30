import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Test",
    },
  ]);

  const getUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        return response.json();
      }
    );
    // .then((json) => console.log(json));

    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div>
        <h1>Users</h1>
        {users &&
          users.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    </>
  );
}

export default App;
