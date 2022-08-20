<<<<<<< HEAD
import { render } from '@redwoodjs/testing/web'

import HomePage from './HomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

=======
import { render } from '@redwoodjs/testing'

import HomePage from './HomePage'

>>>>>>> feat/chapter5
describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
})
