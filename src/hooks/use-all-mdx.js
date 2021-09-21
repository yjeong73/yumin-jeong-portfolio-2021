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
