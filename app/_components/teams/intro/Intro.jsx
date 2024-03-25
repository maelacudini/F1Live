import Title from "../../common/title/Title";
import style from "./intro.module.scss";
import CopyClipboard from "../../common/copyClipboard/CopyClipboard";

export default function Intro() {
  return (
    <section className={style.intro}>
      <div className={style.main}>
        <Title title={"2024"} />
        <Title cname={"red"} title={"Constructors"} />
        <Title title={"Standings"} />
        <CopyClipboard />
      </div>
    </section>
  );
}
