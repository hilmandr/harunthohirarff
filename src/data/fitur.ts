import { IconType } from "react-icons";
import { BiArea } from "react-icons/bi";
import { MdOutlineFireTruck } from "react-icons/md";
import { GiWalkieTalkie } from "react-icons/gi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { GiRoundTable } from "react-icons/gi";

interface Fitur {
  title: string;
  icon: IconType;
  description: string;
  link: string;
}

export const FITUR_LIST: Fitur[] = [
  {
    title: "Regulasi & Dokumen",
    icon: MdOutlineLibraryBooks,
    description:
      "Peraturan perundang-undangan dan turunannya yang mengatur tentang standar</b> teknis unit Pertolongan Kecelakaan Penerbangan dan Pemadam Kebakaran.",
    link: "/regulasi",
  },
  {
    title: "Anggota Komite & Alur Komunikasi",
    icon: GiWalkieTalkie,
    description:
      "Anggota Komite Keselamatan Penerbangan Kantor UPBU Harun Thohir - Gresik serta alur komunikasi pada skenario penanggulangan keadaan darurat.",
    link: "/anggota-komite",
  },
  {
    title: "Fasilitas PKP-PK",
    icon: MdOutlineFireTruck,
    description:
      "Fasilitas PKP-PK adalah semua kendaraan PKP-PK, peralatan operasional PKP-PK dan bahan pendukungnya serta personil yang disediakan di setiap bandar udara untuk memberikan pertolongan kecelakaan penerbangan dan pemadam kebakaran.",
    link: "/fasilitas",
  },
  {
    title: "Perhitungan Crash Area",
    icon: BiArea,
    description:
      "Peraturan perundang-undangan dan turunannya yang mengatur tentang standar</b> teknis unit Pertolongan Kecelakaan Penerbangan dan Pemadam Kebakaran.",
    link: "/",
  },
  {
    title: "Table Top Exercise",
    icon: GiRoundTable,
    description:
      "Simulasi strategi yang dilakukan di dalam ruangan guna menguji kemampuan personil dalam mengambil keputusan sehubungan dengan kegiatan pertolongan kecelakaan dan pemadam kebakaran yang mungkin dilakukan sebelum mencoba latihan di lapangan.",
    link: "/table-top",
  },
];
