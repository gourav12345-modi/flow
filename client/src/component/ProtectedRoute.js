import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const userInfo = useSelector((state) => state.userInfo);
  const [isValidated, setIsValidated] = useState(false);
  useEffect(() => {
    if (!userInfo.userInfoLoading && !userInfo.loading) setIsValidated(true);
  }, [userInfo]);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        !isValidated ? (
          "Loading."
        ) : userInfo.user && userInfo.user.accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default ProtectedRoute;
