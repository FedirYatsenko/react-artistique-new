"use strict";

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::forest.forest", ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;
    const { body } = ctx.request;

    const newForest = await strapi.entityService.create("api::forest.forest", {
      data: {
        ...body.data,
        owner: {
          set: [user.id],
        },
      },
    });

    return { data: newForest };
  },
}));
