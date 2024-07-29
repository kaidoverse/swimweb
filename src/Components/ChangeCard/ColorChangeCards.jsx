import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import './ColorChangeCards.css'; // Import the CSS file

const ColorChangeCards = () => {
    return (
        <div className="container">
            <div className="card-grid">
                <Card
                    heading="Plan"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                />
                <Card
                    heading="Play"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                />
                <Card
                    heading="Connect"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                />
                <Card
                    heading="Support"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
                    imgSrc="https://images.unsplash.com/photo-1576328077645-2dd68934d2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
                />
            </div>
        </div>
    );
};

const Card = ({ heading, description, imgSrc }) => {
    return (
        <motion.div
            transition={{
                staggerChildren: 0.035,
            }}
            whileHover="hover"
            className="card"
        >
            <div
                className="card-img"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                }}
            />
            <div className="card-content">
                <FiArrowRight className="arrow-icon" />
                <div>
                    <h4>
                        {heading.split("").map((l, i) => (
                            <ShiftLetter letter={l} key={i} />
                        ))}
                    </h4>
                    <p>{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const ShiftLetter = ({ letter }) => {
    return (
        <div className="shift-letter">
            <motion.span
                className="letter"
                style={{
                    y: "0%",
                }}
                variants={{
                    hover: {
                        y: "-50%",
                    },
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                <span>{letter}</span>
                <span>{letter}</span>
            </motion.span>
        </div>
    );
};

export default ColorChangeCards;
