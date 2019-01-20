import React from "react"
import renderer from "react-test-renderer"

import { PureSection } from "../Hero"
import data from './__data__/home.json'

describe("Hero Section", () =>
  it("renders correctly", () => {
    const tree = renderer
      .create(<PureSection data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))