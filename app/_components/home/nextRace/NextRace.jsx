import style from "./races.module.scss";

export default async function NextRace({ races }) {
  const currentDate = new Date();

  const previousRaces = races.filter((race) => {
    const raceDate = new Date(race?.date);
    return raceDate < currentDate;
  });

  const upcomingRaces = races.filter((race) => {
    const raceDate = new Date(race?.date);
    return raceDate > currentDate;
  });

  const previousRace =
    previousRaces.length > 0 ? previousRaces[previousRaces?.length - 1] : null;
  const nextRace = upcomingRaces.length > 0 ? upcomingRaces[0] : null;

  return (
    <article className={`card ${style.races}`}>
      <div>
        <p className="h4">Next Race</p>
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
    </article>
  );
}
