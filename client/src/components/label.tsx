export const Label = ({ id, title, onClick, children }: any) => (
    <label htmlFor={id} className="inline-flex relative items-center cursor-pointer" onClick={onClick}>
        {children}
        {title && (<span className="hidden md:inline ml-3 text-sm font-medium text-zinc-500">{title}</span>)}
    </label>
)