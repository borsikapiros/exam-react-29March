import { useEffect, useState } from "react";
import PlantItem from "./PlantItem";

export default function PlantItemList(props) {
    const plantType = props.plantType;
    const species = props.species;

    const [monthSearchTerm, setMonthSearchTerm] = useState("");
    const [colorSearchTerm, setColorSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleMonthChange = (event) => {
        setMonthSearchTerm(event.target.value);
    };
    const handleColorChange = (event) => {
        setColorSearchTerm(event.target.value);
    };

    function filterSpecies(species) {
        if (
            species.month === monthSearchTerm &&
            species.color === colorSearchTerm
        )
            return true;
    }

    useEffect(
        (filterSpecies, species) => {
            const resultArray = species.filter(filterSpecies);
            setSearchResults(resultArray);
        },
        [monthSearchTerm, colorSearchTerm]
    );

    const renderedSpeciesArray = searchResults.map((specimen) => {
        return <PlantItem specimen={specimen} />;
    });

    return (
        <div className="plantitemlist-container">
            <p>
                Szóval a {plantType} érdekelnek! Nem csodálom, nagyon szépek
                ilyenkor tavasszal, vonzzák a tekinteteket és a méheket is.
            </p>
            <p>
                Itt láthatod a {plantType} listáját. Tudsz szűrni közöttük virág
                színe és virágzás ideje alapján:
            </p>
            <div className="search-container">
                <div className="search">
                    <label htmlFor="month">
                        Válaszd ki a virágzás hónapját:
                    </label>
                    <input
                        type="text"
                        placeholder="Kezdj el gépelni"
                        value={monthSearchTerm}
                        onChange={handleMonthChange}
                    ></input>
                </div>
                <div className="search">
                    <label htmlFor="color">
                        Válaszd ki, milyen színű virágra vagy kíváncsi:
                    </label>
                    <input
                        type="text"
                        placeholder="Kezdj el gépelni"
                        value={colorSearchTerm}
                        onChange={handleColorChange}
                    ></input>
                </div>
            </div>
            <ul>{renderedSpeciesArray}</ul>
        </div>
    );
}
