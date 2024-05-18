import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [signed, setSigned] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState(0);
    return (
        <UserContext.Provider
            value={{
                signed,
                setSigned,
                name,
                setName,
                id,
                setId
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export function useUser(){
    const context = useContext(UserContext);

    const{signed, setSigned, name, setName, id, setId} = context;
    return{signed, setSigned, name, setName, id, setId};
}
