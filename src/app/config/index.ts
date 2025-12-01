import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") })

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  // number of salt rounds for bcrypt (default to 10)
  saltRounds: Number(process.env.SALT_ROUNDS) || 10,
  // JWT settings
  jwtSecret: process.env.JWT_SECRET || '7f$9mK#2xL@pQ!vR*wN&yB%zC^dE+jF|gH~sT(uV)aW=bX[cY]dZ{eF}hG<iJ>kL',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h'
}