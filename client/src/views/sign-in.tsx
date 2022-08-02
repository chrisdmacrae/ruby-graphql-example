export type SignInProps = {
    xsrfToken: string
}

export const SignIn: React.FC<SignInProps> = ({xsrfToken}) => (
    <form method="POST" action={process.env.IDENTITY_URL + '/sign_in'}>
        <input type="hidden" name="authenticity_token" value={xsrfToken} />
        <label htmlFor="user_email">Email:</label>
        <input type="email" name="user[email]" id="user_email" />
        <br />
        <label htmlFor="user_password">Password:</label>
        <input autoComplete="off" type="password" name="user[password]" id="user_password" />
        <br />
        <button type="submit">Sign in</button>
    </form>
)