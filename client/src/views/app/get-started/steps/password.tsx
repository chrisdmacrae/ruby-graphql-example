import {Heading} from "../../../../components/heading";
import {Body} from "../../../../components/text";
import {Stack} from "../../../../components/stack";
import {Pagination} from "../../../../components/pagination";
import {useGetStarted} from "../../../../view-models/get-started";
import {Form, Field} from 'react-final-form'
import {gql, useMutation} from "@apollo/client";

export const Index: React.FC = () => {
    const {back, forward, data} = useGetStarted()
    const [signUp] = useMutation(gql`
        mutation SignUp($email: String!, $firstName: String!, $lastName: String!, $password: String!) {
          signUp(input: { email: $email, firstName: $firstName, lastName: $lastName, password: $password }) {
            user {
                id
                email
                firstName
                lastName
            }
          }
        }
    `)
    const onSubmit = async (formData: Record<string, any>) => {
        try {
            const response = await signUp({
                variables: {
                    ...formData,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    email: data.email
                }
            })
        } catch (error) {
            console.error(error)
        }
    }
    const validate = (validators: any[]) => (val: any, values: any) => {
        const validator = validators.find(validator => validator(val) !== undefined)

        return validator && validator(val, values)
    }
    const required = (val: any, _: any) => (!val ? 'Required' : undefined)
    const minLength = (val: any, _: any) => val.length < 6 ? 'Must be 6 characters or longer' : undefined
    const matches = (val: any, formData: Record<any, any> | undefined) => val !== formData?.password ? 'Password does not match' : undefined

    return (
        <Form onSubmit={onSubmit} initialValues={data}>
            {({handleSubmit, hasValidationErrors, submitting}) => (
                <>
                    <Stack direction="vertical" gap={3} className="pb-12">
                        <Heading>Your Password</Heading>
                        <Body>Please provide a password to login to your account</Body>
                            <label htmlFor="password">Password:</label>
                            <Field name="password" validate={validate([required, minLength])}>
                                {({input, meta}) => (
                                    <>
                                        <input {...input} min={6} type="password" id="password" className="w-full md:w-96 px-4 py-2 border-2 border-zinc-600" disabled={submitting} />
                                        {meta.touched && meta.error && <Body color="text-red-400">{meta.error}</Body>}
                                    </>
                                )}
                            </Field>
                            <label htmlFor="confirm_password">Confirm password:</label>
                            <Field name="confirm_password" validate={validate([required, minLength, matches])}>
                                {({input, meta}) => (
                                    <>
                                        <input {...input} min={6} type="password" id="confirm_password" className="w-full md:w-96 px-4 py-2 border-2 border-zinc-600" disabled={submitting} />
                                        {meta.touched && meta.error && <Body color="text-red-400">{meta.error}</Body>}
                                    </>
                                )}
                            </Field>
                    </Stack>
                    <Pagination
                        loading={submitting}
                        forwardDisabled={hasValidationErrors}
                        onForward={handleSubmit}
                        backDisabled={submitting}
                        onBack={() => back()}
                    />
                </>
            )}
        </Form>
    )
}

export default Index