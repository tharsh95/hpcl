import { Activity, BarChart2, Clock, TrendingUp, Sun, Bell } from 'lucide-react';

export const boxConfigs = [
  {
    id: 1,
    title: "Real Time Traffic Monitoring",
    description: "Track live electricity rates and optimise your energy usage",
    icon: Activity,
    path: "/traffic-monitor"
  },
  {
    id: 2,
    title: "Energy Consumption Analytics",
    description: "Detailed insights into your power consumption patterns",
    icon: BarChart2,
    path: "/consumption-analytics"
  },
  {
    id: 3,
    title: "Smart Scheduling",
    description: "Automate your energy usage during optimal pricing periods",
    icon: Clock,
    path: "/smart-scheduling"
  },
  {
    id: 4,
    title: "Cost Benefit Analysis",
    description: "Calculate savings and ROI from solar investment",
    icon: TrendingUp,
    path: "/cost-analysis"
  },
  {
    id: 5,
    title: "Forecasting & Generation",
    description: "Predict solar generation and optimize energy storage",
    icon: Sun,
    path: "/forecasting"
  },
  {
    id: 6,
    title: "Notifications & Savings",
    description: "Get alerts for peak pricing and savings opportunities",
    icon: Bell,
    path: "/notifications"
  }
];

export const upperBoxConfig = [
  {
    id: 1,
    title: "Current Tariff Rate",
    description: "₹6.50/kWh",
    type:"Standard",
    color:"text-gray-400",
    icon: Activity, 
  },
  {
    id: 2,
    title: "Solar Generation",
    description: "4.2kWh",
    type:"+12% from yesterday",
    color:"text-green-400",
    icon: TrendingUp
  },
  {
    id: 3,
    title: "Current Usage",
    description: "2.8 kWh",
    type:"Peak hours ahead",
    color:"text-red-400",
    icon: BarChart2,
  },
  {
    id: 4,
    title: "Today's Savings",
    description: "₹285",
    type:"Through smart scheduling",
    color:"text-green-400",
    icon: Clock,
  }
]
export const lowerBoxConfig = [
  {
    id: 1,
    title: "Off-Peak Hours ",
    description: "10PM-6AM",
    type:"₹4/kWh",
    color:"text-green-400", 
  },
  {
    id: 2,
    title: "Mid-Peak Hours",
    description: "6AM-10PM",
    type:"₹8/kWh",
    color:"text-green-400",
  },
  {
    id: 3,
    title: "Standard Hours",
    description: "10AM-6PM",
    type:"₹6/kWh",
    color:"text-green-400",
  },
  {
    id: 4,
    title: "Peak Hours",
    description: "6PM-10PM",
    type:"₹12/kWh",
    color:"text-red-400",
  }
]

export const optimizer=[
    {
        name:"Srajit",
        surname:"Bhardwaj",
    }
]