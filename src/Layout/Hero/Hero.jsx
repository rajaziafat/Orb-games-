import NavBar from "../../Components/NavBar/NavBar";
import Helmet from "../../Components/Helmet/Helmet";
const Hero = () => {
  return (
    <div className="bg-heroBg sm:bg-heromobileBg bg-cover bg-no-repeat min-h-screen h-[1277px] bg-center">
      <NavBar />
      <div className="pt-24">
        <Helmet>
          <h3 className="text-white text-xl w-max sm:w-full  font-neuro grid grid-flow-col items-center sm:text-sm">
            Web3 Gaming in Orbit
            <span className="orange-gradient w-14 h-14 sm:w-10 sm:h-10 sm:text-base sm:text-center flex justify-center items-center rounded-full mx-2 ">
              ON
            </span>
            Orb
          </h3>
          <h1 className="text-7xl text-white my-7 font-neuro sm:text-center sm:text-6xl sm:leading-[100px] xsm:text-5xl xsm:leading-[60px]">
            Play, <br className="sm:hidden" /> Prosper, Build
          </h1>
          <button className="orange-gradient w-[209px] mt-4 h-14 rounded-md  text-white font-popins sm:block sm:mx-auto">
            Read Whitepaper
          </button>
        </Helmet>
      </div>
    </div>
  );
};

export default Hero;
