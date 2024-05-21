import Link from "next/link";
import Image from "next/image";
import banner2 from "@/assets/1.jpg";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className=" font-bold text-4xl">Huththooo</h1>
      </div>
      <Link href={"/about"}> About </Link>
      <Image src={banner2} width={500} height={500}></Image>
    </main>
  );
}
