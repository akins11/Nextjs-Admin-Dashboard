import { GrAppsRounded } from 'react-icons/gr'; 
import { CgHome } from 'react-icons/cg';
import { HiOutlineChartBar } from 'react-icons/hi';
import { RiShoppingCartLine, RiLineChartLine } from 'react-icons/ri';
import { FiUser, FiUsers, FiLogOut } from 'react-icons/fi';
import { CgShoppingBag } from 'react-icons/cg';
import { BsFileEarmarkCheck, BsPersonCircle, BsClockHistory } from 'react-icons/bs';
import { 
  TbReportSearch, 
  TbTrendingDown3, 
  TbTrendingUp3, 
  TbReportMoney, 
  TbReceipt,
  TbChartLine,
  TbFileCheck,
  TbApps
} from 'react-icons/tb';
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TfiPackage } from "react-icons/tfi";
import { BiLineChart } from 'react-icons/bi';



export const dashboardItems = [
    {
      id: "di1",
      title: "Home",
      link: "/",
      icon: <CgHome className="sidebar__icon" />
    },
    {
      id: "di2",
      title: "Analytics",
      link: "/Analytics",
      icon: <HiOutlineChartBar className="sidebar__icon" />
    },
    {
      id: "di3",
      title: "Sales",
      link: "/Sales",
      icon: <RiShoppingCartLine className="sidebar__icon" />
    }
];
  

export const businessAnalysisItems = [
    {
      id: "bai1",
      link: "/Customers",
      title: "Customers",
      icon: <FiUser className="sidebar__icon" />
    },
    {
      id: "bai2",
      link: "/Products",
      title: "Products",
      icon: <CgShoppingBag className="sidebar__icon" />
    },
    {
      id: "bai3",
      link: "/Transactions",
      title: "Transactions",
      icon: <BsFileEarmarkCheck className="sidebar__icon" />
    },
    {
      id: "bai4",
      link: "/Report",
      title: "Report",
      icon: <TbReportSearch className="sidebar__icon" />
    }
];
  
  
export const StaffItems = [
      {
        id: "si1",
        link: "/Manage",
        title: "Manage",
        icon: <FiUsers className="sidebar__icon" />
      },
      {
        id: "si2",
        link: "/Attrition",
        title: "Attrition",
        icon: <RiLineChartLine className="sidebar__icon" />
      }
];
  

export const homeRevenueSummaryValues = [
  {
    id: "hrs1",
    title: "Investment",
    value: "$3,245,547",
    rate: "+6%",
    icon: <TbTrendingUp3 className='performance_icon positive' />,
    sub: "Last Fiscal Year (Total)"
  },
  {
    id: "hrs2",
    title: "Sales",
    value: "$428,200",
    rate: "-1.4%",
    icon: <TbTrendingDown3 className='performance_icon negative' />,
    sub: "Last Month (Total)"
  },
  {
    id: "hrs3",
    title: "Revenue",
    value: "$310,025",
    rate: "+2.1%",
    icon: <TbTrendingUp3 className='performance_icon positive' />,
    sub: "Last Month (Total)"
  },
  {
    id: "hrs4",
    title: "Cost",
    value: "$258,175",
    rate: "+2.4%",
    icon: <TbTrendingUp3 className='performance_icon negative' />,
    sub: "Last Month (Total)"
  }
];


export const totalCustomerOrderValue = [
  {
    id: "tcov1",
    title: "Customers",
    value: "27,561",
    valueDesc: "Total Unique Customers",
    addValue: "2,241.00",
    addValueDesc: "New Customers",
    percent: "10%"
  },
  {
    id: "tcov2",
    title: "Orders",
    value: "1,102,050",
    valueDesc: "Total Orders till date",
    addValue: "124,234",
    addValueDesc: "New Orders",
    percent: "8.3%"
  }
];


export const platformCardsItems = [
  {
    id: "pc1",
    title: "App",
    appIcon: <TbApps />,
    value: "16,031",
    rate: "5%",
    rateIcon: <ImArrowUp2 />,
    rateColor: "positive"
  },
  {
    id: "pc2",
    title: "Store",
    appIcon: <SiHomeassistantcommunitystore />,
    value: "7,236",
    rate: "15%",
    rateIcon: <ImArrowDown2  />,
    rateColor: "negative"
  },
  {
    id: "pc3",
    title: "Agent",
    appIcon: <BsPersonCircle />,
    value: "1,196",
    rate: "1%",
    rateIcon: <ImArrowUp2 />,
    rateColor: "positive"
  }
];

export const  expensesSummaryItems = [
  {
    id: "es1",
    title: "Total Expenses",
    headerIcon: <TbReportMoney />,
    value: "$1.0M",
    subIcon: <ImArrowDown2 />,
    subValue: "-4.5%",
    color: "red"
  },
  {
    id: "es2",
    title: "Expenses per Project",
    headerIcon: <AiOutlineFundProjectionScreen />,
    value: "$124.2K",
    subIcon: <ImArrowDown2 />,
    subValue: "-3.1%",
    color: "red"
  },
  {
    id: "es3",
    title: "Daily Expenses",
    headerIcon: <TbReceipt />,
    value: "$11.2K",
    subIcon: <ImArrowUp2 />,
    subValue: "2.8%"
  },
  {
    id: "es4",
    title: "Projeted Expenses",
    headerIcon: <TbChartLine />,
    value: "$11.9K",
    subIcon: <ImArrowUp2 />,
    subValue: "0.2%"
  },
];


