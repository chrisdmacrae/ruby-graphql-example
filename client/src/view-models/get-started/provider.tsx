import {PropsWithChildren, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Context, GetStartedContext} from './context'
import {useAuth} from "../../lib/auth-context";

export type GetStartedProviderProps = PropsWithChildren<{
    steps: GetStartedContext['steps']
}>

export const GetStartedProvider = ({ steps, children }: GetStartedProviderProps) => {
    const router = useRouter()
    const {slug} = router.query
    const [data, setData] = useState({})
    const stepIndex = steps.findIndex(step => slug?.includes(step.slug))
    const [currentStepIndex, setCurrentStepIndex] = useState(stepIndex === -1 ? 0 : stepIndex)

    const {currentUser} = useAuth()
    const forward = (stepData: Record<string, any>) => {
        let nextStepIndex = currentStepIndex + 1
        let skip = steps[nextStepIndex].skip
        let shouldSkip = skip && skip({ currentUser })
        let index = shouldSkip ? nextStepIndex + 1 : nextStepIndex

        setData({ ...data, ...stepData })

        if (index < steps.length) {
            router.push(`/app/get-started/${steps[index].slug}`)
            setCurrentStepIndex(index)
        }
    }
    const back = () => {
        let index = currentStepIndex - 1

        if (index > -1) {
            router.push(`/app/get-started/${steps[index].slug}`)
            setCurrentStepIndex(index)
        }
    }

    return (
        <Context.Provider value={{
            steps,
            data,
            currentStep: steps[currentStepIndex],
            currentStepIndex: currentStepIndex,
            forward,
            back
        }}>
            {children}
        </Context.Provider>
    )
}