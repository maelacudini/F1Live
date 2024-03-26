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
            {race?.date}, {race?.time}
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
        <div className={style.results}>
          <p className="h4">Results</p>
          <div className={style.class}>
            {race?.Results.map((result, i) => (
              <div key={i + result?.position} className={style.pilot}>
                <div>
                  <p>{result?.position}</p>
                  <p
                    className={
                      result?.FastestLap?.rank === "1" ? "violet" : "gray"
                    }
                  >
                    {result?.Driver?.givenName} {result?.Driver?.familyName}
                  </p>
                </div>
                <div>
                  {result?.FastestLap?.rank === "1" && (
                    <p className="violet">
                      <b>{result?.FastestLap?.Time?.time}</b>
                    </p>
                  )}
                  <p>
                    <b>{result?.status}</b> (L. {result?.laps})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
