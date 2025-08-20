"use client";
import { motion } from "framer-motion";

const ChildrenAnimatio = ({ children }) => {
    return (
        <div className="flex space-x-4">
            {children.map((child, index) => {
                <motion.div keu={index} initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.5 }}>
                    {child}
                </motion.div>;
            })}
        </div>
    );
};

export default ChildrenAnimatio;
