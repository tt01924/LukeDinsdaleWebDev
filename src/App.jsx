import {useState, useRef} from "react";
import { motion } from "framer-motion";
import data from "./data.json"
import "./App.css"
import { useAnimate } from "framer-motion";
import sleeveBack from "./assets/sleeve_back.svg";
import record from "./assets/record.png"
import { useTransform } from "framer-motion";
import { useFollowPointer } from "./useFollowPointer";

const OFFSET = 35;
const SCALE_FACTOR = 0.05;

const App = () => {
  const [cards, setCards] = useState(data);
  const [clicked, setClicked] = useState(false)
  const [scope, animate] = useAnimate();
  const ref = useRef(null)
  const {x} = useFollowPointer(ref)

  const transformedX = useTransform(x,[-10000,-500,0,500,1200],[5,5, -120, -250,-350])

  const moveToEnd = () => {
    resetAnimation();
    setCards([...cards.slice(1), cards[0]]);
  };

  const resetAnimation = () => {
    animate([
      [".card:nth-child(1) .record-image", {y: 5},{duration: 0.3}],
      [
      ".card:nth-child(1)",
      {
        scale: 1,
        top: 0,
        rotate: 0,
        rotateY: 0
      },
      {duration: 0.5}
    ]])
  }

  const expand = (index) => {
    if(clicked || index != 0) {
      setClicked(false)
      resetAnimation()
    }
    else {
      animate([[
        ".card:nth-child(1)",
        {
          scale: 1.5,
          top: 100,
          rotate: 15,
          rotateY: 180
        },
        {duration: 0.5, ease: "easeInOut"}
      ],
      [ ".card:nth-child(1) .record-image", {y: -120}, {at: "-0.1", duration: 0.7, ease: "backOut" } ],
    ]).then(() => {
      setClicked(true)
      // animate([
      //   [ ".card:nth-child(1) .record-image", {y: -120 + yMotion}, { } ]
      // ])
    })
    }
  }

  return (
    <div style={wrapperStyle} ref={ref}>
      <div ref={scope} style={cardWrapStyle}>
        {cards.map((el, index) => {
          const canDrag = index === 0;

          return (
            <motion.div
              key={el.id}
              className="card"
              style={{
                ...cardStyle,
                backgroundColor: `hsl(${el.id * 41}, 60%, 70%)`,
                cursor: canDrag ? "grab" : "auto",
              }}
              animate={{
                top: index * -OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
                rotate: 0,
              }}
              drag={canDrag}
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
              }}
              onDragEnd={moveToEnd}
              onClick={() => expand(index)}
            >
              <div className="card__front" style={cardInnerStyle}>
                {el.id}
              </div>
              <div className="card__back" style={
                {
                  ...cardInnerStyle, 
                  transform: "rotateY(180deg)",
                }}>
                <motion.div className="record-image" 
                  initial={{y: 5}} 
                  style={{backgroundImage: `url(${record})`, y: transformedX}} 
                 ></motion.div>
                <div className="inner" style={{backgroundImage: `url("${sleeveBack}")`,}}>
                  <h3 style={{gridArea: "title"}}>{el.title}</h3>
                  <p style={{gridArea: "insight"}}>{el.insight}</p>
                  <p style={{gridArea: "smp"}}>{el.smp}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <button style={{position: "fixed", bottom: 10}} onClick={moveToEnd}>next</button>
    </div>
  );
};
const wrapperStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
};

const cardWrapStyle = {
  position: "relative",
  width: "300px",
  height: "300px",
  top: "50px",
};

const cardStyle = {
  position: "absolute",
  width: "300px",
  height: "300px",
  borderRadius: "2px",
  transformOrigin: "top center",
  listStyle: "none",
  transformStyle: "preserve-3d",
};

const cardInnerStyle = { 
  height: "100%", 
  width: "100%", 
  backfaceVisibility: "hidden", 
  // overflow: "hidden",
  position: "absolute",
  textAlign: "center"
}

export default App

