import React from "react"
import renderer from "react-test-renderer"

import { PureNavbar, Social } from "../Navbar"
import data from './__data__/navbar.json'

describe("Social", () =>
  it("renders correctly", () => {
    const tree = renderer.create(<Social social={data.site.siteMetadata.social} device='touch' />).toJSON()
    expect(tree).toMatchSnapshot()
  }))

describe("Navbar", () =>
  // Mock level

  it("renders correctly", () => {
    const tree = renderer
      .create(<PureNavbar data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))