import { useState } from "react";
import datas from "../data/data.json";

import { Form } from "./Form";
import { Challenges } from "./Challenges";

export const Main = () => {
  const [challenges, setChallenges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Form searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Challenges
        datas={datas}
        searchQuery={searchQuery}
        challenges={challenges}
        setChallenges={setChallenges}
      />
    </div>
  );
};
