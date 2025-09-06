import "./App.css";
import type { User } from "./types/user";
import useFetch from "./hooks/useFetch";


function App() {
  const { data: users} = useFetch();
  return (
    <>
      <div>
        Users
        {/* TODO: Move to a separate componente */}
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
