import  { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import img1 from "@/images/products/Formula-1-Black-Dial-Ladies-Watch.png";
import img2 from "@/images/products/Omega-Watch-1-640.png";
import img3 from "@/images/products/Omega-watch-1-643.png";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: img1,
    heading: "Exclusive Watches For All",
    subHeading: "Discover the Hottest Styles 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: img2,
    heading: "Timeless Elegance",
    subHeading: "Find Your Perfect Timepiece 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: img3,
    heading: "Precision Engineering",
    subHeading: "Unmatched Quality and Design 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
];
