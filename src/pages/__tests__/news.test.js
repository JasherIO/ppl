import React from "react"
import renderer from "react-test-renderer"

import data from './posts.json'
import NewsPage from '../news/index'

jest.mock('../../components/News-Cards', () => () => (<></>))

describe("NewsPage", () =>
  it("renders correctly", () => {
    const tree = renderer
      .create(<NewsPage data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))