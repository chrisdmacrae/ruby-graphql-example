import {PropsWithChildren} from "react";

export type Responsive<T> = {
    sm: T,
    md?: T,
    lg?: T
}

export type StackProps = PropsWithChildren<{
    as?: string
    direction?: "horizontal" | "vertical" | Responsive<"horizontal" | "vertical">
    gap?: number,
    align?: "left" | "center" | "right" | "between"
    valign?: "top" | "middle" | "bottom"
    fluid?: boolean
    className?: string
}>

export const Stack = ({ as = 'div', align = 'left', valign = 'top', direction = "horizontal", gap = 0, fluid = true, className, children }: StackProps) => {
    const flexDirection = getResponsiveValues(direction, (direction) => direction == "horizontal" ? "flex-row" : "flex-col")
    const flexJustify = flexDirection == "flex-row" ? ALIGN_CLASSES[valign] : VALIGN_CLASSES[align]
    // @ts-ignore
    const flexItems = flexDirection == "flex-row" ? VALIGN_CLASSES[align] : ALIGN_CLASSES[align]
    const width = fluid ? 'min-w-full' : 'w-fit '
    const height = fluid ? 'min-h-full' : 'h-fit'
    const El = as as any

    return (
        <El className={`${width} ${height} flex ${flexDirection} gap-${gap} ${flexJustify} ${flexItems} ${className || ''}`}>
            {children}
        </El>
    )
}

const getResponsiveValues = (value: any | Responsive<any>, transform: (value: any) => any = (value) => value) => {
    const classes = []

    if (typeof value !== 'object' || typeof value.sm === 'undefined') {
        classes.push(transform(value))
    }
    else {
        if (value.sm) classes.push(`${transform(value.sm)}`)
        if (value.md) classes.push(`md:${transform(value.md)}`)
        if (value.lg) classes.push(`lg:${transform(value.lg)}`)
    }

    return classes.join(' ')
}

const ALIGN_CLASSES = {
    left: 'items-start',
    top: 'items-start',
    center: 'items-center',
    middle: 'items-center',
    right: 'items-end',
    bottom: 'items-end'
}

const VALIGN_CLASSES = {
    top: 'justify-start',
    left: 'justify-start',
    middle: 'justify-center',
    center: 'justify-center',
    bottom: 'justify-end',
    right: 'justify-end',
    between: 'justify-between'
}