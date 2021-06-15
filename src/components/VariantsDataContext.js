import React, { createContext, useState } from 'react';

export const VariantsDataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState('title');
    const [tag, setTag] = useState([]);
    return (
        <VariantsDataContext.Provider
            value={{
                selectedOption,
                setSelectedOption,
                tag,
                setTag
            }}
        >
            {children}
        </VariantsDataContext.Provider>
    )

}