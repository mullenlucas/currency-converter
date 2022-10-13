import React from 'react';
import { PropTypes } from 'prop-types';

const CurrencyItem = ({ currency }) => {
  const { id, name, acronym } = currency;
  return (
    <>
      <div className="awee" id={id}>
        <p>
          {acronym}
          :
        </p>
        <p>{name}</p>
      </div>
    </>
  );
};

CurrencyItem.propTypes = {
  currency: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    acronym: PropTypes.string.isRequired,
  }).isRequired,
};

export default CurrencyItem;
