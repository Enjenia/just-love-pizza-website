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
			<Landing />
			<About />
			<Services />
			<Gallery />
			<Contact />
      <Footer />
    </div>
  );
};

export default JustLovePizzaWebsite;
