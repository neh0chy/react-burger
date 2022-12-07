import PropTypes from 'prop-types';

export const propTypesList = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
};

// export const propTypesList = PropTypes.shape({
//   _id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   proteins: PropTypes.number,
//   fat: PropTypes.number,
//   carbohydrates: PropTypes.number,
//   calories: PropTypes.number,
//   price: PropTypes.number.isRequired,
//   image: PropTypes.string.isRequired,
//   image_mobile: PropTypes.string,
//   image_large: PropTypes.string,
//   __v: PropTypes.number,
// });
