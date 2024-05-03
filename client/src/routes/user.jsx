import { getUserById } from "../services/user";
import { Link, useLoaderData } from "react-router-dom";

const loader = async ({ params }) => {
  const user = await getUserById(params.id);
  return { user };
};

const User = () => {
  const { user } = useLoaderData();
  return (
    <>
      <h2>{user.username}</h2>
      <p>Forest lover since {user.createdAt}</p>

      <section>
        <h3>Forests</h3>
        <ul>
          {user.forests.map((forest) => (
            <li key={forest.id}>
              <Link to={`/forest/${forest.id}`}>{forest.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

User.loader = loader;

export default User;
