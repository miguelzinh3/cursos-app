import { useCourseContext } from "@/context/CourseContext";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import { Course } from "@/types/Course";

const Home: React.FC = () => {
  const { courses, hasPurchasedCourse } = useCourseContext();

  return (
    <main className="p-10 bg-white">
      <Header />
      <div className="py-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Learn with us advance in your career with our crafted learning paths.
        </h2>
        <ul className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {courses.map((course: Course) => {
            const isPurchased = hasPurchasedCourse(course.id);

            return (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                isPurchased={isPurchased}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Home;
