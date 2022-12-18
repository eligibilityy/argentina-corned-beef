const { Client } = require("discord.js");
const { activityInterval, database } = require("../../../config.json")
const mongoose = require('mongoose')

module.exports = {
  name: "ready",
  rest: false,
  once: false,
  /**
   * @param {Client} client
   */
  async execute(client) {

    /* Connect to database */
    if(!database) return;
    mongoose.connect(database, {}).then(() => console.log("[NOTICE] Connected to database.")  
    ).catch((err) => console.error(err))

    console.log(
      `${client.user.tag} W`
    );
    updateActivity(client)
  },
};

/**
 * @param {Client} client
 */
async function updateActivity(client) {

  const activities = [
    `/argentina`,
    `https://centurypacific.com.ph/brands/argentina`,
    `Be a Proud Argentina Corned Beef Consumer! /argentina`
  ]

  setInterval(() => {
    const status = activities[Math.floor(Math.random() * activities.length)]
    client.user.setActivity(status)
  }, activityInterval*1000)
}