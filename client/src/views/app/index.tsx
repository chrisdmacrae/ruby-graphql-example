import {AppLayout} from "../../layouts/app";
import {Heading} from "../../components/heading";
import {Text} from "../../components/text";
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
                                    <div className="w-10 h-10 bg-zinc-800"></div>
                                    <div>
                                        <Heading level={4}>
                                            Tinder
                                        </Heading>
                                        <Text>
                                            13, Sep, 2021 at 5:41pm
                                        </Text>
                                    </div>
                                    <Stack direction="horizontal">
                                        <Card />
                                        <Text>Entertainment</Text>
                                    </Stack>
                                    <div>
                                        <Heading level={5}>
                                            -$9.00
                                        </Heading>
                                    </div>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction="vertical">
                        </Stack>
                    </Stack>
                )
            }}
        </AppLayout>
    )
}