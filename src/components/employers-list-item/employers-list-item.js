import './employers-list-item.css'

const EmployeesListItem = (props) => {

    const {name, salary, increase, rice, onDelete, onToggleProp} = props
    const isIncrease = increase ? 'increase' : ''
    const isLike = rice ? 'like' : ''

    return (
        <li className={`list-group-item d-flex justify-content-between ${isLike} ${isIncrease}`}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle='rice'>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle='increase'
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

export default EmployeesListItem;
