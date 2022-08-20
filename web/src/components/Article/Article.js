import { Link, routes } from '@redwoodjs/router'

<<<<<<< HEAD
const Article = ({ article }) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
=======
const truncate = (text, length) => {
    return text.substring(0, length) + '...'
}

const Article = ({ article, summary = false }) => {
    return (
        <article className="mt-10">
            <header>
                <h2 className="text-xl text-blue-700 font-semibold">
                    <Link to={routes.article({ id: article.id })}>
                        {article.title}
                    </Link>
                </h2>
            </header>
            <div className="mt-2 text-gray-900 font-light">
                {summary ? truncate(article.body, 100) : article.body}
            </div>
        </article>
    )
>>>>>>> feat/chapter5
}

export default Article
