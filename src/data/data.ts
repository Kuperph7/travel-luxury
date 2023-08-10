import { productImgs } from "@/contains/fakeData";
import productVariantImg2 from "@/images/products/v2.jpg";
import productVariantImg3 from "@/images/products/v3.jpg";
import productVariantImg4 from "@/images/products/v4.jpg";
import productVariantImg5 from "@/images/products/v5.jpg";
import productVariantImg6 from "@/images/products/v6.jpg";
//
import productSport1 from "@/images/products/sport-1.png";
import productSport2 from "@/images/products/sport-2.png";
import productSport3 from "@/images/products/sport-3.png";
import productSport4 from "@/images/products/sport-4.png";
import productSport5 from "@/images/products/sport-5.png";
import productSport6 from "@/images/products/sport-6.png";
import productSport7 from "@/images/products/sport-7.png";
import productSport8 from "@/images/products/sport-8.png";
import { StaticImageData } from "next/image";

//

export interface ProductVariant {
  id: number;
  name: string;
  thumbnail?: StaticImageData | string;
  color?: string;
  featuredImage: StaticImageData | string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData | string;
  description: string;
  category: string;
  tags: string[];
  link: string;
  variants?: ProductVariant[];
  variantType?: "color" | "image";
  sizes?: string[];
  allOfSizes?: string[];
  status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
  rating?: string;
  numberOfReviews?: number;
}

const DEMO_VARIANTS: ProductVariant[] = [
  {
    id: 1,
    name: "Black",
    thumbnail: productVariantImg6,
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "White",
    thumbnail: productVariantImg2,
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    thumbnail: productVariantImg3,
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    thumbnail: productVariantImg4,
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Natural",
    thumbnail: productVariantImg5,
    featuredImage: productImgs[4],
  },
];
const DEMO_VARIANT_COLORS: ProductVariant[] = [
  {
    id: 1,
    name: "Violet",
    color: "bg-violet-400",
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "Yellow",
    color: "bg-yellow-400",
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    color: "bg-orange-400",
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    color: "bg-sky-400",
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Green",
    color: "bg-green-400",
    featuredImage: productImgs[4],
  },
];

export const PRODUCTS: Product[] = [
{
id: 1,
name: "Heuer Ladies Formula 1",
description: "Ceramic Black and 316 Grade Stainless Steel",
price: 249.99,
image: "/images/Formula-1-Black-Dial-Ladies-Watch.jpg",
category: "Men's Watches",
tags: ["Seiko", "Automatic", "Nylon Strap"],
link: "/product/heuer-ladies-formula/",
variants: DEMO_VARIANTS,
variantType: "image",
sizes: ["One Size"],
allOfSizes: ["One Size"],
status: "limited edition",
rating: "4.4",
numberOfReviews: 98,
},
{
id: 2,
name: "Omega Aqua Terra 150m Gents",
description: "Aqua Terra 150m Gents",
price: 89.99,
image: "/images/frederique-constant-men-s-41mm-18ct-rose-gold-automatic-watch-fc.webp",
category: "Women's Watches",
tags: ["Casio", "Analog", "Buckle Strap"],
link: "/product/omega-aqua-terra/",
variants: DEMO_VARIANT_COLORS,
variantType: "color",
status: "50% Discount",
rating: "4.9",
numberOfReviews: 98,
},
{
id: 3,
name: "Omega Aqua Terra 150m Gents",
description: "Aqua Terra 150m Gents",
price: 179.99,
image: "/images/frederique-constant-men-s-41mm-stainless-steel-automatic-watch-fc.webp",
category: "Unisex Watches",
tags: ["Timex", "Waffle Knit", "Blue Aqua"],
link: "/product/omega-aqua-gents/",
variants: DEMO_VARIANTS,
variantType: "image",
sizes: ["One Size"],
allOfSizes: ["One Size"],
rating: "4.9",
numberOfReviews: 98,
},
{
id: 4,
name: "Omega Aqua Terra 150m Gents",
description: "Aqua Terra 150m Gents",
price: 199.99,
image: "/images/Omega-Watch-1-640.jpeg",
category: "Men's Watches",
tags: ["Fossil", "Traveler", "Stainless Steel"],
variants: DEMO_VARIANT_COLORS,
variantType: "color",
link: "/product/omega-aqua-gents-2/",
status: "Sold Out",
rating: "4.9",
numberOfReviews: 98,
},
{
id: 5,
name: "Omega Aqua Terra 150m Gents",
description: "Aqua Terra 150m Gents",
price: 149.99,
image: "/images/Omega-watch-1-643.jpeg",
category: "Women's Watches",
tags: ["Michael Kors", "Leather", "Mint Green"],
variants: DEMO_VARIANTS,
variantType: "image",
sizes: ["One Size"],
allOfSizes: ["One Size"],
link: "/product/omega-aqua-gents-3/",
rating: "4.9",
numberOfReviews: 98,
},
{
id: 6,
name: "Audemars Piguet Royal Oak",
description: "New design for 2023",
price: 99.99,
image: "/images/Oris-Watch-01-115-7759-7153_1300x.webp",
category: "Unisex Watches",
tags: ["Adidas", "Hoodie", "2023"],
variantType: "color",
variants: DEMO_VARIANT_COLORS,
link: "/product/audemars-piguet-royal-oak/",
rating: "4.9",
numberOfReviews: 98,
},
{
id: 7,
name: "Patek Philippe Calatrava",
description: "18k yellow gold plated case",
price: 179.99,
image: "/images/Patek-watch-1.jpeg",
category: "Men's Watches",
tags: ["Fossil", "Wool Cashmere", "Matte Black"],
variants: DEMO_VARIANTS,
variantType: "image",
link: "/product/patek-philippe-calatrava/",
status: "limited edition",
rating: "4.9",
numberOfReviews: 98,
},
{
id: 8,
name: "Patek Philippe Calatrava",
description: "18k rose-gold plated case",
price: 299.99,
image: "/images/Patek-watch-30.jpeg",
category: "Women's Watches",
tags: ["Kate Spade", "Leather Tote", "Cream Pink"],
variants: DEMO_VARIANTS,
variantType: "image",
sizes: ["One Size"],
allOfSizes: ["One Size"],
link: "/product/patek-philippe-calatrava-2/",
status: "limited edition",
rating: "4.9",
numberOfReviews: 98,
},
];

export const SPORT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Mastermind Toys",
    description: "Brown cockroach wings",
    price: 74,
    image: productSport1,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 2,
    name: "Jump Rope Kids",
    description: "Classic green",
    price: 68,
    image: productSport2,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 3,
    name: "Tee Ball Beanie",
    description: "New blue aqua",
    price: 132,
    image: productSport3,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["S", "M", "L", "XL"],
    allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 4,
    name: "Rubber Table Tennis",
    description: "Dark pink 2023",
    price: 28,
    image: productSport4,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 5,
    name: "Classic Blue Rugby",
    description: "Perfect mint green",
    price: 42,
    image: productSport5,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 6,
    name: "Manhattan Toy WRT",
    description: "New design 2023",
    price: 30,
    image: productSport6,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 7,
    name: "Tabletop Football ",
    description: "Matte black",
    price: 12,
    image: productSport7,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 8,
    name: "Pvc Catching Toy",
    description: "Cream pink",
    price: 145,
    image: productSport8,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    status: "limited edition",
    rating: "4.9",
    numberOfReviews: 98,
  },
];
