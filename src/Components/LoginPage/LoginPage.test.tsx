import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';


test("render learn react ",()=>
  {
      render(<LoginPage />);
      const linkElement = screen.getByText("Email");
      
      expect (linkElement).toBeInTheDocument();
  });
  
  