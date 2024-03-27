import Image from "next/image";
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
      <Image
        className={style.bg}
        alt="background"
        src={"/images/img4.jpg"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      />
      <p className="h4">Next sprint</p>
      <p>{nextSprint?.Sprint?.date}</p>
    </article>
  );
}
