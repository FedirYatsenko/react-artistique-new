import { fetchApi } from "./strapi";

const getUserById = async (id) => {
  const user = await fetchApi({
    endpoint: `users/${id}`,
    query: { populate: ["forests"] },
  });
  console.log("user", user);
  return user;
};

export { getUserById };
