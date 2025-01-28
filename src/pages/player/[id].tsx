import { useEffect } from "react";
import { useRouter } from "next/router";

import { useCourseContext } from "@/context/CourseContext";
import VideoPlayer from "@/components/VideoPlayer";
import Header from "@/components/Header";
import { Course } from "@/types/Course";

const CoursePlayer: React.FC = () => {
  const videoSrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const { courses, hasPurchasedCourse } = useCourseContext();

  const router = useRouter();
  const { id } = router.query;

  // Verifica se `id` é um número válido antes de buscar o curso
  const courseId = id ? Number(id) : NaN;

  // Validação do tipo Course | null
  const course: Course | null = !isNaN(courseId) ? courses.find((c) => c.id === courseId) || null : null;

  useEffect(() => {
    if (id && course && !hasPurchasedCourse(course.id)) {
      router.push(`/curso/${course.id}`);
    }
  }, [id, course, hasPurchasedCourse, router]);

  if (!id || !course) return <p>Loading course...</p>;

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <main className="p-10 bg-white">
      <Header />
      <div className="py-5">
        <h1 className="text-4xl text-gray-900 text-center font-bold mb-5">{course.title}</h1>
        <VideoPlayer videoSrc={videoSrc}>
          <button 
            onClick={handleGoHome} 
            className="mt-4 px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
          >
            Back
          </button>
        </VideoPlayer>
      </div>
    </main>
  );
};

export default CoursePlayer;
