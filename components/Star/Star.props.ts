import {DetailedHTMLProps, HTMLAttributes} from 'react';

// extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
// это пропсы для включения на кнопке стандартных действий из HTML например onclick.

export interface StarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: number,
    setRating?: (rating: number) => void,
    isEdit?: boolean
}