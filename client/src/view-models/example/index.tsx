export type ExampleProviderProps = {
    children: ({}) => JSX.Element
}

export const ExampleProvider: React.FC<ExampleProviderProps> = ({ children }) => {
    const doThing = () => null
    const isThing = false

    return (
        <>
            {children({ doThing, isThing })}
        </>
    )
}

export const Example = () => {
    return (
        <ExampleProvider>
            {({ doThing, isThing }) => (

            )}
        </ExampleProvider>
    )
}