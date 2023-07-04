const RickAndMortyComponent = (props) => {
    const {id, name, status, species, gender, image} = props;
    return (
        <div>
            <h2>{name}</h2>
            <h4>{gender}; id: {id}</h4>
            <h4>status: {status}</h4>
            <h4>species: {species}</h4>
            <img src={image} alt={"character"}></img>
        </div>
    )
}

export default RickAndMortyComponent;