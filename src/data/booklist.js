// 기간 구하는 함수
// 인수는 "yyyy-mm-dd" 형태로 입력
const getDateDiff = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24));
}

// 진행률 구하는 함수
const getProgress = (tp, cp) => {
  return ((cp / tp) * 100 ) + "%";
}

// 책 목록

export const booklist = [
  /* 템플릿
    {
    src: "",
    title: "",
    author: "",
    translator: "",
    totalpage: ,
    genre: "",
    label: "",
    img: "../assets/img/bookcover/",
    state: "",
    startday: "",
    currentpage: ,
    endday: "",
    summary: "",
  },
  */
  
  {
    src: "/themoneybook",
    title: "The money book",
    author: "토스",
    translator: "-",
    totalpage: 449,
    genre: "경제",
    label: "가이드북",
    img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791198686114.jpg",
    state: "독서 중",
    startday: "2025-01-01",
    currentpage: 10,
    endday: "",
    summary: "",
  },

  {
    src: "/storyofmoneyandaccounting",
    title: "돈의 흐름이 보이는 회계 이야기",
    author: "구상수",
    translator: "-",
    totalpage: 344,
    genre: "경제",
    label: "역사",
    img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/4801165210077.jpg",
    state: "독서 중",
    startday: "2025-01-11",
    currentpage: 0,
    endday: "",
    summary: "",
  },
];