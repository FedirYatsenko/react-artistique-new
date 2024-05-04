import { getForestById, getForests, deleteForest } from "../services/forest";
import { Link, useLoaderData, useRouteLoaderData, useNavigate } from "react-router-dom";
import ForestCard from "../components/ForestCard";
import styles from "./forestDetail.module.css";
import Drawing from "../components/Drawing";

const loader = async ({ params }) => {
  const id = params.id;
  const forest = await getForestById(id);
  const forests = await getForests();
  return { forest, forests };
};

const ForestDetail = () => {
  const { forest } = useLoaderData();
  const { forests } = useLoaderData();
  const { user } = useRouteLoaderData("root");
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteForest(forest.id);
    navigate("/gallery");
  }

  return (
    <div>
      <div className={styles.container}>
      <div className={styles.drawingPreviewScale}>
      <div className={styles.drawingPreview}>
      <Drawing {...forest.attributes.parameters.parameters}/>
      </div>
      </div>
      
      <div>
        <div className={styles.buttonsBlock}>
        {user && user.id === forest.owner.data.id && (
          <>
          <Link to={`/forest/${forest.id}/edit`}>
            <p className={`${styles.button} ${styles.buttonEdit}`}>
              Edit
            </p>
          </Link>
            <p onClick={() => handleDelete(forest.id)} className={`${styles.button} ${styles.buttonDelete}`}>
            Delete
          </p>
          </>
        )}
        </div>
        <dl>
          {forest.owner.data && (
            <>
              <dt>Created by</dt>
              <dd>
                {user && user.id === forest.owner.data.id ? (
                  <Link to={`/auth/profile`} className={styles.link}>
                    you
                  </Link>
                  ) : (
                  <Link to={`/user/${forest.owner.data.id}`} className={styles.link}>
                    {forest.owner.data.attributes.username}
                  </Link>
                )}
              </dd>
            </>
          )}
        
        <dt>Season</dt>
          <dd>{forest.attributes.parameters.parameters.season}</dd>
        <dt>Color variability</dt>
          <dd>{forest.attributes.parameters.parameters.colorVariability}%</dd>
        <dt>Size of plants</dt>
          <dd>{
          forest.attributes.parameters.parameters.size < 9 ? "Tiny" :
          forest.attributes.parameters.parameters.size < 11 ? "Small" :
          forest.attributes.parameters.parameters.size < 14 ? "Medium" :
          forest.attributes.parameters.parameters.size < 17 ? "Big" : "Large" 
          }</dd>
        </dl>
      </div>
      </div>
      {
  forests.filter(f => f.owner.data.id === forest.owner.data.id && f.id !== forest.id).length > 0 && (
    <>
      <p className={styles.title}>
        {user && user.id === forest.owner.data.id ? 'Your other forests' : `Other forests by ${forest.owner.data.attributes.username}`}
      </p>
      <ul className={styles.list} id="gallery">
        {[...forests]
          .filter(otherForest => otherForest.owner.data.id === forest.owner.data.id && otherForest.id !== forest.id)
          .reverse()
          .map((otherForest) => (
            <li className={styles.list_element} key={otherForest.id}>
              <Link to={`/forest/${otherForest.id}`}>
                <ForestCard forest={otherForest} />
              </Link>
            </li>
          ))}
      </ul>
    </>
  )
}
  </div>
);
};

ForestDetail.loader = loader;

export default ForestDetail;
