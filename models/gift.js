import Sequelize from "sequelize";
import { sequelize } from "../config/config.json";

const Gift = sequelize.define(
  "Gift",
  {
    name: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
    },
    description: {
      type: Sequelize.STRING,
    },
    link: {
      type: Sequelize.STRING,
    },
    createdBy: {
      type: Sequelize.INTEGER,
      required: true,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    giftFor: {
      type: Sequelize.INTEGER,
      required: true,
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: "Disponible",
    },
    reservedBy: {
      type: Sequelize.INTEGER,
    },
    gifreservedAttFor: {
      type: Sequelize.DAE,
    },
  },
  {
    timestamps: false,
  }
);

export default Gift;
