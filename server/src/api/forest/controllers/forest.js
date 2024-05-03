"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::forest.forest", ({ strapi }) => ({
  /**
   * As the controller action is named
   * exactly like the original `create` action provided by the core controller,
   * it overwrites it.
   */
  async create(ctx) {

    const newForest = await strapi.service("api::forest.forest").create(ctx);

    const sanitizedForest = await this.sanitizeOutput(newForest, ctx);

    ctx.body = sanitizedForest;
  },
}));
