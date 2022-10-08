import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query AllProjects {
    projects {
      name
      description
      link {
        url
        type
      }
      projectTechStack {
        tech
      }
    }
  }
`;
