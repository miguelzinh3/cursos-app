import { Course, UserCourse } from "./Course";

export type CourseContextType = {
  courses: Course[];
  userCourses: UserCourse[];
  hasPurchasedCourse: (courseId: number) => boolean;
  purchaseCourse: (courseId: number) => void;
};
