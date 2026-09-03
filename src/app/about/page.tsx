import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="page">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">About</h1>
        <p className="text-gray-600 mt-2">
          เว็บไซต์นี้เป็นเว็บไซต์สำหรับนักศึกษาในการลงทะเบียนเรียนและข้อมูลรายวิชา
        </p>
      </div>

      <section className="about-card">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">วัตถุประสงค์</h3>
        <ul className="space-y-3 text-gray-600">
          <li className="about-item">
            <span className="about-dot"></span>
            <span>เป็นช่องทางหลักในการตรวจสอบรายวิชา ข้อมูลหน่วยกิต และสถานะการเปิดลงทะเบียนอย่างรวดเร็ว</span>
          </li>
          <li className="about-item">
            <span className="about-dot"></span>
            <span>ช่วยให้นักศึกษาเข้าถึงข้อมูลหลักสูตรและวางแผนการเรียนในแต่ละเทอมได้อย่างมีประสิทธิภาพ</span>
          </li>
          <li className="about-item">
            <span className="about-dot"></span>
            <span>อำนวยความสะดวกในการค้นหาและดูรายละเอียดเชิงลึกของแต่ละวิชาผ่านหน้าจอที่ใช้งานง่าย</span>
          </li>
        </ul>
      </section>
    </main>
  );
}