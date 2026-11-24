import { Link } from 'react-router-dom';

export default function PageHero({ title, subtitle, crumb, image }) {
  return (
    <section className={`page-hero${image ? ' has-image' : ''}`}>
      {image && <img src={image} alt="" className="page-hero-bg" />}
      <div className="container">
        <nav className="crumbs">
          <Link to="/">Home</Link> <span>/</span> {crumb || title}
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
