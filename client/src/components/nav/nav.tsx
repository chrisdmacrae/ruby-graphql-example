import {Stack} from "../stack";
import {Heading} from "../heading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Divider} from "../divider";
import {Link} from "../../components/link";
import {useAuth} from "../../lib/auth-context";
import {Links, UserLinks} from "./links";

export type NavProps = {
    onOpenNav: () => void
}

export const Nav: React.FC<NavProps> = ({ onOpenNav }) => {
    const {currentUser} = useAuth()

     return (
        <nav className="w-full">
            <Stack direction="horizontal" valign="bottom" gap={24}>
                <div className="w-full md:w-96 basis-full md:basis-96">
                    <Stack direction="horizontal" align="between">
                        <Link href="/app">
                            <Heading>Budget Buddy</Heading>
                        </Link>
                        <button onClick={onOpenNav}>
                            <FontAwesomeIcon icon={faBars} className="md:hidden" />
                        </button>
                    </Stack>
                    <Divider />
                </div>
                <div className="w-full hidden md:block">
                    {currentUser && (
                        <Stack direction="horizontal" align="between">
                            <Stack as="ul" direction="horizontal" gap={3} className="min-w-fit">
                                {Links.map(link => (
                                    <li>
                                        <Link href={link.path}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </Stack>
                            <Stack as="ul" direction="horizontal" align="right" gap={3}  className="min-w-fit">
                                {UserLinks.map(link => (
                                    <li>
                                        <Link href={link.path}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </Stack>
                        </Stack>
                    )}
                    <Divider />
                </div>
            </Stack>
        </nav>
    )
}