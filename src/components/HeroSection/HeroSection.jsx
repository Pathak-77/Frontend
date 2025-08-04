import React from "react";
import { motion, Transition } from "motion/react";
import Men from "../../assets/img/men-jewellery.avif";
import Women from "../../assets/img/women-jewellery.jpg";
import { useDispatch } from "react-redux";
import { setVisible } from "../../store/features/bar";

const HeroSection = () => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = React.useState(true);
  const [scroll , setScroll] = React.useState(false);

  const handleScroll = ()=> {
     if (window.scrollY > 0) {
      
      setScroll(true); 
    }
  }

  const EndState = ()=>{
    setIsVisible(false);
    dispatch(setVisible(true));
  }
    React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const transition = {
    duration: 1,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <main className="overflow-hidden">
      <div className="grid grid-cols-2 w-full h-screen mb-5">
        <div className="relative overflow-hidden group">
          <div className="absolute ml-0 inset-0 bg-gradient-to-tr from-transparent to-black opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <img
              src={Men}
              alt="Men's Jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-1/2 left-6 right-6 text-white text-center text-xl font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
            <p>
              MEN
              <br />
              <span className="text-lg font-thin">
                for your beloved husband, son, brother, or friend with a
                thoughtful gift that shows your appreciation.
              </span>
            </p>
            <span className="italic">you</span>.
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <img
              src={Women}
              alt="Women's Jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-1/2 left-6 right-6 text-white text-center text-xl font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
            <p>
              Women
              <br />
              <span className="text-lg font-thin">
                for your beloved wife, daughter, sister, or family with a
                thoughtful gift that shows your affection.
              </span>
            </p>
            <span className="italic">you</span>.
          </div>
        </div>

        {isVisible &&
          <motion.h1
          className="absolute left-[11.84em] top-1/2 text-[50px] font-semibold"
            initial={{ offsetDistance: "0%", scale: 2.5 }}
            animate={scroll?{y: '-45vh', scale:0.5}:{ offsetDistance: "100%", scale: 1 }}
            transition={transition}
            onAnimationComplete={()=>
              {if(scroll) {
                EndState();
              }}
            }
          >
            AETHER
          </motion.h1>}
       
      </div>
    </main>
  );
};

export default HeroSection;
