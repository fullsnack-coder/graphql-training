import { Server } from "node:http"
import { Express } from "express"

export interface ConfigServer {
  server: Express
  initialize: () => Server
}
