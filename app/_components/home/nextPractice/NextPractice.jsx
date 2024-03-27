import Image from "next/image";
import style from "./practice.module.scss";

export default function NextPractice({ races }) {
  const currentDate = new Date();

  const upcomingPractice = races.filter((race) => {
    const practiceDate = new Date(race?.FirstPractice?.date);
    return practiceDate > currentDate;
  });

  const nextPractice = upcomingPractice.length > 0 ? upcomingPractice[0] : null;

  const firstPracticeDate = new Date(
    nextPractice?.FirstPractice?.date
  ).toDateString();
  const secondPracticeDate = new Date(
    nextPractice?.SecondPractice?.date
  ).toDateString();
  const thirdPracticeDate = new Date(
    nextPractice?.ThirdPractice?.date
  ).toDateString();

  return (
    <article className={`card ${style.practice}`}>
      <Image
        className={style.bg}
        alt="background"
        src={"/images/img1.jpg"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
      />

      <Image
        className={style.icon}
        alt="arrows"
        src={"/practice.svg"}
        loading="lazy"
        height={20}
        width={60}
      />

      <p className="h3">
        Next <span className="yellow">practice</span> rounds
      </p>
      {nextPractice && (
        <div className={style.practices}>
          <div className={style.row}>
            <p>1st</p>
            <p className="h4">
              {firstPracticeDate},{" "}
              {nextPractice?.FirstPractice?.time.slice(0, 5)}
            </p>
          </div>
          <div className={style.row}>
            <p>2nd</p>
            <p className="h4">
              {secondPracticeDate},{" "}
              {nextPractice?.SecondPractice?.time.slice(0, 5)}
            </p>
          </div>
          <div className={style.row}>
            <p>3rd</p>
            <p className="h4">
              {thirdPracticeDate},{" "}
              {nextPractice?.ThirdPractice?.time.slice(0, 5)}
            </p>
          </div>
        </div>
      )}
      {!nextPractice && <p>No upcoming practice round.</p>}
    </article>
  );
}
