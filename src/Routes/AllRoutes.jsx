import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UserMangement from "../pages/UserMangement";
import Pending from "../pages/KycManagement/Pending";
import Approved from "../pages/KycManagement/Approved";
import Rejected from "../pages/KycManagement/Rejected";
import GameRecord from "../pages/Game/GameRecord";
import NewAccount from "../pages/BankMAnagement/NewAccount";
import BankApproved from "../pages/BankMAnagement/BankApproved";
import BankRejected from "../pages/BankMAnagement/BankRejected";
import TranstionMangement from "../pages/TranstionMangement";
import GameHistory from "../pages/Game/GameHistory";
import PointTable from "../pages/Game/PointTable";
import DealTable from "../pages/Game/DealTable";
import PoolTableEntry from "../pages/Game/PoolTableEntry";
import BotManagement from "../pages/BotManagement";
import PaymentManagement from "../pages/PaymentManagement";
import WithdrawRequest from "../pages/PayoutManagement/WithdrawRequest";
import InProcess from "../pages/PayoutManagement/InProcess";
import ProcessRequest from "../pages/PayoutManagement/ProcessRequest";
import ReferralManagement from "../pages/ReferralManagement";
import SocialManagement from "../pages/SocialManagement";
import PushNotification from "../pages/PushNotification";
import AppMentenence from "../pages/Setting/AppMentenence";
import UserDetails from "../components/UserDetails";
import BannerPageSlider from "../pages/BannerPageSlider";
import Chat from "../pages/Chat";
import AddGame from "../pages/Game/AddGame";
import Login from "../components/Login";
import Testomonial from "../pages/Testomonial";
import Bonus from "../pages/Bonus";
import About from "../pages/CMS/About";
import AddAdmin from "../pages/Admin/AddAdmin";
import GlobalConfig from "../pages/Setting/GlobalConfig";
import SliderNotification from "../pages/SliderNotification";
import AffelieateManagement from "../pages/AffelieateManagement";
import ResponsiblePlayer from "../pages/CMS/ResponsiblePlayer";
import Refferail from "../pages/CMS/Refferail";
import PrivicyPolicy from "../pages/CMS/PrivicyPolicy";
import RefundPolicy from "../pages/CMS/RefundPolicy";
import TermsService from "../pages/CMS/TermsService";
import Leagality from "../pages/CMS/Leagality";
import FaqCategories from "../pages/CMS/FaqCategories";
import Withdrawcharges from "../pages/CMS/Withdrawcharges";
import Faqs from "../pages/CMS/Faqs";
import Info from "../pages/CMS/Info";
import BotConfig from "../pages/Setting/BotConfig";
import WithdrawalAdmin from "../pages/WithdrawalSetting/WithdrawalAdmin";
import ClubType from "../pages/ClubType";
import ViewTranstion from "../components/ViewTranstion";
import Avatars from "../pages/Players/Avatars";
import PromotionalMessages from "../pages/Players/PromotionalMessages";
import DepositTransactions from "../pages/Players/DepositTransactions";
import Withdrawrequests from "../pages/Players/Withdrawalrequests";
import TournamnetCategory from "../pages/Tournament/TournamnetCategory";
import Tournament from "../pages/Tournament/Tournament";
import RegesterdPlayers from "../pages/Players/RegesterdPlayers";
import GameData from "../pages/Game/GameData";
import RefferailDetails from "../components/RefferailDetails";
import Notification from "../pages/Notification";
import Statemanagement from "../pages/Setting/Statemanagement";
import AddCms from "../pages/CMS/AddCms";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/usermanagement" element={<UserMangement />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/userdetails" element={<UserDetails />} />
      <Route path="/pending" element={<Pending />} />
      <Route path="/approved" element={<Approved />} />
      <Route path="/rejected" element={<Rejected />} />
      <Route path="/gamerecord" element={<GameRecord />} />
      <Route path="/newaccount" element={<NewAccount />} />
      <Route path="/bankapproved" element={<BankApproved />} />
      <Route path="/bankrejected" element={<BankRejected />} />
      <Route path="/transtionmanagement" element={<TranstionMangement />} />
      <Route path="/gamehistory" element={<GameHistory />} />
      <Route path="/addgame" element={<AddGame />} />
      <Route path="/pointtable" element={<PointTable />} />
      <Route path="/dealtable" element={<DealTable />} />
      <Route path="/pooltableentry" element={<PoolTableEntry />} />
      <Route path="/botmanagement" element={<BotManagement />} />
      <Route path="/paymentmanagement" element={<PaymentManagement />} />
      <Route path="/withdrawrequest" element={<WithdrawRequest />} />
      <Route path="/inprocess" element={<InProcess />} />
      <Route path="/processrequest" element={<ProcessRequest />} />
      <Route path="/affalitemanagement" element={<AffelieateManagement />} />
      <Route path="/socialmanagement" element={<SocialManagement />} />
      <Route path="/pushnotification" element={<PushNotification />} />
      <Route path="/sliderNotification" element={<SliderNotification />} />
      <Route path="/bannerpageslider" element={<BannerPageSlider />} />
      <Route path="/testomonial" element={<Testomonial />} />
      <Route path="/bonus" element={<Bonus />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/addadmin" element={<AddAdmin />} />
      <Route path="/globalconfig" element={<GlobalConfig />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/clubtype" element={<ClubType />} />
      <Route path="/viewtranstion" element={<ViewTranstion />} />

      {/* REFFERAIL */}
      <Route path="/referralmanagement" element={<ReferralManagement />} />
      <Route path="/refferaildetails" element={<RefferailDetails />} />

      {/* REFFERAIL */}

      {/* TOURNAMNET */}
      <Route path="/tournament" element={<Tournament />} />
      <Route path="/tournamentcategory" element={<TournamnetCategory />} />
      {/* TOURNAMNET */}

      {/* GAME */}
      <Route path="/gameplaydata" element={<GameData />} />

      {/* SETTING */}
      <Route path="/botconfig" element={<BotConfig />} />
      <Route path="/statemangement" element={<Statemanagement />} />

      {/* CMS START*/}
      <Route path="/aboutus" element={<About />} />
      <Route path="/responsibleplay" element={<ResponsiblePlayer />} />
      <Route path="/refferail" element={<Refferail />} />
      <Route path="/privicypolicy" element={<PrivicyPolicy />} />
      <Route path="/refundypolicy" element={<RefundPolicy />} />
      <Route path="/termsservice" element={<TermsService />} />
      <Route path="/leagality" element={<Leagality />} />
      <Route path="/faqcategory" element={<FaqCategories />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/withdrawcharges" element={<Withdrawcharges />} />
      <Route path="/info" element={<Info />} />
      <Route path="/addcms" element={<AddCms />} />
      {/* CMS END */}

      {/* PLAYERS */}
      <Route path="/regesterdplayers" element={<RegesterdPlayers />} />
      <Route path="/avatars" element={<Avatars />} />
      <Route path="/promotionalmessage" element={<PromotionalMessages />} />
      <Route path="/deposittransition" element={<DepositTransactions />} />
      <Route path="/withdrawalrequests" element={<Withdrawrequests />} />

      {/* WITHDRAWAL ADMIN */}

      <Route path="/withdrawaladmin" element={<WithdrawalAdmin />} />
      <Route path="/appmaintenance" element={<AppMentenence />} />
    </Routes>
  );
};

export default AllRoutes;
