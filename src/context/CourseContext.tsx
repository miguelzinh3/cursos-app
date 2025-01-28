import { createContext, useContext, ReactNode, useState } from "react";
import { cursos } from "@/data/Courses";
import { user } from "@/data/User";
import { CourseContextType } from "../types/CourseContextType";
import { Course, UserCourse } from "@/types/Course";

const initialCourses: Course[] = cursos;
const initialUserCourses: UserCourse[] = user.courses;

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [courses] = useState<Course[]>(initialCourses);
  const [userCourses, setUserCourses] = useState<UserCourse[]>(initialUserCourses);

  // Verifica se o usuário já comprou o curso
  const hasPurchasedCourse = (courseId: number) => {
    return userCourses.some((userCourse) => userCourse.courseId === courseId);
  };

  // Adiciona um curso comprado ao usuário
  const purchaseCourse = (courseId: number) => {
    setUserCourses((prevUserCourses) => [
      ...prevUserCourses,
      { courseId, dateJoined: new Date().toISOString() },
    ]);
  };

  return (
    <CourseContext.Provider value={{ courses, userCourses, hasPurchasedCourse, purchaseCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error(
      "useCourseContext deve ser usado dentro de um CourseProvider"
    );
  }
  return context;
};
