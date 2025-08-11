import { useState, React } from "react";
import Complementry from "../../assets/img/complementry.jpeg";
import Exchange from "../../assets/img/easy_exchange.jpeg";
import Wrapping from "../../assets/img/gift_wrapping.jpeg";
import GlassPanel from "../GlassPanel/GlassPanel";

const Items = () => {
  const panelItem = [
    {
      id: 1,
      text: "Enjoy the ease of complimentary delivery on every order. Your carefully chosen gift will arrive swiftly and securely, with no hidden fees. We prioritize a seamless experience, so you can focus on the joy of giving while we handle the rest.",
      header: "Complementry Delivery",
    },
    {
      id: 2,
      text: "Share the joy of giving with a thoughtful gift at no extra cost. Personalize your present by mentioning your loved ones, making every moment unforgettable. Our curated selection ensures your gift is as unique as they are, crafted to bring smiles and lasting memories.",
      header: "Gift",
    },
    {
      id: 3,
      text: "Shop with confidence thanks to our hassle-free 30-day return policy. If your gift isn’t perfect, return it effortlessly with our straightforward process. We’re committed to making your experience stress-free, ensuring every purchase feels just right.",
      header: "Returns",
    },
  ];

  const [click, setClick] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  const setAction = (index) => {
    setClick(!click);
    setItemIndex(index);
  };

  return (
    <div className=" relative bg-[#F9F9F9] min-h-[15rem] min-w-full m-0  grid grid-cols-3 gap-4 rounded-lg mt-9 mb-9">
      <button onClick={() => setAction(0)}>
        <img
          src={Complementry}
          className="overflow-hidden  hover:-translate-y-2 transition-transform ease-in-out duration-300 hover:cursor-pointer"
          alt="complementry_item"
        />
      </button>

      <button onClick={() => setAction(1)}>
        <img
          src={Wrapping}
          className="overflow-hidden  hover:-translate-y-2 transition-transform ease-in-out duration-300 hover:cursor-pointer"
          alt="Wrapping"
        />
      </button>

      <button onClick={() => setAction(2)}>
        <img
          src={Exchange}
          className="overflow-hidden  hover:-translate-y-2 transition-transform ease-in-out duration-300 hover:cursor-pointer"
          alt="exchange"
        />
      </button>

      <GlassPanel
        header={panelItem[itemIndex].header}
        text={panelItem[itemIndex].text}
        visible={click}
        onClose={() => setClick(false)}
      />
    </div>
  );
};

export default Items;
