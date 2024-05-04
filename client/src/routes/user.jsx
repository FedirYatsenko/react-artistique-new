import { getUserById } from "../services/user";
import { getForests } from "../services/forest";
import { Link, useLoaderData } from "react-router-dom";
import style from "./auth/profile.module.css";
import ForestCard from "../components/ForestCard";

const loader = async ({ params }) => {
  const user = await getUserById(params.id);
  const forests = await getForests();
  return { user, forests };
};

const User = () => {
  const { user } = useLoaderData();
  const { forests } = useLoaderData();

  return (
    <>
      <div className={style.container}>
        <h2>{user.username}</h2>
        <ul className={style.data_container}>
          <li>Forests in the gallery: {user.forests.length}</li>
          <li>Member since: {new Date(user.createdAt).toLocaleDateString()}</li>
        </ul>
      </div>
      <section className={style.profile_gallery_container}>
        <h3 className={style.title}>Forests</h3>
        <ul className={style.list} id="gallery">
          {forests.some(forest => forest.owner.data.id === user.id) ? (
            [...forests]
            .filter(forest => forest.owner.data.id === user.id)
            .reverse()
            .map((forest) => (
              <li className={style.list_element} key={forest.id}>
                <Link to={`/forest/${forest.id}`}>
                  <ForestCard forest={forest} />
                </Link>
              </li>
           ))
           ) : (
             <p className={style.noForests}>You haven&apos;t created any forests yet</p>
           )}
       </ul>
      </section>
    </>
  );
};

User.loader = loader;

export default User;
