import { useEffect, useState } from "react";
import PlantItem from "./PlantItem";

//This component refers to the second level (list of plants in a plant-type) in the data structure. It contains the searching fields, 
//performs the search and renders the results in the next level component.

export default function PlantItemList(props) {
    //save the props to variables
    const plantType = props.plantType;
    const species = props.species;

    //set states for the 2 search terms and for the results
    const [monthSearchTerm, setMonthSearchTerm] = useState("");
    const [colorSearchTerm, setColorSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    //save the change handler functions
    const handleMonthChange = (event) => {
        setMonthSearchTerm(event.target.value);
    };
    const handleColorChange = (event) => {
        setColorSearchTerm(event.target.value);
    };

    //if any of the search terms change, filter the species according to the search terms, save the filtered list and set the results to the state
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

      //map the search results and return a rendered list in the next level component
    const renderedSpeciesArray = searchResults.map((specimen) => {
        return <PlantItem specimen={specimen} key={specimen.name} />;
    });

    //if there's no result, return an error message, if not, return the results
    const renderedSpecies =
        renderedSpeciesArray.length === 0
            ? "Sajnos ilyen növény nincs, próbálj más keresést!"
            : renderedSpeciesArray;

    //render the content of the plant types and the two searching methods (both dropdown, calling the change handler functions on change), and the rendered species
    return (
        <div className="plantitemlist-container">
            <p>
                Szóval a {plantType} érdekelnek! Nem csodálom, nagyon szépek
                ilyenkor tavasszal, vonzzák a tekinteteket és a méheket is.
            </p>
            <p>
                Itt láthatod a {plantType} listáját. Válaszd ki, mikori virágzás
                és milyen virágszín érdekel:
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
            <div className="species-container">{renderedSpecies}</div>
        </div>
    );
}
