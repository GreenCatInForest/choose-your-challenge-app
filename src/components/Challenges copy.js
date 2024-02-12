import { useState, useEffect } from "react";
// import { ChallengeCard } from "./ChallengeCard";
import { ListChallenges } from "./ListChallenges";
import { ChallengesContainer } from "./ChallengesContainer";

export const Challenges = ({
  searchQuery,
  datas,
  challenges,
  setChallenges,
}) => {
  const [numberOfChallenges, setNumberOfChallenges] = useState(0);
  const challengesPerPage = 10;
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [pages, setPages] = useState([]);

  const challengeLists = (array, count) => {
    const itemsInArray = array.length;
    const itemsInSet = count;
    const setsTemp = [];
    for (let i = 0; i < itemsInArray; i += itemsInSet) {
      const sets = array.slice(i, i + itemsInSet);
      setsTemp.push(sets);
    }
    setPages(setsTemp);
  };

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
      setNumberOfChallenges(matchedChallenges.length);
    } else {
      console.log("Enter please a search query");
    }
  }, [searchQuery]);

  useEffect(() => {
    if (challenges.length) {
      // console.log(challenges);
    } else console.log("There is no matches. Try some another query please");
  }, [challenges]);

  useEffect(() => {
    if (numberOfChallenges) {
      // console.log(numberOfChallenges);
      setNumberOfPages(numberOfChallenges / challengesPerPage);
    } else
      console.log(
        "There is no number of challenges. Try some another query please"
      );
  }, [numberOfChallenges]);

  useEffect(() => {
    if (numberOfPages) {
      challengeLists(challenges, challengesPerPage);
    } else
      console.log("There is no number of pages. Try some another query please");
  }, [numberOfPages]);

  // render div for each number of pages with 10 challenges each
  // split challenges, divide by 10
  console.log(pages);

  return (
    <div className="flex-col flex-wrap text-center w-11/12 mx-auto">
      <section className="challenges flex flex-row flex-wrap justify-center gap-4 my-6">
        {pages.map((page, index) => (
          <div>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              PageContent
            </div>
            <button key={index}>{index + 1}</button>
          </div>
        ))}
      </section>

      {/* Render Challenges Cards  */}
      {challenges.map((challenge) => (
        <div key={challenge.challengeTitle}>
          <ChallengeCard key={challenge.challengeTitle} challenge={challenge} />
        </div>
      ))}
      <article>
        <ChallengesContainer />
        <button className="">Display All</button>
        <ListChallenges />
      </article>
    </div>
  );
};
