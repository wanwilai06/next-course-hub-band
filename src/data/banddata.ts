import { Band } from "@/types/band";

export const band: Band[] = [
  {
    id: 1,
    name: "Big Ass",
    genre: "Hard Rock | Pop rock",
    established: 1997,
    topHits: ["ลมเปลี่ยนทิศ", "คนไม่เอาถ่าน", "เล่นของสูง"],
    members: [
      { name: "เดชา โคนาโล (เจ๋ง)", role: "นักร้องนำ", image: "/images/members/jeng.png" },
      { name: "พูนศักดิ์ จตุระบุล (อ๊อฟ)", role: "กีตาร์", image: "/images/members/aof.png" },
      { name: "อภิชาติ พรมรักษา (หมู)", role: "กีตาร์", image: "/images/members/moo.png" },
      { name: "พงศ์พันธ์ พลสิทธิ์ (โอ๊ค)", role: "เบส", image: "/images/members/oak.png" },
      { name: "ขจรเดช พรมรักษา (กบ)", role: "กลอง", image: "/images/members/kob.png" },
    ],
    image: "/images/bands/band1.png",
  },
  {
    id: 2,
    name: "Tilly Birds",
    genre: "Pop rock",
    established: 2014,
    topHits: ["ถ้าเราเจอกันอีก", "คิด(แต่ไม่)ถึง", "แค่เธอเข้ามา"],
    members: [
      { name: "อนุโรจน์ เกตุเลขา (เติร์ด)", role: "นักร้องนำ", image: "/images/members/third.png" },
      { name: "ณัฐดนัย ชูชาติ (บิลลี่)", role: "กีตาร์", image: "/images/members/billy.png" },
      { name: "ธุวานนท์ ตันติวัฒนวรกุล (ไมโล)", role: "กลอง", image: "/images/members/milo.png" },
    ],
    image: "/images/bands/band2.png",
  },
  {
    id: 3,
    name: "Potato",
    genre: "Pop rock",
    established: 2000,
    topHits: ["ขาดเธอไม่ได้", "ทิ้งไว้กลางทาง", "เธอยัง"],
    members: [
      { name: "พัฒน์ชัย ภักดีสู่สุข (ปั๊ป)", role: "นักร้องนำ, กีตาร์", image: "/images/members/pup.png" },
      { name: "ปิยวัฒน์ อนุกูร (โอม)", role: "กีตาร์เบส", image: "/images/members/ome.png" },
      { name: "กานต์ อ่ำสุพรรณ (กานต์)", role: "กลอง", image: "/images/members/karn.png" },
      { name: "ทีฆทัศน์ ทวิอารยกุล (ชูหั่ง)", role: "กีตาร์", image: "/images/members/hang.png" },
      { name: "เกียรติยศ มาลาทอง (อั้ม)", role: "คีย์บอร์ด", image: "/images/members/um.png" },
    ],
    image: "/images/bands/band3.png",
  },
];