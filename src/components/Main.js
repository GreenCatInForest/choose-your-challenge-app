import { useState } from "react";
import datas from "../data/data.json";

import { Form } from "./Form";
import { Challenges } from "./Challenges";

export const Main = () => {
  const [challenges, setChallenges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main>
      <div className="features flex flex-col sm:flex-row  justify-center items-center first-line:items-center gap-3 text-center">
        <h2 className="px-2 py-1 mx-1 text-white font-bold bg-blue-600 rounded dark:bg-blue-500 text-xl md:text-2xl lg:text-2xl">
          Features:
        </h2>
        <p>
          <span className="p-2 w-2 h-2 bg-yellow-200 rounded-full mr-3">
            {" "}
            01{" "}
          </span>{" "}
          6 large groups of JavaScript challenges covering almost all topics
        </p>
        <p>
          <span className="p-2 w-2 h-2 bg-yellow-200 rounded-full mr-3">
            {" "}
            02{" "}
          </span>{" "}
          Possible levels: from basic to complex
        </p>
        {/* <p>Learn JavaScript by doing</p> */}
      </div>
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-3">
        <li>Basic Challenges</li>
        <li>Algorithm Challenges</li>
      </ul>
      <Form searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Challenges
        datas={datas}
        searchQuery={searchQuery}
        challenges={challenges}
        setChallenges={setChallenges}
      />
    </main>
  );
};
