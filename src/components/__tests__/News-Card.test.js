import React from "react"
import renderer from "react-test-renderer"
import data from './__data__/post.json'
import Card from "../News-Card"

jest.unmock('moment')
const moment = jest.requireActual('moment')

describe("News Card", () =>
  it("renders correctly", () => {
    moment.prototype.fromNow = jest.fn()
      .mockReturnValue('4 days ago')

    const tree = renderer.create(<Card post={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))