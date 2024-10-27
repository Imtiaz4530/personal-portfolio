import { Navbar } from "./components";
import {
  Header,
  About,
  Portfolio,
  Skills,
  Experience,
  Contact,
  Footer,
  Certifications,
} from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
