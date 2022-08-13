import {Stack} from "../stack";
import {Heading} from "../heading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinesLeaning} from "@fortawesome/free-solid-svg-icons";
import {Divider} from "../divider";
import {Links, UserLinks} from "./links";
import {Link} from "../link";

export type MobileNavProps = {
    onClose: () => void
    open?: boolean
}

export const MobileNav: React.FC<MobileNavProps> = ({ onClose, open }) => {
    return (
        <Stack as="nav" direction="vertical" align="between" gap={12} className={`${open ? 'block md:hidden ' : 'hidden '}fixed top-0 right-0 bottom-0 left-0 bg-white p-5 z-90`}>
            <div className="w-full basis-full grow-0">
                <Stack direction="horizontal" align="between" className="min-h-fit">
                    <Link href="/app">
                        <Heading>Budget Buddy</Heading>
                    </Link>
                    <button onClick={onClose}>
                        <FontAwesomeIcon icon={faLinesLeaning} className="md:hidden" />
                    </button>
                </Stack>
                <Divider />
            </div>
            <div>
                <Stack direction="vertical" gap={6}>
                    {Links.concat(UserLinks.filter(link => link.path !== '/sign-out')).map((link, i) => (
                        <Link href={link.path} className="underline">
                            <Heading color="text-inherit">0{i + 1}. {link.label}</Heading>
                        </Link>
                    ))}
                </Stack>
            </div>
            <div>
                <Stack direction="vertical" gap={6}>
                    <Link href="/sign-out" className="underline">
                        <Heading color="text-inherit">Sign out</Heading>
                    </Link>
                </Stack>
            </div>
        </Stack>
    )
}