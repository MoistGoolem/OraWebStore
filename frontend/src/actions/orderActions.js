// @ts-nocheck
import axios from "axios";
import { 
    ORDER_CREATE_FAIL, 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS, 
    ORDER_DETAILS_FAIL, 
    ORDER_DETAILS_REQUESTS, 
    ORDER_DETAILS_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS
} from "../constants/orderConstants.js"
import { CART_EMPTY } from "../constants/cartConstants.js"

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({type: ORDER_CREATE_REQUEST, payload: order});
    try {
        const { userLogin: { userInfo }} = getState();
        const { data } = await axios.post('/api/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
        dispatch({ type: CART_EMPTY });
        localStorage.removeItem("cartItems"); //Cleans localstorage
    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL, 
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
        });
    }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
    dispatch({ type: ORDER_DETAILS_REQUESTS, payload: orderId });
    const { userLogin: {userInfo}} = getState();

    try {
        const { data } = await axios.get(`/api/orders/${orderId}`, {
            headers: { Authorization: `Bearer ${userInfo.token}`},
        });
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        const errorMessage = 
        error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message;
        dispatch({ type: ORDER_DETAILS_FAIL, payload: errorMessage });
    }
};

export const payOrder = (order, paymentResult) => async (dispatch, getState) => {
    dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResult } });

    const { 
        userLogin: { userInfo }, 
    } = getState();
    try {
        const { data } = axios.put(`/api/orders/${order._id}/pay`, paymentResult, {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = 
        error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message;
        dispatch({ type: ORDER_PAY_FAIL, payload: errorMessage });
    }
};