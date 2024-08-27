/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./contentComponent.css";
import rewind from "../assets/rewind.svg"
import {motion } from "framer-motion"

const ContentComponent = ({data, setExpanded}) => {
  useEffect(() => {
    const thirdPoster = document.querySelector(".poster:nth-child(3)");
    const allSections = document.querySelectorAll(".rectangle section");

    let previousElementBottom =
      thirdPoster.getBoundingClientRect().bottom + 50;

    allSections.forEach((section) => {
      section.style.position = "absolute";
      section.style.top = `${previousElementBottom}px`;
      section.style.left = "0";
      section.style.right = "0";
      section.style.margin = "0 auto";

      previousElementBottom += section.offsetHeight + 50;
    });
  }, []);

  const back = () => {
    setExpanded(null)
  }

  return (
    <>
    <img src={rewind} className="expandedview__back" alt="back" onClick={back} />
    <div className="grid-container">
      {/* Poster section */}
      {data.posters &&
      <section className="posterWrapper">
        {data.posters.map((posterUrl, i) => {
          return <motion.img className="poster" key={i} src={posterUrl} />
        })}
      </section>}

      {/* Rectangle w.text */}
      <div className="side">
        <h1>{data.title}</h1>
        <h2>Insight</h2>
        <h3>{data.insight}</h3>
        <h2>SMP</h2>
        <h3>{data.smp}</h3>
      </div>

        {/* Section for TV video */}
        {data.tvAdvert &&
          <section className="wide">
            <h2>30 second TV ad</h2>
            <div className="video"></div>
          </section>
        }

        {/* Section for activation */}

        {data.activation && 
        <>
          <img className="activation" src={data.activation} alt="Activation" />
          <section className="side">
            <h2>Activation</h2>
            <p>
              Scunthorpe United are set to play Liverpool in the FA Cup, and need
              to smell unflappable in the face of such a big challenge.
              <br />
              <br />
              So, Brut are going to sponsor Scunthorpe’s finest for as long as
              they can survive the tournament, and provide them with kits that are
              scented with the Brut Original fragrance.
              <br />
              <br />
              Proving that Brut helps you smell unflappable—even if you’re
              screaming on the inside.
              <br />
            </p>
          </section>
        </>}

        {/* Section for Social Media */}
        {data.socialMedia && 
        <>
        {data.sticker ? <img src={data.sticker} className="sticker" /> : <div></div>}
        <section className="side">
          <h2>Social Media</h2>
          <p>Hello World!</p>
          <img className="socialMedia" src={data.socialMedia} />
        </section>
        </>}

        {/* Section for Radio Ad */}
        {data.radioAd && 
        <>
          <img src="/src/assets/temporaryRadio.jpeg" /> 
          <section className="side">
            <h2>60 second radio ad:</h2>
            {data.radioAd.map(audioSource => {
              return <audio controls key={audioSource}>
                <source src={audioSource} type="audio/mpeg" />
              </audio>
            })}
            
            {data.title === "Wotsits" && <><p>User (Thick East End accent, hushed tone):</p>
            <p className="scriptBold">‘ere mate, can I eh... Can I get 36g of the finest?</p>
            <p>Dealer:</p>
            <p className="scriptBold">Sure.</p>
            <p>User:</p>
            <p className="scriptBold">Woar, that’s the stuff.</p>
            <p>Dealer (Sounding bemused): </p>
            <p className="scriptBold">Um, you got payment?</p>
            <p>User (Sounding transfixed):</p>
            <p className="scriptBold">Eh? Oh yeah,‘ere you go.</p>
            <p>
              (Sound of a card machine beeping communicating that he’s actually
              bought the Wotsits from a shop).
            </p>
            <p>User (Sounding transfixed):</p>
            <p className="scriptBold">Ta.</p>
            <p>Dealer (Sounding a little judgemental):</p>
            <p className="scriptBold">See you later.</p>
            <p>
              (Sound of Wotsits bag being ripped open and the sound of snacks
              being wolfed down by the user as he moans in ecstasy).
            </p>
            <p>V/O (A whispering East End accent):</p>
            <p className="scriptBold">Wotsits. Addictively Cheesy.</p></>}
          </section>
        </>}
      </div>
    </>
  );
};

export default ContentComponent;