import { axiosWithAuth } from "../utilities";

export const requestItems = (itemsArray, organizerID, potluckID) => {
  axiosWithAuth()
    .post(
      `https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/items/${organizerID}/${potluckID}`,
      itemsArray
    )
    .then((response) => {
      console.log("adding items succesful!", response);
      return response.data;
    })
    .catch((error) => {
      console.error("Failed to add item", error);
    });
};
