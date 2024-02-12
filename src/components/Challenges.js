import { ChallengeCard } from "./ChallengeCard";
import { ListChallenges } from "./ListChallenges";

export const Challenges = ({
  searchQuery,
  datas,
  challenges,
  setChallenges,
}) => {
  if (searchQuery) {
    const regex = new RegExp(searchQuery, "gi");

    const matchedChallenges = datas.challenges.filter((data) => {
      for (const key in data) {
        if (typeof data[key] === "string" && data[key].match(regex)) {
          return true;
        }
      }
      return false;
    });

    console.log("Matched challenges:", matchedChallenges);
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
