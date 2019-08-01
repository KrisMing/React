import {createStore} from 'redux';
import reducer from '../reducers/index';
const inintialState = {
    good: [
        {
            title: 'aaa',
            price: 100,
            account: 6
        },
        {
            title: 'bbb',
            price: 200,
            account: 5
        },
    ],
    cart: [],
    amount: 0
}
const store = createStore(reducer,inintialState);
export default store