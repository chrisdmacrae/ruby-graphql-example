import {Heading} from "../../../../components/heading";
import {Body} from "../../../../components/text";
import {Stack} from "../../../../components/stack";
import {Button} from "../../../../components/button";
import {usePlaid} from "../../../../view-models/plaid";
import {useGetStarted} from "../../../../view-models/get-started";
import {Pagination} from "../../../../components/pagination";

export const Link: React.FC = () => {
    const {back, forward} = useGetStarted()
    const {open, authenticated} = usePlaid()
    const onNext = () => {
        if (authenticated) forward({})
    }

    return (
        <>
            <Stack direction="vertical" gap={3} className="pb-12">
                <Heading>Link your bank account</Heading>
                <Body>
                    Budget Buddy requires access to your banking information, <strong>not your bank account</strong>. You login to your bank securely using Plaid,
                    the industry standard for financial technology.
                    <br />
                    <br />
                    We only get access to your banking information, like the current balance and recent transactions. We store this information securely, in Canada.
                    <br />
                    <br />
                    Connection can take a few minutes, please be patient and bare with us!
                </Body>
                <Button onClick={() => open()}>Link your account</Button>
            </Stack>
            <Pagination
                onForward={onNext}
                forwardDisabled={!authenticated}
                onBack={back}
            />
        </>
    )
}

export default Link