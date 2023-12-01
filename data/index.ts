import acc1 from "@/assets/image/acc1.svg";
import acc2 from "@/assets/image/acc2.svg";
import acc3 from "@/assets/image/acc3.svg";
import acc4 from "@/assets/image/acc4.svg";
import card1 from "@/assets/image/card1.png";
import card2 from "@/assets/image/card2.png";
import card3 from "@/assets/image/card3.png";
import { StaticImageData } from "next/image";

interface AccordionDataTypes {
  title: string;
  info: string;
  image: string;
}

export interface FeatureCardsType {
  title: string;
  sub: string;
  description: string;
  image: StaticImageData;
}

export const AccordionData: AccordionDataTypes[] = [
  {
    title: "Profitability and Growth",
    info: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    image: acc1,
  },
  {
    title: "Transparent & Fair Decentralized Earnings",
    info: "At Creon, we handpick cutting-edge AI projects and offer our community and token ",
    image: acc2,
  },
  {
    title: "Launching the future",
    info: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities.",
    image: acc3,
  },
  {
    title: "Limitless Possibilities of AI & Crypto",
    info: "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities.",
    image: acc4,
  },
];

export const FeatureCardsData: FeatureCardsType[] = [
  {
    title: "TOKEN",
    sub: "The Gateway token to the world of AI",
    description:
      "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    image: card1,
  },
  {
    title: "REVENUE",
    sub: "Driving income and growth through decentralization",
    description:
      "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
    image: card2,
  },
  {
    title: "LAUNCHPAD",
    sub: "Driving the future of AI innovation",
    description:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
    image: card3,
  },
];
