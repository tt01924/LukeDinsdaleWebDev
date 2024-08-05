/* eslint-disable react/prop-types */
// import sleeveBack from "../assets/sleeve_back.svg";
// import record from "../assets/record.png"
import {motion} from "framer-motion"
import "./ExpandedItem.css"
import { usePresence } from "framer-motion";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const ExpandedItem = ({data, setExpanded}) => {
    // const transformedX = useTransform(x,[-10000,-500,0,500,1200],[5,5, -120, -250,-350])
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    useEffect(() => {
      if(!isPresent) {
        const exitAnimation = async () => {
          await animate([
            [".expandedview__textcontainer", {y:100, opacity: 0}, {duration: 0.2, ease: "circInOut"}],
            [".expandedview__image", {
              y: 100
            }, {duration: 0.5, ease: "easeInOut", at: "<"}],
            [
              scope.current, {opacity: 0}, {duration: 0.5}
          ]])
          
          safeToRemove();
        }
        exitAnimation();
      } 
    }, [isPresent])

    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 15,
    }

    const back = () => {
      setExpanded(null)
    }

    return (
        <motion.div 
          className="overlay" 
          style={overlayStyle} 
          // initial={{opacity: 0}} 
          animate={{opacity: 1 }}
          // exit={{opacity: 0, y: 30}}
          transition={{duration: 0.5, ease: [0.83, 0, 0.17, 1]}}
          ref={scope}
          >
          <button onClick={back} className="expandedview__back">rewind</button>
          <div className="expandedview__wrapper">
            <motion.div 
              className="expandedview__image"
              style={{}}
              initial={{rotate: 15, y: 30}}
              animate={{rotate: 0, y: 30}}
              transition={{type: "spring", duration: 0.5}}
              />
            <motion.div 
              className="expandedview__textcontainer"
              initial={{opacity: 0, y: 30}} 
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3}}
              >
              <h1>{data.title}</h1>
              <p>{data.insight}</p>
            </motion.div>

          </div>
        </motion.div>
      );
}

export default ExpandedItem;