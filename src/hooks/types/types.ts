import type { User } from "../../types";

export interface UseFetchReturn {
  data: User[];
  loading: boolean;
  error: string | null;
}
