"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Brain, Calculator, Shield, TrendingUp } from "lucide-react"

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

export default function ModelPage() {
  const [selectedState, setSelectedState] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [povertyRate, setPovertyRate] = useState("")
  const [literacyRate, setLiteracyRate] = useState("")
  const [employmentRate, setEmploymentRate] = useState("")
  const [prediction, setPrediction] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePredict = async () => {
    setIsLoading(true)

    // TODO: Replace with actual API call to Flask backend
    // const response = await fetch('/api/predict', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     state: selectedState,
    //     year: selectedYear,
    //     poverty_rate: parseFloat(povertyRate),
    //     literacy_rate: parseFloat(literacyRate),
    //     employment_rate: parseFloat(employmentRate)
    //   })
    // })
    // const data = await response.json()

    // Simulate API call for now
    setTimeout(() => {
      const mockPrediction = {
        cases: Math.floor(Math.random() * 10000) + 1000,
        riskLevel: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
        confidence: Math.floor(Math.random() * 20) + 80,
        preventiveActions: [
          "Increase community awareness programs in rural areas",
          "Strengthen law enforcement training on trafficking identification",
          "Improve economic opportunities for vulnerable populations",
          "Enhance victim support services and rehabilitation centers",
          "Collaborate with NGOs for better outreach programs",
        ],
      }
      setPrediction(mockPrediction)
      setIsLoading(false)
    }, 2000)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300"
      case "High":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">AI Prediction Tool</h1>
              <p className="text-muted-foreground mt-2">
                Predict trafficking risk levels across Indian states using machine learning
              </p>
            </div>
            <Badge variant="outline" className="text-purple-600 border-purple-600">
              <Brain className="w-4 h-4 mr-1" />
              India ML Model
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Prediction Parameters
              </CardTitle>
              <CardDescription>
                Enter the parameters below to get trafficking risk predictions for Indian states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="state">Indian State</Label>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Indian state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Socioeconomic Indicators</h4>

                <div>
                  <Label htmlFor="poverty">Poverty Rate (%)</Label>
                  <Input
                    id="poverty"
                    type="number"
                    placeholder="e.g., 29.4 (for UP)"
                    value={povertyRate}
                    onChange={(e) => setPovertyRate(e.target.value)}
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>

                <div>
                  <Label htmlFor="literacy">Literacy Rate (%)</Label>
                  <Input
                    id="literacy"
                    type="number"
                    placeholder="e.g., 67.7 (for UP)"
                    value={literacyRate}
                    onChange={(e) => setLiteracyRate(e.target.value)}
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>

                <div>
                  <Label htmlFor="employment">Employment Rate (%)</Label>
                  <Input
                    id="employment"
                    type="number"
                    placeholder="e.g., 89.2 (for UP)"
                    value={employmentRate}
                    onChange={(e) => setEmploymentRate(e.target.value)}
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>
              </div>

              <Button
                onClick={handlePredict}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={
                  !selectedState || !selectedYear || !povertyRate || !literacyRate || !employmentRate || isLoading
                }
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing Indian Data...
                  </>
                ) : (
                  <>
                    <Brain className="w-4 h-4 mr-2" />
                    Generate Prediction
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Prediction Results
              </CardTitle>
              <CardDescription>AI-generated predictions and recommendations for Indian states</CardDescription>
            </CardHeader>
            <CardContent>
              {!prediction ? (
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Enter parameters and click "Generate Prediction" to see results
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Predicted Cases */}
                  <div className="text-center p-6 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Predicted Trafficking Cases</h3>
                    <p className="text-4xl font-bold text-blue-600">{prediction.cases.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground mt-1">Confidence: {prediction.confidence}%</p>
                  </div>

                  {/* Risk Level */}
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Risk Level</h3>
                    <Badge className={`${getRiskColor(prediction.riskLevel)} text-lg px-4 py-2`}>
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      {prediction.riskLevel} Risk
                    </Badge>
                  </div>

                  {/* Preventive Actions */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Suggested Preventive Actions for India
                    </h3>
                    <ul className="space-y-2">
                      {prediction.preventiveActions.map((action: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Model Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>About the India-Specific Prediction Model</CardTitle>
            <CardDescription>Understanding how our AI model generates predictions for Indian states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2">Algorithm</h4>
                <p className="text-sm text-muted-foreground">
                  Our model leverages Random Forest Classifier and Random Forest Regressor, trained on human trafficking
                  data and socio-economic indicators sourced from NCRB reports, Census 2011 data, and poverty statistics
                  across Indian states.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  We also experimented with Logistic Regression and Support Vector Machine (SVM) for classification, and
                  Linear Regression for regression analysis.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Accuracy</h4>
                <p className="text-sm text-muted-foreground">
                  The Random Forest Classifier achieved an accuracy of 89.29% in predicting the occurrence of human
                  trafficking incidents (Yes/No).
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  The Random Forest Regressor explained 64.4% of the variance (R² = 0.644) in predicting the number of
                  trafficking cases.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  The models were validated through cross-validation across multiple Indian states and time periods.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Features</h4>
                <p className="text-sm text-muted-foreground">
                  The model uses 15+ carefully selected features, including:
                </p>
                <ul className="text-sm text-muted-foreground list-disc pl-5 mt-2 space-y-1">
                  <li>Economic indicators (poverty rates, employment)</li>
                  <li>Demographic data (population, literacy rates)</li>
                  <li>Crime patterns from NCRB reports (rape, kidnapping, dowry deaths, assault on modesty)</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  These features were engineered to capture the socio-economic and crime-related factors that contribute
                  to human trafficking in India.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
