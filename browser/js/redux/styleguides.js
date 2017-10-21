import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const RETRIEVE_STYLEGUIDES = 'RETRIEVE_STYLEGUIDES';
const ADD_STYLEGUIDE = 'ADD_STYLEGUIDE';


/* ------------   ACTION CREATORS     ------------------ */

const retrieveStyleguides = styleguides => ({ type: RETRIEVE_STYLEGUIDES, styleguides });
const create = styleguide => ({ type: ADD_STYLEGUIDE, styleguide });

/* ------------       REDUCERS     ------------------ */

export default function reducer (styleguides = [], action) {
  switch (action.type) {

    case RETRIEVE_STYLEGUIDES:
      return action.styleguides;

      case ADD_STYLEGUIDE:
      return [action.styleguide, ...styleguides];

    default:
      return styleguides;
  }
}

/* ------------       REDUCERS     ------------------ */

// const initialStyleguidesState = [];

// export default function reducer (state = initialStyleguidesState, action) {
//   const newState = [].concat(state);

//   switch (action.type) {
//     case RETRIEVE_STYLEGUIDES:
//       newState.styleguides = action.styleguides;
//       break;

//     default:
//       return newState;
//   }

//   return newState;
// }

/* ------------       DISPATCHERS     ------------------ */

export const fetchStyleguides = () => dispatch => {
  axios.get('/api/styleguides')
       .then(res => dispatch(retrieveStyleguides(res.data)))
       .catch(err => console.error('Fetching styleguides unsuccessful', err));
};

export const addStyleguide = styleguide => dispatch => {
  axios.post('/api/styleguides', styleguide)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating styleguide: ${styleguide} unsuccessful`, err));
};