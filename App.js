import React from 'react';
import AuthContext from "./contexts/Auth.context";
import Router from './routes/Router';


export default function App() {
 
  return (
    <AuthContext >
      <Router/>
    </AuthContext>
  );
}
