import React, {createContext, ReactNode, useState} from 'react';
import {MenuItem} from '@/interface/menu.interface';
import {TopLevelCategory} from '@/interface/page.interface';

// тип контекста
export interface IAppContext {
    menu: MenuItem[], // все меню
    firstCategory: TopLevelCategory, // открытая категория меню/подменю
    setMenu?: (newMenu: MenuItem[]) => void; // функция обновления меню например открыть или закрыть
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Courses});

export const AppContextProvider = ({menu, firstCategory, children}: IAppContext & {
    children: ReactNode
}): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu);
    };

    return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
        {children}
    </AppContext.Provider>;
};