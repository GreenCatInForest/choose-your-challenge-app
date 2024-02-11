import { ChallengeCard } from "./ChallengeCard";
import { ListChallenges } from "./ListChallenges";

export const Challenges = () => {
  return (
    <section>
      <article>
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </article>
      <article>
        <button className="">Button</button>
        <ListChallenges />
      </article>
    </section>
  );
};
