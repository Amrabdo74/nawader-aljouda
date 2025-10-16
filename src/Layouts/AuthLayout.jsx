import React from "react";
import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-gray-1)] p-4">
      <div className="w-full max-w-md bg-white rounded-[var(--radius-lg)] shadow-md p-6">
        <div className="flex items-center justify-center mb-4">
          <Link to="/" className="text-xl font-semibold text-[var(--color-primary)]">Nawader</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
  
};

export default AuthLayout;



