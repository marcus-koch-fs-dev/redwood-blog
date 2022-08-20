import BlogLayout from './BlogLayout'

<<<<<<< HEAD
export const generated = () => {
=======
export const loggedIn = () => {
  mockCurrentUser({ email: 'rob@redwoodjs.com' })

  return <BlogLayout />
}

export const loggedOut = () => {
>>>>>>> feat/chapter5
  return <BlogLayout />
}

export default { title: 'Layouts/BlogLayout' }
