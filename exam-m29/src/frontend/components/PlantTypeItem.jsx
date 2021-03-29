import { useState } from "react";
import PlantItemList from "./PlantItemList";

export default function PlantTypeItem(props) {
    const plantType = props.plantType.ptype;
    const species = props.plantType.species;

    const [clicked, setClicked] = useState(false);

    function renderedPlantList(plantType, species) {
        if (clicked === true) {
            return <PlantItemList species={species} plantType={plantType} />;
        } else {
            return "";
        }
    }

    function setShowOrHidePlantType() {
        clicked === false ? setClicked(true) : setClicked(false);
    }

    const showPlantTypeText =
        clicked === false ? `${plantType}` : "Köszi, eleget láttam";

    return (
        <div className="plantType-container">
            <button className="plantTypeBtn" onClick={setShowOrHidePlantType}>
                {showPlantTypeText}
            </button>
            {renderedPlantList(plantType, species)}
        </div>
    );
}
