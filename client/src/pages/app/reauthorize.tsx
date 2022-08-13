import {GetServerSideProps, NextPage} from "next";
import {ServerNotFound} from "../../lib/server/not-found";
import {createNextServerClient} from "../../lib/apollo/server";
import {gql} from "@apollo/client";
import {ServerRedirect} from "../../lib/server";
import {Reauthorize} from "../../views/app/reauthorize";

export const ReauthorizePage: NextPage = (props) => (
    <Reauthorize {...props} />
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const client = createNextServerClient(ctx.req, ctx.res)
        const {data} = await client.query({
            query: gql`
                query Reauthorize {
                    currentUser {
                        id
                        email
                        linkToken
                        bankAuthorized
                    }
                }
            `
        })

        if (!data.currentUser) return ServerRedirect('/sign-in', 302)
        // if (data.currentUser.bankAuthorized) return ServerRedirect('/app', 302)

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

export default ReauthorizePage