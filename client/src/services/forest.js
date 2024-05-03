import { getToken } from "./auth";
import { fetchApi, unwrapAtributes } from "./strapi";

const getForests = async () => {
  const forests = await fetchApi({ 
    endpoint: "forests", 
    wrappedByKey: "data",
    query: { populate: ["owner"] },
  });
  if (!forests) return [];
  return forests.map(unwrapAtributes);
};

const createForest = async (data) => {
  const forest = await fetchApi(
    {
      endpoint: "forests",
    },
    {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return unwrapAtributes(forest);
};

const updateForest = async (id, data) => {
  const forest = await fetchApi(
    {
      endpoint: `forests/${id}`,
    },
    {
      method: "PUT",
      body: JSON.stringify({ data }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  return unwrapAtributes(forest);
};

const deleteForest = async (id) => {
  await fetchApi(
    {
      endpoint: `forests/${id}`,
    },
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
};

const getForestById = async (id) => {
  const forest = await fetchApi({
    endpoint: `forests/${id}`,
    query: { populate: ["owner"] },
    wrappedByKey: "data",
  });
  return unwrapAtributes(forest);
};

export { getForests, createForest, updateForest, deleteForest, getForestById };
