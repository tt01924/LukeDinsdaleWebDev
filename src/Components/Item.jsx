import sleeveBack from "../assets/sleeve_back.svg";
import record from "../assets/record.png"
import { motion, useTransform } from "framer-motion";

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

const OFFSET = 35;
const SCALE_FACTOR = 0.05;

const Item = ({index, moveToEnd, expand, el}) => {
    const transformedX = useTransform(x,[-10000,-500,0,500,1200],[5,5, -120, -250,-350])

    return (
        <motion.div
          key={el.id}
          className="card"
          style={{
            ...cardStyle,
            backgroundColor: `hsl(${el.id * 41}, 60%, 70%)`,
            cursor: index === 0 ? "grab" : "auto",
          }}
          animate={{
            top: index * -OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: 10 - index,
            rotate: 0,
          }}
          drag={index === 0}
          dragConstraints={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }}
          onDragEnd={moveToEnd}
          onClick={() => expand(index)}
        >
          <div className="card__front" style={cardInnerStyle}>
            {el.id}
          </div>
          <div className="card__back" style={
            {
              ...cardInnerStyle, 
              transform: "rotateY(180deg)",
            }}>
            <motion.div className="record-image" 
              initial={{y: 5}} 
              style={{backgroundImage: `url(${record})`, y: transformedX}} 
             ></motion.div>
            <div className="inner" style={{backgroundImage: `url("${sleeveBack}")`,}}>
              <h3 style={{gridArea: "title"}}>{el.title}</h3>
              <p style={{gridArea: "insight"}}>{el.insight}</p>
              <p style={{gridArea: "smp"}}>{el.smp}</p>
            </div>
          </div>
        </motion.div>
      );
}

export default Item;