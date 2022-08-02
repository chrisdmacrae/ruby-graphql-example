import {PropsWithChildren} from "react";

export const Tabs = ({ children }: PropsWithChildren) => (
    <div className="h-16 border-b px-4 flex items-center justify-center space-x-4">
        {children}
    </div>
)

export const Tab = ({ active, onClick, children }: any) => {
    if (active) {
        return (
            <button type="button" className="p2 py-4 md:p-4 border-b-4 border-b-indigo-500" onClick={onClick}>
                {children}
            </button>
        )
    }

    return (
        <button type="button" className="p2 py-4 md:p-4 border-b-4 border-transparent hover:border-b-indigo-500" onClick={onClick}>
            {children}
        </button>
    )
}