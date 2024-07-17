// const { PrismaClient } = require("@prisma/client");

const { Sequelize } = require("sequelize");

// exports.prisma = new PrismaClient();

exports.sequelize = new Sequelize("studifo_auth_db", "root", "", {
  dialect: "mysql",
  host: "localhost",
});
