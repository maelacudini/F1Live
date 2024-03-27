import Image from "next/image";
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
      <Image
        className={style.bg}
        alt="background"
        src={"/images/img2.jpg"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      />
      <p className="h4">Next quali</p>
      <p>{nextQuali?.Qualifying?.date}</p>
    </article>
  );
}
