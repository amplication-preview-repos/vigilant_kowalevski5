import { JsonValue } from "type-fest";
import { School } from "../school/School";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  school?: School | null;
  updatedAt: Date;
  username: string;
};
