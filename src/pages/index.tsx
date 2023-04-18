import Hero from "@/Sections/Hero";
import About from "@/Sections/About";
import Footer from "@/Sections/Footer";

//Seo
import Seo from "@/utils/Seo";

const Home = () => {
  return (
    <div>
      <Seo />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default Home;