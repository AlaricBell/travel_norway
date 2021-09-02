import Slider from './Slider'
import HeaderTitle from './text/HeaderTitle'


const Cities: React.FC = props => {
  return (
    <section id="cities">
      <div className="container">
        <HeaderTitle color="blue">Select a country</HeaderTitle>
        <Slider />
      </div>
    </section>
  )
}

export default Cities;