import type {GetServerSideProps, GetStaticProps, NextPage} from 'next'
import { gql } from "@apollo/client";

import {createNextServerClient} from "../lib/apollo/server";
import {Home, HomeProps} from "../views/home";
import {ServerNotFound} from "../lib/server/not-found";
import {ServerRedirect} from "../lib/server";

export const SignOutPage: NextPage<HomeProps> = (props) => null

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const client = createNextServerClient(ctx.req, ctx.res)
        const {data} = await client.query({
            query: gql`
          query Posts {
            currentUser {
              email
            }
          }
        `,
        })

        if (data.currentUser) return ServerRedirect(process.env.IDENTITY_URL + '/sign_out', 302)

        return ServerRedirect('/app/sign-in', 302)
    }
    catch (error) {
        console.error(error)

        return ServerNotFound()
    }
}

export default SignOutPage
