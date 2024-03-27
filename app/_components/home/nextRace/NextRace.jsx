import Image from "next/image";
import style from "./races.module.scss";

export default async function NextRace({ races }) {
  const currentDate = new Date();

  const upcomingRaces = races.filter((race) => {
    const raceDate = new Date(race?.date);
    return raceDate > currentDate;
  });

  const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;
  const nextRaceDate = new Date(nextRace?.date).toDateString();

  return (
    <article className={`card ${style.races}`}>
      <Image
        className={style.bg}
        alt="background"
        src={"/images/img3.jpg"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      />
      <div className={style.info}>
        <p className="h3">
          <span className="yellow">Next</span> race
          <Image
            alt="arrows"
            src={"/arrows.svg"}
            loading="lazy"
            height={20}
            width={40}
          />
        </p>
        <p className="h2 yellow">{nextRace?.raceName}</p>
      </div>
      {nextRace ? (
        <div className={style.next}>
          <div>
            <p>Date</p>
            <p className="h4">{nextRaceDate}</p>
          </div>
          <div>
            <p>Time</p>
            <p className="h4">{nextRace?.time?.slice(0, 5)}</p>
          </div>
          <div>
            <p>Location</p>
            <p className="h4">
              {nextRace?.Circuit?.Location?.country},{" "}
              {nextRace?.Circuit?.Location?.locality}
            </p>
          </div>
        </div>
      ) : (
        <p>No upcoming races</p>
      )}
    </article>
  );
}
