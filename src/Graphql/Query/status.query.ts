import { gql } from "urql";

export const GET_STATUS = gql`
query MyQuery {
    personalStatuses(last: 1) {
      image {
        url
      }
      title
      rive
      description {
        html
      }
    }
}
`