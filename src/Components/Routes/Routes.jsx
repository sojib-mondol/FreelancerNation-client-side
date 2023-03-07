import { createBrowserRouter } from "react-router-dom";
import AllBuyers from "../AdminDashboard/AllBuyers";
import AllSellers from "../AdminDashboard/AllSellers";
import SellerDetails from "../AdminDashboard/SellerDetails";
import WelcomeDashboard from "../AdminDashboard/WelcomeDashboard";
import BecomeASeller from "../BecomeASeller/BecomeASeller";
import BuyerDashboard from "../BuyerDashboard/BuyerDashboard";
import Chat from "../Chat/Chat";
import GigForm from "../create-gig/GigForm";
import Error from "../Error/Error";
import Business from "../exeploreComponents/Business";
import DataScience from "../exeploreComponents/DataScience";
import DegitalMarketing from "../exeploreComponents/DegitalMarketing";
import GraphicDesign from "../exeploreComponents/GraphicDesign";
import Lifestyle from "../exeploreComponents/Lifestyle";
import MusicAndAudio from "../exeploreComponents/MusicAndAudio";
import Photography from "../exeploreComponents/Photography";
import ProgrammingAndTech from "../exeploreComponents/ProgrammingAndTech";
import VideoAnimation from "../exeploreComponents/VideoAnimation";
import Writing from "../exeploreComponents/Writing";
import ExploreService from "../ExploreServices/ExploreService";
import Home from "../Home/Home/Home";
import Login from "../JoinForm/Login";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import Main from "../Layout/Main";
import Registration from "../Registration/Registration";
import SellerDashboard from "../SellerDashboard/SellerDashboard";
import SellerRegistrationForm from "../SellerRegForm/SellerRegForm";
import NavbarExplores from "../Shared/Navbar_Explores/NavbarExplores";
import ShowGigs from "../showGigs/ShowGigs";
import FreelancerGuide from "../FreelancerGuide/FreelancerGuide";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",

        element: <Home></Home>,
      },
      {
        path: "/becomeASeller",
        element: <BecomeASeller></BecomeASeller>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/becomeASeller/service_category",
        element: <ExploreService></ExploreService>,
      },
      {
        path: "/becomeASeller/service_category/registerseller",
        element: <SellerRegistrationForm></SellerRegistrationForm>,
      },
      {
        path: "/seller_dashboard",
        element: <SellerDashboard />,
      },
      {
        path: "/seller_dashboard/create-gig",
        element: <GigForm />,
      },
      {
        path: "/allGigs",
        element: <ShowGigs></ShowGigs>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/buyer_dashboard",
        element: <BuyerDashboard></BuyerDashboard>,
      },
      {
        path: "/buyer_dashboard/chat",
        element: <Chat></Chat>,
      },
      {
        path: "/seller_dashboard/chat",
        element: <Chat></Chat>,
      },
      {
        path: "/graphic-design",
        element: <GraphicDesign></GraphicDesign>,
      },
      {
        path: "/digital-merketing",
        element: <DegitalMarketing></DegitalMarketing>,
      },
      {
        path: "/writing",
        element: <Writing></Writing>,
      },
      {
        path: "/video-animation",
        element: <VideoAnimation></VideoAnimation>,
      },
      {
        path: "/music-audio",
        element: <MusicAndAudio></MusicAndAudio>,
      },
      {
        path: "/programming-tech",
        element: <ProgrammingAndTech></ProgrammingAndTech>,
      },
      {
        path: "/business",
        element: <Business></Business>,
      },
      {
        path: "/lifeStyle",
        element: <Lifestyle></Lifestyle>,
      },
      {
        path: "/dataScience",
        element: <DataScience></DataScience>,
      },
      {
        path: "/photography",
        element: <Photography></Photography>,
      },
      {
        path: "/explores",
        element: <NavbarExplores></NavbarExplores>,
      },
      {
        path: "/freelancer-guide",
        element: <FreelancerGuide></FreelancerGuide>,
        loader: () => fetch("FreelancerGuide.json"),
      },
    ],
  },

  {
    path: "/dashboard",
    element: <AdminDashboardLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard",
        element: <WelcomeDashboard></WelcomeDashboard>,
      },
      {
        path: "/dashboard/allSellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/allBuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/seller/details/:email",
        element: <SellerDetails></SellerDetails>,
      },
    ],
  },
]);
