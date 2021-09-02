interface Slide {
  img: string,
  title: string
}

const CardImage: React.FC<{data: Slide}> = ({data}) => {
	const {img, title} = data;
  return (
    <figure className="card-slider">
			<img src={img} alt="the city"/>
			<figcaption>
				<h3>{title}</h3>
				<h5>More</h5>
			</figcaption><a href={`/${title.toLowerCase()}`}></a>
		</figure>
  )
}

export default CardImage;