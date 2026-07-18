import type { Branch } from "@/types/branch";
import { normalizeTintingSystems } from "@/lib/tinting-systems";

type BranchEntry = Omit<Branch, "id" | "tintingMachines"> & {
  tintingMachines?: string;
};

const branchEntries: BranchEntry[] = [
  {
    slug: "mataram",
    name: "Mataram",
    city: "Semarang",
    address: "JL MT Haryono 784-786, Sebrang ACA Asuransi",
    phone: "0815-7554-2299",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/3yThpneJuXH96nkTA",
    image: "/images/branches/mataram.jpg",
    tintingMachines:
      "jotun,jotun protective & marine,mowilex,bital,nippon ccm,nippon cc pro,dulux,warna agung,altex,premio, sanlex,kemtone, spectrum,propan waterbase,propan solvent,indaco,avian danapaint,pacific paint.",
  },
  {
    slug: "setiabudi",
    name: "Setiabudi",
    city: "Semarang",
    address: "Jl Setiabudi 82",
    phone: "0857-0770-2950",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/4eJ3ghDHnrPTwUYX7",
    image: "/images/branches/setiabudi.jpg",
    tintingMachines:
      "Mowilex, dulux, jotun, nippon, avian, lenkote, nodrop, propan, danapaint, indaco, bital, kansai, kemtone, toa, premio, sanlex, warna agung, pacific paint",
  },
  {
    slug: "siliwangi",
    name: "Siliwangi",
    city: "Semarang",
    address: "Jl Jend Sudirman 287",
    phone: "0855-4000-4605",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/pV6uPWhSMjkbyjGf8",
    image: "/images/branches/siliwangi.jpg",
    tintingMachines:
      "Mowilex, Indaco, Bital, Warna Agung, Kemtone, Spectrum, Nippon, Danapaint, Propan, Premio, Dulux, Jotun, Avian, Lenkote, No Drop",
  },
  {
    slug: "majapahit",
    name: "Majapahit",
    city: "Semarang",
    address: "Jl Majapahit 708",
    phone: "0856-4112-1415",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/KpfsJJPA1SgTQg4C9",
    image: "/images/branches/majapahit.jpg",
    tintingMachines:
      "mowilex, Jotun, Propan, bital,premio, sanlex danapaint, indaco, Nippon, avian, no drop, lenkote, decolith, kemtone, spectrum Dulux",
  },
  {
    slug: "mijen",
    name: "Mijen",
    city: "Semarang",
    address: "JL Raya Cangkiran 21",
    phone: "0858-21135850",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/XCffXr2uBKh8CiQX6",
    image: "/images/branches/mijen.jpg",
    tintingMachines:
      "avian, lenkote, nodrop, bital, danapaint, dulux, mowilex, nippon, propan",
  },
  {
    slug: "tanah-mas",
    name: "Tanah Mas",
    city: "Semarang",
    address: "Ruko Telagamas Raya 9B",
    phone: "0855-4000-8857",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/19oAE2CGydZsvppXA",
    image: "/images/branches/tanah-mas.jpg",
    tintingMachines:
      "Jotun,avian,dulux,nippon,danapaint,bital,mowilex,propan,premio, sanlex",
  },
  {
    slug: "bsb",
    name: "BSB",
    city: "Semarang",
    address: "Jl Prof Hamka KM 4",
    phone: "0857-0052-5306",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/DtvhyDQfpxYD8Xm27",
    image: "/images/branches/bsb.jpg",
    tintingMachines:
      "dulux , mowilex, propan, avian,lenkote, no drop, nippon, danapaint",
  },
  {
    slug: "kedungmundu",
    name: "Kedungmundu",
    city: "Semarang",
    address: "Raya Kedungmundu 139 C",
    phone: "0812-6691-5000",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/ZFoRaoSTPu6pzA12A",
    image: "/images/branches/kedungmundu.jpg",
    tintingMachines: "avian, dulux, mowilex, propan, jotun, danapaint, nippon",
  },
  {
    slug: "ngaliyan-jotun",
    name: "Ngaliyan Jotun",
    city: "Semarang",
    address:
      "Jl Prof Hamka KM 1, Sebrang Kampus 2 UIN Walisongo, Ruko No 186 E",
    phone: "0812-2726-5640",
    whatsapp: "0812-2726-5640",
    googleMaps: "https://maps.app.goo.gl/98pzZoAPSeR3wmYr8",
    image: "/images/branches/ngaliyan-jotun.jpg",
    tintingMachines: "Jotun",
  },
  {
    slug: "wolter-monginsidi",
    name: "Wolter Monginsidi",
    city: "Semarang",
    address: "Jl. Wolter Monginsidi (Depan Bank BRI)",
    phone: "0812-2791-2366",
    whatsapp: "0812-2791-2366",
    googleMaps: "https://maps.app.goo.gl/NSaNjTzetWN5QVTt6",
    image: "/images/branches/wolter-monginsidi.jpg",
    tintingMachines:
      "Avian, lenkote, nodrop, dulux, nippon, sanlex, propan, danapaint, mowilex, jotun",
  },
  {
    slug: "ungaran",
    name: "Ungaran",
    city: "Ungaran",
    address: "Ruko The Amaya Blok CC10",
    phone: "0823-1447-1717",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/jYUwDZxsogLerWrK6",
    image: "/images/branches/ungaran.jpg",
    tintingMachines:
      "mowilex, Jotun, Propan, bital, rajawali hyoto, danapaint, indaco, Nippon, avian, no drop, lenkote, decolith, premio, sanlex, Dulux",
  },
  {
    slug: "mranggen",
    name: "Mranggen",
    city: "Demak",
    address: "Ruko Kembangarum Mranggen",
    phone: "0823-3330-8011",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/qcwyzH4bZsBAaQRc9",
    image: "/images/branches/mranggen.jpg",
    tintingMachines:
      "mowilex,Jotun, Nippon, danapaint,propan, Avian,no drop, lenkote, dulux",
  },
  {
    slug: "salatiga",
    name: "Salatiga",
    city: "Salatiga",
    address: "Jl Soekarno Hatta 79 Tingkir",
    phone: "0823-1447-1616",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/gAYVo3cDp6HxAvbj7",
    image: "/images/branches/salatiga.jpg",
    tintingMachines:
      "Mowilex, Avian, lenkote, nodrop, Dulux, Jotun, SCI, Propan, Nippon, Premio,Sanlex,  Bital, Danapaint",
  },
  {
    slug: "pabelan",
    name: "Pabelan",
    city: "Salatiga",
    address: "Jl. Salatiga-Bringin, Karangrejo, Pabelan",
    phone: "0813-921-6166",
    whatsapp: "0813-921-6166",
    googleMaps: "https://maps.app.goo.gl/hxwnvMb7gQaSoNi5A",
    image: "",
    tintingMachines:
      "Avian, no drop, lenkote, dulux, danapaint, nippon, pacific paint",
  },
  {
    slug: "pekalongan-kota",
    name: "Pekalongan Kota",
    city: "Pekalongan",
    address: "JL KH Mansyur 60 Bendan",
    phone: "0811-2543-454",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/r1zNZrjqzQMv1cop8",
    image: "/images/branches/pekalongan-kota.jpg",
    tintingMachines:
      "avian,no drop, dulux, jotun, mowilex, nippon, propan, danapaint, decolith",
  },
  {
    slug: "kedungwuni",
    name: "Kedungwuni",
    city: "Pekalongan",
    address:
      "Jl. Raya Surabayan Barat No.79, RW.003, Krajan, Surabayan, Kec. Wonopringgo, Kabupaten Pekalongan, Jawa Tengah 51181, Indonesia",
    phone: "0811-2543-464",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/woSVJUj5bzC8qrQx5",
    image: "/images/branches/kedungwuni.jpg",
    tintingMachines:
      "Nippon, Danapaint, dulux, Jotun, Avian, no drop, lenkote, petalux, whintex, meiji, Propan",
  },
  {
    slug: "kajen",
    name: "Kajen",
    city: "Pekalongan",
    address: "Jl. Pahlawan 492 Kec. Kajen kab.Pekalongan",
    phone: "0812-2791-2365",
    whatsapp: "0812-2791-2365",
    googleMaps: "https://maps.app.goo.gl/86VbzpvpC2QHRY737",
    image: "/images/branches/kajen.jpg",
    tintingMachines: "Mowilex, Avian, no drop, lenkote, dulux, Nippon, Propan",
  },
  {
    slug: "weleri",
    name: "Weleri",
    city: "Weleri",
    address: "Jl Raya Utama Barat 329",
    phone: "0857-0052-5305",
    whatsapp: "0812-6692-5000",
    googleMaps: "https://maps.app.goo.gl/hRVHHknevynosKue7",
    image: "/images/branches/weleri.jpg",
    tintingMachines:
      "mowilex, Jotun, Propan, bital, premio, sanlex, danapaint, indaco, Nippon, avian, no drop,lenkote decolith, San central Indonesia, Dulux",
  },
  {
    slug: "batang",
    name: "Batang",
    city: "Batang",
    address: "Jl Pemuda Utara RT 03 Rq 07, Kadilangu",
    phone: "0812-6692-2666",
    whatsapp: "0812-6692-2666",
    googleMaps: "https://maps.app.goo.gl/59gDhzWuVFtqtwS36",
    image: "/images/branches/batang.jpg",
    tintingMachines: "danapaint, nippon, avian, dulux, propan, jotun, indaco",
  },
];

export const branches: Branch[] = branchEntries.map((branch) => ({
  ...branch,
  id: `branch-${branch.slug}`,
  tintingMachines: normalizeTintingSystems(branch.tintingMachines),
}));

export const branchNames = branches.map((branch) => branch.name);

export const headOfficeAddress = "Jl. Setiabudi No. 82, Semarang";
