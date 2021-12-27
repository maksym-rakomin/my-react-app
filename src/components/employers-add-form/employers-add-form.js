import {Component} from "react";
import './employers-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddItem = (event) => {
        event.preventDefault()
        if (this.state.name.length > 3 && this.state.name.length > 2) {
            const item = {
                id: Date.now(),
                name: this.state.name,
                salary: this.state.salary,
                increase: false
            }

            this.props.onAdd(item)

            this.setState({
                name: '',
                salary: '',
            })
        }
    }

    render() {
        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onAddItem}
                    className="add-form d-flex"
                >
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name="name"
                           onChange={this.onValueChange}
                           value={name}
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           name="salary"
                           onChange={this.onValueChange}
                           value={salary}
                    />

                    <button type="submit"
                            className="btn btn-outline-light"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        )

    }
}

export default EmployeesAddForm;
