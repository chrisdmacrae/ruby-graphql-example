import {AppLayout} from "../../layouts/app";
import {Heading} from "../../components/heading";
import {Body} from "../../components/text";
import {Stack} from "../../components/stack";
import {Card} from "../../components/card";
import {Button} from "../../components/button";
import {usePlaid} from "../../view-models/plaid";
import {useEffect} from "react";
import {useRouter} from "next/router";

export const Reauthorize: React.FC = () => {
    const {open, authenticated} = usePlaid()

    const router = useRouter()
    useEffect(() => {
        if (authenticated) router.push('/app')
    }, [authenticated])

    return (
        <AppLayout>
            {{
                main: (
                    <Stack direction="vertical" gap={3} className="pb-12">
                        <Heading>Re-link your bank account</Heading>
                        <Body>
                            Budget Buddy needs you to re-link your bank account every so often. When this happens, you'll be redirected to this page to re-authorize.
                            <br />
                            <br />
                            We only get access to your banking information, like the current balance and recent transactions. We store this information securely, in Canada.
                            <br />
                            <br />
                            Connection can take a few minutes, please be patient and bare with us!
                        </Body>
                        <Button onClick={() => open()}>Link your account</Button>
                    </Stack>
                )
            }}
        </AppLayout>
    )
}