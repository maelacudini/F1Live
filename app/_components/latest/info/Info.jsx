import Results from "../results/Results";
import style from "./info.module.scss";

export default function Info({ race }) {
  return (
    <section className={style.info}>
      <div className={style.main}>
        <div className={style.row}>
          <p>Circuit Name</p>
          <p className="gray">{race?.Circuit?.circuitName}</p>
        </div>
        <div className={style.row}>
          <p>Location</p>
          <p className="gray">
            {race?.Circuit?.Location?.locality},{" "}
            {race?.Circuit?.Location?.country}
          </p>
        </div>
        <div className={style.row}>
          <p>Local Date and Time</p>
          <p className="gray">
            {race?.date}, {race?.time?.slice(0, 5)}
          </p>
        </div>
        <div className={style.row}>
          <p>Laps</p>
          <p className="gray">{race?.Results[0].laps}</p>
        </div>
        <div className={style.row}>
          <p>Round</p>
          <p className="gray">{race?.round}</p>
        </div>
        <Results race={race} />
      </div>
    </section>
  );
}
