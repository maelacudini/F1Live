import CopyClipboard from "../../common/copyClipboard/CopyClipboard";
import Title from "../../common/title/Title";
import style from "./intro.module.scss";

export default function Intro() {
  return (
    <section className={style.intro}>
      <div className={style.main}>
        <Title title={"2024"} />
        <Title cname={"red"} title={"Drivers"} />
        <Title title={"Standings"} />

        <CopyClipboard />
      </div>
    </section>
  );
}
