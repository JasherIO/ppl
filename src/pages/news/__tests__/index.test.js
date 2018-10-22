import React from "react"
import renderer from "react-test-renderer"
import { Title } from "../index"
import data from './data.json'
import NewsPage from '../index'

jest.unmock('moment')
const moment = jest.requireActual('moment')

describe("NewsPage", () =>
  it("renders correctly", () => {
    moment.prototype.fromNow = jest.fn()
      .mockReturnValueOnce('4 days ago')
      .mockReturnValueOnce('16 days ago')
      .mockReturnValueOnce('19 days ago')

    const tree = renderer
      .create(<NewsPage data={data} />)
      .toJSON()
    
    expect(tree).toMatchSnapshot()
  }))