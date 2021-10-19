import React from "react";
import { CreatePotluckForm } from "../../forms";

export const CreatePotluckPage = () => {
  return (
    <section className="create-potluck-page">
      <h1 className="page-title">Create a Potluck</h1>
      <CreatePotluckForm />
    </section>
  );
};

export default CreatePotluckPage;
