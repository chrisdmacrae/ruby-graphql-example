import {default as NextLink, LinkProps as NextLinkProps} from "next/link";
import {PropsWithChildren} from "react";

export type LinkProps = NextLinkProps & PropsWithChildren & {
    className?: string
}

export const Link: React.FC<LinkProps & PropsWithChildren> = ({children, className, ...props}) => (
    <NextLink {...props} passHref>
        <a className={`text-zinc-500 hover:text-zinc-600 ${className}`}>
            {children}
        </a>
    </NextLink>
)