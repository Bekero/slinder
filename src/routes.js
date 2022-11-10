import { MainCard } from "./cmps/main-card";
import { LoginSignup } from "./pages/login-signup";

// Routes accesible from the main navigation (in AppHeader)
const routes = [
  {
    path: "/",
    component: <MainCard />,
  },
  {
    path: "/login",
    component: <LoginSignup />
  },
];

export default routes;
