import style from "./practice.module.scss";

export default function Practice({ races }) {
  return (
    <article className="card">
      {races.map((race, i) => (
        <p key={i}>1 Practice: {race?.FirstPractice?.date}</p>
      ))}
      {races.map((race, i) => (
        <p key={i}>2 Practice: {race?.SecondPractice?.date}</p>
      ))}
      {races.map((race, i) => (
        <p key={i}>3 Practice: {race?.ThirdPractice?.date}</p>
      ))}
    </article>
  );
}
