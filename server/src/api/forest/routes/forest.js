"use strict";

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::forest.forest", {
  config: {
    update: {
      //auth: false, // set the route to bypass the normal Strapi authentication system
      policies: ["is-owner-forest"], // set the route to use a custom policy
      middlewares: [],
    },
  },
});
