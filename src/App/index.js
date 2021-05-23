import React from "react";
import AppHeader from "../Components/AppHeader";
import Admin from "../Containers/Admin";

function App() {
  const openCreateUserModal = () => {
    // Open a modal to create a user
  };

  return (
    <div className="App">
      <AppHeader onCreateUserTap={openCreateUserModal} />
      <Admin />
    </div>
  );
}

export default App;
