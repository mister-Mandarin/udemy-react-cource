import cn from 'classnames';
import styles from '@/components/Ptag/Sidebar.module.css';
import {HeaderProps} from '@/layout/Header/Header.props';

export const Header = ({...prors}: HeaderProps): JSX.Element => {
    return (
        <>
            <div {...prors}>
                Header
            </div>
        </>
    );
};