import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function Product({
  title,
  image,
}: {
  title?: string;
  image?: string | StaticImport;
}) {
  return (
    <div className="relative  bg-cream  flex-1 pb-5 text-center inline-block  rounded-xl">

      <Image
        src={image!}
        height={100}
        width={122.9}
        alt="product"
        className="relative w-22 m-auto -top-15 "
      />
      <p className="font-bold my-2">{title}</p>
      <p className="font-semibold text-black/70">SHOP</p>
    </div>
  );
}
