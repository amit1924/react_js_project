import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title , onAdd ,showAdd}) => {
  
  return (
  <header className='header'>
<h1 style={headingStyle}>{title}</h1>
  <Button color={ showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick ={onAdd}/>
 
  </header>
  )
  
}

Header.defaultProps = {
  title:"task tracker"
}

Header.propTypes={
  title: PropTypes.string
}


const headingStyle = {
  color:'black'
  
}
export default Header
