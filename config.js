import dotenv from 'dotenv';
dotenv.config();

const envVarNames = [
    "SERVER_PORT",
    "DB_ATLAS_USER",
    "DB_ATLAS_PASSWORD",
    "DB_ATLAS_HOST",
    "DB_LOCAL_USER",
    "DB_LOCAL_PASSWORD",
    "DB_LOCAL_HOST",
    "DB_LOCAL_PORT",
    "DB_LOCAL_DATABASE",
];

let envVars = {};

envVarNames.forEach(varName => {
    if (process.env[varName] === undefined) {
        throw new Error(`Missing environment variable '${varName}'`);
    }
    envVars[varName] = process.env[varName];
})

const getAtlasMongoURL = () => {
    const { DB_ATLAS_USER, DB_ATLAS_PASSWORD, DB_ATLAS_HOST } = envVars;
    return `mongodb+srv://${DB_ATLAS_USER}:${DB_ATLAS_PASSWORD}@${DB_ATLAS_HOST}/?retryWrites=true&w=majority`;
}

const getLocalMongoURL = () => {
    const { DB_LOCAL_USER, DB_LOCAL_PASSWORD, DB_LOCAL_HOST, DB_LOCAL_PORT, DB_LOCAL_DATABASE } = envVars;
    return `mongodb://${DB_LOCAL_USER}:${DB_LOCAL_PASSWORD}@${DB_LOCAL_HOST}:${DB_LOCAL_PORT}/${DB_LOCAL_DATABASE}?authSource=admin`;
}

export default {
    ...envVars,
    isDevelopment: process.env.NODE_ENV === "development",
    LOCAL_MONGO_URL: getLocalMongoURL(),
    ATLAS_MONGO_URL: getAtlasMongoURL()
}