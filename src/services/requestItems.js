import { axiosWithAuth } from "../utilities";

export const requestItems = (
  itemsArray,
  organizerID,
  potluckID,
  itemsState,
  setItemsState
) => {
  axiosWithAuth()
    .post(
      `https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/items/${organizerID}/${potluckID}`,
      itemsArray
    )
    .then((response) => {
      console.log("adding items succesful!", response);
      setItemsState([...itemsState, ...itemsArray]);
    })
    .catch((error) => {
      console.error("Failed to add item", error);
    });
};
