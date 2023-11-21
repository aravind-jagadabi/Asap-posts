import '../styles/NavigationFooter.css';

const NavigationFooter = () => {
  return(
    <footer className="footer">
      <div className="footer-content">
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AsapPost. Development purpose only.</p>
      </div>
    </footer>
  );
}

export default NavigationFooter;