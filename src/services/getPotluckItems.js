import { axiosWithAuth } from "../utilities";

export const getPotluckItems = async (userID, potluckID) => {
  try {
    const databaseItems = await axiosWithAuth().get(
      `https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/items/${userID}/${potluckID}`
    );
    return databaseItems.data;
  } catch (error) {
    console.error("could not fetch potluck items", error);
  }
};
