import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Password = forwardRef(({ label = 'Password', ...props }, ref) => {
  return (
    <div>
      <label htmlFor="password">{label}</label>
      <input
        ref={ref}
        id="password"
        name="password"
        type="password"
        required
        onBlur={e => props.onBlur(e.target.value)}
        onChange={e => props.onChange(e.target.value)}
      />
      {!props.isValid && <span>Uh oh.</span>}
    </div>
  );
});

Password.proptypes = {
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export { Password };
