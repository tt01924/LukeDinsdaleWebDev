import { useState } from "react";
import { useAnimate, stagger, AnimatePresence } from "framer-motion";
import Popup from "./components/Popup.jsx"
import ContentComponent from './components/ContentComponent.jsx';
import "./App.css"
import Record from "./components/Record.jsx";
import { useEffect } from "react";
import Topicals from "./components/Topicals.jsx";
import Smp from "./components/Smp.jsx";
import { useRef } from "react";

const App = () => {
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const [scope, animate] = useAnimate();
  const [isDragging, setIsDragging] = useState(false);
  const topCardRef = useRef(null)

  useEffect(()=> {
    const getData = () => {
      fetch("/data.json")
      .then(response => response.json())
      .then(data => {
        setCards(data)
      })
    }
    getData()
  },[])

  useEffect(() => {
    const handleClickAway = (e) => {
      if(topCardRef.current && !topCardRef.current.contains(e.target)) {
        flip(0)
      }
    }
    if(clicked) {
      document.addEventListener("click", handleClickAway)
    } else {
      document.removeEventListener("click", handleClickAway)
    }
    return () => {document.removeEventListener("click", handleClickAway)}
  },[clicked])

  useEffect(() => {
    const topCardElement = document.querySelector(`.card-0`);
    topCardRef.current = topCardElement;
  }, [cards, expanded])

  const moveToEnd = () => {
    resetAnimation();
    setCards([...cards.slice(1), cards[0]]);
    setClicked(false);
    setIsDragging(false)
  };

  const handleClick = (index) => {
    if (isDragging) {
      return
    }
    if (clicked && index === 0) {
      expand(cards[index])
    } else {
      flip(index)
    }
  }

  const resetAnimation = () => {
    return animate([
      [".card:nth-child(1) .record-image", { y: 5 }, { duration: 0.3 }],
      [
        ".card:nth-child(1)",
        {
          scale: 1,
          top: 0,
          rotate: 0,
          rotateY: 0
        },
        { duration: 0.5 }
      ]])
  }

  const flip = (index) => {
    if (clicked || index != 0) {
      setClicked(false)
      resetAnimation()
    }
    else {
      animate([[
        ".card:nth-child(1)",
        {
          scale: 1.2,
          top: 80,
          rotate: 10,
          rotateY: 180
        },
        { duration: 0.5, ease: "easeInOut" }
      ],
      [".card:nth-child(1) .record-image", { y: -120 }, { at: "-0.1", duration: 0.7, ease: "backOut" }],
      ]).then(() => setClicked(true))
    }
  }

  const expand = (element) => {
    if (expanded) {
      setExpanded(null)
    } else {
      animate([
        [".card:nth-child(n+2)", { x: 100, opacity: 0 }, { duration: 0.3, delay: stagger(0.05, { from: "last" }), ease: "circOut" }],
        [".card:nth-child(1) .record-image", { y: 5 }, { duration: 0.3, at: "<" }],
        [".card:nth-child(1)", { rotateY: 0 }, { duration: 0.4, ease: "easeInOut" }]
      ]).then(() => {
        setExpanded(element)
        setClicked(false)
        // safeToRemove();
      })
    }
  }

  return (
    <AnimatePresence>
      {expanded ? 
        <ContentComponent setExpanded={setExpanded} data={expanded} /> :
        <div style={wrapperStyle} >
          <div ref={scope} className="stack-wrapper" style={cardWrapStyle}>
            {cards.map((card, index) => {
              return (
                <Record
                  key={card.id}
                  data={card}
                  index={index}
                  setIsDragging={setIsDragging}
                  handleClick={handleClick}
                  moveToEnd={moveToEnd}
                  totalRecords={cards.length} />
              );
            })}
          </div>
          <button id="nextButton" onClick={moveToEnd}>next</button>
          <Popup />
          <Topicals />
          <Smp />
        </div>}
    </AnimatePresence>
  );
};

const wrapperStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  maxWidth: "500px",
  margin: "0 auto"
};

const cardWrapStyle = {
  position: "relative",
  width: "300px",
  height: "300px",
  top: "50px",
};

export default App