import { useState } from "react";
import datas from "../data/data.json";

import { Form } from "./Form";
import { Challenges } from "./Challenges";

export const Main = () => {
  const [challenges, setChallenges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main>
      <div className="features flex flex-col items-center gap-3 text-center">
        <h2 className="mt-3">Features</h2>
        <p>6 types of group JS challenges from basic to complex</p>
        {/* <p>Learn JavaScript by doing</p> */}
        <ul className="flex flex-col sm:flex-row items-center gap-3">
          <li>Basic Challenges</li>
          <li>Algorithm Challenges</li>
        </ul>
      </div>
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
