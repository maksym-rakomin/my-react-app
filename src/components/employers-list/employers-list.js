import EmployeesListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css"

const EmployersList = ({data}) => {

    const employees = data.map(item => {
        const {id, ...propsData} = item

        return <EmployeesListItem {...propsData} key = {id}/>
    })

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    )
}

export default EmployersList
