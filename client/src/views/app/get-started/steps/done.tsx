import {Heading} from "../../../../components/heading";
import {Stack} from "../../../../components/stack";
import { Body } from "../../../../components/text";
import {Pagination} from "../../../../components/pagination";
import {useRouter} from "next/router";

export const Done: React.FC = () => {
    const router = useRouter()

    return (
        <>
            <Stack direction="vertical" gap={3}>
                <Heading>You're all done</Heading>
                <Body>
                    Welcome to Budget Buddy. You've done everything you need to get started building your budget.
                </Body>
            </Stack>
            <Pagination
                onForward={() => router.push('/app')}
            />
        </>
    )
}

export default Done