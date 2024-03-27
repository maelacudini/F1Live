import Image from "next/image";
import style from "./quali.module.scss";
import CursorContainer from "../../common/cursorContainer/CursorContainer";
import Link from "next/link";

export default function NextQuali({ races }) {
  const currentDate = new Date();

  const upcomingQuali = races.filter((race) => {
    const practiceDate = new Date(race?.Qualifying?.date);
    return practiceDate > currentDate;
  });

  const nextQuali = upcomingQuali.length > 0 ? upcomingQuali[0] : null;
  const qualiDate = new Date(nextQuali?.Qualifying?.date).toDateString();

  return (
    <article className={`card ${style.quali}`}>
      <Image
        className={style.bg}
        alt="background"
        src={"/images/img2.jpg"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      />

      <Image
        className={style.icon}
        alt="arrows"
        src={"/quali.svg"}
        loading="lazy"
        height={20}
        width={60}
      />

      <p className="h3">
        Next <span className="yellow">qualifying</span> round
      </p>
      <div className={style.info}>
        <div>
          <p>Date</p>
          <p className="h4">{qualiDate}</p>
        </div>
        <div>
          <p>Time</p>
          <p className="h4">{nextQuali?.Qualifying?.time.slice(0, 5)}</p>
        </div>
      </div>
    </article>
  );
}
