import TextPrimary from '../text/TextPrimary'
import TextTitle from '../text/TextTitle'

const CityInfo: React.FC<{title1: string
                          population: number,
                          description1: string,
                          title2?: string,
                          description2?: string}> = ({title1, population, description1, title2, description2}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <div className="card-city-info">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <TextTitle color="blue">{title1}</TextTitle>
                  <TextTitle color="blue">Population: {population}</TextTitle>
                  <TextPrimary color="blue">{description1}</TextPrimary>
                  <TextTitle color="blue">{title2}</TextTitle>
                  <TextPrimary color="blue">{description2}</TextPrimary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CityInfo;