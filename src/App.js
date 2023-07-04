import './App.css';
import {SimpsonsComponent} from "./components/UsersComponent/SimpsonsComponent";
import RickAndMortyComponent from "./components/UsersComponent/RickAndMortyComponent";
// тут треба імпортувати все, що хочемо використовувати у функції

// тут можна писати змінні, які потім будуть використовуватись
// const firstDiv = <div>Hello</div>

// The Simpsons
const bart =
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        sex: 'male',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    };
const homer =
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        sex: 'male',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    };
const marge =
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        sex: 'female',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    };
const lisa =
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        sex: 'female',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    };
const maggie =
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        sex: 'female',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    };

// The Rick and Morty
const rick = {
    "id": 231,
    "name": "Morty Rick",
    "status": "unknown",
    "species": "Human",
    "gender": "Male",
    "image": "https://rickandmortyapi.com/api/character/avatar/231.jpeg"
};
const sanchez = {
    "id": 249,
    "name": "Mrs. Sanchez",
    "status": "unknown",
    "species": "Human",
    "gender": "Female",
    "image": "https://rickandmortyapi.com/api/character/avatar/249.jpeg"
};
const mobius = {
    "id": 327,
    "name": "Slow Mobius",
    "status": "Alive",
    "species": "Humanoid",
    "gender": "Male",
    "image": "https://rickandmortyapi.com/api/character/avatar/327.jpeg"
};
const lawyer = {
    "id": 399,
    "name": "Tiny-persons advocacy group lawyer",
    "status": "Alive",
    "species": "Mythological Creature",
    "gender": "Male",
    "image": "https://rickandmortyapi.com/api/character/avatar/399.jpeg"
};
const purple = {
    "id": 480,
    "name": "Purple Morty",
    "status": "Alive",
    "species": "Alien",
    "gender": "Male",
    "image": "https://rickandmortyapi.com/api/character/avatar/480.jpeg"
};
const dwayne = {
    "id": 755,
    "name": "Dwayne",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    "image": "https://rickandmortyapi.com/api/character/avatar/755.jpeg"
};

const App = () => {
    return (
        <>
            <div>
                <SimpsonsComponent
                    name={bart.name}
                    surname={bart.surname}
                    age={bart.age}
                    sex={bart.sex}
                    photo={bart.photo}
                />
                <SimpsonsComponent
                    name={homer.name}
                    surname={homer.surname}
                    age={homer.age}
                    sex={homer.sex}
                    photo={homer.photo}
                />
                <SimpsonsComponent
                    name={marge.name}
                    surname={marge.surname}
                    age={marge.age}
                    sex={marge.sex}
                    photo={marge.photo}
                />
                <SimpsonsComponent
                    name={lisa.name}
                    surname={lisa.surname}
                    age={lisa.age}
                    sex={lisa.sex}
                    photo={lisa.photo}
                />
                <SimpsonsComponent
                    name={maggie.name}
                    surname={maggie.surname}
                    age={maggie.age}
                    sex={maggie.sex}
                    photo={maggie.photo}
                />
            </div>
            <div>
                <RickAndMortyComponent
                    id={rick.id}
                    name={rick.name}
                    status={rick.status}
                    species={rick.species}
                    gender={rick.gender}
                    image={rick.image}
                />
                <RickAndMortyComponent
                    id={sanchez.id}
                    name={sanchez.name}
                    status={sanchez.status}
                    species={sanchez.species}
                    gender={sanchez.gender}
                    image={sanchez.image}
                />
                <RickAndMortyComponent
                    id={mobius.id}
                    name={mobius.name}
                    status={mobius.status}
                    species={mobius.species}
                    gender={mobius.gender}
                    image={mobius.image}
                />
                <RickAndMortyComponent
                    id={lawyer.id}
                    name={lawyer.name}
                    status={lawyer.status}
                    species={lawyer.species}
                    gender={lawyer.gender}
                    image={lawyer.image}
                />

                <RickAndMortyComponent
                    id={purple.id}
                    name={purple.name}
                    status={purple.status}
                    species={purple.species}
                    gender={purple.gender}
                    image={purple.image}
                />

                <RickAndMortyComponent
                    id={dwayne.id}
                    name={dwayne.name}
                    status={dwayne.status}
                    species={dwayne.species}
                    gender={dwayne.gender}
                    image={dwayne.image}
                />
            </div>
        </>
    );
}

export default App;
