import dynamic from "next/dynamic";
import {useGetStarted} from "../../../view-models/get-started";
import {AppLayout} from "../../../layouts/app";
import {Stack} from "../../../components/stack";
import {Heading} from "../../../components/heading";
import {Card} from "../../../components/card";

export const GetStarted = () => {
    const {data, steps, currentStep, currentStepIndex, back, forward} = useGetStarted()
    const Step = dynamic(() => import(`./steps/${currentStep.slug}`))

    return (
        <AppLayout>
            {{
                main: (
                    <div className="h-full flex flex-col justify-start pb-8">
                        <Stack direction="vertical" align="between">
                            <Step {...data} />
                            <Card>
                                <Stack align="between">
                                    <button onClick={() => back()}>
                                        {currentStepIndex !== 0 && (
                                            <Heading level={4}>Previous</Heading>
                                        )}
                                    </button>
                                    <button onClick={() => forward({})}>
                                        {currentStepIndex < steps.length - 1 && (
                                            <Heading level={4}>Next</Heading>
                                        )}
                                    </button>
                                </Stack>
                            </Card>
                        </Stack>
                    </div>
                ),
                sidebar: (
                    <Stack direction="vertical" gap={6}>
                        <Heading level={3}>Table of Contents</Heading>
                        <Stack as="ol" direction="vertical" gap={2} className="list-decimal list-inside	">
                            {steps.map((step, i) => {
                                if (i <= currentStepIndex) return (
                                    <a href={`/app/get-started/${step.slug}`}>
                                        <li className={i === currentStepIndex ? 'font-bold' : ''}>{step.label}</li>
                                    </a>
                                )

                                return (
                                    <li>{step.label}</li>
                                )
                            })}
                        </Stack>
                    </Stack>
                )
            }}
        </AppLayout>
    )
}