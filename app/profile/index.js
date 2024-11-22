"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <h1>Profile</h1>
        </motion.section>
    );
}

export default Profile;