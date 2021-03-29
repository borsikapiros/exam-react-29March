export default function PlantItem(props) {
    const specimen = props.specimen;

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
