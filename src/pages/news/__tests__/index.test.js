import React from "react"
import renderer from "react-test-renderer"
import { Title } from "../index"
import data from './data.json'
import NewsPage from '../index'

describe("NewsPage", () =>
  it("renders correctly", () => {
    const tree = renderer
      .create(<NewsPage data={data} />)
      .toJSON()
    
    expect(tree).toMatchSnapshot()
  }))