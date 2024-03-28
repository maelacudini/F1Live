import Practice from "../_components/schedule/practice/Practice";
import Quali from "../_components/schedule/quali/Quali";
import Races from "../_components/schedule/races/Races";
import Sprint from "../_components/schedule/sprint/Sprint";
import { getData } from "../_utils/func";

export default async function Schedule() {
  const res = await getData("http://ergast.com/api/f1/current.json");
  const races = res?.MRData?.RaceTable?.Races;

  return (
    <main>
      <Races races={races} />
      <Quali races={races} />
      <Practice races={races} />
      <Sprint races={races} />
    </main>
  );
}
