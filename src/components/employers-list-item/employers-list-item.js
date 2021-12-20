import './employers-list-item.css'
import {Component} from "react";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: this.props.increase,
            like: false,
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props
        const {increase, like} = this.state
        const isIncrease = increase ? 'increase' : ''
        const isLike = like ? 'like' : ''

        return (
            <li className={`list-group-item d-flex justify-content-between ${isLike} ${isIncrease}`}>
                <span onClick={this.onLike} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}
                    >
                        <i className="fas fa-cookie"/>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}
                    >
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;
