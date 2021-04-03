import cors from "cors"
import express from "express"

import router from "../router"
import graphqlConfigure from "../graphql/configure"
import { ConfigServer } from "./server.types"
import configKeys from "../config/keys"

function AppServer(): ConfigServer {
  const server = express()
  server.use(cors())

  function config() {
    graphqlConfigure(server)
    server.use(router)
    server.set("port", configKeys.port)
  }

  function initialize() {
    config()
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
