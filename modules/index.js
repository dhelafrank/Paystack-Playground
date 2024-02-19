require('dotenv').config()

const Configs = {
    projectName: process.env.PROJECT_NAME,
    port: process.env.PORT,
    databaseUrl: `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASS}@${process.env.DATABASE_URI}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    paystack: {
        test: {
            secret: process.env.TEST_SECRET_KEY,
            public: process.env.TEST_PUBLIC_KEY
        },
        live: {
            secret: process.env.LIVE_SECRET_KEY,
            public: process.env.LIVE_PUBLIC_KEY
        }
    }
}

module.exports = {Configs}