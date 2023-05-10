import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

// extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
// это пропсы для включения на кнопке стандартных действий из HTML например onclick.

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    types: 'primary' | 'simple';
    arrow?: 'right' | 'down' | 'none'
}