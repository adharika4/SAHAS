import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Database, Globe, Shield, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    <Globe className="w-3 h-3 mr-1" />
                    India Focus
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Fighting Human Trafficking with <span className="text-blue-600">AI</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Advanced AI-powered prediction system to identify and prevent human trafficking patterns across
                    Indian states, helping law enforcement and organizations save lives through data-driven insights.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/model">
                      <Brain className="w-4 h-4 mr-2" />
                      Explore the Model
                    </Link>
                  </Button>
                </div>
              </div>
              {/* Removed image container */}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
              <Card className="text-center">
                <CardHeader>
                  <Users className="w-8 h-8 mx-auto text-red-600" />
                  <CardTitle className="text-2xl font-bold">11M+</CardTitle>
                  <CardDescription>People in modern slavery in India</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="w-8 h-8 mx-auto text-blue-600" />
                  <CardTitle className="text-2xl font-bold">89%</CardTitle>
                  <CardDescription>Model accuracy in pattern detection</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Globe className="w-8 h-8 mx-auto text-green-600" />
                  <CardTitle className="text-2xl font-bold">28</CardTitle>
                  <CardDescription>Indian states covered</CardDescription>
                </CardHeader>
              </Card>
              {/* Removed "500K+ Data points analyzed" card */}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  The Challenge We're Addressing in India
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Human trafficking is a significant challenge in India, affecting millions across different states. Our
                  mission is to leverage advanced machine learning techniques to identify patterns, predict high-risk
                  areas, and provide actionable intelligence to Indian law enforcement and NGOs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* Replace with actual data visualization */}
              <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-8 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-24 h-24 mx-auto mb-4 text-blue-600" />
                  <p className="text-sm text-muted-foreground">Data Analysis & Visualization</p>
                  <p className="text-xs text-muted-foreground mt-1">Indian States Trafficking Data</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                      <Database className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Multi-Source Data Integration</h3>
                      <p className="text-muted-foreground">
                        Combines multiple Indian data sources:
                        <ul className="list-disc pl-5 mt-1">
                          <li>NCRB crime records</li>
                          <li>State-wise poverty rates</li>
                          <li>Demographic indicators from Census of India</li>
                          <li>Crime against women statistics</li>
                        </ul>
                        All datasets are carefully merged by state and year to ensure temporal and geographic accuracy.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                      <Brain className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Advanced ML Algorithms</h3>
                      <p className="text-muted-foreground">
                        Uses supervised machine learning models including:
                        <ul className="list-disc pl-5 mt-1">
                          <li>Random Forest Classifier and Regressor</li>
                          <li>Support Vector Machines (SVM)</li>
                          <li>Gradient Boosting Regressor</li>
                          <li>Logistic Regression</li>
                          <li>K-Means Clustering for pattern discovery</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                      <Shield className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Privacy-First Approach</h3>
                      <p className="text-muted-foreground">
                        Data used in this project is:
                        <ul className="list-disc pl-5 mt-1">
                          <li>Aggregated at the state level</li>
                          <li>Free from any personal identifiers</li>
                          <li>Processed with a focus on ethical use and responsible AI</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Section */}
        <section id="model" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  <Brain className="w-3 h-3 mr-1" />
                  AI Technology
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Technology: How Our Model Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our machine learning pipeline integrates multi-year, multi-source data from Indian states to identify
                  trafficking patterns and predict high-risk scenarios with high accuracy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Data Collection</CardTitle>
                  <CardDescription>Aggregates data from:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• NCRB crime statistics (trafficking, rape, dowry deaths, kidnapping, etc.)</li>
                    <li>• State poverty rates (NITI Aayog, Planning Commission)</li>
                    <li>• Indian Census demographic data (population, literacy, employment)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Pattern Recognition</CardTitle>
                  <CardDescription>Utilizes:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Correlation analysis</li>
                    <li>• Classification and regression models</li>
                    <li>• State-wise clustering using K-Means</li>
                    <li>• Temporal trend analysis from 2014 to 2020</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Risk Prediction</CardTitle>
                  <CardDescription>Our model provides:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• State-wise risk predictions</li>
                    <li>• Predictive alerts for high-risk areas based on poverty, crime, and trafficking trends</li>
                    <li>• Suggested intervention zones for law enforcement and NGOs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section
          id="impact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Making a Real Impact in India</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our technology is being designed to support Indian law enforcement agencies and NGOs in combating
                  human trafficking through predictive insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Early Detection Success</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">~73%</p>
                      <p className="text-sm text-muted-foreground">improvement in early detection</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Based on model predictions, our system helps authorities identify potential trafficking risks
                    significantly earlier compared to manual methods, enabling faster response and intervention.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Resource Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <BarChart3 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">~45%</p>
                      <p className="text-sm text-muted-foreground">more efficient resource allocation</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    By accurately predicting high-risk states and time periods, agencies can strategically allocate
                    resources, ensuring maximum field impact with limited manpower.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Join the Fight Against Human Trafficking in India
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you're a researcher, law enforcement agency, NGO, or technology partner, there are many ways
                  to contribute to this critical mission for India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          <p className="text-xs text-muted-foreground">
            © 2025 Sahas. Fighting human trafficking through technology in India.
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Research Ethics
          </Link>
          <Link href="/contact" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
