import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Do laboris nisi ex est sint laboris nostrud.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso: Ad eiusmod sunt incididunt velit est adipisicing qui.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Ea dolor veniam occaecat est.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ],
}

export const EntriesProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending' 
        }

        dispatch({ type: '[Entry] - Add-Entry', payload: newEntry })
    }

    const updateEntry = ( entry: Entry ) => {
        dispatch({ type: '[Entry] - Entry-Updated', payload: entry });
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            // Methods
            addNewEntry,
            updateEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
}