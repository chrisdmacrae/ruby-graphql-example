import {Stack} from "../components/stack";
import {Body} from "../components/text";
import {Divider} from "../components/divider";
import {useEffect, useState} from "react";
import {Nav} from "../components/nav/nav";
import {MobileNav} from "../components/nav/mobile-nav";
import {useAuth} from "../lib/auth-context";
import {usePlaid} from "../view-models/plaid";
import {useRouter} from "next/router";

export type AppLayoutProps = {
    children: {
        main: JSX.Element
        sidebar?: JSX.Element
    }
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const [navIsOpen, setNavIsOpen] = useState(false)
    const toggleNav = () => setNavIsOpen(!navIsOpen)

    const {currentUser} = useAuth()
    const {open} = usePlaid()
    const router = useRouter()
    useEffect(() => {
        if (!currentUser?.bankAuthorized) open()
    }, [currentUser, router.asPath])

    return (
        <Stack direction="vertical" align="between" className="p-5 md:p-10" gap={12}>
            <Nav onOpenNav={toggleNav} />
            <main className="w-full h-full grow relative z-1">
                <Stack direction={{ sm: "vertical", md: "horizontal" }} align="left" valign="top" gap={24} className="md:flex-row">
                    <div className="w-full md:w-96 basis-full md:basis-96 order-2 md:order-1 md:-ml-24">
                        {children.sidebar}
                    </div>
                    <div className="w-full h-full order-1 md:order-2 grow">
                        {children.main}
                    </div>
                    <div />
                </Stack>
            </main>
            <Stack as="footer" direction="vertical" gap={3} className="h-auto relative z-1">
                <Divider />
                <Stack direction="horizontal" align="between">
                    <Body color="text-zinc-600">Copyright &copy; 2022, Budget Buddy</Body>
                </Stack>
            </Stack>
            <MobileNav onClose={toggleNav} open={navIsOpen} />
        </Stack>
    )
}