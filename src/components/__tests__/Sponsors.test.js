import React from "react"
import renderer from "react-test-renderer"

import { PureSection, Level } from "../Sponsors"
import data from './__data__/home.json'

describe("Level", () =>
  it("renders correctly", () => {
    const tree = renderer.create(<Level sponsors={data.markdownRemark.sponsors} />).toJSON()
    expect(tree).toMatchSnapshot()
  }),
  it("renders nothing", () => {
    const tree = renderer.create(<Level sponsors={[]} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

describe("Sponsor Section", () =>
  // Mock level

  it("renders correctly", () => {
    const tree = renderer
      .create(<PureSection data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))