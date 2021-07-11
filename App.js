import React from "react";
import Router from './routes/Router';
import AuthContext from './contexts/Auth.context';

export default function App() {
 
  return (
    <AuthContext >
      <Router/>
    </AuthContext>
  );
}
