import style from "./practice.module.scss";

export default function NextPractice({ races }) {
  const currentDate = new Date();

  const upcomingPractice = races.filter((race) => {
    const practiceDate = new Date(race?.FirstPractice?.date);
    return practiceDate > currentDate;
  });

  const nextPractice = upcomingPractice.length > 0 ? upcomingPractice[0] : null;

  return (
    <article className={`card ${style.practice}`}>
      <div className={style.intro}>
        <p className="h4">Next practice rounds</p>
        <p className="h2">
          for the <span className="red">{nextPractice?.raceName}</span>
        </p>
      </div>
      {nextPractice && (
        <div className={style.practices}>
          <div>
            <p>1 Practice</p>
            <p className="gray">
              {nextPractice?.FirstPractice?.date},{" "}
              {nextPractice?.FirstPractice?.time}
            </p>
          </div>
          <div>
            <p>2 Practice</p>
            <p className="gray">
              {nextPractice?.SecondPractice?.date},{" "}
              {nextPractice?.SecondPractice?.time}
            </p>
          </div>
          <div>
            <p>3 Practice</p>
            <p className="gray">
              {nextPractice?.ThirdPractice?.date},{" "}
              {nextPractice?.ThirdPractice?.time}
            </p>
          </div>{" "}
        </div>
      )}
      {!nextPractice && <p>No upcoming practice</p>}
    </article>
  );
}
