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
                {id: 1, name: 'Alex', salary: 800, rice: false, increase: false},
                {id: 2, name: 'John', salary: 3000, rice: false, increase: false},
                {id: 3, name: 'Maks', salary: 5000, rice: true, increase: true},
            ],
            term: '',
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
            const addingItem = {...item, rice: false, increase: false}
            return {
                data: [...data, addingItem]
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return { ...item, [prop]: !item[prop]}
                    }
                    return item
                })
            }
        })
    }

    getCountEmployers = () => {
        return {total: this.state.data.length || 0, increase: this.state.data.filter(item => item.increase).length || 0}
    }

    searchEmp = (items, term = '') => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = term => {
        this.setState({term})
    }

    render() {
        const { data, term } = this.state
        const visibleData = this.searchEmp(data, term)
        return (
            <div className="app">
                <AppInfo countEmployers={this.getCountEmployers()}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />

                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App
