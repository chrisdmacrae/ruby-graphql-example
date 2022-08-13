import {GetServerSideProps, NextPage} from "next";
import {GetStarted} from "../../../views/app/get-started";
import {GetStartedProvider, GetStartedProviderProps} from "../../../view-models/get-started";
import {ServerNotFound} from "../../../lib/server/not-found";
import {createNextServerClient} from "../../../lib/apollo/server";
import {gql} from "@apollo/client";
import {PlaidProvider} from "../../../view-models/plaid";

const STEPS: GetStartedProviderProps['steps'] = [
    { label: "Introduction", slug: "", skip: ({currentUser}) => !!currentUser },
    { label: "Your Personal Information", slug: "personal-information", skip: ({currentUser}) => !!currentUser },
    { label: "Your Password", slug: "password", skip: ({currentUser}) => !!currentUser, redirect: ({email}) => email ? undefined : 'personal-information' },
    { label: "Link your accounts", slug: "link", skip: ({currentUser}) => !!currentUser?.bankAuthorized },
    { label: "You're all done", slug: "done", skip: ({currentUser}) => !!currentUser }
]

export type GetStartedPageProps = {
    currentUser: Record<string, any>
}

export const GetStartedPage: NextPage<GetStartedPageProps> = ({ currentUser }) => (
    <PlaidProvider linkToken={currentUser?.linkToken}>
        <GetStartedProvider steps={STEPS}>
            <GetStarted />
        </GetStartedProvider>
    </PlaidProvider>
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
                        linkToken
                        bankAuthorized
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