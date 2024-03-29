import { Loading, Empty, Failure, Success } from './ArticlesCell'
import { standard } from './ArticlesCell.mock'
// import { standard } from './ArticlesCell.mock'

export const loading = () => {
    return Loading ? <Loading /> : null
}

export const empty = () => {
    return Empty ? <Empty /> : null
}

export const failure = () => {
    return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
    console.log(standard)
    return Success ? <Success {...standard()} /> : null
}

export default { title: 'Cells/ArticlesCell' }
