import Head from "next/head";
import {PropsWithChildren} from "react";

export type BaseLayoutProps = PropsWithChildren & {

}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  title = "My App",
  description = "My app is a good app",
  children
}) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="theme-color" content="#FFFFFF" />
            <link rel="icon" href="/client/public/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />
        </Head>
        {children}
    </>
)