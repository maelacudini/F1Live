import CopyClipboard from "@/app/_components/common/copyClipboard/CopyClipboard";
import Intro from "@/app/_components/common/intro/Intro";
import Info from "@/app/_components/latest/info/Info";
import { getData } from "@/app/_utils/func";

export default async function Latest() {
  const data = await getData(
    "https://ergast.com/api/f1/current/last/results.json"
  );
  const race = data?.MRData?.RaceTable?.Races[0];

  return (
    <main>
      <Intro
        firstTitle={"Latest"}
        secondTitle={"Race"}
        thirdTitle={"of the Year"}
      />
      <CopyClipboard />
      <Info race={race} />
    </main>
  );
}
