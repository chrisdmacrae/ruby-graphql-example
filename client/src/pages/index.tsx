import type {GetServerSideProps, GetStaticProps, NextPage} from 'next'
import { gql } from "@apollo/client";

import {createNextServerClient} from "../lib/apollo/server";
import {Home, HomeProps} from "../views/home";
import {ServerNotFound} from "../lib/server/not-found";

export const HomePage: NextPage<HomeProps> = (props) => (
    <Home {...props} />
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = createNextServerClient(ctx.req, ctx.res)
    const {data} = await client.query({
      query: gql`
          query Home {
            xsrfToken
            currentUser {
              email
            }
          }
        `,
    })

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

export default HomePage
