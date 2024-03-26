import style from "./sprint.module.scss";

export default function NextSprint({ races }) {
  const currentDate = new Date();

  const upcomingSprint = races.filter((race) => {
    const sprintDate = new Date(race?.Sprint?.date);
    return sprintDate > currentDate;
  });

  const nextSprint = upcomingSprint.length > 0 ? upcomingSprint[0] : null;

  return (
    <article className={`card ${style.sprint}`}>
      <p className="h4">Next sprint</p>
      <p>{nextSprint?.Sprint?.date}</p>
    </article>
  );
}
