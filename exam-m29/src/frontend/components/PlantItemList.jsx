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

    useEffect(() => {
        function filterSpecies(spec) {
            if (
                spec.month === monthSearchTerm &&
                spec.color === colorSearchTerm
            )
                return true;
        }
        const resultArray = species.filter(filterSpecies);
        setSearchResults(resultArray);
    }, [monthSearchTerm, colorSearchTerm]);

    console.log(searchResults);

    const renderedSpeciesArray = searchResults.map((specimen) => {
        if (specimen === null) {
            return "Bocs, ilyen növény nincs, próbálj más keresést";
        } else {
            return <PlantItem specimen={specimen} />;
        }
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
                    <label htmlFor="month">Virágzás hónapja:</label>
                    <select
                        id="monthselect"
                        name="month"
                        onChange={handleMonthChange}
                    >
                        <option value="február">február</option>
                        <option value="március">március</option>
                        <option value="április">április</option>
                        <option value="május">május</option>
                    </select>
                </div>
                <div className="search">
                    <label htmlFor="color">Virág színe:</label>
                    <select
                        id="colorselect"
                        name="color"
                        onChange={handleColorChange}
                    >
                        <option value="fehér">fehér</option>
                        <option value="piros">piros</option>
                        <option value="rózsaszín">rózsaszín</option>
                        <option value="sárga">sárga</option>
                        <option value="lila">lila</option>
                    </select>
                </div>
            </div>
            <div className="species-container">{renderedSpeciesArray}</div>
        </div>
    );
}
