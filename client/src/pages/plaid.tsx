import {GetServerSideProps, NextPage} from "next";
import {ServerNotFound} from "../lib/server/not-found";
import {createNextServerClient} from "../lib/apollo/server";
import {gql} from "@apollo/client";
import {ServerRedirect} from "../lib/server";
import {PlaidProvider} from "../view-models/plaid";
import {Plaid} from "../views/plaid";

export const PlaidPage: NextPage = (props: any) => (
    <PlaidProvider linkToken={props.linkToken}>
        <Plaid {...props} />
    </PlaidProvider>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const client = createNextServerClient(ctx.req, ctx.res)
        const {data} = await client.query({
            query: gql`
                query Link {
                    currentUser {
                        id
                    }
                    linkToken
                }
            `
        })

        if (!data.currentUser) return ServerRedirect('/sign-in', 302)

        return {
            props: {
                ...data
            }
        }
    }
    catch(error) {
        console.error(error)

        return ServerNotFound()
    }
}

export default PlaidPage