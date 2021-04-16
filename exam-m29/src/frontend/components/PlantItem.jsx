//The last component and the last level of the data structure (details of one plant species, rendered if searched)

export default function PlantItem(props) {
    //save the props
    const specimen = props.specimen;

    //render the details about the plant species
    return (
        <div className="specimen-container">
            <h4>{specimen.name}</h4>
            <div className="specimen-details">
                <p>
                    <strong>Virágzás hónapja:</strong> {specimen.month}
                </p>
                <p>
                    <strong>Virág színe:</strong> {specimen.color}
                </p>
                <p>
                    <strong>Virág illata:</strong> {specimen.scent}
                </p>
            </div>
        </div>
    );
}
