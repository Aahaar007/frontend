import Layout from "../components/wrappers/Layout";
import React, { useEffect } from "react";
import HomeLayout from "../containers/home/HomeLayout";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import firebaseConfig from "../utils/firebase";

initializeApp(firebaseConfig);

const auth = getAuth();

const HomeScreen = () => {
  useEffect(() => {
    console.log(auth);
  }, [auth]);
  return (
    <Layout>
      <HomeLayout />
    </Layout>
  );
};

export default HomeScreen;
