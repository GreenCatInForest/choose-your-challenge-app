import { useState } from "react";
import data from "../data/data.json";

import { Form } from "./Form";
import { Challenges } from "./Challenges";

export const Main = () => {
  const [challenges, setChallenges] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Form searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Challenges />
    </div>
  );
};
