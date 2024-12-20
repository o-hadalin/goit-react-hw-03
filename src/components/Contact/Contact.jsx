import PropTypes from 'prop-types';
import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <li className={styles.item}>
      <div className={styles.details}>
        <div>
          <span className={styles.icon}>
            <FaUser />
          </span>
          <span className={styles.name}>{name}</span>
        </div>
        <div>
          <span className={styles.icon}>
            <FaPhone />
          </span>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button className={styles.deleteBtn}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
