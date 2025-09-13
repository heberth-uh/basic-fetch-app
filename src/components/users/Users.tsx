import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./User.module.css";
import type { User } from "../../types";
import SearchUsers from "../Users/SearchUsers/SearchUsers";

export default function Users() {
  const { data: users } = useFetch();
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // Initialize filteredUsers with the fetched users
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <>
      <SearchUsers users={users} setFilteredUsers={setFilteredUsers} />
      <section className={styles.users}>
        <table className={styles.table}>
          <caption className={styles.caption}>Users</caption>
          <thead>
            <tr className={styles.table__head}>
              <th>Name</th>
              <th className={styles.md__show}>Username</th>
              <th>Email</th>
              <th className={styles.lg__show}>Address</th>
              <th>Phone</th>
              <th className={styles.lg__show}>Website</th>
              <th className={styles.lg__show}>Company</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user: User) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td className={styles.md__show}>@{user.username}</td>
                <td>{user.email}</td>
                <td
                  className={styles.lg__show}
                >{`${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
                <td>{user.phone}</td>
                <td className={styles.lg__show}>
                  <a href={user.website} target="_blank">
                    Visit website
                  </a>
                </td>
                <td
                  className={styles.lg__show}
                >{`${user.company.name} | ${user.company.catchPhrase}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
