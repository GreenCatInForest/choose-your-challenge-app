import { useState, useEffect } from "react";
// import { ListChallenges } from "./ListChallenges";
import { ChallengeCard } from "./ChallengeCard";

export const Challenges = ({
  searchQuery,
  datas,
  challenges,
  setChallenges,
}) => {
  const [numberOfChallenges, setNumberOfChallenges] = useState(0);
  const [challengesPerPage, setChallengesPerPage] = useState(9);
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
      <nav className="navChallengesPages flex sm:flex-col md:flex-row text-center items-center justify-center gap-6">
        <p className="px-2 py-1 mx-1 text-white font-bold bg-blue-600 rounded dark:bg-blue-500 text-xl md:text-2xl lg:text-2xl">
          Results:{" "}
          {pages.length > 0 ? (
            pages.length + ` pages`
          ) : (
            <span className="text-base">
              Here will be your challenges. Please enter a search query!
            </span>
          )}
        </p>
        {pages.map((page, index) => (
          <ul key={index}>
            <li>
              <button
                className=" py-2 px-4 my-4 rounded-full  hover:shadow-md hover:shadow-slate-400  border-b-8 border-slate-600 border-opacity-20 hover:border-opacity-100 hover:border-slate-400"
                onClick={() => setCurrentPage(index)}
              >
                {index + 1}
              </button>
            </li>
          </ul>
        ))}
      </nav>
      <div
        className="challengesPages
        w-11/12
        h-11/12
        grid
        grid-cols-1
        sm:grid-cols-3
        gap-8
        text-center
        mx-auto"
      >
        {pages[currentPage] &&
          pages[currentPage].map((challenge) => (
            <div
              key={challenge.challengeTitle}
              className="overflow-y-auto max-h-[20em]"
            >
              <ChallengeCard
                key={challenge.challengeTitle}
                challenge={challenge}
              />
            </div>
          ))}
      </div>
      {/* <button className="">Display All</button>
      <ListChallenges /> */}
    </div>
  );
};
