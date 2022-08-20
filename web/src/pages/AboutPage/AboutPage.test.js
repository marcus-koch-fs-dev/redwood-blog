<<<<<<< HEAD
import { render } from '@redwoodjs/testing/web'

import AboutPage from './AboutPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

=======
import { render } from '@redwoodjs/testing'

import AboutPage from './AboutPage'

>>>>>>> feat/chapter5
describe('AboutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutPage />)
    }).not.toThrow()
  })
})
