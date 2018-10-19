const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const slug = require('slug')
const moment = require('moment')

const toTemplate = (edge) => {
  const id = edge.node.id
  return {
    path: edge.node.fields.slug,
    component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
    context: {
      id,
    },
  }
}

const toTagTemplate = (tag) => {
  const tagPath = `/tags/${_.kebabCase(tag)}/`
  return {
    path: tagPath,
    component: path.resolve(`src/templates/tags.js`),
    context: {
      tag,
    },
  }
}

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
              templateKey
              tags
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

    const edges = result.data.allMarkdownRemark.edges

    const posts = _.filter(edges, edge => _.includes(['page', 'post'], edge.node.frontmatter.templateKey))
    _.each(posts, edge => createPage(toTemplate(edge)))

    const tags = _.uniq(_.compact(_.flatMap(posts, edge => edge.node.frontmatter.tags)))
    _.each(tags, tag => createPage(toTagTemplate(tag)))

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
