import type { User } from "../../../types";

export interface SearchUsersProps {
  users: User[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
}
