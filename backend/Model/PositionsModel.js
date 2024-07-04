const { model } = require("mongoose");

const { PositionsSchema } = require("../Schema/PositionSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };