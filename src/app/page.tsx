export default function HomePage() {
  const siteName: string = "Student Course Hub";
  const courseCount: number = 4;
  const isOpen: boolean = true;
  const topics: string[] = [
    "HTML",
    "CSS",
    "TypeScript",
    "Next.js",
  ];

  type Course = {
    id: number;
    code: string;
    title: string;
    credits: number;
    isOpen: boolean;
  };

  const courses: Course[] = [
    {
      id: 1,
      code: "10301231",
      title: "Web Technology",
      credits: 3,
      isOpen: true,
    },
    {
      id: 2,
      code: "10301223",
      title: "Structure Relational Database",
      credits: 3,
      isOpen: false,
    },
    {
      id: 3,
      code: "10301222",
      title: "Data Structures and Algorithms",
      credits: 3,
      isOpen: true,
    },
    {
      id: 4,
      code: "10301225",
      title: "Software Engineering",
      credits: 3,
      isOpen: true,
    },
  ];

  return (
    <main className="page">
      {/* ส่วนหัวข้อหลักและคำโปรย */}
      <div className="mb-8">
        <h1>{siteName}</h1>
      </div>

      {/* กล่องสรุปข้อมูลสถิติ (Stats Section) */}
      {/* ส่วนสรุปข้อมูลแบบไม่มีกรอบและไม่มีเส้นคั่น */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col">
          <span className="text-sm text-gray-600 ">จำนวนรายวิชาทั้งหมด</span>
          <span className="text-2xl font-bold text-gray-800 mt-1">{courseCount} วิชา</span>
        </div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-600 ">สถานะระบบ</span>
          <span className="font-semibold text-green-600 flex items-center gap-2 mt-1">
            <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></span>
            {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}
          </span>
        </div>
      </div>

      {/* ส่วนป้ายเทคโนโลยี */}
      <div className="mb-8">
        <span className="text-sm text-gray-600 block mb-3">เทคโนโลยีที่ใช้พัฒนาเว็บไซต์:</span>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* ส่วนแสดงรายวิชาทั้งหมด */}
      <h2 className="text-xl font-bold mb-4">รายวิชาทั้งหมด</h2>
      <section className="courseGrid">
        {courses.map((course) => (
          <article key={course.id} className="courseCard">
            <h2>{course.title}</h2>
            <p>รหัสวิชา: {course.code}</p>
            <p>{course.credits} หน่วยกิต</p>
            <p className="flex items-center gap-2 mt-3">
              <span
                className={`inline-block w-2.5 h-2.5 rounded-full animate-pulse ${course.isOpen ? "bg-green-500" : "bg-red-500"
                  }`}
              ></span>
              {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}