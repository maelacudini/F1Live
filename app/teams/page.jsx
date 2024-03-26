import Intro from "../_components/common/intro/Intro";
import Info from "../_components/teams/info/Info";
import { getData } from "../_utils/func";

export default async function Teams() {
  const res = await getData(
    "http://ergast.com/api/f1/current/constructorStandings.json"
  );
  const constructors =
    res?.MRData?.StandingsTable?.StandingsLists[0].ConstructorStandings;

  return (
    <main>
      <Intro
        firstTitle={"2024"}
        secondTitle={"Constructors"}
        thirdTitle={"Standing"}
      />
      <section className="margin">
        {constructors.map((info, i) => (
          <Info info={info} key={i} i={i} />
        ))}
      </section>
    </main>
  );
}
