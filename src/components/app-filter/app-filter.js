import './app-filter.css'
import {Component} from "react";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.btnList = [
            { id: 1, title: 'Все сотрудники', filter: 'all'},
            { id: 2, title: 'На повышение', filter: 'upper'},
            { id: 3, title: 'З/П больше 1000$', filter: 'amoreThousandll'},
        ]
    }

    onUpdateFilter = (filter) => this.props.onUpdateFilter(filter)

    getBtnClasses = filter => ['btn', this.props.filter === filter ? 'btn-light' : 'btn-outline-light' ].join(' ')

    getBtns = () => {
        return this.btnList.map(item => {
            return (
                <button
                    className={this.getBtnClasses(item.filter)}
                    type="button"
                    key={item.id}
                    onClick={() => this.onUpdateFilter(item.filter)}
                >
                    {item.title}
                </button>
            )
        })
    }

    render() {
        return (
            <div className="btn-group">
                {this.getBtns()}
            </div>
        )
    }
}

export default AppFilter
