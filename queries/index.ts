import { graphQLSchemaExtension } from '@keystone-6/core';

import siteData from './siteData';
import createSiteCDCD from './createSiteCDCD';

// make a fake graphql tagged template literal
const graphql = String.raw;


export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Query {
      siteData(id: ID!): SiteData
    }
    type Mutation {
      createSiteCDCD(title: String!, url: String!, frontendUrl: String): Site!
    }
    type SiteData {
      latestPost: String
      latestUpdate: String
      error: String
      customTypes: [String]
      typeOptions: [String]
    }
  `,
  resolvers: {
    Query: {
      siteData
    },
    Mutation: {
      createSiteCDCD
    }
  }
});