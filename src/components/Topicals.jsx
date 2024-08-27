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
            x: -150,
            y: "-30%", 
        },
        closed: {
            rotate: -15,
            x: 30,
            y: "20%"   
        }
    }

    return (
        <div>
            <motion.button id="indexShowHelp"
                variants={buttonVariants}
                animate={isPopupVisible ? "open" : "closed"}
                transition={{ type: "spring", duration: 0.5 }}
                whileTap={{ scale: 1.2 }}
                className="card indexShowHelp"
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
                            <p>
                                Topicals
                            </p>
                            {/* Section for Topicals */}
                            <section>
                            <h2>Topicals</h2>
                            <div className="topicalsWrapper">
                                <div className="topicalPoster" src="Last min"></div>
                                <div className="topicalPoster" src="Karcher"></div>
                                <div className="topicalPoster" src="GoHenry"></div>
                                <div className="topicalPoster" src="Dementia"></div>
                                <div className="topicalPoster" src="WhatsApp"></div>
                                <div className="topicalPoster" src="Costa"></div>
                                <div className="topicalPoster" src="RNIB"></div>
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