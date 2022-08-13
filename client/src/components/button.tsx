import {HTMLAttributes, PropsWithChildren} from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & PropsWithChildren<{
    type?: 'button' | 'submit'
    className?: string
    variant?: "primary" | "secondary" | "ghost"
    size?: "small" | "medium" | "large"
    fluid?: boolean
    disabled?: boolean
}>

export const Button = ({ className, type = 'button', fluid, disabled, variant = "primary", size = "medium", children, ...props }: ButtonProps) => {
    const background = getBackground(variant)
    const padding = getPadding(size)
    const width = fluid ? 'w-full ' : 'w-fit '
    const disabledClasses = disabled && variant !== 'ghost' ? 'bg-gray-500 ' : `${background} active:scale-75 cursor-pointer text-zinc-400`

    return (
        <button
            type={type}
            className={`${width} ${padding} font-bold text-white focus:outline-none focus:shadow-outline transition-all transform transform-gpu ${disabledClasses} ${className} `}
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
            return 'bg-zinc-600 hover:bg-zinc-700 '
        case "secondary":
            return 'bg-zinc-600 hover:bg-zinc-400 '
        case "ghost":
            return 'bg-transparent'
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