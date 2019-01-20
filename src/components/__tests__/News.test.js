import React from "react"
import renderer from "react-test-renderer"

import { PureSection, Level } from "../News"
import data from './__data__/posts.json'

describe("Level", () =>
  it("renders correctly", () => {
    const tree = renderer.create(<Level />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

jest.mock('../../components/News-Cards', () => () => (<></>))

describe("News Section", () =>
  // Mock level

  it("renders correctly", () => {
    const tree = renderer
      .create(<PureSection data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))