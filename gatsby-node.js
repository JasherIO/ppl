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

const toCategoryTemplate = (category) => {
  const categoryPath = `/news/categories/${_.kebabCase(category)}`
  return {
    path: categoryPath,
    component: path.resolve(`src/templates/category.js`),
    context: {
      category,
    },
  }
}

const toTeamTemplate = (teamId) => {
  return {
    path: `/team/${teamId}`,
    component: path.resolve(`src/templates/team.js`),
    context: {
      teamId,
    }
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
              category
            }
          }
        }
      }
      allRank(filter: { alternative_id: {gt: 0} }) {
        edges {
          node {
            id
            alternative_id
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

    const categories = _.uniq(_.compact(_.flatMap(posts, edge => edge.node.frontmatter.category)))
    _.each(categories, category => createPage(toCategoryTemplate(category)))

    const teamIds = _.flatMap(result.data.allRank.edges, edge => edge.node.alternative_id)
    _.each(teamIds, teamId => createPage(toTeamTemplate(teamId)))
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
