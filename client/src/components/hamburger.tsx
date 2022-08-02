export const Hamburger = ({onClick}: any) => (
    <button onClick={onClick}>
        <svg viewBox="0 0 100 40" width="24" height="24" className="fill-zinc-400 hover:fill-zinc-600">
            <rect width="100" height="5"></rect>
            <rect y="30" width="100" height="5"></rect>
            <rect y="60" width="100" height="5"></rect>
        </svg>
    </button>
)