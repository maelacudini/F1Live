import Image from "next/image";
import style from "./races.module.scss";
import image from "../../../../public/images/img3.jpg";

export default async function NextRace({ races }) {
  const currentDate = new Date();

  const upcomingRaces = races.filter((race) => {
    const raceDate = new Date(race?.date);
    return raceDate > currentDate;
  });

  const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;
  const nextRaceDate = new Date(nextRace?.date).toDateString();

  //get correct hour
  const raceTime = nextRace?.time.slice(0, 5);
  const [hours, minutes] = raceTime.split(":");
  const adjustedHours = (parseInt(hours) + 2) % 24;
  const adjustedTime = `0${adjustedHours}:${minutes}`;

  return (
    <article className={`card ${style.races}`}>
      <Image
        className={style.bg}
        alt="background"
        src={image}
        placeholder="blur"
        fill
        sizes="(max-width: 768px) 35rem, (max-width: 1200px) 40rem"
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
        <p className="h2">
          At the{" "}
          <span className="yellow">{nextRace?.Circuit?.circuitName}</span>
        </p>
      </div>
      {nextRace ? (
        <div className={style.next}>
          <div>
            <p>Date</p>
            <p className="h4">{nextRaceDate}</p>
          </div>
          <div>
            <p>Time</p>
            <p className="h4">{adjustedTime}</p>
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
