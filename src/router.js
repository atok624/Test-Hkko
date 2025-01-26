import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Gold from './pages/Gold.vue';
import Silver from './pages/Silver.vue';
import Investment from './pages/Investment.vue';
import Services from './pages/Services.vue';
import Faq from './pages/Faq.vue';
import Blog from './pages/Blog.vue';
import BuyerCalculator from './pages/BuyerCalculator.vue';
import SellerCalculator from './pages/SellerCalculator.vue';
import Login from './pages/Login.vue';
import ForgetPW from './pages/ForgetPW.vue';
import SignUp from './pages/SignUp.vue';
import Cart from './components/Cart.vue';

import DashbaoardLayout from './components/dashboard/DashbaoardLayout.vue';
import NotificationsPage from './components/dashboard/NotificationsPage.vue';
import ProfileSettingsPage from './components/dashboard/ProfileSettingsPage.vue';
import WalletPage from './components/dashboard/WalletPage.vue';
import TransactionsHistoryPage from './components/dashboard/TransactionsHistoryPage.vue';
import OrdersPage from './components/dashboard/OrdersPage.vue';
import SavedItemsPage from './components/dashboard/SavedItemsPage.vue';
import DeleteAccountPage from './components/dashboard/DeleteAccountPage.vue';
import LastNews from './pages/LastNews.vue';
import PrivatePlacement from './pages/PrivatePlacement.vue';
import GSSavings from './pages/GSSavings.vue';
import PPPGuide from './pages/PPPGuide.vue';
import PPPComparison from './pages/PPPComparison.vue';
import VaultingAndStorage from './pages/VaultingAndStorage.vue';
import TreasuryServices from './pages/TreasuryServices.vue';
import Trading from './pages/Trading.vue';
import TermsAndConditions from './pages/TermsAndConditions.vue';
import Refining from './pages/Refining.vue';
import PrivacyPolicy from './pages/PrivacyPolicy.vue';
import PPPService from './pages/PPPService.vue';
import MintPage from './pages/MintPage.vue';
import GlobalLogistics from './pages/GlobalLogistics.vue';
import Contact from './pages/Contact.vue';
import OnlineTrading from './pages/OnlineTrading.vue';



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: SignUp },
  { path: '/reset-password', name: 'Forgot Password', component: ForgetPW },
  { path: '/about', name: 'About', component: About },
  { path: '/gold', name: 'Gold', component: Gold },
  { path: '/silver', name: 'Silver', component: Silver },
  { path: '/invest', name: 'Investment Plans', component: Investment },
  { path: '/services', name: 'Services', component: Services },
  { path: '/faq', name: 'FAQ', component: Faq },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/cart', name: 'Cart', component: Cart},
  { path: '/pppguide', name: 'PPP Guide', component: PPPGuide},
  { path: '/pppcomparison', name: 'PPP Comparison', component: PPPComparison },
  { path: '/GSSavings', name: 'GSSavings', component: GSSavings,  },
  { path: '/private-placement', name: 'Private Placement', component: PrivatePlacement },
  { path: '/last-news', name: 'Last News', component: LastNews },
  { path: '/calculator/buyers', name: 'Buyers Calculator', component: BuyerCalculator },
  { path: '/calculator/sellers', name: 'Sellers Calculator', component: SellerCalculator },
  { path: '/vaultingstorage', name: 'Vaulting and Storage', component: VaultingAndStorage},
  { path: '/treasuryservices', name: 'Treasury Services', component: TreasuryServices},
  { path: '/trading', name: 'Trading', component: Trading},
  { path: '/termsconditions', name: 'Terms and Conditions', component: TermsAndConditions},
  { path: '/refining', name: 'Refining', component: Refining},
  { path: '/privacypolicy', name: 'Privacy Policy', component: PrivacyPolicy},
  { path: '/pppservices', name: 'PPP Services', component: PPPService},
  { path: '/mintpage', name: 'Mint Page', component: MintPage},
  { path: '/globallogistics', name: 'Global Logistics', component: GlobalLogistics},
  { path: '/contact', name: 'Contact', component: Contact},
  { path: '/online-trading', name: 'Online Trading', component: OnlineTrading},
  {
    path: '/dashboard',
    component: DashbaoardLayout,
    redirect: '/dashboard/notifications',
    meta: { requiresAuth: true },
    children: [
      { path: 'notifications', name: 'Notifications', component: NotificationsPage },
      { path: 'profile', name: 'Profile Settings', component: ProfileSettingsPage },
      { path: 'wallet', name: 'Wallet', component: WalletPage },
      { path: 'transactions', name: 'Transaction History', component: TransactionsHistoryPage },
      { path: 'orders', name: 'Orders', component: OrdersPage },
      { path: 'saved', name: 'Saved Items', component: SavedItemsPage },
      { path: 'delete-account', name: 'Delete Account', component: DeleteAccountPage }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;