import { axiosWithAuth } from "../utilities";

export const getPotluckGuests = async (userID, potluckID) => {
  try {
    const guestList = await axiosWithAuth().get(
      `https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/guests/${userID}/${potluckID}`
    );
    return guestList.data;
  } catch (error) {
    console.error(error);
  }
};
