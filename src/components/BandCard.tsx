import Image from "next/image";
import { Band } from "@/types/band";

export default function BandCard({ band }: { band: Band }) {
  return (
    <div className="bandCard">
      {/* รูปภาพหลักของวง */}
      <div className="relative w-full aspect-[2/1] mb-5 overflow-hidden rounded-xl bg-gray-900">
        <Image
          src={band.image}
          alt={band.name}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ชื่อวงและปีก่อตั้ง */}
      <div className="flex justify-between items-center mb-3">{/* อยู่คนละฝั่งซ้าย-ขวา */}
        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">{band.name}</h2>
        <span className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-semibold">
          ก่อตั้ง: {band.established}
        </span>
      </div>

      <div className="text-sm mb-4 text-gray-600">
        <strong className="text-sm text-gray-800 ">แนวเพลง:</strong> {band.genre}
      </div>

      {/* 3 เพลง */}
      <div className="text-sm mb-4 text-gray-600">
        <strong className="text-sm text-gray-800 block mb-1.5">เพลงฮิตแนะนำ:</strong>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          {band.topHits.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </div>

      {/* สมาชิกวง */}
      <div>
        <strong className="text-sm text-gray-800 block mb-3">สมาชิกในวง:</strong>
        <div className="grid grid-cols-1 gap-2.5">
          {band.members.map((member, index) => ( // วนลูปข้อมูลสมาชิกแต่ละคนจากอาเรย์ band.members
            <div key={index} className="flex items-center gap-3 p-2">
              <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border border-gray-200 shadow-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill // ขยายรูปให้เต็มวงกลม
                  className="object-cover" // จัดรูปให้เต็มพื้นที่โดยไม่เสียสัดส่วน
                />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-semibold text-gray-800 truncate">
                  {member.name}
                </span>
                <span className="text-xs text-gray-500 truncate">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}