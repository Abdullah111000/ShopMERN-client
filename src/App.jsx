import "./App.scss";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle";
import { ConfigProvider } from "antd";
import { useAuth } from "./context/Auth";
import 'aos/dist/aos.css';

import Routes from "./pages/Routes"
import ScreenLoader from "./components/ScreenLoader";

const App = () => {

  const { isAppLoading } = useAuth()

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" }, components: { Button: { controlOutline: 0, primaryShadow: "none" } } }}>

      {isAppLoading
        ? <ScreenLoader />
        : <Routes />
      }

    </ConfigProvider>
  )
}

export default App