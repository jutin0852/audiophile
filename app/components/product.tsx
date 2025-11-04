import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export default function Product({
  title,
  image,
  link,
}: {
  title?: string;
  image?: string | StaticImport;
  link?:string;
}) {
  return (
    <div className="relative  bg-cream  flex-1 pb-5 text-center inline-block  rounded-xl">
      <Link href={`/categories/${link}`}>
        <Image
          src={image!}
          height={100}
          width={122.9}
          alt="product"
          className="relative w-22 m-auto -top-15 "
        />
        <p className="font-bold my-2">{title}</p>
        <p className="font-semibold text-black/70">SHOP</p>{" "}
      </Link>
    </div>
  );
}
