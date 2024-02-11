import { ChallengeCard } from "./ChallengeCard";
import { ListChallenges } from "./ListChallenges";

export const Challenges = ({ searchQuery }) => {
  console.log(searchQuery);
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
