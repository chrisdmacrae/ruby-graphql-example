import {createContext} from "react";

export type GetStartedStep = {
    label: string,
    slug: string,
    skip?: (currenUser: any) => boolean
}

export type GetStartedContext = {
    steps: GetStartedStep[]
    data: Record<string, any>
    currentStep: GetStartedStep
    currentStepIndex: number
    forward: (data: Record<string, any>) => void
    back: () => void
}

export const Context = createContext<GetStartedContext>({
    steps: [],
    data: {},
    currentStep: {
        slug: "",
        label: "Default step"
    },
    currentStepIndex: 0,
    forward: () => null,
    back: () => null
})