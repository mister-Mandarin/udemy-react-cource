import cn from 'classnames';
import styles from '@/components/Ptag/Sidebar.module.css';
import {SidebarProps} from '@/layout/Sidebar/Sidebar.props';

export const Sidebar = ({...prors}: SidebarProps): JSX.Element => {
    return (
        <>
            <div {...prors}>
                sideber
            </div>
        </>
    );
};