import { courses } from "@/data/coursedata";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  return (
    <main className="page">
      <h1>Courses</h1>
      <div className="courseGrid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}