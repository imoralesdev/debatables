"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AppLayout = ({ children }) => {
    const pageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={Math.random()} // Ensure a unique key for transitions (or use an explicit page prop)
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AppLayout;