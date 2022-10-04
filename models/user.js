import Sequelize from 'sequelize';
import { sequelize } from '../config/config.json'


const User = sequelize.define(
  "User",
  {
    name: {
      type: Sequelize.STRING,
      required: true,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export default User;
