import PlantTypeItem from "./PlantTypeItem";

//This component renders the page's intro and the next components (first level of the data structure: plant types)

export default function PlantTypeList(props) {

    //save the data to a meaningful variable
    const plantTypes = props.data;

    //create a variable, which maps the data and returns the plant types in the next level component
    const renderedPlantTypeList = plantTypes.map((plantType) => {
        return <PlantTypeItem plantType={plantType} key={plantType.index} />;
    });

    //render an intro part to the page and the list from the previous variable
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
