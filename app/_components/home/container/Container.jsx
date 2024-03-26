import { getData } from "@/app/_utils/func";
import style from "./container.module.scss";
import LatestRace from "../latestRace/LatestRace";

export default async function Container() {
  // const data = await getData("http://ergast.com/api/f1/current.json");
  // const races = data?.MRData?.RaceTable?.Races;

  return (
    <section className={style.container}>
      <LatestRace />
    </section>
  );
}
