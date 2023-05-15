import cn from 'classnames';
import styles from '@/components/Ptag/Sidebar.module.css';
import {FooterProps} from '@/layout/Footer/Footer.props';

export const Footer = ({...prors}: FooterProps): JSX.Element => {
    return (
        <>
            <div {...prors}>
                Footer
            </div>
        </>
    );
}; 