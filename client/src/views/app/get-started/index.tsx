import dynamic from "next/dynamic";
import {useGetStarted} from "../../../view-models/get-started";
import {AppLayout} from "../../../layouts/app";
import {Stack} from "../../../components/stack";
import {Heading} from "../../../components/heading";
import {Body} from "../../../components/text";

export const GetStarted = () => {
    const {data, steps, currentStep, currentStepIndex} = useGetStarted()
    const Step = dynamic(() => import(`./steps/${currentStep.slug}`))

    return (
        <AppLayout>
            {{
                main: (
                    <Stack valign="top" className="pb-8 basis-full">
                        <Stack direction="vertical" align="between" valign="top" gap={6} className="h-full">
                            <Step {...data} />
                            <Stack align="center" className="md:hidden">
                                <Body color="text-zinc-600">Step {currentStepIndex + 1} of {steps.length}</Body>
                            </Stack>
                        </Stack>
                    </Stack>
                ),
                sidebar: (
                    <Stack direction="vertical" gap={6} className="hidden md:block">
                        <Heading level={3}>Table of Contents</Heading>
                        <Stack as="ol" direction="vertical" gap={2} className="list-decimal list-inside	">
                            {steps.map((step, i) => {
                                if (i <= currentStepIndex) return (
                                    <a href={`/app/get-started/${step.slug}`} key={step.slug}>
                                        <li className={i === currentStepIndex ? 'font-bold' : ''}>{step.label}</li>
                                    </a>
                                )

                                return (
                                    <li key={step.slug}>{step.label}</li>
                                )
                            })}
                        </Stack>
                    </Stack>
                )
            }}
        </AppLayout>
    )
}