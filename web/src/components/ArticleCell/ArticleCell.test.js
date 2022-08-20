<<<<<<< HEAD
import { render } from '@redwoodjs/testing/web'
import { Loading, Empty, Failure, Success } from './ArticleCell'
import { standard } from './ArticleCell.mock'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//        https://redwoodjs.com/docs/testing#testing-cells
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ArticleCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  // 1. import { screen } from '@redwoodjs/testing/web'
  // 2. Add test: expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success article={standard().article} />)
    }).not.toThrow()
  })
=======
import Article from 'web/src/components/Article/Article'

import { render, screen } from '@redwoodjs/testing'

const ARTICLE = {
    id: 1,
    title: 'First post',
    body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
    createdAt: new Date().toISOString(),
}

describe('Article', () => {
    it('renders a blog post', () => {
        render(<Article article={ARTICLE} />)

        expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
        expect(screen.getByText(ARTICLE.body)).toBeInTheDocument()
    })

    it('renders a summary of a blog post', () => {
        render(<Article article={ARTICLE} summary={true} />)

        expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
        expect(
            screen.getByText(
                'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Str...'
            )
        ).toBeInTheDocument()
    })
>>>>>>> feat/chapter5
})
