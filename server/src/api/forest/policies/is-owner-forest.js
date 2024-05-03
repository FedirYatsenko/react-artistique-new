const { errors } = require("@strapi/utils");
const { ApplicationError } = errors;

module.exports = async (policyContext, config, { strapi }) => {
  const { body, params } = policyContext.request;
  const { user } = policyContext.state;

  console.log("body", body);
  // Return an error if there is no authenticated user with the request
  if (!user) {
    console.log("no user");
    return false;
  }

  const [forest] = await strapi.entityService.findMany("api::forest.forest", {
    filters: {
      id: params.id,
    },
    populate: ["owner"],
  });
  console.log("FOREST found", forest);
  if (!forest) {
    return false;
  }

  if (user.id != forest?.owner?.id) {
    /**
     * Throws a custom policy error
     * instead of just returning false
     * (which would result into a generic Policy Error).
     */
    console.log("policy error");
    const error = new ApplicationError(
      "Only the owner of the forest can perform this action.",
      {
        policy: "is-owner-forest",
        errCode: "FOREST_OWNER",
      }
    );
    error.name = "OwnerForestError";
    throw error;
  }

  return true;
};
