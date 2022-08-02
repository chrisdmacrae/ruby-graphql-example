import {HTMLAttributes} from "react";

export type ToggleProps = HTMLAttributes<HTMLInputElement> & {
    label?: string
    checked?: boolean
    variant?: "small" | "medium" | "large"
    onClick?: () => void
}

export const Toggle = ({ variant = "medium", ...props }: ToggleProps) => {
    if (variant === "small") return <SmallToggle {...props} />
    if (variant === "large") return <LargeToggle {...props} />

    return <MediumToggle {...props} />
}

export const SmallToggle = ({ label, onClick, ...props }: ToggleProps) => (
    <label htmlFor="small-toggle" className="inline-flex relative items-center cursor-pointer" onClick={onClick}>
        <input type="checkbox" value="" className="sr-only peer" {...props} />
        <div
            className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
        {label && (<span className="ml-3 text-sm font-medium text-zinc-500">{label}</span>)}
    </label>
)

export const MediumToggle = ({ label, onClick, ...props }: ToggleProps) => (
    <label htmlFor="default-toggle-size" className="inline-flex relative items-center cursor-pointer" onClick={onClick}>
        <input type="checkbox" value="" className="sr-only peer" {...props} />
        <div
            className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
        {label && (<span className="hidden md:block ml-3 text-sm font-medium text-zinc-500">{label}</span>)}
    </label>
)

export const LargeToggle = ({ label, onClick, ...props }: ToggleProps) => (
    <label htmlFor="large-toggle" className="inline-flex relative items-center cursor-pointer" onClick={onClick}>
        <input type="checkbox" value="" className="sr-only peer" {...props} />
        <div
            className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
        {label && (<span className="hidden md:block ml-3 text-sm font-medium text-zinc-500">{label}</span>)}
    </label>
)