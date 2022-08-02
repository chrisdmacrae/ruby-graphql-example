import {Heading} from "../../../../components/heading";
import {Text} from "../../../../components/text";
import {Stack} from "../../../../components/stack";
import {Card} from "../../../../components/card";
import {useGetStarted} from "../../../../view-models/get-started";

export const Index: React.FC = () => {
    const {steps, currentStepIndex, back, forward} = useGetStarted()

    return (
        <Stack direction="vertical" gap={3}>
            <Heading>Welcome to Budget Buddy</Heading>
            <Text>
                Budget buddy is an intelligent AI companion for managing your personal finances. It can:
            </Text>
            <Text>
                <Stack as="ul" direction="vertical" className="list-disc list-inside" gap={3}>
                    <li>Show your bank balanaces in real-time</li>
                    <li>Automatically import and categorize your transactions</li>
                    <li>Tell you when you're on-trend to go over budget on your budget</li>
                    <li>Automatically track your subscriptions and help you manage them</li>
                    <li>Teach you to reach financial freedom through various budgeting strategies, tailoring a custom
                        budget for you!
                    </li>
                </Stack>
            </Text>
        </Stack>
    )
}

export default Index