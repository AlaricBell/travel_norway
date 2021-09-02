import TextPrimary from '../text/TextPrimary'
import TextUltra from '../text/TextUltra'


const City: React.FC<{title?: string
                      description1: string,
                      description2?: string,
                      align?: string}> = ({title, description1, description2, align = "left"}) => {
  return (
    <div className="city-info">
      <div className="container">
        <div className="row">
        <div className="col-12 card-mobile">
          <div className={`card-city card-${align}`}>
              {title && <TextUltra color="blue">{title}</TextUltra>}
              <TextPrimary color="blue">{description1}</TextPrimary>
              {description2 && <TextPrimary color="blue">{description2}</TextPrimary>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default City;