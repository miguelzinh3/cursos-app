import { UserCourse } from "./Course";

export type User = {
  id: number;
  name: string;
  courses: UserCourse[];
};
