// First, create a context for the user
import { createContext, useContext, useState } from 'react';

import { defaultLang } from '../utils/locales';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) =>
{
    const [lang, setLang] = useState(defaultLang);
    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

const useLanguageContext = () => useContext(LanguageContext);
export default useLanguageContext;
