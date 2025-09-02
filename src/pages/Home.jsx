import JobsBlock from "../features/home/Jobs-Block/JobsBlock";
import SafetyBlock from "../features/home/Safety-Block/SafetyBlock";
import CompanyInfoBlock from "../features/home/Companyblock/CompanyInfoBlock";
import Rezka from "../features/home/Rezka/Rezka";

function Home() {
  return (
    <>
      <SafetyBlock />
      <JobsBlock />
      <CompanyInfoBlock />
      <Rezka />
    </>
  );
}

export default Home;
