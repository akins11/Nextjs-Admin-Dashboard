const monthAbbrName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


export const homeRevenueTrendData = {
    months: monthAbbrName,
    value: [241254, 215478, 257846, 278451, 248754, 210254, 236745, 245784, 214687, 243475, 268745, 289547]
};


export const platformUsageUsersData = {
    new_users: {
        seriesValue: [368, 457, 330, 321, 411, 494, 398, 355, 415, 456, 410, 486],
        categories: monthAbbrName
    },
    returning_users: {
        seriesValue: [15781, 18784, 17412, 21024, 16145, 24512, 21024, 24578, 27541, 24865, 27914, 29678],
        categories: monthAbbrName
    }
};

export const platformUsageData = {
    app: {
        seriesValue: [10164, 10847, 11087, 12547, 11547, 13750, 13278, 14110, 13745, 14825, 15345, 16031],
        categories: monthAbbrName
    },
    store: {
        seriesValue: [2496, 2850, 2546, 2986, 3771, 4029, 3924, 4061, 5628, 4956, 6503, 7236],
        categories: monthAbbrName
    },
    agent: {
        seriesValue: [528, 528, 643, 724, 572, 747, 676, 709, 898, 931, 814, 1196],
        categories: monthAbbrName
    }
};


export const totalExpensesData = {
    months: monthAbbrName,
    value: [41254, 15478, 57846, 78451, 48754, 10254, 36745, 45784, 14687, 53475, 78745, 92547]
};


export const expensesCategoryData = [
    {
        id: "ec1",
        category: "Wages",
        amount: "$49.3K", // 49,300
        percent: "83%"
    },
    {
        id: "ec2",
        category: "Marketing",
        amount: "$15.3K", // 15,340
        percent: "46%"
    },
    {
        id: "ec3",
        category: "Raw material",
        amount: "$12.5K", //12,560
        percent: "39%"
    },
    {
        id: "ec4",
        category: "R & D",
        amount: "$8.20K", // 8,200
        percent: "33%"
    },
    {
        id: "ec5",
        category: "Licenses",
        amount: "$2.47K", // 2476
        percent: "23%"
    },
    {
        id: "ec6",
        category: "Buy Product",
        amount: "$2.24K", // 2,247
        percent: "20%"
    },
    {
        id: "ec7",
        category: "CSR",
        amount: "$1.67K", // 1678
        percent: "18%"
    },
    {
        id: "ec8",
        category: "People Expenses",
        amount: "$806",
        percent: "12%"
    }
];


const month = "Dec";
const monthNumber = Array.from(Array(31).keys()).map(x => x + 1);
const monthDay = monthNumber.map(num => month + " " + num);

export const salesTrendData = {
    week: {
        seriesValues: [72154, 80264, 63051, 71487, 69358, 73887, 85466],
        categoryValues: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
    },
    month: {
        seriesValues: [
            21254, 32364, 25151, 31987, 22458, 28987, 36325, 20254, 24564, 28151, 18587, 25458, 34987, 38375,
            22254, 31964, 27151, 22587, 31958, 20987, 25345, 27254, 22364, 29151, 33587, 38458, 20987, 32362,
            36458, 21987, 21265
        ],
        categoryValues: monthDay
    }
};


export const customerWebTrafficData = {
    seriesValues: [
        2325, 3136, 3815, 3398, 2945, 2898, 3632, 2825, 3456, 2815, 3558, 2545, 3498, 3837,
        2425, 3196, 2715, 2558, 3295, 2898, 2434, 2625, 2436, 2915, 3358, 3745, 2898, 3436,
        3645, 2898, 3526
    ],
    categoryValues: monthDay
};



export const inventoryMaxMinData = {
    Maximum: {
        seriesValue: [925368, 950457, 885748, 956421, 938451, 894124, 945698, 931425, 874785, 917456, 924210, 945256]
    },
    Minimum: {
        seriesValue: [627814, 637844, 584124, 620245, 641457, 595128, 690245, 665781, 565412, 628657, 619145, 621484]
    }
};


export const productPurchaseBarLineData = {
    // category: monthAbbrName,
    loafer: { // high
        order:    [1247, 1021, 1557, 1455, 1051, 1258, 1105, 1256, 1554, 1258, 1157, 1413],
        purchase: [845, 725, 1064, 894, 644, 874, 784, 924, 1284, 824, 974, 1046]
    },
    boot: { // low
        order:    [341, 241, 381, 261, 272, 211, 220, 181, 171, 211, 235, 202],
        purchase: [199, 190, 301, 190, 110, 174, 182, 107, 116, 169, 181, 182]
    },
    sneaker: { // high
        order:    [4147, 3858, 1957, 2855, 3051, 4058, 2258, 2156, 3554, 2558, 1557, 3413],
        purchase: [3845, 3058, 1046, 2348, 2742, 3847, 1942, 1840, 3049, 2244, 1043, 3169]
    },
    chelsea: { // Low
        order:    [517, 478, 505, 397, 341, 302, 357, 436, 432, 321, 256, 287],
        purchase: [482, 384, 445, 387, 294, 286, 347, 421, 406, 294, 253, 271]
    },
    bogues: { // Low
        order:    [254, 247, 231, 267, 215, 257, 234, 275, 258, 287, 221, 245],
        purchase: [140, 187, 123, 168, 154, 148, 149, 175, 154, 165, 120, 147]
    },
    courtShoe: {
        order:    [327, 345, 312, 361, 304, 284, 342, 378, 305, 378, 321, 300],
        purchase: [302, 268, 245, 274, 256, 247, 284, 215, 287, 274, 251, 281]
    },
    derbyShoe: {
        order:    [457, 427, 479, 490, 433, 467, 487, 410, 443, 424, 475, 447],
        purchase: [389, 368, 357, 375, 362, 374, 391, 301, 348, 367, 384, 396]
    },
    sandal: {
        order:    [587, 568, 512, 578, 598, 567, 512, 584, 523, 571, 555, 536],
        purchase: [487, 467, 421, 438, 456, 415, 475, 442, 406, 415, 478, 491]
    },
    stilettoHeel: {
        order:    [368, 312, 345, 304, 351, 315, 325, 347, 301, 349, 330, 348],
        purchase: [247, 235, 258, 247, 278, 245, 265, 234, 247, 213, 268, 215]
    },
    hikingBoot: {
        order:    [154, 123, 138, 162, 121, 95, 124, 109, 145, 96, 116, 130],
        purchase: [89, 97, 75, 89, 71, 52, 40, 53, 77, 71, 78, 85]
    }
};


export const attritionTrendData = {
    value: [5, 15, 25, 11, 14, 18, 23, 22, 31, 37, 45, 70, 32],
    date: ["Feb 2022", "Mar 2022", "Apr 2022", "May 2022", "Jun 2022", "Jul 2022", "Aug 2022", "Sep 2022",
           "Oct 2022", "Nov 2022", "Dec 2022", "Jan 2023", "Feb 2023"]
}