const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    prefix: {
        "type": String,
        "default": defaults.prefix
    },
    welcomeChannel: {
        "type": String,
        "default": defaults.welcomeChannel
    }
});

module.exports = mongoose.model("Guild", guildSchema);