import { useState } from 'react';
import { Form, redirect, useLoaderData } from "react-router-dom";
import { getForestById, updateForest } from "../services/forest";
import { getAuthData } from "../services/auth";
import styles from "./createForest.module.css";
import Drawing from "../components/Drawing";
import Slider from "../components/Slider";
import Checkbox from "../components/Checkbox";
import Droplist from "../components/Droplist";

const loader = async ({ request, params }) => {
  const { user } = getAuthData();
  if (!user) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/auth/login?" + params.toString());
  }
  const forest = await getForestById(params.id);
  if (user.id != forest.owner.data.id) {
    return redirect(`/forest/${params.id}`);
  }
  return { forest };
};

const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.parameters = JSON.parse(data.parameters);
  await updateForest(params.id, data);
  return redirect(`/forest/${params.id}`);
};



const EditForest = () => {
  const { forest } = useLoaderData();
  // const { user } = getAuthData();

  const [parameters, setParameters] = useState(forest.attributes.parameters.parameters);

  const handleColorChange = (v) => {
    setParameters(prevParameters => ({...prevParameters, colorVariability: v}));
  }
  const handleSizeChange = (v) => {
    setParameters(prevParameters => ({...prevParameters, size: v}));
  }
  const handleWoodChange = (v) => {
    setParameters(prevParameters => ({...prevParameters, woodIncluded: v}));
  }
  const handleSeasonChange = (v) => {
    setParameters(prevParameters => ({...prevParameters, season: v}));
  }

  const { season, woodIncluded, colorVariability, size } = parameters;

  return (
    <div className={styles.app}>
    <div className={styles.settings_block}>
    <div className={styles.forms_block}>
    <div className={styles.forms_short}>
    
    <label className={styles.forms_season}>
    <Droplist 
    value={season}
    onValueChange={(v) => handleSeasonChange(v)}
    /> 
    </label>
    <label className={styles.forms_wood}>
    Include wood &nbsp;
    <Checkbox 
    value={woodIncluded}
    onValueChange={(v) => handleWoodChange(v)}
    />
    </label>
    </div>
    <label className={styles.forms_long}>
    Color variability
    <Slider
    min={0}
    max={100}
    value={colorVariability}
    onValueChange={(v) => handleColorChange(v)}
    />
    </label>
    <label className={styles.forms_long}>
    Size
    <Slider
    min={7}
    max={20}
    value={size}
    onValueChange={(v) => handleSizeChange(v)}
    />
    </label>
    
    </div>
    <Form method="POST">
    <input className={styles.visuallyHidden} name="parameters" id="parameters" value={JSON.stringify({parameters})} readOnly={true} />
    <button type="submit" className={styles.settings_button}> Save changes </button>
    </Form>  
        </div>
        <Drawing {...parameters} />
        </div>
  );
};

EditForest.action = action;
EditForest.loader = loader;

export default EditForest;
