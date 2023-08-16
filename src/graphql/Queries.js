import { gql } from "@apollo/client";
const GET_POSTS_INFO = gql`
  query {
    posts(stage: PUBLISHED, first: 30) {
      company {
        companysname
        companyAvatar {
          url
        }
      }
      slug
      title
      coverPhoto {
        url
      }
      id
      publishedDate
      content {
        text
      }
    }
  }
`;

const GET_COMPANIES_DATA = gql`
  query {
    companies {
      companysname
      companyAvatar {
        url
      }
      id
      slug
    }
  }
`;
const GET_COMPANY_DATA = gql`
  query getCompanyData($slug: String!) {
    company(where: { slug: $slug }) {
      companysname
      id
      slug
      companysField
      companysdescription {
        html
        text
      }
      companyAvatar {
        url
      }
      posts {
        title
        publishedDate
        slug
        id
        content {
          text
        }
        coverPhoto {
          url
        }
        company {
          companyAvatar {
            url
          }
        }
      }
    }
  }
`;
const GET_POST_DATA = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      content {
        html
      }
      coverPhoto {
        url
      }
      company {
        companysname
        companysField
        companyAvatar {
          url
        }
        slug
      }
    }
  }
`;

const GET_POST_COMMENTS = gql`
  query getcomments($slug: String!) {
    post(where: { slug: $slug }) {
      comments {
        email
        name
        text
      }
    }
  }
`;

export {
  GET_COMPANIES_DATA,
  GET_POSTS_INFO,
  GET_COMPANY_DATA,
  GET_POST_DATA,
  GET_POST_COMMENTS,
};
