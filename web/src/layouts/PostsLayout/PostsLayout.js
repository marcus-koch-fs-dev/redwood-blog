import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

<<<<<<< HEAD
const PostsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
=======
const PostsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
>>>>>>> feat/chapter5
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.posts()} className="rw-link">
            Posts
          </Link>
        </h1>
        <Link to={routes.newPost()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Post
        </Link>
      </header>
<<<<<<< HEAD
      <main className="rw-main">{children}</main>
=======
      <main className="rw-main">{props.children}</main>
>>>>>>> feat/chapter5
    </div>
  )
}

export default PostsLayout
