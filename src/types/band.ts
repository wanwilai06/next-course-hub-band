export interface BandMember { // สร้างโครงสร้างข้อมูล (Interface) สำหรับเก็บข้อมูลของสมาชิกแต่ละคนในวง
  name: string;   
  role: string;  
  image: string; 
}

export type Band = { 
  id: number;          
  name: string;        
  genre: string;       
  established: number; 
  topHits: string[];    
  members: BandMember[];// รายชื่อสมาชิกในวง ต้องเป็นอาเรย์ที่ยึดตามโครงสร้างของ BandMember ข้างบน
  image: string;
};