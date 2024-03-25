import CopyClipboard from "../_components/common/copyClipboard/CopyClipboard";
import Info from "../_components/teams/info/Info";
import Intro from "../_components/teams/intro/Intro";
import { getData } from "../_utils/func";

export default async function Teams() {
  const res = await getData(
    "http://ergast.com/api/f1/current/constructorStandings.json"
  );
  const constructors =
    res?.MRData?.StandingsTable?.StandingsLists[0].ConstructorStandings;

  return (
    <main>
      <Intro />
      <section className="margin">
        {constructors.map((info, i) => (
          <Info info={info} key={i} i={i} />
        ))}
      </section>
    </main>
  );
}
