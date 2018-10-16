const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const slug = require('slug')
const moment = require('moment')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    _.each(posts, edge => {
      if (edge.node.frontmatter.templateKey === "home-post") {
        return
      }

      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        context: {
          id,
        },
      })
    })

    let tags = []
    _.each(posts, edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    tags = _.uniq(tags)

    _.each(tags, tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const { frontmatter } = node

  // https://github.com/gatsbyjs/gatsby/issues/8195
  if (_.has(node, ['frontmatter', 'cover'])) {
    const cover = _.get(node, ['frontmatter', 'cover'])
    if (cover.indexOf('/img') === 0) {
      frontmatter.cover = path.relative(
        path.dirname(node.fileAbsolutePath),
        path.join(__dirname, '/static/', cover)
      )
    }
  }

  if (_.has(node, ['frontmatter', 'sponsors'])) {
    _.each(node.frontmatter.sponsors, (sponsor) => {
      const image = sponsor.img
      if (image.indexOf('/img') === 0) {
        sponsor.img = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, '/static/', image)
        )
      }
    })
  }

  if (node.internal.type === `MarkdownRemark`) {
    // const value = createFilePath({ node, getNode, trailingSlash: false })

    // Temporary fix for https://github.com/netlify/netlify-cms/issues/1576
    let value
    if ( _.has(node, ['frontmatter', 'title']) && 
         _.has(node, ['frontmatter', 'date']) ) {
      const m = moment(node.frontmatter.date)
      value = slug(`${m.format("YYYY MM DD")} ${node.frontmatter.title}`, { "lower": true })
    } else {
      value = createFilePath({ node, getNode, trailingSlash: false })
    }

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
