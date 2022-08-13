import {AppLayout} from "../layouts/app";
import {Stack} from "../components/stack";
import {Button} from "../components/button";
import {Heading} from "../components/heading";

export type SignInProps = {
    xsrfToken: string
}

export const SignIn: React.FC<SignInProps> = ({xsrfToken}) => (
    <AppLayout>
        {{
            main: (
                <form method="POST" action={process.env.IDENTITY_URL + '/sign_in'}>
                    <Stack as="fieldset" direction="vertical" gap={3} className="w-full md:w-96">
                        <Heading level={1}>Sign in to Budget Buddy</Heading>
                        <input type="hidden" name="authenticity_token" value={xsrfToken} />
                        <label htmlFor="user_email">Email:</label>
                        <input type="email" name="user[email]" id="user_email" className="w-full px-4 py-2 border-2 border-zinc-600" />
                        <label htmlFor="user_password">Password:</label>
                        <input autoComplete="off" type="password" name="user[password]" id="user_password" className="w-full px-4 py-2 border-2 border-zinc-600" />
                        <Button type="submit">Sign in</Button>
                    </Stack>
                </form>
            )
        }}
    </AppLayout>
)