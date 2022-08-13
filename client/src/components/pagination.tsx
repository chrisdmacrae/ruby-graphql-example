import {Stack} from "./stack";
import {Button} from "./button";
import {Heading} from "./heading";
import {Card} from "./card";
import { Body } from "./text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from "@fortawesome/free-solid-svg-icons";

export type PaginationProps = {
    loading?: boolean
    forwardDisabled?: boolean
    onForward?: () => void
    backDisabled?: boolean
    onBack?: () => void
}

export const Pagination: React.FC<PaginationProps> = ({ onBack, onForward, backDisabled, forwardDisabled, loading}) => (
    <Card className="sticky md:relative bottom-0">
        <Stack align="between">
            <Button variant="ghost" onClick={onBack} disabled={loading || backDisabled}>
                {onBack && (
                    <Heading level={4} color={backDisabled ? "text-inherit" : undefined}>Previous</Heading>
                )}
            </Button>
            <Button variant="ghost" onClick={onForward} disabled={forwardDisabled}>
                {!loading && onForward && (
                    <Heading level={4} color={forwardDisabled ? "text-inherit" : undefined}>Next</Heading>
                )}
                {loading && onForward && (
                    <Body>
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </Body>
                )}
            </Button>
        </Stack>
    </Card>
)