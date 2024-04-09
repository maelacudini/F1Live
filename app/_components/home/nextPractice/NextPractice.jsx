import Image from "next/image";
import style from "./practice.module.scss";
import image from "../../../../public/images/img1.jpg";

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

  //get correct hour first pr
  let firstPrFinalTime;
  if (nextPractice?.FirstPractice?.time) {
    const firstPrTime = nextPractice?.FirstPractice?.time?.slice(0, 5);
    const [firstPrHours, firstPrMin] = firstPrTime.split(":");
    const firstAdjHours = (parseInt(firstPrHours) + 2) % 24;
    firstPrFinalTime = `0${firstAdjHours}:${firstPrMin}`;
  }

  //get correct hour second pr
  let secondPrFinalTime;
  if (nextPractice?.SecondPractice?.time) {
    const secondPrTime = nextPractice?.SecondPractice?.time?.slice(0, 5);
    const [secondPrHours, secondPrMin] = secondPrTime.split(":");
    const secondAdjHours = (parseInt(secondPrHours) + 2) % 24;
    secondPrFinalTime = `0${secondAdjHours}:${secondPrMin}`;
  }

  //get correct hour third pr
  let thirdPtFinalTime;
  if (nextPractice?.ThirdPractice?.time) {
    const thirdPrTime = nextPractice?.ThirdPractice?.time?.slice(0, 5);
    const [thirdPrHours, thirdPrMin] = thirdPrTime.split(":");
    const thirdAdjHours = (parseInt(thirdPrHours) + 2) % 24;
    thirdPtFinalTime = `0${thirdAdjHours}:${thirdPrMin}`;
  }

  return (
    <article className={`card ${style.practice}`}>
      <Image
        className={style.bg}
        alt="background"
        src={image}
        placeholder="blur"
        fill
        sizes="(max-width: 768px) 25rem, (max-width: 1200px) 30rem"
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
              {firstPracticeDate}, {firstPrFinalTime}
            </p>
          </div>
          <div className={style.row}>
            <p>2nd</p>
            {secondPracticeDate && nextPractice?.SecondPractice ? (
              <p className="h4">
                {secondPracticeDate}, {secondPrFinalTime}
              </p>
            ) : (
              <p className="h4">No second practice</p>
            )}
          </div>
          <div className={style.row}>
            <p>3rd</p>
            {thirdPracticeDate && nextPractice?.ThirdPractice ? (
              <p className="h4">
                {thirdPracticeDate}, {thirdPracticeDate}
              </p>
            ) : (
              <p className="h4">No third practice</p>
            )}
          </div>
        </div>
      )}
      {!nextPractice && <p>No upcoming practice round.</p>}
    </article>
  );
}
