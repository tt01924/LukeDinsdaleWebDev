/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import sleeveBack from "../assets/sleeve_back.svg";
import record from "../assets/record.png"
import "./Record.css"


const OFFSET = 35;
const SCALE_FACTOR = 0.05;

const Record = ({index, data, setIsDragging, handleClick, moveToEnd, totalRecords}) => {
    const canDrag = index === 0

    const cardStyle = {
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "2px",
        transformOrigin: "top center",
        listStyle: "none",
        transformStyle: "preserve-3d",
      };
      
      const cardInnerStyle = { 
        height: "100%", 
        width: "100%", 
        backfaceVisibility: "hidden", 
        // overflow: "hidden",
        position: "absolute",
        textAlign: "center"
      }
      
    return (
        <motion.div
              key={data.id}
              className="card"
              style={{
                ...cardStyle,
                backgroundColor: `hsl(${data.id * 41}, 60%, 70%)`,
                background: `url(${data.imgUrl})`,
                backgroundSize: "cover",
                cursor: canDrag ? "grab" : "auto",
              }}
              animate={{
                top: index * -OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: totalRecords - index,
                rotate: 0,
              }}
              drag={canDrag}
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
              }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={moveToEnd}
              onClick={() => handleClick(index)}
            >
              <div className="card__front" style={cardInnerStyle}>

              </div>
              <div className="card__back" style={
                {
                  ...cardInnerStyle, 
                  transform: "rotateY(180deg)",
                }}>
                <motion.div className="record-image" 
                  initial={{y: 5}} 
                  style={{backgroundImage: `url(${record})`}} 
                 ></motion.div>
                <div className="inner" style={{backgroundImage: `url("${sleeveBack}")`,}}>
                  <h3 style={{gridArea: "title"}}>{data.title}</h3>
                  <p style={{gridArea: "insight"}}>{data.insight}</p>
                  <p style={{gridArea: "smp"}}>{data.smp}</p>
                </div>
              </div>
            </motion.div>
    )
}

export default Record;