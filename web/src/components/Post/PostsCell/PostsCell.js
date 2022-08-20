import { Link, routes } from '@redwoodjs/router'

import Posts from 'src/components/Post/Posts'

export const QUERY = gql`
<<<<<<< HEAD
  query FindPosts {
=======
  query POSTS {
>>>>>>> feat/chapter5
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No posts yet. '}
      <Link to={routes.newPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

<<<<<<< HEAD
export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

=======
>>>>>>> feat/chapter5
export const Success = ({ posts }) => {
  return <Posts posts={posts} />
}
