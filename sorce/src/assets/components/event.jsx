import { useEffect } from 'react';
import { animate, inView } from 'motion';
import PropTypes from 'prop-types';
import './EventCard.css'; // Assuming you're using a separate CSS file for styles

const EventCard = ({ isLeft, date, title, time, description, tag, additionalInfo }) => {
  useEffect(() => {
    const selector = `.card-container${isLeft ? '.left' : '.right'}`;
    inView(selector, ({ target }) => {
      animate(
        target,
        { opacity: 1, x: [isLeft ? -100 : 100, 0] },
        { duration: 0.8, easing: 'easeOut' }
      );
      return () => animate(target, { opacity: 0, x: isLeft ? -100 : 100 });
    });
  }, [isLeft]);

  return (
    <div className={`card-container ${isLeft ? 'card-container-left left' : 'card-container-right right'}`}>
      <div className="box">
        <span></span>
        <div className="content">
          <header className="card-header">
            <div className="title-section">
              <h3>{title}</h3>
              <div className="time">{time}</div>
            </div>
          </header>
          <section className="card-body">
            <p>{description}</p>
          </section>
          {additionalInfo && (
            <section className="card-additional-info">
              <h4>Additional Info</h4>
              <p>{additionalInfo}</p>
            </section>
          )}
          <footer className="card-footer">
            <button className="learn-more" aria-label={`Learn more about ${title}`}>
              Learn More &rarr;
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  isLeft: PropTypes.bool,
  date: PropTypes.shape({
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string, // Added prop type for additional info
};

export default EventCard;
