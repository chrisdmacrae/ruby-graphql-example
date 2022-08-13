import {Heading} from "../../../../components/heading";
import {Body} from "../../../../components/text";
import {Stack} from "../../../../components/stack";
import {Button} from "../../../../components/button";
import {Form, Field} from 'react-final-form'
import {useGetStarted} from "../../../../view-models/get-started";
import {Pagination} from "../../../../components/pagination";
import {useState} from "react";
import {gql, useMutation} from "@apollo/client";

export const Link: React.FC = () => {
    const {back, forward} = useGetStarted()
    const [verifyingBy, setVerifyingBy] = useState<"email" | "sms" | null>(null)

    const [requestEmailCode] = useMutation(gql`
        mutation RequestEmailVerificationCode {
            requestEmailVerificationCode(input: {}) {
                sent
            }
        }
    `)
    const verifyByEmail = () => {
        setVerifyingBy("email")
        requestEmailCode()
    }

    const [requestSmsCode] = useMutation(gql`
        mutation RequestPhoneVerificationCode {
            requestPhoneVerificationCode(input: {}) {
                sent
            }
        }
    `)
    const verifyBySms = () => {
        setVerifyingBy("sms")
        requestSmsCode()
    }

    const [verifyEmail] = useMutation<any, any>(gql`
        mutation VerifyEmail($code: String!) {
            verifyEmail(input: { code: $code }) {
                user {
                  id
                  phoneVerifiedAt
                }
                verified
            }
        }
    `)
    const [verifySms] = useMutation<any, any>(gql`
        mutation VerifySms($code: String!) {
            verifyPhoneNumber(input: { code: $code }) {
                user {
                  id
                  phoneVerifiedAt
                }
                verified
            }
        }
    `)
    const onSubmit = async (values: any) => {
        if (values.email_code) {
            const {data} = await verifyEmail({
                variables: { code: values.email_code }
            })

            if (data.verifyEmail.verified) forward({})
        }

        if (values.sms_code) {
            const {data} = await verifySms({
                variables: { code: values.sms_code }
            })

            if (data.verifyPhoneNumber.verified) forward({})
        }
    }
    const required = (val: any) => (val ? undefined : 'Required')

    return (
        <Form onSubmit={onSubmit}>
            {({handleSubmit, hasValidationErrors, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <Stack direction="vertical" gap={3} className="pb-12">
                        <Heading>Verify your identity</Heading>
                        <Body>
                            Budget Buddy requires access to your verify your identity in order to use the service.
                            <br />
                            <br />
                            You can do this via email or SMS.
                            <br />
                            <br />
                        </Body>
                        <Stack direction="horizontal" gap={3}>
                            <Button onClick={verifyByEmail}>Verify by Email</Button>
                            <Button onClick={verifyBySms}>Verify by SMS</Button>
                        </Stack>
                        {verifyingBy === "email" && (
                            <>
                                <br />
                                <Heading level={4}>We've sent you a confirmation email</Heading>
                                <p>Please enter the confirmation code from the email below</p>
                                <Field name="email_code" validate={required}>
                                    {({input, meta}) => (
                                        <>
                                            <input {...input} disabled={submitting} type="tel" id="email_code" className="w-full md:w-96 px-4 py-2 border-2 border-zinc-600" />
                                            {meta.touched && meta.error && <Body color="text-red-400">{meta.error}</Body>}
                                        </>
                                    )}
                                </Field>
                            </>
                        )}
                        {verifyingBy === "sms" && (
                            <>
                                <br />
                                <Heading level={3}>We've sent you a confirmation text</Heading>
                                <p>Please enter the confirmation code from the text below</p>
                                <Field name="sms_code" validate={required}>
                                    {({input, meta}) => (
                                        <>
                                            <input {...input} disabled={submitting} type="tel" id="sms_code" className="w-full md:w-96 px-4 py-2 border-2 border-zinc-600" />
                                            {meta.touched && meta.error && <Body color="text-red-400">{meta.error}</Body>}
                                        </>
                                    )}
                                </Field>
                            </>
                        )}
                    </Stack>
                    <Pagination
                        onForward={handleSubmit}
                        forwardDisabled={hasValidationErrors}
                        onBack={back}
                    />
                </form>
            )}
        </Form>
    )
}

export default Link