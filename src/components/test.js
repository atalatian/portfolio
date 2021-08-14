import { motion } from "framer-motion"


const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
}

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}

export const MyComponent = () => (
    <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
    >
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
    </motion.ul>
)