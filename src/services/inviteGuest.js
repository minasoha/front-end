import { axiosWithAuth } from "../utilities";

export const inviteGuest = (guestName, organizerID, potluckID) => {
  axiosWithAuth()
    .post(
      `https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/guests/${organizerID}/${potluckID}`,
      {
        username: guestName,
      }
    )
    .then((response) => {
      console.log("successfully invited user!", response.data);
    })
    .catch((error) => {
      console.error("could not invite user!", error);
    });
};
