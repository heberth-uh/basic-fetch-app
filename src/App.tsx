import { useEffect, useState } from "react";
import "./App.css";
import type { User } from "./types/user";

const useUsers = () => { // TODO: Move to a separate file
  const [users, setUsers] = useState<User[] | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(data => setUsers(data));
  }, []);

  // TODO: Return Loading and Error states
  return {users}
};

function App() {
  const { users } = useUsers();
  return (
    <>
      <div>
        Users
        // TODO: Move to a separate componente
        <ul>
          {!users ? <div>No users to show</div> :
          users.map((user: User) => (
            // TODO: Create a User component
            <li key={user.id}>
              Usuario: {user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
