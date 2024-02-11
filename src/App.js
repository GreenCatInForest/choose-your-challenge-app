import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
