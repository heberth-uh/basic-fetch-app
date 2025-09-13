import { useEffect, useState } from "react";
import type { SearchUsersProps } from "./types";
import type { User } from "../../../types";

export default function SearchUsers({
  users,
  setFilteredUsers,
}: SearchUsersProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    // this excecuted after 300ms of the last change
    const debounce = setTimeout(() => {
      // If the query is empty, reset with the initial fetched users
      if (query.trim().length === 0) setFilteredUsers(users);

      // Filter users by name and set filteredUsers state
      const filteredUsers = users?.filter((user: User) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filteredUsers);
    }, 300);

    // Reset the timer if query changes before the time is reached
    return () => clearTimeout(debounce);
  }, [query, users, setFilteredUsers]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search user by name..."
        onChange={handleSearch}
        value={query}
      />
    </div>
  );
}
