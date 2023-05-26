import {TopLevelCategory} from '@/interface/page.interface';

export interface MenuItem {
    _id: {
        secondCategory: string
    }
    pages: MenuSubItem[],
    isOpened?: boolean
}

export interface MenuSubItem {
    alias: string
    title: string
    _id: string
    category: string
}

export interface FirstLevelMenuItem {
    route: string,
    name: string,
    icon: JSX.Element,
    id: TopLevelCategory
}