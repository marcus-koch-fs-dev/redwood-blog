<<<<<<< HEAD
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import {
    FieldError,
    Form,
    FormError,
    Label,
    TextField,
    TextAreaField,
    Submit,
    useForm,
} from '@redwoodjs/forms'

const CREATE_CONTACT = gql`
    mutation CreateContactMutation($input: CreateContactInput!) {
        createContact(input: $input) {
            id
        }
    }
`

const ContactPage = () => {
    const formMethods = useForm({ mode: 'onBlur' })
    const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
        onCompleted: () => {
            toast.success('Thank you for your submission!')
            formMethods.reset()
        },
    })

    const onSubmit = (data) => {
        create({ variables: { input: data } })
    }

    return (
        <>
            <MetaTags title="Contact" description="Contact page" />

            <Toaster />
            <Form
                onSubmit={onSubmit}
                config={{ mode: 'onBlur' }}
                error={error}
                formMethods={formMethods}
            >
                <FormError error={error} wrapperClassName="form-error" />

                <Label name="name" errorClassName="error">
                    Name
                </Label>
                <TextField
                    name="name"
                    validation={{ required: true }}
                    errorClassName="error"
                />
                <FieldError name="name" className="error" />

                <Label name="email" errorClassName="error">
                    Email
                </Label>
                <TextField
                    name="email"
                    validation={{
                        required: true,
                    }}
                    errorClassName="error"
                />
                <FieldError name="email" className="error" />

                <Label name="message" errorClassName="error">
                    Message
                </Label>
                <TextAreaField
                    name="message"
                    validation={{ required: true }}
                    errorClassName="error"
                />
                <FieldError name="message" className="error" />

                <Submit disabled={loading}>Save</Submit>
            </Form>
        </>
    )
=======
import { MetaTags } from '@redwoodjs/web'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Toaster />
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError
          error={error}
          wrapperClassName="py-4 px-6 rounded-lg bg-red-100 text-red-700"
          listClassName="list-disc ml-4"
          listItemClassName=""
        />
        <Label
          name="name"
          className="block text-gray-700 uppercase text-sm"
          errorClassName="block uppercase text-sm text-red-700"
        >
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          className="border rounded-sm px-2 py-1 outline-none"
          errorClassName="border rounded-sm px-2 py-1 border-red-700 outline-none"
        />
        <FieldError name="name" className="block text-red-700" />

        <Label
          name="email"
          className="block mt-8 text-gray-700 uppercase text-sm"
          errorClassName="block mt-8 text-red-700 uppercase text-sm"
        >
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          className="border rounded-sm px-2 py-1"
          errorClassName="border rounded-sm px-2 py-1 border-red-700 outline-none"
        />
        <FieldError name="email" className="block text-red-700" />

        <Label
          name="message"
          className="block mt-8 text-gray-700 uppercase text-sm"
          errorClassName="block mt-8 text-red-700 uppercase text-sm"
        >
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          className="block border rounded-sm px-2 py-1"
          errorClassName="block border rounded-sm px-2 py-1 border-red-700 outline-none"
        />
        <FieldError name="message" className="block text-red-700" />

        <Submit
          className="block bg-blue-700 text-white mt-8 px-4 py-2 rounded"
          disabled={loading}
        >
          Save
        </Submit>
      </Form>
    </>
  )
>>>>>>> feat/chapter5
}

export default ContactPage
