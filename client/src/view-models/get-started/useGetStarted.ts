import {useContext} from "react";
import {Context} from "./context";

export const useGetStarted = () => {
    const {steps, data, currentStep, currentStepIndex, forward, back} = useContext(Context)

    return {
        steps,
        data,
        currentStep,
        currentStepIndex,
        forward,
        back
    }
}