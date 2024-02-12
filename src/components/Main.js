import { useState } from "react";
import datas from "../data/data.json";

import { Form } from "./Form";
import { Challenges } from "./Challenges";

export const Main = () => {
  const [challenges, setChallenges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main>
      <div>
        <h2>Features</h2>
        <p>6 types of group JS challenges from basic to complex</p>
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
