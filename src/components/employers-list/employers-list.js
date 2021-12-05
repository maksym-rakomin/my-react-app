import EmployeesListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css"

const EmployersList = ({data}) => {
    const employees = data.map(item =>
        <EmployeesListItem
            name={item.name}
            salary={item.salary}
            increase={item.increase}
            key={item.id}
        />)

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    )
}

export default EmployersList
