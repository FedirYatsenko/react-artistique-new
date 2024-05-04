import { Link, redirect, useFetcher, useLoaderData } from "react-router-dom";
import { getAuthData, getMe } from "../../services/auth";
import { getForests } from "../../services/forest";
import ForestCard from "../../components/ForestCard";
import style from "./profile.module.css";

const loader = async ({ request }) => {
  const { user } = getAuthData();
  if (!user) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/auth/login?" + params.toString());
  }

  const forests = await getForests();

  const profile = await getMe();
  return { profile, forests };
};

const Profile = () => {
  const { profile } = useLoaderData();
  const { forests } = useLoaderData();
  const fetcher = useFetcher();
  let isLoggingOut = fetcher.formData != null;

  return (
    <>
    <div className={style.container}>
      <h2>About Me</h2>
      <ul className={style.data_container}>
        <li>Name: {profile.username}</li>
        <li>Email: {profile.email}</li>
        <li>Forests in the gallery: {profile.forests.length}</li>
        <li>Member since: {new Date(profile.createdAt).toLocaleDateString()}</li>
        <li>
          <fetcher.Form method="post" action="/auth/logout">
            <button type="submit" disabled={isLoggingOut} className={style.logoutButton}>
              {isLoggingOut ? "Signing out..." : "Sign out"}
            </button>
          </fetcher.Form>
        </li>
      </ul>
    </div>
      <section className={style.profile_gallery_container}>
      <h3 className={style.title}>My forests</h3>
      <ul className={style.list} id="gallery">
          {forests.some(forest => forest.owner.data.id === profile.id) ? (
            [...forests]
            .filter(forest => forest.owner.data.id === profile.id)
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

Profile.loader = loader;

export default Profile;
