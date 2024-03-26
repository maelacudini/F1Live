import style from "./races.module.scss";

export default async function Races({ races }) {
  const currentDate = new Date();

  const previousRaces = races.filter((race) => {
    const raceDate = new Date(race.date);
    return raceDate < currentDate;
  });

  const upcomingRaces = races.filter((race) => {
    const raceDate = new Date(race.date);
    return raceDate > currentDate;
  });

  previousRaces.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  upcomingRaces.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  const previousRace = previousRaces.length > 0 ? previousRaces[0] : null;
  const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;

  return (
    <article className={style.races}>
      <div className={style.main}>
        <div>
          <p className="h2">Next Race</p>
          {nextRace ? (
            <p>
              {nextRace?.raceName}, {nextRace.date}
            </p>
          ) : (
            <p>No upcoming races</p>
          )}
        </div>

        <div>
          <p className="h4">Previous Race</p>
          {previousRace ? (
            <p>
              {previousRace?.raceName}, {previousRace.date}
            </p>
          ) : (
            <p>No previous races</p>
          )}
        </div>
      </div>
    </article>
  );
}
