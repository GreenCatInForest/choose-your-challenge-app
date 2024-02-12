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
      setChallenges(matchedChallenges);
    } else {
      console.log("Enter please a search query");
    }
  }, [searchQuery]);

  useEffect(() => {
    if (challenges.length) console.log(challenges);
    else console.log("There is no matches. Try some another query please");
  }, [challenges]);

  return (
    <div className="flex-col flex-wrap text-center w-11/12 mx-auto">
      <article className="challenges flex flex-row flex-wrap justify-center gap-4 my-6">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.challengeTitle} challenge={challenge} />
        ))}
      </article>
      <article>
        <button className="">Display All</button>
        <ListChallenges />
      </article>
    </div>
  );
};
