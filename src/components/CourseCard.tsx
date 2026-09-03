import { Course } from "@/types/course";

type CourseCardProps = {
    course: Course;
};


export default function CourseCard({ course }: CourseCardProps) {
    return (
        <>
            <article key={course.id} className="courseCard">
                <h2>{course.title}</h2>
                <p>รหัสวิชา: {course.code}</p>
                <p>{course.credits} หน่วยกิต</p>
                <p className="flex items-center gap-2">
                    <span
                        className={`inline-block w-2.5 h-2.5 rounded-full animate-pulse ${course.isOpen ? "bg-green-500" : "bg-red-500"
                            }`}
                    ></span>
                    {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
                </p>
            </article>
        </>
    )
}
