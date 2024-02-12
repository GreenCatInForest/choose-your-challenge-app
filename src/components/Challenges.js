import { ChallengeCard } from "./ChallengeCard";
import { ListChallenges } from "./ListChallenges";

export const Challenges = ({
  searchQuery,
  datas,
  challenges,
  setChallenges,
}) => {
  // Check if datas is an array
  // Array.isArray(datas) ? console.log("yes") : console.log("no");

  if (searchQuery) {
    const regex = new RegExp(searchQuery, "gi");
    console.log(regex);

    // const matchedQueries = datas.challenges.map((data) =>
    //   data.name.match(regex)
    // );
    // matchedQueries ? console.log(matchedQueries) : console.log("zero");
  }

  return (
    <div className="flex-col flex-wrap text-center w-11/12 mx-auto">
      <article className="flex flex-row flex-wrap justify-center gap-4 my-6">
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </article>
      <article>
        <button className="">Display All</button>
        <ListChallenges />
      </article>
    </div>
  );
};
