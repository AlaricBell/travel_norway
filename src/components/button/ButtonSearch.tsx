import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ButtonSearch: React.FC<{clickHandler?: (e: any) => void}> = ({clickHandler = () => {}}) => {
  return (
    <button type="submit" className="btn btn-search" onClick={clickHandler}><FontAwesomeIcon icon={faSearch} width={'18px'} height={'18px'}/></button>
  )
}

export default ButtonSearch;