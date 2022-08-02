import {Heading} from "../../../../components/heading";
import {Text} from "../../../../components/text";
import {Stack} from "../../../../components/stack";
import {Card} from "../../../../components/card";
import {useGetStarted} from "../../../../view-models/get-started";

export const Index: React.FC = () => {
    const {steps, currentStepIndex, back, forward} = useGetStarted()

    return (
        <Stack direction="vertical" gap={3}>
            <Heading>Test</Heading>
        </Stack>
    )
}

export default Index