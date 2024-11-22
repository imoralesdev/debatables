"use client";

import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        showCreateModal: false,
        showMenu: false
    });

    const setCreateModal = () => {
        setState((prev) => ({
            ...prev,
            showCreateModal: !prev.showCreateModal,
        }));
    };

    const setMenu = () => {
        setState((prev) => ({
            ...prev,
            showMenu: !prev.showMenu,
        }));
    };


    return (
        <AppContext.Provider value={{ 
            ...state, 
            setCreateModal,
            setMenu }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};