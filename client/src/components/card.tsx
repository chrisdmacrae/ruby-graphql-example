import {PropsWithChildren} from "react";

export type CardProps = PropsWithChildren & {
    className?: string
}

export const Card: React.FC<CardProps> = ({ className, children }) => (
    <div className={`w-full bg-zinc-200 p-4 rounded ${className}`}>
        {children}
    </div>
)