export const inventorySummaryItems = [
  {
    id: "isi1",
    title: "Total Inventory",
    hIcon: <TfiPackage />,
    value: "1.57M",
    percent: "1.45%",
    percentIcon: <ImArrowUp2 />
  },
  {
    id: "isi2",
    title: "Incoming Inventory",
    hIcon: <TbFileCheck />,
    value: "245.6K",
    percent: "0.26%",
    percentIcon: <ImArrowUp2 />
  }
];


export const customerOverviewSummary = [
  {
    id: "cosd1",
    value: 73,
    percent: "73.7%",
    subTitle: "Returning Customer"
  },
  {
    id: "cosd2",
    value: 27,
    percent: "27.3%",
    subTitle: "New Customer"
  }
];


export const userReview = [
  {
    id: "ur1",
    name: "Metro Deweese",
    rating: 3,
    comment: "I got my packaged mixed up when making an order but it was quickly rectified!."
  },
  {
    id: "ur2",
    name: "Federico Kereki",
    rating: 4,
    comment: "I can make as many orders as i want at a very low cost of shipping. Looking forward to my next order."
  },
  {
    id: "ur3",
    name: "Chinda Great",
    rating: 2,
    comment: "There were few troubles using my credit card. slow network it was resolved but the stress!! nah."
  },
  {
    id: "ur4",
    name: "Maryam Burchill",
    rating: 5,
    comment: "I am impressed with how fast i received my order. received Them within 3 days."
  },
  {
    id: "ur5",
    name: "Thompson Tasha",
    rating: 3,
    comment: "Oh well here is my 2 cent, the product are good but could not immediately replace already ordered products"
  },
  {
    id: "ur6",
    name: "Banigo Kene",
    rating: 4,
    comment: "Same as always with the delivery speed, but i am impressed by the product quality"
  }
];


export const marketingTeamUpdate = [
  {
    id: "mtu1",
    name: "Lucas Smith",
    title: "Lead Marketing Officer",
    updateColor: "red"
  },
  {
    id: "mtu2",
    name: "Janet Abshire",
    title: "Lead Innovation Officer",
    updateColor: "yellow"
  },
  {
    id: "mtu3",
    name: "Koch Fleng",
    title: "Product Designer",
    updateColor: "green"
  },
  {
    id: "mtu4",
    name: "George Clinton",
    title: "Sales Manager",
    updateColor: "yellow"
  },
  {
    id: "mtu5",
    name: "Sarah Simonsh",
    title: "Ui/UX Adimistrator",
    updateColor: "green"
  },
];



export const attritionStatsCardData = [
  {
    id: "asc1",
    value: "16.1%",
    title: "ATTRITION RATE",
    icon: <BiLineChart />
  },
  {
    id: "asc2",
    value: "273",
    title: "TOTAL ATTRITION",
    icon: <FiLogOut />
  },
  {
    id: "asc3",
    value: "1,233",
    title: "CURRENT EMPLOYEES",
    icon: <FiUsers />
  },
  {
    id: "asc4",
    value: "7",
    title: "EMPLOYEES Avg. YEAR",
    icon: <BsClockHistory />
  }
];


export const attritionRoleData = [
  {
    id: "ar1",
    index: 1,
    jobTitle: "Laboratory Technician",
    attrition: 62,
    retention: 197
  },
  {
    id: "ar2",
    index: 2,
    jobTitle: "Sales Executive",
    attrition: 57,
    retention: 269
  },
  {
    id: "ar3",
    index: 3,
    jobTitle: "Resaerch Scientist",
    attrition: 47,
    retention: 245
  },
  {
    id: "ar4",
    index: 4,
    jobTitle: "Sales Representative",
    attrition: 33,
    retention: 50
  },
  {
    id: "ar5",
    index: 5,
    jobTitle: "Human Resources",
    attrition: 12,
    retention: 40
  }
];


export const recentAttritionData = [
  {
    id: "E_780",
    role: "Research Scientist",
    department: "R & D",
    date: "8 May, 2022",
    avgSatScore: 4,
    performanceRating: 3,
    monthlyIncome: "$2,686",
    salaryHike: "13%" 
  },
  {
    id: "E_45",
    role: "Human Resource",
    department: "HR",
    date: "6 May, 2022",
    avgSatScore: 3,
    performanceRating: 3,
    monthlyIncome: "$2,293",
    salaryHike: "16%" 
  },
  {
    id: "E_896",
    role: "Sales Representative",
    department: "Sales",
    date: "3 May, 2022",
    avgSatScore: 3,
    performanceRating: 3,
    monthlyIncome: "$2,800",
    salaryHike: "19%" 
  }
];