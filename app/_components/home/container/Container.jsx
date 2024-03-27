import { getData } from "@/app/_utils/func";
import style from "./container.module.scss";
import LatestRace from "../latestRace/LatestRace";
import NextPractice from "../nextPractice/NextPractice";
import NextQuali from "../nextQuali/NextQuali";
import NextRace from "../nextRace/NextRace";
import NextSprint from "../nextSprint/NextSprint";

export default async function Container() {
  const data = await getData("http://ergast.com/api/f1/current.json");
  const races = data?.MRData?.RaceTable?.Races;

  return (
    <section className={style.container}>
      <LatestRace />
      <NextRace races={races} />
      <NextPractice races={races} />
      <NextQuali races={races} />
      <NextSprint races={races} />
    </section>
  );
}
