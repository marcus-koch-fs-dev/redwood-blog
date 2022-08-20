<<<<<<< HEAD
import { render } from '@redwoodjs/testing/web'

import ArticlePage from './ArticlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

=======
import { render } from '@redwoodjs/testing'

import ArticlePage from './ArticlePage'

>>>>>>> feat/chapter5
describe('ArticlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticlePage />)
    }).not.toThrow()
  })
})
