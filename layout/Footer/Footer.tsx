import cn from 'classnames';
import styles from '@/layout/Footer/Footer.module.css';
import {FooterProps} from '@/layout/Footer/Footer.props';
import {format} from 'date-fns';

export const Footer = ({className, ...prors}: FooterProps): JSX.Element => {
    return (
        <>
            <footer className={cn(className, styles.wrapper)} {...prors}>

                <div>
                    <span>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span>
                </div>
                <a className={styles.href} href="#">Пользовательское соглашение</a>
                <a className={styles.href} href="#">Политика конфиденциальности</a>
            </footer>
        </>
    );
}; 