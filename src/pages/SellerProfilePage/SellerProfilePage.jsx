import React from "react";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import SellerProfile from "../../components/SellerProfile/SellerProfile";
import Header from "../../components/Header/Header";

function SellerProfilePage() {
  return (
  <>
    <Header/>
    <SellerProfile/>
    <ReviewsList/> 
  </>
  )
}

export default SellerProfilePage;
