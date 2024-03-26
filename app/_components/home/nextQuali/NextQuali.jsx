import style from "./quali.module.scss";

export default function NextQuali({ races }) {
  const currentDate = new Date();

  const upcomingQuali = races.filter((race) => {
    const practiceDate = new Date(race?.Qualifying?.date);
    return practiceDate > currentDate;
  });

  const nextQuali = upcomingQuali.length > 0 ? upcomingQuali[0] : null;

  return (
    <article className={`card ${style.quali}`}>
      <p className="h4">Next quali</p>
      <p>{nextQuali?.Qualifying?.date}</p>
    </article>
  );
}
