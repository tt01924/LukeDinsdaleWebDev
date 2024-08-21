/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import './popup.css';
import { AnimatePresence, motion } from "framer-motion";

const Popup = () => {
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
            y: 0
        },
        closed: {
            rotate: -15,
            x: 30,
            y: "40%"
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
                                Avi and Luke.
                            </p>
                            <p>
                                The hottest upcoming duo you've never heard of, are about to make their debut.
                            </p>
                            <p>
                                We recently caught up with them and managed to see what's whipped this small, yet loyal following up into a frenzy. </p>
                            <p>
                                On first impression, space oddities wouldn't even cut it when describing their creative output. </p>
                            <p>
                                The lasting impression is you want to keep going back for more. Let's hope they don't sell out.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Popup;
