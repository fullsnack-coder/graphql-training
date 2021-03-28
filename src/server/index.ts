import cors from "cors"
import dotenv from "dotenv"
import { Server } from "node:http"
import express, { Express } from "express"

import router from "../router"
import configure from "../graphql/configure"

dotenv.config()

interface ConfigServer {
  server: Express
  initialize: () => Server
}

function AppServer(): ConfigServer {
  const server = express()
  server.use(cors())

  configure(server)
  server.use(router)
  server.set("port", process.env.PORT || 3999)

  function initialize() {
    const instance = server.listen(server.get("port"))
    console.log(`Server running on: http://localhost:${server.get("port")}`)
    return instance
  }

  return {
    server,
    initialize,
  }
}

export default AppServer()
