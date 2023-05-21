export interface MenuItem {
    _id: {
        secondCategory: string
    }
    pages: MenuSubItem[]
}

export interface MenuSubItem {
    alias: string
    title: string
    _id: string
    category: string
}
