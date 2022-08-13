import {Heading} from "../../../../components/heading";
import {Body} from "../../../../components/text";
import {Stack} from "../../../../components/stack";
import {Pagination} from "../../../../components/pagination";
import {useGetStarted} from "../../../../view-models/get-started";
import {Form, Field} from 'react-final-form'

export const Index: React.FC = () => {
    const {back, forward, data} = useGetStarted()
    const onSubmit = (formData: Record<string, any>) => {
        return forward(formData)
    }
    const required = (val: any) => (val ? undefined : 'Required')

    return (
        <Form onSubmit={onSubmit} initialValues={data}>
            {({handleSubmit, hasValidationErrors, submitting}) => (
                <>
                    <Stack direction="vertical" gap={3} className="pb-12">
                        <Heading>Your Personal Information</Heading>
                        <Body>Tell us a little bit about yourself</Body>
                            <label htmlFor="first_name">First name:</label>
                            <Field name="first_name" validate={required}>
                                {({input, meta}) => (
                                    <>
                                        <input {...input} disabled={submitting} type="text" id="first_name" className="w-full md:w-96 px-4 py-2 border-2 border-zinc-600" />
                                        {meta.touched && meta.error && <Body color="text-red-400">{meta.error}</Body>}
                                    </>
                                )}
                            </Field>
                            <label htmlFor="last_name">Last name:</label>
                            <Field name="last_name" validate={required}>
                                {({input, meta}) => (
                                    <>
                                        <input {...input} disabled={submitting} type="text" id="last_name" className="w-full md:w-96 px-4 py-2 border-2 border-zinc-600" />
                                        {meta.touched && meta.error && <Body color="text-red-400">{meta.error}</Body>}
                                    </>
                                )}
                            </Field>
                        <label htmlFor="email">Email:</label>
                        <Field name="email" validate={(val) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val) ? undefined : 'Must provide an email'}>
                            {({input, meta}) => (
                                <>
                                    <input {...input} disabled={submitting} type="email" id="email" className="w-full md:w-96 px-4 py-2 border-2 border-zinc-600" />
                                    {meta.touched && meta.error && <Body color="text-red-400">{meta.error}</Body>}
                                </>
                            )}
                        </Field>
                        <label htmlFor="phone">Phone:</label>
                        <Field name="phone_number" validate={required}>
                            {({input, meta}) => (
                                <>
                                    <input {...input} disabled={submitting} type="tel" id="phone_number" className="w-full md:w-96 px-4 py-2 border-2 border-zinc-600" />
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