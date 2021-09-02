import ButtonSearch from '../button/ButtonSearch'

const FormWeather: React.FC<{searchHandler: (e: any) => void}> = ({searchHandler}) => {
  return (
    <form action="" method="GET" className="form-search" onSubmit={searchHandler}>
      <input className="input-search" type="text" placeholder="Which city are you looking for?"/> 
      <ButtonSearch />
    </form>
  )
}

export default FormWeather;