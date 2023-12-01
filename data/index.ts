import acc1 from "@/assets/image/acc1.svg";
import acc2 from "@/assets/image/acc2.svg";
import acc3 from "@/assets/image/acc3.svg";
import acc4 from "@/assets/image/acc4.svg";

interface AccordionDataTypes {
  title: string;
  info: string;
  image: string;
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
