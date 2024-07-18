// const { PrismaClient } = require("@prisma/client");

const { Sequelize, DataTypes } = require("sequelize");
const logger = require("./logger");
const dotenv = require("dotenv");

// exports.prisma = new PrismaClient();
dotenv.config();
const db = new Sequelize(process.env.DATABASE_URL, {
  logging: (msg) => logger.info(msg),
});

const User = db.define(
  "users",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = { db, User };
