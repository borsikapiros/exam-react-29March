import PlantItemDetails from "./PlantItemDetails";

export default function PlantItem(props) {
    const specimen = props.specimen;

    return (
        <div className="specimen-container">
            <h4>{specimen.name}</h4>
        </div>
    );
}
