import {GetServerSideProps, NextPage} from "next";
import {ServerNotFound} from "../../lib/server/not-found";
import {createNextServerClient} from "../../lib/apollo/server";
import {gql} from "@apollo/client";
import {ServerRedirect} from "../../lib/server";
import {App} from "../../views/app";
import {PlaidProvider} from "../../view-models/plaid";

export type AppPageProps = {
    currentUser: Record<string, any>
}

export const AppPage: NextPage<AppPageProps> = ({ currentUser, ...props }) => (
    <PlaidProvider linkToken={currentUser.linkToken}>
        <App {...props} />
    </PlaidProvider>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const client = createNextServerClient(ctx.req, ctx.res)
        const {data} = await client.query({
            query: gql`
                query App {
                    currentUser {
                        id
                        email
                        linkToken
                        bankAuthorized
                    }
                    accounts
                    balances   
                }         
                `
        })

        if (!data.currentUser) return ServerRedirect('/sign-in', 302)
        if (!data.currentUser.bankAuthorized) return ServerRedirect('/app/reauthorize', 302)

        return {
            props: {
                ...data
            }
        }
    } catch (error) {
        console.error(error)

        return ServerNotFound()
    }
}

export default AppPage