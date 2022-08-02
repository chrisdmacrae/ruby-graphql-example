import {GetServerSideProps, NextPage} from "next";
import {ServerNotFound} from "../../lib/server/not-found";
import {createNextServerClient} from "../../lib/apollo/server";
import {gql} from "@apollo/client";
import {ServerRedirect} from "../../lib/server";
import {App} from "../../views/app";

export const AppPage: NextPage = (props) => (
    <App {...props} />
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
                    }
                }
            `
        })

        if (!data.currentUser) return ServerRedirect('/sign-in', 302)

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