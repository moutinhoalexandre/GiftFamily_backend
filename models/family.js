import Sequelize from "sequelize";
import { sequelize } from "../config/config.json";

const Family = sequelize.define(
  "Family",
  {
    name: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Family;