import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { rhythm } from '../utils/typography';

import Layout from '../components/layout';

const NarrowerH3 = styled.h3`
  margin-top: ${rhythm(1)};
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <NarrowerH3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </NarrowerH3>
              <small>{node.frontmatter.date}</small>
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const indexQuery = graphql`
  query iQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
