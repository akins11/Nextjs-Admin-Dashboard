import '@/styles/globals.scss';
import "@fontsource/roboto";
import "@/Components/Layout/layout.scss";
import "@/Components/TopBar/topBar.scss";
import "@/Components/SideBar/sidebar.scss";
import "@/Components/Home/homePage.scss";
import "@/Components/Analytics/analytics.scss";
import 'react-circular-progressbar/dist/styles.css';
import "@/Components/Sales/sales.scss";
import "@/Components/Customers/customers.scss";
import "@/Components/Products/products.scss";
import "@/Components/Transactions/transactions.scss";
import "@/Components/Report/report.scss";
import "@/Components/Manage/manage.scss";
import "@/Components/Attrition/attrition.scss";
import "@/styles/dark.scss";

import { DarkModeContextProvider } from '@/context/darkModeContext';


export default function App({ Component, pageProps }) {
  return (
    <DarkModeContextProvider>
      <Component {...pageProps} />
    </DarkModeContextProvider>
  )
}
