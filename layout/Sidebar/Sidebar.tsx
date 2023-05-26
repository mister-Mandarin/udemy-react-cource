import {SidebarProps} from '@/layout/Sidebar/Sidebar.props';
import {Menu} from '@/layout/Menu/Menu';
import React from 'react';

export const Sidebar = ({...prors}: SidebarProps): JSX.Element => {
    return (
        <>
            <div {...prors}>
                <Menu/>
            </div>
        </>
    );
};