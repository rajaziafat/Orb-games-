import Footer from "../Components/Footer/Footer";
import About from "../Layout/About/About";
import Games from "../Layout/Games/Games";
import Hero from "../Layout/Hero/Hero";
import Social from "../Layout/Social/Social";
import Teams from "../Layout/Teams/Teams";
const Home = () => {
  return (
    <>
      <Hero />
      <Games />
      <About />
      <Teams />
      <Social />
      <Footer />
    </>
  );
};

export default Home;
