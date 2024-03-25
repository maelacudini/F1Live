import Info from "../_components/drivers/info/Info";
import Intro from "../_components/drivers/intro/Intro";
import { getData } from "../_utils/func";

export default async function Drivers() {
  const res = await getData(
    "https://ergast.com/api/f1/current/driverStandings.json"
  );
  const drivers =
    res?.MRData?.StandingsTable?.StandingsLists[0].DriverStandings;

  return (
    <main>
      <Intro />
      <section className="margin">
        {drivers?.map((info, i) => (
          <Info info={info} key={i} i={i} />
        ))}
      </section>
    </main>
  );
}
