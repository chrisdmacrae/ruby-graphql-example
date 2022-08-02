import {HTMLAttributes, PropsWithChildren} from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & PropsWithChildren<{
    className?: string
    variant?: "primary" | "secondary"
    size?: "small" | "medium" | "large"
    fluid?: boolean
    disabled?: boolean
}>

export const Button = ({ className, fluid, disabled, variant = "primary", size = "medium", children, ...props }: ButtonProps) => {
    const background = getBackground(variant)
    const padding = getPadding(size)
    const width = fluid ? 'w-full ' : 'w-fit '
    const disabledClasses = disabled ? 'bg-gray-500 ' : `${background} active:scale-75 cursor-pointer `

    return (
        <button
            type="button"
            className={`${className} ${disabledClasses} ${width} ${padding} font-bold text-white rounded-full focus:outline-none focus:shadow-outline transition-all transform transform-gpu`}
            disabled={disabled || false}
            {...props}
        >
            {children}
        </button>
    )
}

function getBackground(variant: ButtonProps['variant']) {
    switch (variant) {
        case "primary":
            return 'bg-indigo-500 hover:bg-indigo-700 '
        case "secondary":
            return 'bg-indigo-300 hover:bg-indigo-400 '
    }
}

function getPadding(size: ButtonProps['size']) {
    switch (size) {
        case "small":
            return "px-2 py-1 "
        case "medium":
            return "px-4 py-2 "
        case "large":
            return "px-5 py-4 "
    }
}