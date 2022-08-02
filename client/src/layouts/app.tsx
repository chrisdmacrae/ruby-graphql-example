import {Stack} from "../components/stack";
import {Heading} from "../components/heading";
import {Divider} from "../components/divider";

export type AppLayoutProps = {
    children: {
        main: JSX.Element
        sidebar?: JSX.Element
    }
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <Stack direction="vertical" className="p-5 md:p-10" gap={12}>
            <nav className="w-full">
                <Stack direction="horizontal" valign="bottom" gap={6}>
                    <a href="#" className="w-96 basis-96">
                        <Heading>Budget Buddy</Heading>
                        <Divider />
                    </a>
                    <div className="w-full">
                        <Stack direction="horizontal" align="between">
                            <Stack as="ul" direction="horizontal" gap={3}>
                                <li>Overview</li>
                                <li>Budget</li>
                                <li></li>
                            </Stack>
                            <Stack as="ul" direction="horizontal" align="right" gap={3}>
                                <li>Settings</li>
                                <li></li>
                            </Stack>
                        </Stack>
                        <Divider />
                    </div>
                </Stack>
            </nav>
            <main className="w-full h-full">
                <Stack direction={{ sm: "vertical", md: "horizontal" }} valign="top" gap={6}>
                    <div className="w-96 basis-96">
                        {children.sidebar}
                    </div>
                    <div className="w-full h-full">
                        {children.main}
                    </div>
                    <div />
                </Stack>
            </main>
        </Stack>
    )
}