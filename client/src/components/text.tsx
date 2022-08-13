import {PropsWithChildren} from "react";

export type BodyProps = PropsWithChildren<{
    level?: number
    color?: string
}>

export const Body = ({ level = 2, color = "text-zinc-600", children }: BodyProps) => {
    const size = level <= 5 ? level : 5

    return (
        <p className={`${TEXT_SIZES[size - 1]} ${color}`}>
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
