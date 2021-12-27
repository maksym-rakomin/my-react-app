import EmployeesListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css"

const EmployersList = ({data, onDelete, onToggleProp}) => {

    const employees = data.map(item => {
        const {id, ...propsData} = item

        return <EmployeesListItem
            {...propsData}
            key={id}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        />
    })

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    )
}

export default EmployersList
