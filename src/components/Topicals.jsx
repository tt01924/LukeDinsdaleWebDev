/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import './topicals.css';
import { AnimatePresence, motion } from "framer-motion";

const Topicals = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const showPopup = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    const popupVariants = {
        initial: {
            x: "100%"
        },
        animate: {
            x: 5
        },
        exit: {
            x: "100%"
        }
    }

    const buttonVariants = {
        open: {
            rotate: -70,
            x: "-25vw",
            y: "80%", 
        },
        closed: {
            rotate: 25,
            x: 30,
            y: "80%"   
        }
    }

    return (
        <div>
            <motion.button id="indexShowHelpTopicals"
                variants={buttonVariants}
                animate={isPopupVisible ? "open" : "closed"}
                transition={{ type: "spring", duration: 0.5 }}
                whileTap={{ scale: 1.2 }}
                whileHover={{scale: 1.1}}
                className="card indexShowHelpTopicals"
                onClick={showPopup}>
                Avi and Luke
            </motion.button>
            <AnimatePresence>
                {isPopupVisible && (
                    <motion.div
                        id="indexHelpPopup"
                        variants={popupVariants}
                        exit="exit" animate="animate"
                        initial="initial"
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="contactPopup"
                        onClick={closePopup}>
                        <div className="contactContent" onClick={(e) => e.stopPropagation()}>
                            <span id="indexPopupClose" onClick={closePopup}>close</span>
                            <section>
                            <h2>Topicals:</h2>
                            <div className="topicalsWrapper">
                                <img className="imageOne" src="/media/topicals/poster1.webp" />
                                <img className="imageOne" src="/media/topicals/poster2.webp" />
                                <img className="imageOne" src="/media/topicals/poster3.webp" />
                                <img className="imageOne" src="/media/topicals/poster4.webp" />
                                <img className="imageOne" src="/media/topicals/poster5.webp" />
                                <img className="imageOne" src="/media/topicals/poster6.webp" />
                                <img className="imageOne" src="/media/topicals/poster7.webp" />
                            </div>
                            </section>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Topicals;