import PlantItem from "./PlantItem";

export default function PlantItemList(props) {
    const plantType = props.plantType;
    const species = props.species;

    const renderedSpeciesArray = species.map((specimen) => {
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
            <ul>{renderedSpeciesArray}</ul>
        </div>
    );
}
