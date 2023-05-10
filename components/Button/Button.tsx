import {ButtonProps} from "@/components/Button/Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from './Arrow.svg';
import {types} from "util";

// ...props - это спред. Он повзоляет "вытащить" все оставшиеся возможные параметры кнопки.
// Для этого их экстендили в пропсах.

export const Button = ({children, types, className, arrow = 'none', ...props}: ButtonProps): JSX.Element => {
    return (
        <>
            <button className={cn(styles.button, className,
                {
                    [styles.primary]: types == 'primary',
                    [styles.simple]: types == 'simple'
                })} {...props}>
                {children} {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon/></span>}</button>
        </>
    );
};