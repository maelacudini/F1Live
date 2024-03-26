import style from "./quali.module.scss";

export default function Quali({ races }) {
  return (
    <article className="card">
      {races.map((race, i) => (
        <p key={i}>QUALI: {race?.Qualifying?.date}</p>
      ))}
    </article>
  );
}
