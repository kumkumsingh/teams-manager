import request from "superagent";
const baseUrl = "http://localhost:4000";

export const PLAYER_CREATE_SUCCESS = "PLAYER_CREATE_SUCCESS";

const playerCreateSuccess = player => ({
    type: PLAYER_CREATE_SUCCESS,
    payload: player
  });

export const createPlayer = data => (dispatch, getState) => {
    const token = getState().auth;
    console.log('checking data',data,token)
    request
      .post(`${baseUrl}/player`)
      .set("Authorization", `Bearer ${token}`)
      .send(data)
      .then(response => {
        dispatch(playerCreateSuccess(response.body));
      })
      .catch(console.error);
  };