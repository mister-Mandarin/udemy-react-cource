import {ButtonProps} from "@/components/Button/Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

// ...props - это спред. Он повзоляет "вытащить" все оставшиеся возможные параметры кнопки.
// Для этого их экстендили в пропсах.

export const Button = ({children, type, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <>
            <button className={cn(styles.button, className,
                {
                    [styles.primary]: type == 'primary',
                    [styles.simple]: type == 'simple'
                })} {...props}>
                {children}</button>
        </>
    );
};