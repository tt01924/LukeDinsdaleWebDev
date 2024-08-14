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
            x: 0
        },
        exit: {
            x: "100%"
        }
    }

    return (
        <div>
            <motion.button id="indexShowHelp" className="indexShowHelp card box" onClick={showPopup}>
                Avi and Luke
            </motion.button>
            <AnimatePresence>
            {isPopupVisible && (
                <motion.div id="indexHelpPopup" variants={popupVariants} exit="exit" animate="animate" initial="initial" className="contactPopup" onClick={closePopup}>
                    <div className="contactContent" onClick={(e) => e.stopPropagation()}>
                        <span id="indexPopupClose" onClick={closePopup}></span>
                        <h2>
                            Avi and Luke.<br /><br />
                            The hottest upcoming duo you've never heard of, are about to make their debut. <br /><br />
                            We recently caught up with them and managed to see what's whipped this small, yet loyal following up into a frenzy. <br /><br />
                            On first impression, space oddities wouldn't even cut it when describing their creative output. <br /><br />
                            The lasting impression is you want to keep going back for more. Let's hope they don't sell out.
                        </h2>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}

export default Popup;
