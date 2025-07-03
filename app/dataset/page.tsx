import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Database, FileText, Calendar, MapPin, TrendingUp } from "lucide-react"

const datasets = [
  {
    name: "State-wise Trafficking Cases",
    description: "Primary dataset for trafficking case prediction.",
    source: "NCRB",
    year: "2014-2020",
    size: "4.3 MB",
    format: "CSV",
    records: "45,847",
    relevance: "Primary dataset for trafficking case prediction",
  },
  {
    name: "State Poverty Rates",
    description: "Key indicator of trafficking vulnerability.",
    source: "Ministry of Statistics & Planning Commission",
    year: "2014-2020",
    size: "2.8 MB",
    format: "CSV",
    records: "196",
    relevance: "Key indicator of trafficking vulnerability",
  },
  {
    name: "Education & Literacy Rates",
    description: "Education-related vulnerabilities.",
    source: "Census of India",
    year: "2011",
    size: "1.9 MB",
    format: "CSV",
    records: "420",
    relevance: "Education-related vulnerabilities",
  },
  {
    name: "Employment & Labor Statistics",
    description: "Impact of economic opportunity on trafficking risk.",
    source: "Census of India",
    year: "2011",
    size: "3.7 MB",
    format: "CSV",
    records: "2,800",
    relevance: "Impact of economic opportunity on trafficking risk",
  },
  {
    name: "Crime Rate Statistics",
    description: "Contextual crime environment.",
    source: "NCRB",
    year: "2018-2022",
    size: "5.2 MB",
    format: "CSV",
    records: "1,960",
    relevance: "Contextual crime environment",
  },
  {
    name: "Demographic Data",
    description: "Age, gender, and migration patterns to assess at-risk populations.",
    source: "Census of India",
    year: "2011",
    size: "7.8 MB",
    format: "CSV",
    records: "4,200",
    relevance: "Age, gender, and migration patterns to assess at-risk populations",
  },
]

export default function DatasetPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Dataset Information</h1>
              <p className="text-muted-foreground mt-2">
                Comprehensive overview of all Indian datasets used in our analysis
              </p>
            </div>
            <Badge variant="outline" className="text-green-600 border-green-600">
              <Database className="w-4 h-4 mr-1" />6 Indian Datasets
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Indian Data Overview</CardTitle>
            <CardDescription>
              Our machine learning model leverages multiple high-quality datasets from Indian sources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-2">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">56,423</h3>
                <p className="text-sm text-muted-foreground">Total Records</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-2">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold">2011-2021</h3>
                <p className="text-sm text-muted-foreground">Time Period</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">28 States</h3>
                <p className="text-sm text-muted-foreground">Indian States Covered</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold">25.7 MB</h3>
                <p className="text-sm text-muted-foreground">Total Size</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Datasets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {datasets.map((dataset, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{dataset.name}</CardTitle>
                    <CardDescription className="mt-2">{dataset.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">{dataset.format}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Source:</span>
                      <p>{dataset.source}</p>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Period:</span>
                      <p>{dataset.year}</p>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Records:</span>
                      <p>{dataset.records}</p>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Size:</span>
                      <p>{dataset.size}</p>
                    </div>
                  </div>

                  <div>
                    <span className="font-medium text-muted-foreground text-sm">Relevance:</span>
                    <p className="text-sm text-muted-foreground mt-1">{dataset.relevance}</p>
                  </div>

                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download Dataset
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data Processing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Data Preprocessing
              </CardTitle>
              <CardDescription>Steps taken to clean and prepare the Indian data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Data Cleaning</h4>
                    <p className="text-sm text-muted-foreground">
                      Removed duplicates, handled missing values using mean or median imputation, and standardized
                      Indian state names and formats to ensure consistency across all datasets.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Feature Engineering</h4>
                    <p className="text-sm text-muted-foreground">
                      Created derived features specific to the Indian socio-economic and crime context. Included dummy
                      variables for categorical features like states. Converted poverty rates into time-series
                      compatible formats. Incorporated specific crime indicators such as rape, dowry deaths, and assault
                      on modesty to enhance prediction relevance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Feature Scaling</h4>
                    <p className="text-sm text-muted-foreground">
                      Applied standardization techniques to all numerical features like population, poverty rates, and
                      crime counts to ensure uniform feature contribution during model training.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Encoding Categorical Variables</h4>
                    <p className="text-sm text-muted-foreground">
                      Used one-hot encoding for state names to include them as binary features in the model.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium">Data Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Merged multiple datasets, including trafficking cases, poverty rates, demographic profiles, and
                      crimes against women, by Indian state and year to maintain temporal and geographic alignment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    6
                  </div>
                  <div>
                    <h4 className="font-medium">Train-Test Split</h4>
                    <p className="text-sm text-muted-foreground">
                      Divided the dataset into 70% training and 30% testing to prevent overfitting and ensure proper
                      model evaluation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                    7
                  </div>
                  <div>
                    <h4 className="font-medium">Validation</h4>
                    <p className="text-sm text-muted-foreground">
                      Performed statistical correlation analysis and cross-checked for multicollinearity. Data quality
                      checks and state-wise consistency were verified before model training.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modeling Approach for India</CardTitle>
              <CardDescription>Machine learning methodology and techniques used for Indian context</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Algorithm Selection</h4>
                  <p className="text-sm text-muted-foreground">
                    Classification: Logistic Regression, Support Vector Machine (SVM), and Random Forest Classifier
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Regression: Linear Regression and Random Forest Regressor
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Clustering: K-Means Clustering (3 clusters) to identify patterns among Indian states
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Feature Selection</h4>
                  <p className="text-sm text-muted-foreground">
                    Domain Knowledge: Included socio-economic factors (poverty rate, employment, literacy) and crime
                    indicators (rape, dowry deaths, kidnapping) based on literature and data analysis.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Correlation Analysis: Used Pearson correlation coefficients to identify strong predictors and reduce
                    irrelevant features.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Model Validation</h4>
                  <p className="text-sm text-muted-foreground">Used 70:30 train-test split for all models.</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Applied Mean Squared Error (MSE), Mean Absolute Error (MAE), R² score for regression models.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Used accuracy, precision, recall, F1-score for classification models.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Performance Metrics</h4>
                  <p className="text-sm text-muted-foreground">
                    Random Forest Classifier achieved the highest accuracy: 89.29%.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Random Forest Regressor provided the best regression performance: MAE = 13.23, R² = 0.644.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Focused on minimizing false negatives to ensure real trafficking cases are captured.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
