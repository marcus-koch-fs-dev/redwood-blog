<<<<<<< HEAD
import { render } from '@redwoodjs/testing/web'

import ContactPage from './ContactPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

=======
import { render } from '@redwoodjs/testing'

import ContactPage from './ContactPage'

>>>>>>> feat/chapter5
describe('ContactPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactPage />)
    }).not.toThrow()
  })
})
