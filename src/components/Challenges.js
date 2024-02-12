import { useState, useEffect } from "react";
import { ChallengeCard } from "./ChallengeCard";
import { ListChallenges } from "./ListChallenges";

export const Challenges = ({
  searchQuery,
  datas,
  challenges,
  setChallenges,
}) => {
  useEffect(() => {
    const regex = new RegExp(searchQuery, "gi");
    if (searchQuery) {
      const matchedChallenges = datas.challenges.filter((data) => {
        for (const key in data) {
          if (typeof data[key] === "string" && data[key].match(regex)) {
            return true;
          }
        }
        return false;
      });
      console.log(matchedChallenges);
      console.log(challenges);
    } else {
      console.log("Enter please a search query");
    }
  }, [searchQuery]);

  // searchQuery?(setChallenges(matchedChallenges)):console.log("No search query");
  // console.log(challenges);

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
