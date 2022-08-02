import {Stack} from "./stack";
import {Heading} from "./heading";
import {Text} from "./text";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnchorCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {Button} from "./button";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

export type EmptyStateProps = {
    icon: IconDefinition,
    title: string
    prompt: string
    action?: string
    onClick?: () => void
}

export const EmptyState: React.FC<EmptyStateProps> = ({ icon = faAnchorCircleExclamation, title, prompt, action, onClick }) => (
    <Stack direction="vertical" gap={2} align="center" className="px-5 py-10 text-center">
        <FontAwesomeIcon icon={icon} className="w-16 text-zinc-400" />
        <Heading>{title}</Heading>
        <Text>{prompt}</Text>
        {action && (<Button variant="secondary" onClick={onClick}>{action}</Button>)}
    </Stack>
)