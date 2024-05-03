import { useState } from 'react';
import { Form, redirect } from "react-router-dom";
import { createForest } from "../services/forest";
import { getAuthData } from "../services/auth";
import Drawing from "../components/Drawing";
import Slider from "../components/Slider";
import Checkbox from "../components/Checkbox";
import Droplist from "../components/Droplist";
import styles from "./createForest.module.css";
import { useLoaderData } from "react-router-dom";
import { getForests } from "../services/forest";

const loader = async () => {
  const forests = await getForests();
  return { forests };
};

const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.parameters = JSON.parse(data.parameters);
  console.log("formdata", data);
  await createForest(data);
  return redirect(`/gallery`);
};

const CreateForest = () => {
  const { forests } = useLoaderData();
  let uniqueId;
  
  const initialElements = ["Plant1", "Plant2", "Plant3", "Plant4", "Plant5", "Plant6", "Plant7", "Plant8", "Wood1", "Wood2", "Wood3"];
  const generateElements = () => {
    const allElements = Array.from({ length: 55 }, (_, index) => initialElements[index % initialElements.length]);
    const shuffledElements = [...allElements];
    shuffledElements.sort(() => Math.random() - 0.5);
    
    return(shuffledElements);
  };
  const generatePlantElements = () => {
    const woodElements = initialElements.filter(Element => Element.startsWith('Wood'));
    const plantElements = initialElements.filter(Element => !Element.startsWith('Wood'));
    for (let i = 0; i < woodElements.length; i++) {
      const randomPlant = plantElements[Math.floor(Math.random() * plantElements.length)];
      plantElements.push(randomPlant);
    }
    
    const allPlantElements = Array.from({ length: 55 }, (_, index) => plantElements[index % plantElements.length]);
    const shuffledPlantElements = [...allPlantElements];
    shuffledPlantElements.sort(() => Math.random() - 0.5);
    
    return(shuffledPlantElements);
  };
  
  
  const generateXPositions = () => {
    const xPositions = [];
    const distance = 100 / 11;
    
    for (let i = 0; i < 5; i++) {
      const positions = Array.from({ length: 11 }, (_, i) => (i + 1) * distance - 5);
      
      for (let j = positions.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [positions[j], positions[k]] = [positions[k], positions[j]];
      }
      
      xPositions.push(positions);
    }
    
    return xPositions.flat();
  };
  
  const generateColorRandoms = () => {
    const colorRandoms = Array.from({length: 55}, () => ({
      red: Math.random() * 2 - 1,
      green: Math.random() * 2 - 1,
      blue: Math.random() * 2 - 1,
    }))
    
    return colorRandoms;
  }
  
  const generateReflectionRandoms = () => {
    const reflectionRandoms = Array.from({length: 55}, () => Math.random() > 0.5 ? 1 : -1);
    
    return reflectionRandoms;
  }
  const generateSizeRandoms = () => {
    const reflectionRandoms = Array.from({length: 55}, () => Math.random() * 0.3 - 0.2);
    
    return reflectionRandoms;
  }
  
  if(forests.length === 0) {
    uniqueId = 0;
  }
  else {
    const maxId = Math.max(...forests.map(forest => forest.id));
    uniqueId = maxId + 1;
  }
  
  const [parameters, setParameters] = useState({
    elements: generateElements(),
    plantElements: generatePlantElements(),
    season: "summer",
    woodIncluded: true,
    colorVariability: 50,
    size: 10,
    colorRandoms: generateColorRandoms(),
    xPositions: generateXPositions(),
    reflectionRandoms: generateReflectionRandoms(),
    sizeRandoms: generateSizeRandoms(),
    id: uniqueId,
  });
  
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

  const regenerateForest = () => {
    setParameters(prevParameters => ({
      ...prevParameters,
      elements: generateElements(),
      plantElements: generatePlantElements(),
      colorRandoms: generateColorRandoms(),
      xPositions: generateXPositions(),
      reflectionRandoms: generateReflectionRandoms(),
      sizeRandoms: generateSizeRandoms(),
    }));
  };
  
  const { season, woodIncluded, colorVariability, size } = parameters;
  
  const { user } = getAuthData();
  
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
    <div className={styles.settings_button_block}>
    <button onClick={regenerateForest} className={`${styles.settings_button} ${styles.settings_button_refresh}`}> ⟳</button>
    <Form method="POST">
    <input className={styles.visuallyHidden} name="parameters" id="parameters" value={JSON.stringify({parameters})} readOnly={true} />
    {
      user ? (
        <button type="submit" className={styles.settings_button}> Save </button>
        ) : (
          <button type="button" className={`${styles.settings_button} ${styles.settings_button_disabled}`} disabled> Save </button>
          )
        }
        
        </Form>  
        </div>
        </div>
        <Drawing {...parameters} />
        </div>
        
        )
      }
      
      CreateForest.action = action;
      CreateForest.loader = loader;
      
      export default CreateForest;
      