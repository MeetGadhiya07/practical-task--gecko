import { motion } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.85 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export const TransitionX = ({
  children,
  xPosition = 40,
}: {
  children: React.ReactNode;
  xPosition?: number | string;
}) => {
  return (
    <motion.div
      initial={{ x: xPosition, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "linear", duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
