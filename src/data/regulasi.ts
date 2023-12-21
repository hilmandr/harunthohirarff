import { IconType } from "react-icons";
import { TbEye } from "react-icons/tb";
import { CgSoftwareDownload } from "react-icons/cg";

interface Regulasi {
  id: number;
  peraturan: string;
  tentang: string;
  status: string;
  tombolLihat: IconType;
  tombolUnduh: IconType;
}

export const REGULASI_LIST: Regulasi[] = [
  {
    id: 1,
    peraturan: "Undang-Undang No 1 Tahun 2009",
    tentang: "Penerbangan",
    status: "Berlaku",
    tombolLihat: TbEye,
    tombolUnduh: CgSoftwareDownload,
  },
  {
    id: 2,
    peraturan: "PR 30 Tahun 2022",
    tentang: "Standar Teknis & Operasi PKP-PK",
    status: "Berlaku",
    tombolLihat: TbEye,
    tombolUnduh: CgSoftwareDownload,
  },
  {
    id: 3,
    peraturan: "KP 90 Tahun 2016",
    tentang: "Pedoman Penyusunan Dokumen PKD",
    status: "Berlaku",
    tombolLihat: TbEye,
    tombolUnduh: CgSoftwareDownload,
  },
  {
    id: 4,
    peraturan: "KP 479 Tahun 2015",
    tentang: "Pelaksanaan Penanggulangan Keadaan Darurat",
    status: "Berlaku",
    tombolLihat: TbEye,
    tombolUnduh: CgSoftwareDownload,
  },
];
