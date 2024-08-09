import React, { useState } from "react";
import './popup.css';

function App() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const showPopup = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div>
            <button id="indexShowHelp" className="indexShowHelp box" onClick={showPopup}>
                Avi and Luke
            </button>

            {isPopupVisible && (
                <div id="indexHelpPopup" className="contactPopup" onClick={closePopup}>
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
                </div>
            )}
        </div>
    );
}

export default App;
