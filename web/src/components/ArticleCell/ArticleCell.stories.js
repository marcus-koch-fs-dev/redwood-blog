import { Loading, Empty, Failure, Success } from './ArticleCell'
import { standard } from './ArticleCell.mock'

export const loading = () => {
<<<<<<< HEAD
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? <Success {...standard()} /> : null
=======
    return Loading ? <Loading /> : null
}

export const empty = () => {
    return Empty ? <Empty /> : null
}

export const failure = () => {
    return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
    return Success ? <Success articles={standard().articles} /> : null
>>>>>>> feat/chapter5
}

export default { title: 'Cells/ArticleCell' }
