import {PtagProps} from '@/components/Ptag/Ptag.props';
import cn from 'classnames';
import styles from '@/components/Ptag/Ptag.module.css';

export const Ptag = ({size, children, className, ...props}: PtagProps): JSX.Element => {
    return (
        <>
            <p className={cn(styles.p, className,
                {
                    [styles.pBig]: size == 'big',
                    [styles.pSmall]: size == 'small'
                })}
               {...props}>{children}</p>
        </>
    );
};