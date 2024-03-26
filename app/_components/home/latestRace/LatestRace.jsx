import { getData } from "@/app/_utils/func";
import style from "./latest.module.scss";
import CursorContainer from "../../common/cursorContainer/CursorContainer";
import Link from "next/link";

export default async function LatestRace() {
  const data = await getData(
    "https://ergast.com/api/f1/current/last/results.json"
  );
  const race = data?.MRData?.RaceTable?.Races[0];

  return (
    <section className={`card ${style.latest}`}>
      <div className={style.intro}>
        <p className="h4">Latest race</p>
        <p className="h2 red">{race?.raceName}</p>
      </div>

      <div className={style.podium}>
        <p className="h4">Podium</p>
        <div className={style.results}>
          {race?.Results?.slice(0, 3).map((pilot, i) => (
            <div className={style.result} key={i + pilot?.Driver?.givenName}>
              <p>{i + 1}</p>
              <p className="gray" key={i}>
                {pilot?.Driver?.givenName} {pilot?.Driver?.familyName}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CursorContainer>
        <Link href={`/latest/${race?.raceName}`} className="btn">
          Read more
        </Link>
      </CursorContainer>
    </section>
  );
}
