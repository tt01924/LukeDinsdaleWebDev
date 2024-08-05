/* eslint-disable react/prop-types */
import {motion} from "framer-motion"
import "./ExpandedItem.css"
import { usePresence } from "framer-motion";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { stagger } from "framer-motion";
import rewind from "../assets/rewind.svg"

const ExpandedItem = ({data, setExpanded}) => {
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    useEffect(() => {
      if(!isPresent) {
        const exitAnimation = async () => {
          await animate([
            [".expandedview__back", {x: -30, opacity: 0}, {duration:0.3}],
            [".expandedview__textcontainer > *", {y:100, opacity: 0}, {duration: 0.2, ease: "easeInOut", at: "<", delay: stagger(0.05,{from: "last"})}],
            [".expandedview__image", {
              x: window.innerWidth < 800 ? 0 : "50%",
            }, {duration: 0.3, ease: [0.83, 0, 0.17, 1], at: "<"}],
            [".expandedview__image",{y: 100, scale: 0.8}, {duration: 0.3}],
            [
              scope.current, {opacity: 0}, {duration: 0.3}
          ]])
          
          safeToRemove();
        }
        exitAnimation();
      } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <motion.img src={rewind} className="expandedview__back" alt="back" onClick={back} whileHover={{x: 10}} />
          <div className="expandedview__wrapper">
            <motion.div 
              className="expandedview__image"
              style={{
                backgroundColor: `hsl(${data.id * 41}, 60%, 70%)`,
                backgroundImage: data.imgUrl, 
                backgroundSize: "cover"}}
              initial={{rotate: 15, y: 100}}
              animate={{rotate: 0, y: 0}}
              transition={{type: "spring", duration: 0.8}}
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