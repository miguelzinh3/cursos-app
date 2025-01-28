import { render, screen, fireEvent } from "@testing-library/react";
import { CourseProvider, useCourseContext } from "./CourseContext";
import { cursos } from "@/data/Courses";

const mockCourses = cursos;

describe("CourseContext", () => {
  const TestComponent = () => {
    const { courses, hasPurchasedCourse, purchaseCourse } = useCourseContext();

    return (
      <div>
        <h1>{courses.length}</h1>
        <button
          onClick={() => {
            // Compra o primeiro curso
            purchaseCourse(mockCourses[0].id);
          }}
        >
          Enroll now
        </button>
        <p>
          {hasPurchasedCourse(mockCourses[0].id)
            ? "Continue watching"
            : "See more details"}
        </p>
      </div>
    );
  };

  test("deve fornecer o contexto corretamente", () => {
    render(
      <CourseProvider>
        <TestComponent />
      </CourseProvider>
    );

    // Verifica se o número de cursos é correto
    expect(screen.getByText(mockCourses.length.toString())).toBeInTheDocument();
  });

  test("deve verificar se o usuário comprou o curso", () => {
    render(
      <CourseProvider>
        <TestComponent />
      </CourseProvider>
    );

    expect(screen.getByText("Enroll now")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Enroll now"));

    expect(screen.getByText("Continue watching")).toBeInTheDocument();
  });
});
