import React, {useContext} from 'react';
import {AppContext} from '@/context/app.context';
import {FirstLevelMenuItem, MenuItem, MenuSubItem} from '@/interface/menu.interface';
import EducationIcon from '@/layout/Menu/icons/education.svg';
import BookIcon from '@/layout/Menu/icons/book.svg';
import ProductsIcon from '@/layout/Menu/icons/goods.svg';
import ServicesIcon from '@/layout/Menu/icons/services.svg';
import {TopLevelCategory} from '@/interface/page.interface';
import styles from '@/Layout/Menu/Menu.module.css';
import cn from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <EducationIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BookIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCategory.Products}
];
export const Menu = (): JSX.Element => {

    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    // функции для каждого уровня меню
    const buildFirstLevelMenu = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id == firstCategory && buildSecondLevelMenu(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevelMenu = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    // Вытаскиваем путь из роута, и запрещаем закрывать раздел в кторомом мы находимся
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel}
                                 onClick={() => openSecondLevelMenu(m._id.secondCategory)}>
                                {m._id.secondCategory}
                            </div>
                            <div className={cn(styles.secondCategoryBlock, {
                                [styles.secondCategoryBlockIsOpened]: m.isOpened
                            })}>
                                {buildThirdLevelMenu(m.pages, menuItem.route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevelMenu = (pages: MenuSubItem[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                })}>
                    {p.category}
                </Link>
            ))
        );
    };

    const openSecondLevelMenu = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };


    return (
        <div className={styles.menu}>
            {buildFirstLevelMenu()}

            {/*<ul>*/}
            {/*    {menu.map((m) => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}*/}
            {/*</ul>*/}
        </div>
    );
}; 