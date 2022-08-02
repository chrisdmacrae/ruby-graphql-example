import {usePlaid} from "../view-models/plaid";

export const Plaid: React.FC = (props: any) => {
    const {open, authenticated} = usePlaid()

    return (
        <>
            <p>{props.linkToken}</p>
            <p>{authenticated.toString()}</p>
            <button onClick={() => open()}>Open</button>
        </>
    )
}
