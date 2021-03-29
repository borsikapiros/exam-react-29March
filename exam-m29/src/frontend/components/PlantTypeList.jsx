import PlantTypeItem from "./PlantTypeItem";

export default function PlantTypeList(props) {
    const plantTypes = props.data;

    const renderedPlantTypeList = plantTypes.map((plantType) => {
        return <PlantTypeItem plantType={plantType} />;
    });

    return (
        <div className="main-container">
            <div className="main-text">
                <h1>Üdv a kertemben, nézz körül!</h1>
                <p>
                    Jó nagy kertem van, rengeteg növénnyel. Fák, bokrok,
                    egyebek. Melyik érdekel leginkább?
                </p>
                <p>Válassz egyet ezek közül:</p>
            </div>
            <div className="plantType-container">{renderedPlantTypeList}</div>
        </div>
    );
}
