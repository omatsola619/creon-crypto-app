import acc1 from "@/assets/image/acc1.svg";
import acc2 from "@/assets/image/acc2.svg";
import acc3 from "@/assets/image/acc3.svg";
import acc4 from "@/assets/image/acc4.svg";
import card1 from "@/assets/image/card1.png";
import card2 from "@/assets/image/card2.png";
import card3 from "@/assets/image/card3.png";
import { StaticImageData } from "next/image";
import horiz1 from "@/assets/image/horiz1.png";
import horiz2 from "@/assets/image/horiz2.png";
import horiz3 from "@/assets/image/horiz3.png";

export interface AccordionDataTypes {
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

export interface Feature2Type {
  title: string;
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

export const feature2Data: Feature2Type[] = [
  {
    title: "AI PROSPECTS, MARKET SIZE AND DEVELOPMENT PACE",
    description:
      "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
    image: horiz1,
  },
  {
    title: "AI Tools and Market",
    description:
      "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
    image: horiz2,
  },
  {
    title: "AI, Crypto, and NFT Market",
    description:
      "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
    image: horiz3,
  },
];
