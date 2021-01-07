import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ route }) {
  const label = '<- Go back';

  const navRoute = route ? route : '/';

  return (
    <button type="button" className={s.button}>
      <Link to={navRoute} style={{ textDecoration: 'none', color: 'black' }}>
        {label}
      </Link>
    </button>
  );
}

Button.propTypes = {
  route: PropTypes.string,
};