import './app-info.css'

const AppInfo = ({countEmployers}) => {
  return (
      <div className='app-info'>
          <h1>Учет сотрудников в компании N</h1>
          <h2>Общее чило сотрудников: {countEmployers.total}</h2>
          <h2>Премию получат: {countEmployers.increase}</h2>
      </div>
  )
}

export default AppInfo
