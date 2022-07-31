import {Redirect} from "next";

export const ServerRedirect = (redirect: string, code: 301 | 302 | 303 | 307 | 308) => {
    return {
        redirect: {
            code,
            destination: redirect,
            permanent: code !== 302
        } as Redirect
    }
}