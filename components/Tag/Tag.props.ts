import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

// extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
// это пропсы для включения на кнопке стандартных действий из HTML например onclick.

export interface TagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    href?: string,
    color?: 'ghost' | 'red' | 'green' | 'gray' | 'primary',
    size: 'small' | 'big'
}