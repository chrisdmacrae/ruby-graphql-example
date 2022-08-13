import {Heading} from "../../../../components/heading";
import {Body} from "../../../../components/text";
import {Stack} from "../../../../components/stack";
import {useGetStarted} from "../../../../view-models/get-started";
import {Pagination} from "../../../../components/pagination";

export const Introduction: React.FC = () => {
    const {forward} = useGetStarted()

    return (
        <>
            <Stack direction="vertical" gap={3} className="pb-12">
                <Heading className="mb-2">Welcome to Budget Buddy</Heading>
                <Body>
                    Budget buddy is an intelligent AI companion for managing your personal finances. It can:
                </Body>
                <Body>
                    <Stack as="ul" direction="vertical" className="list-disc list-inside" gap={1}>
                        <li>Show your bank balanaces in real-time</li>
                        <li>Automatically import and categorize your transactions</li>
                        <li>Tell you when you're on-trend to go over budget on your budget</li>
                        <li>Automatically track your subscriptions and help you manage them</li>
                        <li>Teach you to reach financial freedom through various budgeting strategies, tailoring a custom
                            budget for you!
                        </li>
                    </Stack>
                </Body>
                <Body>To get started, we'll ask you a few questions to tailor a budget specific to you. Hit next to get started.</Body>
            </Stack>
            <Pagination
                onForward={() => forward({})}
            />
        </>
    )
}

export default Introduction