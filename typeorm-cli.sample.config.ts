import { DataSource } from "typeorm";

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "some",
    password: "some",
    database: "nestjs_blog_api",
    entities: ["**/*.entity.js"],
    migrations: ["migrations/*.js"]
});