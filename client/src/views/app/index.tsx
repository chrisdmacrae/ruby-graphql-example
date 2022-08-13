import {AppLayout} from "../../layouts/app";
import {Heading} from "../../components/heading";
import {Body} from "../../components/text";
import {Stack} from "../../components/stack";
import {Card} from "../../components/card";

export const App: React.FC = () => {
    return (
        <AppLayout>
            {{
                main: (
                    <Stack direction="horizontal" gap={6}>
                        <Stack direction="vertical" gap={3}>
                            <Heading>Savings</Heading>
                            <Card>
                                <Heading level={3}></Heading>
                            </Card>

                            <Heading>Latest Bills</Heading>
                            <Stack direction="vertical" gap={3}>
                                <Stack direction="horizontal" valign="middle" gap={3}>
                                    <div className="w-10 h-10 bg-zinc-600"></div>
                                    <div>
                                        <Heading level={4}>
                                            Tinder
                                        </Heading>
                                        <Body>
                                            13, Sep, 2021 at 5:41pm
                                        </Body>
                                    </div>
                                    <Stack direction="horizontal">
                                        <Card />
                                        <Body>Entertainment</Body>
                                    </Stack>
                                    <div>
                                        <Heading level={5}>
                                            -$9.00
                                        </Heading>
                                    </div>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                )
            }}
        </AppLayout>
    )
}