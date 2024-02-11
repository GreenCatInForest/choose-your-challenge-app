import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Challenges } from "./components/Challenges";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="">
      <Header />
      <Form />
      <Challenges />
      <Footer />
    </div>
  );
};
