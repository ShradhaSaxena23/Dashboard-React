import { GiftIcon, HomeIcon, PencilIcon, TicketIcon ,FilmIcon} from "@heroicons/react/outline";

export const TodayInvestDB = [
  {
    id:0,
    title: "Film",
    desc: " Hollywood ",
    price: " 400.22 ",
    upOrDown: "up",
    percent: "2.04%",
    icon: <FilmIcon className="invest-icon" />,
  },
  {
    id:1,
    title: "Industry",
    desc: "Steel",
    price: "300.00",
    upOrDown: "down",
    percent: "3.04%",
    icon: <HomeIcon className="invest-icon" />,
  },
  {
    id:2,
    title: "Education",
    desc: "Interaction design",
    price: " 21.99 ",
    upOrDown: "up",
    percent: "9.2%",
    icon: <PencilIcon className="invest-icon" />,
  },
  {
    id:3,
    title: "Gift",
    desc: "design",
    price: "1.25",
    upOrDown: "down",
    percent: "0.25%",
    icon: <GiftIcon className="invest-icon" />,
  },
];