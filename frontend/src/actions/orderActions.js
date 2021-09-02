import axios from "axios"
import {
    ORDER_CREAT_FAIL,
    ORDER_CREAT_REQUEST,
    ORDER_CREAT_SUCCESS,
} from "../constants/orderConstants"



export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREAT_REQUEST,
        })

        const {userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(`/api/orders`, order, config)

        dispatch({
            type: ORDER_CREAT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ORDER_CREAT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}