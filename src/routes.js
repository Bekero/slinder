
import { MainCard } from "./cmps/main-card";
import { PassionList } from "./cmps/passion-list";
import { Profile } from "./cmps/profile";
import { ProfileEdit } from "./cmps/profile-edit";
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
  {
    path: "/profile",
    component: <Profile />
  },
  {
    path: "/profile/edit",
    component: <ProfileEdit />
  },
  {
    path: "/profile/edit/passions",
    component: <PassionList />
  },
];

export default routes;
