export default function PlantItem(props) {
    const specimen = props.specimen;

    return (
        <div className="specimen-container">
            <h4>{specimen.name}</h4>
            <div className="specimen-details">
                <p>Virágzás hónapja: {specimen.month}</p>
                <p>Virág színe: {specimen.color}</p>
                <p>Virág illata: {specimen.scent}</p>
            </div>
        </div>
    );
}
