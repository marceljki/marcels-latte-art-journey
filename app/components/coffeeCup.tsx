import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SiCoffeescript } from "react-icons/si";

const MotionBox = motion(Box);

const AnimatedCoffeeIcon = ({boxSize}) => {
    return (
        <MotionBox
            as={SiCoffeescript}
            boxSize={boxSize}
            color="brown.600"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
        />
    );
};

export default AnimatedCoffeeIcon;