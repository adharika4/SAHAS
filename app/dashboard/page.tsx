"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Filter } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// Sample data for trafficking trends (2014-2020) - Indian states
const traffickingTrends = [
  { year: 2014, cases: 8132, state: "Uttar Pradesh" },
  { year: 2015, cases: 8756, state: "Uttar Pradesh" },
  { year: 2016, cases: 9234, state: "Uttar Pradesh" },
  { year: 2017, cases: 9876, state: "Uttar Pradesh" },
  { year: 2018, cases: 10234, state: "Uttar Pradesh" },
  { year: 2019, cases: 10987, state: "Uttar Pradesh" },
  { year: 2020, cases: 11456, state: "Uttar Pradesh" },
]

const indianStateData = [
  { state: "Uttar Pradesh", cases: 11456, poverty: 29.4, literacy: 67.7, employment: 89.2 },
  { state: "Bihar", cases: 8234, poverty: 33.7, literacy: 61.8, employment: 87.5 },
  { state: "West Bengal", cases: 7654, poverty: 19.9, literacy: 76.3, employment: 91.1 },
  { state: "Rajasthan", cases: 6543, poverty: 24.8, literacy: 66.1, employment: 88.8 },
  { state: "Maharashtra", cases: 5432, poverty: 17.4, literacy: 82.3, employment: 93.2 },
  { state: "Madhya Pradesh", cases: 4987, poverty: 31.7, literacy: 69.3, employment: 86.4 },
  { state: "Odisha", cases: 4321, poverty: 32.6, literacy: 72.9, employment: 85.7 },
  { state: "Jharkhand", cases: 3876, poverty: 36.9, literacy: 66.4, employment: 84.3 },
]

const correlationData = [
  { factor: "Poverty Rate", correlation: 0.78, color: "#ef4444" },
  { factor: "Unemployment", correlation: 0.65, color: "#f97316" },
  { factor: "Low Literacy", correlation: 0.52, color: "#eab308" },
  { factor: "Population Density", correlation: 0.43, color: "#22c55e" },
]

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
]

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState("2020")
  const [selectedState, setSelectedState] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Data Dashboard</h1>
              <p className="text-muted-foreground mt-2">
                Interactive analysis of human trafficking trends across Indian states
              </p>
            </div>
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              <BarChart3 className="w-4 h-4 mr-1" />
              India Data
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Data Filters
            </CardTitle>
            <CardDescription>Filter the data by year, Indian state, or crime category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Year</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2019">2019</SelectItem>
                    <SelectItem value="2018">2018</SelectItem>
                    <SelectItem value="2017">2017</SelectItem>
                    <SelectItem value="2016">2016</SelectItem>
                    <SelectItem value="2015">2015</SelectItem>
                    <SelectItem value="2014">2014</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Indian State</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, "")}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Crime Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="labor">Labor Trafficking</SelectItem>
                    <SelectItem value="sex">Sex Trafficking</SelectItem>
                    <SelectItem value="domestic">Domestic Servitude</SelectItem>
                    <SelectItem value="bonded">Bonded Labor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Trafficking Trends Over Time */}
          <Card>
            <CardHeader>
              <CardTitle>Trafficking Cases Trend in India (2014-2020)</CardTitle>
              <CardDescription>Year-over-year trafficking case numbers</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={traffickingTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cases" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* State-wise Cases */}
          <Card>
            <CardHeader>
              <CardTitle>Cases by Indian State (2020)</CardTitle>
              <CardDescription>Top 8 Indian states with highest trafficking cases</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={indianStateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="state" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="cases" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Correlation Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Socioeconomic Correlation Analysis</CardTitle>
            <CardDescription>Correlation between trafficking cases and socioeconomic factors in India</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {correlationData.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{item.factor}</h4>
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-2xl font-bold">{item.correlation}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Correlation coefficient</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* State Details Table */}
        <Card>
          <CardHeader>
            <CardTitle>Indian State-wise Detailed Analysis</CardTitle>
            <CardDescription>
              Comprehensive view of trafficking cases and socioeconomic indicators across Indian states
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Indian State</th>
                    <th className="text-left p-3 font-medium">Cases (2020)</th>
                    <th className="text-left p-3 font-medium">Poverty Rate (%)</th>
                    <th className="text-left p-3 font-medium">Literacy Rate (%)</th>
                    <th className="text-left p-3 font-medium">Employment Rate (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {indianStateData.map((state, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-3 font-medium">{state.state}</td>
                      <td className="p-3">{state.cases.toLocaleString()}</td>
                      <td className="p-3">{state.poverty}%</td>
                      <td className="p-3">{state.literacy}%</td>
                      <td className="p-3">{state.employment}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
