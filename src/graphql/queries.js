import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query repositories(
    $after: String
    $first: Int
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $ownerName: String
  ) {
    repositories(
      after: $after
      first: $first
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      ownerName: $ownerName
    ) {
      edges {
        node {
          createdAt
          description
          forksCount
          fullName
          id
          language
          name
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query authorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            repository {
              name
              ownerName
            }
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          # totalCount
          hasNextPage
        }
      }
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      id
      createdAt
      fullName
      description
      language
      forksCount
      name
      ownerAvatarUrl
      ownerName
      ratingAverage
      reviewCount
      stargazersCount
      url
        reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;