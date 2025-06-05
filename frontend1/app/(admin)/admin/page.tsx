"use client";
import React from "react";
import * as motion from "motion/react-client";
import { logout } from "./actions";

const Page = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <p>
        This is the admin page where you can manage the application settings.
      </p>
      <ul>
        <li>
          <a href="/admin/users">Manage Users</a>
        </li>
        <li>
          <a href="/admin/settings">Application Settings</a>
        </li>
        <li>
          <a href="/admin/reports">View Reports</a>
        </li>
      </ul>
      <p>
        Make sure to check the documentation for more details on how to use the
        admin features.
      </p>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="w-28 h-12 bg-amber-400"
        onClick={() => logout()}
      >
        logout
      </motion.button>
    </div>
  );
};

export default Page;
