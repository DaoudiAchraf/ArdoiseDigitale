import React from "react";
import Router from './routes/Router';
import AuthContext from './contexts/Auth.context';
import { LogBox } from 'react-native';

export default function App() {
  
  LogBox.ignoreAllLogs();
  return (
    <AuthContext >
      <Router/>
    </AuthContext>
  );
}
