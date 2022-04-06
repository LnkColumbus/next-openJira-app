import { createContext } from 'react';

interface ContextProps {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
    
    setIsAddingEntry: ( isAdding: boolean ) => void;

    endDragging: () => void;
    startDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);