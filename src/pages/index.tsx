import Hero from "@/Sections/Hero";
import Footer from "@/Sections/Footer";

//Seo
import Seo from "@/utils/Seo";

const Home = () => {
  return (
    <div>
      <Seo />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;