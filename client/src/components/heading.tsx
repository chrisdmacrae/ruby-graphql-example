import {PropsWithChildren} from "react";

export type HeadingProps = PropsWithChildren<{
    level?: number
    color?: string
}>

export const Heading = ({ level = 2, color = "zinc-800", children }: HeadingProps) => {
    const size = level <= 5 ? level : 5
    const El = `h${size}` as any

    return (
        <El className={`${HEADING_SIZES[size - 1]} text-${color} font-bold`}>
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
