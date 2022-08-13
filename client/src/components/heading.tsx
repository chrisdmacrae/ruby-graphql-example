import {PropsWithChildren} from "react";

export type HeadingProps = PropsWithChildren<{
    level?: number
    color?: string
    className?: string
}>

export const Heading = ({ level = 2, color = "text-zinc-600", className, children }: HeadingProps) => {
    const size = level <= 5 ? level : 5
    const El = `h${size}` as any

    return (
        <El className={`${HEADING_SIZES[size - 1]} ${color} font-bold ${className}`}>
            {children}
        </El>
    )
}

const HEADING_SIZES = [
    'text-3xl',
    'text-2xl',
    'text-xl',
    'text-lg',
    'text-md'
]
