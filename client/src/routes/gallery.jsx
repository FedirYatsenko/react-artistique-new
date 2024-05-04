import { useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { getForests } from "../services/forest";
import ForestCard from "../components/ForestCard";
import styles from "./gallery.module.css";
import plus from '../assets/images/plus.png';

const loader = async () => {
  const forests = await getForests();
  return { forests };
};

const Gallery = () => {

  const { forests } = useLoaderData();

  const [filterSeason, setFilterSeason] = useState("all");
  const [sorting, setSorting] = useState("new");
  const [filterWood, setFilterWood] = useState("all");


  const handleSeasonChange = (v) => {
    setFilterSeason(v.target.value);
  }
  const handleSortingChange = (v) => {
    setSorting(v.target.value);
  }
  const handleWoodChange = (v) => {
    setFilterWood(v.target.value);
  }




  return (
    <div className={styles.wrapper}>
    <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <h2 className={styles.title}>Gallery</h2>
          <p>Share yours and view others generated forests</p>
        </div>
      <div className={styles.buttonsContainer}>
        <Link to="/forest/create">
          <img src={plus} alt="plus" className={styles.add} />
          <p className={styles.textAdd}>Create your own forest</p>
        </Link>
      </div>
    </div>
    <div className={styles.filtersContainer}>
      <label htmlFor="season" className={styles.filterText}>Season: </label>
      <select id="season" name="season" className={styles.filterDroplist} onChange={(v) => handleSeasonChange(v)}>
        <option value="all">All</option>
        <option value="spring">Spring</option>
        <option value="summer">Summer</option>
        <option value="autumn">Autumn</option>
        <option value="winter">Winter</option>
      </select>
        
      <label htmlFor="sorting" className={styles.filterText}>Sort by: </label>
      <select id="sorting" name="sorting" className={styles.filterDroplist} onChange={(v) => handleSortingChange(v)}>
        <option value="new">New to old</option>
        <option value="old">Old to new</option>
      </select>
        
      <label htmlFor="wood" className={styles.filterText}>Including wood: </label>
      <select id="wood" name="wood" className={styles.filterDroplist} onChange={(v) => handleWoodChange(v)}>
        <option value="all">All</option>
        <option value="true">With</option>
        <option value="false">Without</option>
      </select>
    </div>
    <ul className={styles.list} id="gallery">
  {(() => {
    const filteredForests = [...forests].filter(forest =>
      (filterSeason && filterSeason !== "all" ? forest.attributes.parameters.parameters.season === filterSeason : true) &&
      (filterWood !== "all" ? forest.attributes.parameters.parameters.woodIncluded.toString() === filterWood : true)
    );

    const sortedForests = sorting === "new" ? filteredForests.reverse() : filteredForests;

    return (
      <ul className={styles.list} id="gallery">
        {sortedForests.length > 0 ? (
          sortedForests.map((forest) => (
            <li key={forest.id} className={styles.list_element}>
              <Link to={`/forest/${forest.id}`}>
                <ForestCard forest={forest} />
              </Link>
            </li>
          ))
        ) : (
          <p className={styles.noForests}>
            There are no forests that fit the filters.<br />
            Change the filters or create a new forest 
          </p>
        )}
      </ul>
    );
  })()}
</ul>
    </div>
  );
};

Gallery.loader = loader;

export default Gallery;