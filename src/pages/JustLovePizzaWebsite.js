import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import About from "../components/About";
import Landing from "../components/Landing";
import "./JustLovePizzaWebsite.scss";

const JustLovePizzaWebsite = () => {
  return (
    <div className="just-love-pizza-website">
      <Footer />
      <Contact />
      <Gallery />
      <Services />
      <About />
      <Landing />
    </div>
  );
};

export default JustLovePizzaWebsite;
