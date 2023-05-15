import styles from './Star.module.css';
import cn from 'classnames';
import {useEffect, useState, KeyboardEvent} from 'react';
import StarIcon from './Star.svg';
import {StarProps} from '@/components/Star/Star.props';

export const Star = ({rating, setRating, isEdit = false, ...props}: StarProps): JSX.Element => {

// useState возвращает пару значений: текущее состояние и функцию для обновления состояния (setState).
// В данном случае мы используем деструктуризацию массива для извлечения текущего значения состояния ratingArray
// и функции setRatingArray, которую мы будем вызывать для обновления значения ratingArray.
// useState принимает начальное состояние в качестве параметра. Здесь мы передаем массив, содержащий 5 элементов,
// каждый из которых является пустым JSX-элементом <></>.

//При первом рендеринге компонента ratingArray будет равняться массиву из 5 пустых JSX-элементов.
//Мы можем обновлять состояние ratingArray вызывая setRatingArray.

// Это оригинальная версия:
// const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>)); упрощенная версия ниже

    const [currentRating, setRatingArray] = useState(Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    const constructRating = (changeRating: number) => {
        const updateRating = currentRating.map<JSX.Element>((r: JSX.Element, i) => {
            return (
                <span className={cn(styles.star, {
                    [styles.filled]: i < changeRating,
                    [styles.edit]: isEdit
                })}
                      onMouseEnter={() => changeDisplay(i + 1)}
                      onMouseLeave={() => changeDisplay(rating)}
                      onClick={() => onClick(i + 1)}>
                    <StarIcon
                        tabIndex={isEdit ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEdit && handleSpase(i + 1, e)}
                    />
                </span>

            );
        });
        setRatingArray(updateRating);
    };

    const handleSpase = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'space' || !setRating) {
            return;
        }
        setRating(i);
    };
    const onClick = (i: number) => {
        if (!isEdit || !setRating) {
            return;
        }
        setRating(i);
    };
    const changeDisplay = (i: number) => {
        if (!isEdit) {
            return;
        }
        constructRating(i);
    };

    return (
        <div {...props}>
            {currentRating.map((r: JSX.Element, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};