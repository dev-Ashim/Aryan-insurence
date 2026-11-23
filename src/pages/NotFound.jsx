import { Link } from 'react-router-dom';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page Not Found – Aryan Insurance Consultant');
  return (
    <section className="section center notfound">
      <div className="container">
        <h1>404</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-red">Back to Home</Link>
      </div>
    </section>
  );
}
