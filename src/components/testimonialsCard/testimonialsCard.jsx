import Star from '../../assets/Star.png';

export default function TestimonialsCard(props) {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<img key={i} src={Star} alt="rating Icon" />);
  }
 
  return (
    <article className="testimonialsMain-card">
      <section className="testimonialsMain-card-content">
        <div className="image-name-rating">
          <img className="testimonial-image" src={props.image} alt="testimonial" />
          <div>
            <h1>{props.name}</h1>
            <div className="rating">{stars}</div>
          </div>
        </div>
        <div className='testimonial-description'><p>{props.description}</p></div>
      </section>
    </article>
  );
}