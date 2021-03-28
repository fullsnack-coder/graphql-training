import { Express } from "express"
import { graphqlHTTP } from "express-graphql"
import { makeExecutableSchema } from "graphql-tools"

import rootResolvers from "./resolvers"
import { typeDefs as User } from "./user"

const Query = `
  type Query {
    getUser(name: String!): User
  }`

const Mutation = `
  type Mutation {
    registerUser(userInput: UserInput): [User]
  }
`

function configure(server: Express) {
  const schema = makeExecutableSchema({
    typeDefs: [Query, Mutation, User],
  })

  server.use(
    "/graphql",
    graphqlHTTP({
      schema,
      rootValue: rootResolvers,
      graphiql: true,
    })
  )
}

export default configure
