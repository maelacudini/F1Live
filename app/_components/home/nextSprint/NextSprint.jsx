import Image from "next/image";
import style from "./sprint.module.scss";
import image from "../../../../public/images/img4.jpg";

export default function NextSprint({ races }) {
  const currentDate = new Date();

  const upcomingSprint = races.filter((race) => {
    const sprintDate = new Date(race?.Sprint?.date);
    return sprintDate > currentDate;
  });

  const nextSprint = upcomingSprint.length > 0 ? upcomingSprint[0] : null;
  const sprintDate = new Date(nextSprint?.Sprint?.date).toDateString();

  //get correct hour
  const sprintTime = nextSprint?.Sprint?.time?.slice(0, 5);
  const [hours, minutes] = sprintTime.split(":");
  const adjustedHours = (parseInt(hours) + 2) % 24;
  const adjustedTime = `0${adjustedHours}:${minutes}`;

  return (
    <article className={`card ${style.sprint}`}>
      <Image
        className={style.bg}
        alt="background"
        src={image}
        placeholder="blur"
        fill
        sizes="(max-width: 768px) 20rem, (max-width: 1200px) 30rem"
      />

      <Image
        className={style.icon}
        alt="arrows"
        src={"/sprint.svg"}
        loading="lazy"
        height={20}
        width={60}
      />

      <p className="h3">
        Next <span className="yellow">sprint</span> round
      </p>
      <div className={style.info}>
        <div>
          <p>Date</p>
          <p className="h4">{sprintDate}</p>
        </div>
        <div>
          <p>Time</p>
          <p className="h4">{adjustedTime}</p>
        </div>
      </div>
    </article>
  );
}
