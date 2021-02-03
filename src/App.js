import './App.css';
import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    /*    handleChange(e) {
            this.setState({searchField: e.target.value})
        }*/

    handleChange = e => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        //Is equivalent with:
        // const monsters = this.state.monsters;
        // const searchField = this.state.searchField;

        const filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        });
        // metoda filter returneaza un array nou si primeste ca parametru o conditie,
        // iar toate elementele care se regasesc in valoarea aia se salveaza in array
        /*
        * pentru includes el returneaza true sau false sub forma
        * const myArray = [1,2,3,4,5]
        * myArray.includes(3) -> returneaza true
        * myArray.includes(2,3); -> poate sa primeasca si indexul de unde sa caute (indexul e 3
        * al doilea parametru)
        * */
        return (
            <div className="App">
                {/*<input type="search" placeholder='search monsters'
                       onChange={e => {
                           //this.setState() e asincron si trebuie sa ii mai dam un callback ca parametru daca vrem
                           // sa facem ceva cu valoarea din acel searchField imediat dupa
                           // this.setState({searchField: e.target.value}, () =>{console.log(this.state)})
                           this.setState({searchField: e.target.value})
                       }}

                />*/}
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder='search monsters'
                           handleChange={this.handleChange}></SearchBox>
                <CardList monsters={filteredMonsters}></CardList>
            </div>
        )
    }
}

export default App;
