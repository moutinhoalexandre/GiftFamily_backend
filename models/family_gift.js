import Sequelize from "sequelize";
import { sequelize } from "../config/config.json";

const Family_User = sequelize.define(
  "Family_User",
  {
    userId: Sequelize.INTEGER,
    familyId: Sequelize.INTEGER,
  },
  {
    timestamps: false,
  }
);

export default Family;
