import {PtagProps} from '@/components/Ptag/Ptag.props';
import cn from 'classnames';
import styles from '@/components/Ptag/Ptag.module.css';
import {LayoutProps} from '@/layout/Layout.props';
import React, {FunctionComponent} from 'react';
import {Header} from '@/layout/Header/Header';
import {Sidebar} from '@/layout/Sidebar/Sidebar';
import {Footer} from '@/layout/Footer/Footer';

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
};

// компоннет высшего порядка
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};