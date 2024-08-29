/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import './smp.css';
import { AnimatePresence, motion } from "framer-motion";

const Smp = () => {
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
            y: "-10%", 
        },
        closed: {
            rotate: 25,
            x: 30,
            y: "50%"   
        }
    }

    return (
        <div>
            <motion.button id="indexShowHelpSmp"
                variants={buttonVariants}
                animate={isPopupVisible ? "open" : "closed"}
                transition={{ type: "spring", duration: 0.5 }}
                whileTap={{ scale: 1.2 }}
                className="card indexShowHelpSmp"
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
                            <h2> SMP's </h2>
                            <h3>Playdough:</h3>
                            <p>
                                Play comes in different shapes and sizes.</p>
                            <h3>It Airways:</h3>
                            <p>
                                Return a little italian.</p>
                            <h3>Daye CBD Tampons:</h3>
                            <p>
                                Send your uterus on a trip.</p>
                            <h3>Suzuki:</h3>
                            <p>
                                Find joy in the little things.</p>
                            <h3>Invisalign:</h3>
                            <p>
                                Give your teeth the spotlight.</p>
                            </section>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Smp;