import {TagProps} from '@/components/Tag/Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({children, href, color = 'ghost', size = 'small', className, ...props}: TagProps): JSX.Element => {
    return (
        <>
            <div className={cn(styles.tag, className,
                {
                    [styles.small]: size == 'small',
                    [styles.big]: size == 'big',
                    [styles.ghost]: color == 'ghost',
                    [styles.red]: color == 'red',
                    [styles.green]: color == 'green',
                    [styles.gray]: color == 'gray',
                    [styles.primary]: color == 'primary'
                })} {...props}>{
                href ? (<a href={href}>{children}</a>)
                    : (<>{children}</>)
            }</div>

            {/*'ghost' | 'red' | 'green' | 'gray' | 'primary',*/}
        </>
    );
};