import info from "./images/info.svg";
import Educate from "../Homepage/images/Education.png";
import Job from "../Homepage/images/job.png";
import Winner from "../Homepage/images/Winner.png";
// import Book from "../Homepage/images/Book.png";

export const homeObjOne = {
  lightBg: false,
  primary: true,
  imgStart: "",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "Get Started",
  headling: "Hello!",
  lightText: true,
  description:
    "Hello Everone Welcom to My Blog. I grate for everone visit me ,Enjoy Day!",
  topline: "About Me",
  img: info,
  alt: "Info",
  start: "",
};
export const homeObjTwo = {
  lightBg: true,
  primary: false,
  imgStart: "start",
  lightTopLine: false,
  lightTextDesc: false,
  buttonLabel: "Read More",
  headling: "Educations",
  lightText: false,
  description: "I am studying at SDTC @2019-Now",
  topline: "Educations",
  img: Educate,
  alt: "Educations",
  start: "true",
};
export const homeObjTree = {
  lightBg: false,
  primary: true,
  imgStart: "",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "Go to My Port",
  headling: "Portfolio",
  lightText: true,
  description: "Github//bsgitt",
  topline: "Portfolio",
  img: Winner,
  alt: "Winner",
  start: "",
};
export const homeObjFour = {
  lightBg: true,
  primary: false,
  imgStart: "start",
  lightTopLine: false,
  lightTextDesc: false,
  buttonLabel: "Read More",
  headling: "Job description",
  lightText: false,
  description: "2017-2020: front-end developer @ BearHomeTech",
  topline: "Job description",
  img: Job,
  alt: "Job",
  start: "true",
};
