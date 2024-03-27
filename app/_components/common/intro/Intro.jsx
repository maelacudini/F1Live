import CopyClipboard from "../copyClipboard/CopyClipboard";
import Title from "../title/Title";
import style from "./intro.module.scss";

export default function Intro({ firstTitle, secondTitle, thirdTitle }) {
  return (
    <section className={style.intro}>
      <div className={style.main}>
        <Title title={firstTitle} />
        <Title cname={"yellow"} title={secondTitle} />
        <Title title={thirdTitle} />
      </div>
    </section>
  );
}
