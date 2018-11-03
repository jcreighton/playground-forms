import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Email = forwardRef(({ label = 'Email address', ...props }, ref) => {
  return (
    <div>
      <label htmlFor="email">{label}</label>
      <input
        ref={ref}
        id="email"
        name="email"
        type="email"
        required
        onBlur={e => props.onBlur(e.target.value)}
        onChange={e => props.onChange(e.target.value)}
      />
      {!props.isValid && <span>Something went wrong...</span>}
    </div>
  );
});

Email.proptypes = {
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export { Email };
