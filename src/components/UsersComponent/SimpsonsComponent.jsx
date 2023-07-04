export const SimpsonsComponent = (props) => {
    const {name, surname, age, sex, photo} = props;
    return (
        <div>
            <h2>{name} {surname}</h2>
            <h4>{age}, {sex}</h4>
            <img src={photo} alt={"person"}/>
        </div>
    )
}
