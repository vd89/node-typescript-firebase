import DotEnv from 'dotenv'
DotEnv.config()

export default {
 port: process.env.PORT || '',
 environment: process.env.NODE_ENV || 'development',
}