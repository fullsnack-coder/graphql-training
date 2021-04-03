import dotenv from "dotenv"

dotenv.config()

const configKeys = {
  port: process.env.PORT || 4000,
}

export default configKeys
