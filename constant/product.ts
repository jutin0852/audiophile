import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ProductsCategory {
  id: string;
  title: string;
  img: string | StaticImport;
  categoryName: string;
}

export interface Products {
  id: string;
  title: string;
  img: string | StaticImport;
  category: string;
  description: string;
  newProduct: boolean;
  price: string;
  features: string[];
  box: { item: string; times: string }[];
  detailImg1: string | StaticImport;
  detailImg2: string | StaticImport;
  detailImg3: string | StaticImport;
}

export const products: Products[] = [
  {
    id: "yx1wirelessearphone",
    title: "YX1 WIRELESS EARPHONES",
    img: "/earphone.png",
    category: "earphones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    newProduct: true,
    price: "2,999",
    features: [
      `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.`,
      `From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
    ],
    box: [
      { item: "Heaphone unit", times: "1x" },
      { item: "Replacement Earcups", times: "2x" },
      { item: "User Manual", times: "1x" },
      { item: "3.5mm 5m Audio Cable", times: "1x" },
    ],
    detailImg1: "/ear1.png",
    detailImg2: "/ear2.png",
    detailImg3: "/ear3.png",
  },
  {
    id: "zx9Speaker",
    title: "ZX9SPEAKER",
    img: "/speakers.png",
    category: "speakers",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    newProduct: true,
    price: "2,999",
    features: [
      `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.`,
      `From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
    ],
    box: [
      { item: "Speaker unit", times: "2x" },
      { item: "Speaker cloth panel", times: "2x" },
      { item: "User Manual", times: "1x" },
      { item: "3.5mm 10m Audio Cable", times: "1x" },
      { item: "10m optical cable", times: "2x" },
    ],
    detailImg1: "/zx1.png",
    detailImg2: "/zx2.png",
    detailImg3: "/zx3.png",
  },
  {
    id: "zxSpeaker",
    title: "ZX SPEAKER",
    img: "/speakers1.png",
    category: "speakers",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    newProduct: false,
    price: "2,999",
    features: [
      `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.`,
      `From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
    ],
    box: [
      { item: "Speaker unit", times: "2x" },
      { item: "Speaker cloth panel", times: "2x" },
      { item: "User Manual", times: "1x" },
      { item: "3.5mm 10m Audio Cable", times: "1x" },
      { item: "10m optical cable", times: "2x" },
    ],
    detailImg1: "/zx11.png",
    detailImg2: "/zx12.png",
    detailImg3: "/speaker2.png",
  },
  {
    id: "xx99mark2headphones",
    title: "XX99 MARK II HEADPHONES",
    img: "/headphones2.png",
    newProduct: true,
    description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced 
    depth and precision of studio-quality sound.`,
    category: "headphones",
    price: "2,999",
    features: [
      `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.`,
      `From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
    ],
    box: [
      { item: "Heaphone unit", times: "1x" },
      { item: "Replacement Earcups", times: "2x" },
      { item: "User Manual", times: "1x" },
      { item: "3.5mm 5m Audio Cable", times: "1x" },
    ],
    detailImg1: "/guy.png",
    detailImg2: "/table.png",
    detailImg3: "/hero.png",
  },
  {
    id: "xx99mark1headphone",
    title: "XX99 Mark I Headphones",
    img: "/headphones3.png",
    newProduct: false,
    description: `As the gold standard
     for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. 
    `,
    category: "headphones",
    price: "2,999",
    features: [
      `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.`,
      `From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
    ],
    box: [
      { item: "Heaphone unit", times: "1x" },
      { item: "Replacement Earcups", times: "2x" },
      { item: "User Manual", times: "1x" },
      { item: "3.5mm 5m Audio Cable", times: "1x" },
    ],
    detailImg1: "/mark11.png",
    detailImg2: "/mark12.png",
    detailImg3: "/mark13.png",
  },
  {
    id: "xx59headphone",
    title: "XX59Headphones",
    img: "/headphones4.png",
    newProduct: false,
    description: `Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move. for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.`,
    category: "headphones",
    price: "2,999",
    features: [
      `These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.`,
      `More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
    ],
    box: [
      { item: "Heaphone unit", times: "1x" },
      { item: "Replacement Earcups", times: "2x" },
      { item: "User Manual", times: "1x" },
      { item: "3.5mm 5m Audio Cable", times: "1x" },
    ],
    detailImg1: "/xx51.png",
    detailImg2: "/xx53.png",
    detailImg3: "/xx52.png",
  },
];

export const productsCategory: ProductsCategory[] = [
  {
    id: "headphones",
    title: "HEADPHONES",
    img: "/headphone.png",
    categoryName: "headphones",
  },
  {
    id: "speakers",
    title: "SPEAKERS",
    img: "/speakers.png",
    categoryName: "speakers",
  },
  {
    id: "earphones",
    title: "EARPHONES",
    img: "/earphone.png",
    categoryName: "earphones",
  },
];

export const otherProducts: ProductsCategory[] = [
  {
    id: "headphones",
    title: "HEADPHONES",
    img: "/headphones2.png",
    categoryName: "headphones",
  },
  {
    id: "headphones",
    title: "HEADPHONES",
    img: "/headphones3.png",
    categoryName: "headphones",
  },
  {
    id: "speakers",
    title: "SPEAKERS",
    img: "/speakers.png",
    categoryName: "earphones",
  },
];
