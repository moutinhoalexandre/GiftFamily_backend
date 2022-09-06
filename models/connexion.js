import { Sequelize } from "sequelize";
import "dotenv/config";

// Setting up database (MariaDB) connection
export const sequelyze = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: "mariadb",
  }
);

try {
  await sequelyze.authenticate();
  console.log("Connection has been established successfully 😉. ");
} catch (error) {
  console.error("Unable to connect to the databse: ", error);
}
