import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

// This function will perform a render with testing-library using a router.
// If your test needs access to window.history or related methods, set the
// second argument to true; otherwise, MemoryRouter will be used, instead.
export const renderWithRouter = (component, needsHistory = false) => {
  return render(component, {
    wrapper: needsHistory ? BrowserRouter : MemoryRouter,
  });
};
