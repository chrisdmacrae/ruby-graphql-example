import {AppLayout} from "../../layouts/app";
import {Heading} from "../../components/heading";
import {Body} from "../../components/text";
import {Stack} from "../../components/stack";
import {Card} from "../../components/card";
import {BalancePresenter} from "../../presenters/balance-presenter";

export const App: React.FC = ({ accounts, balances }) => {
    const viewableBalances = BalancePresenter(balances)

    return (
        <AppLayout>
            {{
                main: (
                    <Stack direction="horizontal" gap={6}>
                        <Stack direction="vertical" gap={3}>
                            <Heading>Current Balance</Heading>
                            <Stack direction="horizontal" align="between" gap={6}>
                                <Card>
                                    <Heading level={3}>Available</Heading>
                                    <Heading level={2}>{viewableBalances.available}</Heading>
                                </Card>
                                <Card>
                                    <Heading level={3}>Current</Heading>
                                    <Heading level={2}>{viewableBalances.current}</Heading>
                                </Card>
                            </Stack>

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