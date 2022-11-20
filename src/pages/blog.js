import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
    return(
        <Layout pageTitle="Mis publicaciones de blog">
            <ul>
            {
                data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }    
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            nodes {
                name
            }
        }
  }
`

export const Head = () => <Seo title="Mis publicaciones de blog" />

export default BlogPage