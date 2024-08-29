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
                whileHover={{scale: 1.1}}
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
                            <h2>
                                I bet your ad agency doesn’t feature rarities like these…</h2>
                            <h3>
                                Avi:</h3>
                            <p>
                                I’m a creative who is driven by my current mood. I can turn any emotion into original songs and compositions because I believe music can heal the creator and the listener. Trigger warning, if you don’t like Taylor Swift, you may not like what I play. But I don’t care. I’m always at my happiest when my music is connecting with someone and helping them to make sense of something in their lives. That’s a creative’s purpose. My purpose.</p>
                            
                            <h3>
                                Luke:</h3>
                            <p>
                                I’m a Jazz-Cat and word-smith who expresses my creativity through music and clothing.<br></br>
                                For 19 years I’ve penned prose, sang, and played guitar with numerous punk bands, literally and figuratively tearing up the stage. You’ll normally catch me sippin’ on espresso and people watching at Bar Italia—I’m the guy wearing a thoughtfully curated look that features 1960’s suits, paired with a bold shirt and sleek tie.</p>

                            <h2 class="buskingText">
                                Avi and Luke Go Busking:</h2>

                            <div class='imageContainer'></div>

                            <p>
                                To drum up some attention for ourselves, we planned a busking tour around some of London’s advertising agencies.</p>
                            <p>
                                A few nights before our tour, we stuck up our tour posters across London, creating hype for our upcoming musical showcase.</p>
                            <p>Then, wrote a special song highlighting all the reasons why we should be hired. And we sang our hearts out, over two days, for all the agencies to hear.</p>
                            <p class='tag'>
                                Software development by <a href="https://www.linkedin.com/in/todd-taylor-a8bba2220/" >Todd Taylor</a> & <a href="https://www.linkedin.com/in/jfgerrard/">Jana Gerrard</a></p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Popup;
