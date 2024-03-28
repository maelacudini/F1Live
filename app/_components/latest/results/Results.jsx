import style from "./results.module.scss";

export default function Results({ race }) {
  return (
    <div className={style.results}>
      <p className="h4">Standings</p>
      <div>
        {race?.Results.map((result, i) => (
          <div key={i + result?.position} className={style.result}>
            <div className={style.row}>
              <div>
                <p>{result?.position}</p>
                <p className={result?.FastestLap?.rank === "1" ? "violet" : ""}>
                  {result?.Driver?.givenName} {result?.Driver?.familyName}
                </p>
              </div>
              <div>
                {/* {result?.FastestLap?.rank === "1" && (
                  <p className="violet">
                    <b>{result?.FastestLap?.Time?.time}</b>
                  </p>
                )} */}
                <p>
                  <b>{result?.status}</b>
                </p>
              </div>
            </div>
            <div className={style.row}>
              <p className="gray">{result?.Constructor?.name}</p>
              <div>
                <p className="gray">LAPS</p>
                <p className="gray">{result?.laps}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
