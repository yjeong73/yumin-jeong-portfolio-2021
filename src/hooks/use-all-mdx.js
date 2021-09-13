import { useStaticQuery, graphql } from "gatsby"

export const useAllMdx = () => {
  const data = useStaticQuery(
    graphql`
        query MyQuery {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                  frontmatter {
                    date
                    goal
                    technology
                    title
                    hero_image {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                  id
                  slug
                  body
                }
            }
        }
    `
  )
  return data;
}
