export const typeDefs: string = `
    type User {
        username: String!
        email: String
        phone: Int
        password: String!
    }

    input UserInput {
        username: String!
        email: String
        phone: Int
        password: String!
    }
`

type User = {
  username: string
  email: string
  phone: string
  password: string
}

const registeredUsers: User[] = []

export const resolvers = {
  getUser: ({ name }: { name: string }) => ({
    username: name,
    email: "manueldev@asd.dev",
    phone: 987987987,
    password: "oiqus98ac9x08sqs",
  }),
  registerUser: ({ userInput }: { userInput: User }) => {
    registeredUsers.push(userInput)
    return registeredUsers
  },
}
