import { createContext, useState } from "react";
export const registrationContext = createContext();

export function RegistrationProvider({ children }) {
  const [registrations, setRegistrations] = useState([]);

  const addRegistration = (registration) => {
    setRegistrations([...registrations, registration]);
  };

  return (
    <registrationContext.Provider value={{ registrations, addRegistration }}>
      {children}
    </registrationContext.Provider>
  );
}
