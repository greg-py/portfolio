import { differenceInYears } from "date-fns";

const originalSkillDate = new Date("2019-01-01");
const recentSkillDate = new Date("2021-01-01");
const nowDate = new Date();

const originalSkillYears = differenceInYears(nowDate, originalSkillDate);
const recentSkillYears = differenceInYears(nowDate, recentSkillDate);

export const skills = [
  {
    text: "JavaScript",
    years: originalSkillYears,
  },
  {
    text: "TypeScript",
    years: originalSkillYears,
  },
  {
    text: "React",
    years: originalSkillYears,
  },
  {
    text: "Node.js",
    years: originalSkillYears,
  },
  {
    text: "PostgreSQL",
    years: originalSkillYears,
  },
  {
    text: "SQL Server",
    years: recentSkillYears,
  },
  {
    text: "GraphQL",
    years: recentSkillYears,
  },
  {
    text: "Python",
    years: recentSkillYears,
  },
  {
    text: "MongoDB",
    years: recentSkillYears,
  },
  {
    text: "Docker",
    years: recentSkillYears,
  },
  {
    text: "AWS",
    years: recentSkillYears,
  },
  {
    text: "Apache Kafka",
    years: recentSkillYears,
  },
];
