/* eslint-disable react/prop-types */
import "./contentComponent.css";
import rewind from "../assets/rewind.svg"
import radio from "../assets/radio.png"
import { motion } from "framer-motion"
import { easeInOut } from "framer-motion";

const ContentComponent = ({data, setExpanded}) => {

  const posterVariants = {
      initial: {opacity: 0, },
      animate: (i) => ({opacity: 1, rotate: i % 2=== 0 ? -2 : 2 })
  }

  const back = () => {
    setExpanded(null)
  }

  return (
    <>
    <img src={rewind} className="expandedview__back" alt="back" onClick={back} />
    <div className="grid-container">
      <div className="main">
        {/* Poster section */}
        {data.posters &&
        <section className="posterWrapper">
          {data.posters.map((posterUrl, i) => {
            return <motion.img className="poster" variants={posterVariants} custom={i} initial="initial" whileInView="animate" transition={{ duration: 0.4, ease: easeInOut}} key={i} src={posterUrl} />
          })}
        </section>}

        {/* Section for TV video */}
        {data.tvAdvert &&
          <section className="paper">
            <h2>30 Second TV Ad</h2>
            <iframe width="560" height="315" src={data.tvAdvert} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen className={data.title}></iframe>
          </section>
        }


        {/* Section for activation */}

        {data.activation && 
        <>
          <section className="paper">
            <h2>Activation</h2>
            <img className="activation" src={data.activation} alt="Activation" />
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

        {data.videoPrStunt &&
          <section className="paper">
            <h2>PR Stunt</h2>
            <iframe width="560" height="315" src={data.videoPrStunt} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen className={data.title}></iframe>
          </section>
        }

        {/* Section for Radio Ad */}
        {data.radioAd && 
        <>
          <section className="paper">
            <h2>60 Second Radio Ad: The Deal</h2>
            <div style={{display: "flex", gap: 16, alignItems: "center"}}>
              <img className="radio" src={radio} /> 
              {data.radioAd.map(audioSource => {
                return <audio controls key={audioSource}>
                  <source src={audioSource} type="audio/mpeg" />
                </audio>
              })}
            </div>
            
            {data.title === "Wotsits" && <div className="wotsits-script">
              <p className="scriptSmall">User (Thick East End accent, hushed tone):</p>
              <p className="scriptBold">‘ere mate, can I eh... Can I get 36g of the finest?</p>
              <p className="scriptSmall">Dealer:</p>
              <p className="scriptBold">Sure.</p>
              <p className="scriptSmall">User:</p>
              <p className="scriptBold">Woar, that’s the stuff.</p>
              <p className="scriptSmall">Dealer (Sounding bemused): </p>
              <p className="scriptBold">Um, you got payment?</p>
              <p className="scriptSmall">User (Sounding transfixed):</p>
              <p className="scriptBold">Eh? Oh yeah,‘ere you go.</p>
              <p className="scriptSmall">
                (Sound of a card machine beeping communicating that he’s actually
                bought the Wotsits from a shop).
              </p>
              <p className="scriptSmall">User (Sounding transfixed):</p>
              <p className="scriptBold">Ta.</p>
              <p className="scriptSmall">Dealer (Sounding a little judgemental):</p>
              <p className="scriptBold">See you later.</p>
              <p className="scriptSmall">
                (Sound of Wotsits bag being ripped open and the sound of snacks
                being wolfed down by the user as he moans in ecstasy).
              </p>
              <p className="scriptSmall">V/O (A whispering East End accent):</p>
              <p className="scriptBold">Wotsits. Addictively Cheesy.</p></div>}
          </section>
        </>}



          {data.sticker && 
            <section className="paper">
              <h2>PR Stunt:</h2>
              <div className="imagerow">
              {data.sticker.map((src,i)=> {
                return <img key={i} src={src}/>
              })}
              </div>
              <p>We’ll create a special phone number that people can contact to get a free baggie of Wotsits.
                <br />
                <br />
                This stunt will run for one day only.
                <br />
                <br />
                To promote the PR stunt, we’ll put the phone number on branded stickers, and place them around London in the weeks leading up to our free give away. 
                <br />
                <br />
                We’ll stick them in the kind of places drug dealers advertise—such as London’s phone booths, and pub and club toilets. We'll also post the sticker across Wotsits' social platforms.
              </p>
            </section>}

          {/* Section for Social Media */}
          {data.socialMedia && 
            <section className="paper">
              <h2>Social Media:</h2>
            <div style={{display: "flex", gap: 16, justifyContent: "center", maxWidth: "100%", marginTop: -24}} className="imagerow">
              <img className="socialMedia" src={data.socialMedia} />
            </div>
            <p>
                We’ll contact everyone who calls or messages our special number via Whatsapp (or Wotsapp).
                <br />
                <br />
                The messages that we’ll send back to our audience will contain a link to their nearest ‘dealer’—who will deliver their Wotsits.
                <br />
                <br />
                This stunt will run for one day only.
              </p>
            </section>}


          {data.brandCollab && 
            <section className="paper">
              <h2>Brand Collaboration:</h2>
              <div className="imagerow">
              {data.brandCollab.map((src,i)=> {
                return <img key={i} src={src}/>
              })}
              </div>
              <p>
                To help us deliver our free Wotsits, we’ll partner with Deliveroo and create the ‘Deliveroo Dealers’.
                <br />
                <br />
                They’ll drop off your baggies anytime, any place—just like your trusted dealer.
              </p>
            </section>}

          {data.merch && 
            <section className="paper">
              <h2>Limited Merch:</h2>
              <div className="imagerow">
              {data.merch.map((src,i)=> {
                return <img key={i} src={src}/>
              })}
              </div>
              <p>
                We’ll create limited edition Wotsits bumbags.
                <br />
                <br />
                These will act as a nod towards the streetwear trends that are inspired by drug dealer culture. 
              </p>
            </section>}

          {data.travel && 
            <section className="paper">
            <img src={data.travel} />
            <div style={{display: "flex", gap: 16, justifyContent: "center", maxWidth: "100%", marginTop: -24}} className="imagerow">
              <img src={data.app} />
            </div>
            </section>
          }

          {data.prStunt && data.title === "Rustlers" && 
          <section className="paper">
            <h2>PR Stunt</h2>
            <img src={data.prStunt} className="prstunt" />
          </section>
          }

          {data.datingApp &&
            <section className="paper">
              <div className="imagerow">
                <img src={data.uberApp} />
                <img src={data.datingApp} />
              </div>

            </section>
          }

          {data.digitalBanner &&
          <section className="paper">
            <h2>Digital Banner</h2>
            <img src={data.digitalBanner} />
          </section>
          }

          {data.brandPartnership &&
          <section className="paper">
            <h2>Brand Partnership</h2>
            <img src={data.brandPartnership} />
          </section>
          }
        </div>

        {/* SIDEBAR */}
        <div className="side sidebar-info">
          <div className="inner">
            <h1>{data.title}</h1>
            <h2>Insight</h2>
            <h3>{data.insight}</h3>
            <h2>SMP</h2>
            <h3>{data.smp}</h3>
          </div>
        </div>

      </div>
    </>
  );
};

export default ContentComponent;