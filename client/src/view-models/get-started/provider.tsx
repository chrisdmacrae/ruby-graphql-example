import {PropsWithChildren, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Context, GetStartedContext} from './context'
import {useAuth} from "../../lib/auth-context";

export type GetStartedProviderProps = PropsWithChildren<{
    steps: GetStartedContext['steps']
    baseUrl?: string
}>

export const GetStartedProvider = ({ steps, baseUrl = '/app/get-started', children }: GetStartedProviderProps) => {
    const router = useRouter()
    const {slug} = router.query
    const [data, setData] = useState({})
    const stepIndex = steps.findIndex(step => slug?.includes(step.slug))
    const [currentStepIndex, setCurrentStepIndex] = useState(stepIndex === -1 ? 0 : stepIndex)
    const currentStep = steps[currentStepIndex]

    useEffect(() => {
        setCurrentStepIndex(stepIndex === -1 ? 0 : stepIndex)
    }, [router.asPath])

    useEffect(() => {
        if (currentStep) {
            router.replace([baseUrl, currentStep.slug].join('/'))
        }
    }, [currentStep])

    const {currentUser} = useAuth()
    useEffect(() => {
        if (currentStep.redirect) {
            const redirectTo = currentStep.redirect({...data, currentUser})

            if (redirectTo) {
                router.push([baseUrl, redirectTo].join('/'))
            }
        }

        if (currentStep.skip) {
            const shouldSkip = currentStep.skip({...data, currentUser})

            if (shouldSkip && currentStepIndex !== steps.length - 1) setCurrentStepIndex(currentStepIndex + 1)
        }
    }, [currentStepIndex])

    const forward = (stepData: Record<string, any>) => {
        let index = currentStepIndex + 1

        setData({ ...data, ...stepData })

        if (index < steps.length) {
            router.push([baseUrl, steps[index].slug].join('/'))
            setCurrentStepIndex(index)
        }
    }
    const back = () => {
        let index = currentStepIndex - 1

        if (index > -1) {
            router.push([baseUrl, steps[index].slug].join('/'))
            setCurrentStepIndex(index)
        }
    }

    return (
        <Context.Provider value={{
            steps,
            data,
            currentStep,
            currentStepIndex,
            forward,
            back
        }}>
            {children}
        </Context.Provider>
    )
}