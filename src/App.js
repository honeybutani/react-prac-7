import React from "react";
import UserList from "./components/UserList";
import store from "./redux/store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <UserList />
        {console.log(process.env.REACT_APP_ENV)}
      </Provider>
    </div>
  );
};

export default App;
