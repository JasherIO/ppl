import React from "react"
import renderer from "react-test-renderer"

import { PureSection, Title } from "../News"
import data from './posts.json'

describe("Title", () =>
  it("renders correctly", () => {
    const tree = renderer.create(<Title />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

jest.mock('../../components/News-Cards', () => () => (<></>))

describe("News Section", () =>
  it("renders correctly", () => {
    const tree = renderer
      .create(<PureSection data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))