import style from "./info.module.scss";

export default function Info({ info }) {
  const constructor = info?.Constructor;

  return (
    <article className={style.info}>
      <div>
        <p className="h3">{info?.position}</p>
        <p className="h2">{constructor?.name}</p>
      </div>
      <div>
        <p className="gray">Points</p>
        <p>{info?.points}</p>
      </div>
    </article>
  );
}
