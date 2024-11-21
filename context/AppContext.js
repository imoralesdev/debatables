'use client';

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// Custom hook to use the AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showReplyModal, setShowReplyModal] = useState(false);

    const toggleCreateModal = () => setShowCreateModal(prev => !prev);
    const toggleShareModal = () => setShowShareModal(prev => !prev);
    const toggleReplyModal = () => setShowReplyModal(prev => !prev);

    return (
        <AppContext.Provider
            value={{
                showCreateModal,
                toggleCreateModal,
                showShareModal,
                toggleShareModal,
                showReplyModal,
                toggleReplyModal
            }}
        >
            {children}
        </AppContext.Provider>
    );
};