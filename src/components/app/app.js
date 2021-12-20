import {Component} from "react";
import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-add-form/employers-add-form";

class App extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            data: [
                {id: 1, name: 'Alex', salary: 800, increase: false},
                {id: 2, name: 'John', salary: 3000, increase: false},
                {id: 3, name: 'Maks', salary: 5000, increase: true},
            ]
        }
    }

    deleteItem = id => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (item) => {
        this.setState(({data}) => {
            return {
                data: [...data, item]
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployersList
                    onDelete={this.deleteItem}
                    data={this.state.data}
                />

                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App
