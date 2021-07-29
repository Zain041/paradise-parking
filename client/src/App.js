import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AdminPanel, Checkout, HomePage, Login, Register } from "./Components";
import { runScripts } from "./Components/HomePage/homePageScripts";
import PrivateRoute from "./Components/PrivateRouting";
import AdminRoute from "./Components/PrivateRouting/AdminRoute";
import Userpanel from "./Components/userPanel/Userpanel";
import LoadingComponent from "./Loading Animation/Loading";
import Inovice from "./Components/userPanel/userPanelMenus/Inovice";
import MessengerCustomerChat from "react-messenger-customer-chat";
import CreateBlog from "./Components/AdminPanel/AdminBlog/createblog/CreateBlog";
import CreateCoupan from "./Components/AdminPanel/Coupen/createcoupan/CreateCoupan";
import privacy from './Components/privacy'
import terms from './Components/terms'
const App = () => {
  useEffect(() => {
    runScripts();
  }, []);

  return (
    <BrowserRouter>
      <MessengerCustomerChat pageId="101621921567417" appId="932788690836898" />
      <Suspense fallback={<LoadingComponent />}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/privacy" component={privacy} />
        <Route exact path="/terms" component={terms} />
        <Route exact path="/register" component={Register} />
        {/* blog routes */}
        <Route exact path="/getpost" component={HomePage} />
        <Route exact path="/getpost/:id" component={HomePage} />
        {/* blog routes end */}
        <AdminRoute exact path="/adminpanel" component={AdminPanel} />
        <AdminRoute exact path="/coupancreate" component={CreateCoupan} />
        <AdminRoute exact path="/createpost" component={CreateBlog} />
        <PrivateRoute exact path="/checkout" component={Checkout} />
        <PrivateRoute exact path="/userdashboard" component={Userpanel} />
        <PrivateRoute
          exact
          path="/userdashboard/invoice"
          component={Inovice}
        />{" "}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
