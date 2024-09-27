/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import './topicals.css';
import { AnimatePresence, motion } from "framer-motion";

const Topicals = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image

    const showPopup = (imageSrc) => {
        setSelectedImage(imageSrc); // Set the selected image
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
        setSelectedImage(null); // Reset the selected image when closing
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
                onClick={() => setIsPopupVisible(true)}>
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
                                    {/* Map through images and add click handler */}
                                    {['/media/topicals/poster2.webp', '/media/topicals/poster3.webp', '/media/topicals/poster4.webp', '/media/topicals/poster5.webp', '/media/topicals/poster6.webp', '/media/topicals/poster7.webp'].map((imageSrc, index) => (
                                        <img
                                            key={index}
                                            className="imageOne"
                                            src={imageSrc}
                                            alt={`Topical ${index + 1}`}
                                            onClick={() => showPopup(imageSrc)} // Show popup with the clicked image
                                        />
                                    ))}
                                </div>
                            </section>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Popup for enlarged image */}
            {selectedImage && (
                <motion.div
                    className="imagePopup"
                    onClick={closePopup}
                >
                    <motion.img
                        src={selectedImage}
                        alt="Enlarged view"
                        className="enlargedImage"
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on image
                    />
                </motion.div>
            )}
        </div>
    );
}

export default Topicals;