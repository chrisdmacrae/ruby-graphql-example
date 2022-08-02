import {PropsWithChildren} from "react";

export type TextProps = PropsWithChildren<{
    level?: number
    color?: string
}>

export const Text = ({ level = 2, color = "zinc-600", children }: TextProps) => {
    const size = level <= 5 ? level : 5

    return (
        <p className={`${TEXT_SIZES[size - 1]} text-${color}`}>
            {children}
        </p>
    )
}

const TEXT_SIZES = [
    'text-xl',
    'text-lg',
    'text-md',
    'text-sm',
    'text-xs'
]
