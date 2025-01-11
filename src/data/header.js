// 아이콘 링크
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiBookmarksBold } from "react-icons/pi";
import { PiBookOpenTextBold } from "react-icons/pi";
import { PiBookBookmarkBold } from "react-icons/pi";
import { PiBooks } from "react-icons/pi";

// 헤더 메뉴
export const headerMenus = [
  {
    title: "년별 보기",
    icon: <FaRegCalendarAlt />,
    src: "/years"
  },
  {
    title: "월별 보기",
    icon: <FaRegCalendarAlt />,
    src: "/months"
  },
  {
    title: "장르별 보기",
    icon: <PiBookmarksBold />,
    src: "/genre"
  },
  {
    title: "주제별 보기",
    icon: <PiBookOpenTextBold />,
    src: "/alllabel"
  },
  {
    title: "상태별 보기",
    icon: <PiBookBookmarkBold />,
    src: "/state"
  },
  {
    title: "읽고 싶은 책",
    icon: <PiBooks />,
    src: "/wish"
  },
];