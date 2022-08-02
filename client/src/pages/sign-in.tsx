import type {GetServerSideProps, NextPage} from 'next'
import { gql } from "@apollo/client";

import {createNextServerClient} from "../lib/apollo/server";
import {ServerNotFound} from "../lib/server/not-found";
import {ServerRedirect} from "../lib/server";
import {SignIn, SignInProps} from "../views/sign-in";

export const SignInPage: NextPage<SignInProps> = (props) => (
    <SignIn {...props} />
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const client = createNextServerClient(ctx.req, ctx.res)
        const {data} = await client.query({
            query: gql`
              query SignIn {
                xsrfToken
                currentUser {
                  email
                }
              }
            `,
        })

        if (data.currentUser) return ServerRedirect('/', 302)

        return {
            props: {
                ...data
            },
        }
    }
    catch (error) {
        console.error(error)

        return ServerNotFound()
    }
}

export default SignInPage
