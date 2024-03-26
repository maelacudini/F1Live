import style from "./sprint.module.scss";

export default function Sprint({ races }) {
  return (
    <article className="card">
      {races.map((race, i) => (
        <p key={i}>Sprint: {race?.Sprint?.date}</p>
      ))}
    </article>
  );
}
