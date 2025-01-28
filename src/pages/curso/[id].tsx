import { useRouter } from "next/router";
import { useCourseContext } from "@/context/CourseContext";
import Header from "@/components/Header";
import { Course } from "@/types/Course";

const CourseDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { courses, hasPurchasedCourse, purchaseCourse } = useCourseContext();

  // Verifica se id é um número e encontra o curso correspondente
  const course: Course | undefined = courses.find((c) => c.id === Number(id));

  if (!course) return <p>404 Not Found :(</p>;

  // Compra o curso
  const handleEnroll = () => {
    if (!hasPurchasedCourse(course.id)) {
      purchaseCourse(course.id);
    }
    router.push(`/player/${course.id}`);
  };

  return (
    <main className="p-10 bg-white">
      <Header />
      <div className="py-10">
        <h1 className="text-4xl mb-5 font-bold">{course.title}</h1>
        <p className="text-xl mb-5">{course.description}</p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:mr-8 mb-5">
            <p className="text-3xl font-bold text-center md:text-left">R${course.price.toFixed(2)}</p>
            <p className="text-sm">This course starts at 20/01/2025</p>
          </div>
          <button
            className="bg-violet-500 text-white px-4 py-2 rounded-lg font-bold"
            onClick={handleEnroll}
          >
            {hasPurchasedCourse(course.id) ? "Continue watching" : "Enroll now"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default CourseDetails;
