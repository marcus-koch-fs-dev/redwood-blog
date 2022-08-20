import Article from 'src/components/Article'

export const QUERY = gql`
<<<<<<< HEAD
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
=======
    query ArticlesQuery {
        articles: posts {
            id
            title
            body
            createdAt
        }
    }
>>>>>>> feat/chapter5
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

<<<<<<< HEAD
export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article }) => <Article article={article} />
=======
export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ article }) => {
    return (
        <div className="space-y-10">
            {/* {articles.map((article) => ( */}
            <Article article={article} key={article.id} summary={true} />
            {/* ))} */}
        </div>
    )
}
>>>>>>> feat/chapter5
