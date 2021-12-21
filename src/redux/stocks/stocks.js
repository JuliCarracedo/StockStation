const REQUEST_DATA = 'src/redux/stocks/stocks/REQUEST_DATA';
const REQUEST_DATA_SUCCESS = 'src/redux/stocks/stocks/REQUEST_DATA_SUCCESS';
const REQUEST_DATA_FAIL = 'src/redux/stocks/stocks/REQUEST_DATA_FAIL';

const initialState = { list: [] };

export const loadData = () => ({
  type: REQUEST_DATA,
});

export const loadDataSuccess = (list) => ({
  type: REQUEST_DATA_SUCCESS,
  payload: list,
});
export const loadDataFail = () => ({
  type: REQUEST_DATA_FAIL,
});

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA: return { ...state, loading: true };
    case REQUEST_DATA_SUCCESS:
      return {
        ...state, loading: false, error: false, list: action.payload,
      };
    case REQUEST_DATA_FAIL:
      return { ...state, loading: false, error: true };
    default: return state;
  }
};

export default stocksReducer;
