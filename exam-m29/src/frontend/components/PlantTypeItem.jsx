import { useState } from "react";
import PlantItemList from "./PlantItemList";

//This component renders the clickable buttons and, via conditional rendering, the next component, if the user clicks.

export default function PlantTypeItem(props) {
    //save the planttypes and the species to variables from props
    const plantType = props.plantType.ptype;
    const species = props.plantType.species;

    //set a state for the conditional rendering
    const [clicked, setClicked] = useState(false);

    //if the state is clicked, render the species list in the next level component, if not, an empty string
    function renderedPlantList(plantType, species) {
        if (clicked === true) {
            return <PlantItemList species={species} plantType={plantType} />;
        } else {
            return "";
        }
    }

    //if the user clicks, set the state to "clicked" or back
    function setShowOrHidePlantType() {
        clicked === false ? setClicked(true) : setClicked(false);
    }

    //this variable stores the text of the buttons to be clicked, depending on the state
    const showPlantTypeText =
        clicked === false ? `${plantType}` : "Köszi, eleget láttam, csukd be";

    //render the clickable buttons for the plant types and the plant list from above, and give it the type and species as props
    return (
        <div>
            <button className="plantTypeBtn" onClick={setShowOrHidePlantType}>
                {showPlantTypeText}
            </button>
            {renderedPlantList(plantType, species)}
        </div>
    );
}
