import { useState, useEffect } from "react";
import { ListChallenges } from "./ListChallenges";
import { ChallengeCard } from "./ChallengeCard";

export const Challenges = ({
  searchQuery,
  datas,
  challenges,
  setChallenges,
}) => {
  const [numberOfChallenges, setNumberOfChallenges] = useState(0);
  const [challengesPerPage, setChallengesPerPage] = useState(10);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

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

  console.log(pages);

  return (
    <div className="flex-col flex-wrap text-center w-11/12 mx-auto">
      <nav className="navChallengesPages">
        {pages.map((page, index) => (
          <ul key={index}>
            <li>
              <button onClick={() => setCurrentPage(index)}>{index + 1}</button>
            </li>
          </ul>
        ))}
      </nav>
      <div
        className="challengesPages
        flex
        flex-col-sm
        flex-row-md
        flex-row-lg
        flex-wrap
        text-center
        mx-auto"
      >
        {pages[currentPage] &&
          pages[currentPage].map((challenge) => (
            <div key={challenge.challengeTitle}>
              <ChallengeCard
                key={challenge.challengeTitle}
                challenge={challenge}
              />
            </div>
          ))}
      </div>
      <button className="">Display All</button>
      <ListChallenges />
    </div>
  );
};
