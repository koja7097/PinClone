import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function PageWrapper({ children }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </MotionDiv>
  );
}