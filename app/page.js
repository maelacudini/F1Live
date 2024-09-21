import LatestRace from "./_components/home/LatestRace";
import NextPractice from "./_components/home/NextPractice";
import NextQuali from "./_components/home/NextQuali";
import NextRace from "./_components/home/NextRace";
import NextSprint from "./_components/home/NextSprint";
import { HomeLayout } from "./_components/layouts/HomeLayout";
import { getData } from "./_utils/func";

export default async function Home() {
  const data = await getData("http://ergast.com/api/f1/current.json");
  const races = data?.MRData?.RaceTable?.Races;

  if (!races) {
    return (
      <DynamicSegmentLayout>
        <p className="h3">No races data available</p>
      </DynamicSegmentLayout>
    );
  }
  return (
    <HomeLayout>
      <LatestRace />
      <NextRace races={races} />
      <NextPractice races={races} />
      <NextQuali races={races} />
      <NextSprint races={races} />
    </HomeLayout>
  )
}
