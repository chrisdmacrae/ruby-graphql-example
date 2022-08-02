import {GetServerSideProps, NextPage} from "next";
import {GetStarted} from "../../../views/app/get-started";
import {GetStartedProvider, GetStartedProviderProps} from "../../../view-models/get-started";
import {ServerNotFound} from "../../../lib/server/not-found";
import {createNextServerClient} from "../../../lib/apollo/server";
import {gql} from "@apollo/client";

const STEPS: GetStartedProviderProps['steps'] = [
    { label: "Introduction", slug: "" },
    { label: "Test", slug: "test" },
    { label: "Test2", slug: "test-2" },
    { label: "Test3", slug: "test-3" }
]

export const GetStartedPage: NextPage = () => (
    <GetStartedProvider steps={STEPS}>
        <GetStarted />
    </GetStartedProvider>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const client = createNextServerClient(ctx.req, ctx.res)
        const {data} = await client.query({
            query: gql`
                query GetStarted {
                    currentUser {
                        id
                        email
                    }
                }
            `
        })

        return {
            props: {
                ...data
            }
        }
    } catch(error) {
        console.error(error)

        return ServerNotFound()
    }
}

export default GetStartedPage