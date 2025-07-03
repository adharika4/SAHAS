import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Target, Users, Award, Linkedin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">About the Project</h1>
              <p className="text-gray-600 mt-2">Our mission, technology, and team</p>
            </div>
            <Badge variant="outline" className="text-purple-600 border-purple-600">
              <Target className="w-4 h-4 mr-1" />
              Research Project
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Mission */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Project Goal & Motivation
            </CardTitle>
            <CardDescription>Why we built this AI system</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                Human trafficking affects millions of people worldwide, yet it remains largely hidden and difficult to
                detect. Our project leverages the power of artificial intelligence and machine learning to identify
                patterns, predict high-risk scenarios, and provide actionable intelligence to those fighting this crime.
              </p>
              <p className="text-gray-600 mb-4">
                By analyzing multiple data sources including socioeconomic indicators, crime statistics, and demographic
                patterns, our AI model can help law enforcement agencies, NGOs, and policymakers allocate resources more
                effectively and intervene before trafficking occurs.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Prevention</Badge>
                <Badge variant="secondary">Early Detection</Badge>
                <Badge variant="secondary">Resource Optimization</Badge>
                <Badge variant="secondary">Data-Driven Insights</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technologies Used
            </CardTitle>
            <CardDescription>The technical stack powering our solution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Machine Learning</h4>
                    <p className="text-xs text-gray-500">Core AI Technology</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Logistic Regression</li>
                  <li>• Random Forest Classifier</li>
                  <li>• Support Vector Machine (SVM)</li>
                  <li>• K-Means Clustering</li>
                  <li>• Feature Engineering</li>
                  <li>• Cross-Validation</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Python Ecosystem</h4>
                    <p className="text-xs text-gray-500">Data Science Stack</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pandas & NumPy</li>
                  <li>• Scikit-learn</li>
                  <li>• Matplotlib & Seaborn</li>
                  <li>• Jupyter Notebooks</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Data Processing</h4>
                    <p className="text-xs text-gray-500">Data Pipeline</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Data Cleaning</li>
                  <li>• Feature Selection</li>
                  <li>• Statistical Analysis</li>
                  <li>• Data Visualization</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Data Sources</h4>
                    <p className="text-xs text-gray-500">Government & NGO Data</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• National Crime Records Bureau (NCRB)</li>
                  <li>• India Census 2011</li>
                  <li>• Ministry of Statistics and Programme Implementation</li>
                  <li>• NGO and Trafficking Reports (2014-2020)</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Model Performance</h4>
                    <p className="text-xs text-gray-500">Validation Metrics (Random Forest Classifier)</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Accuracy: 89.29%</li>
                  <li>• Precision: 91.11%</li>
                  <li>• Recall: 95.35%</li>
                  <li>• F1-Score: 93.18%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Our Team
            </CardTitle>
            <CardDescription>The researchers and developers behind this project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <h4 className="font-semibold">Adharika Mahajan</h4>
                <p className="text-sm text-gray-600 mb-2">BTech (Computer Science with specialization in AI)</p>
                <p className="text-xs text-gray-500 mb-3">Prefinal year student at IGDTUW</p>
                <div className="flex justify-center gap-2">
                  <Link
                    href="https://www.linkedin.com/in/adharika-mahajan-465330290/"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="text-center p-6 border rounded-lg">
                <h4 className="font-semibold">Harshita Agarwal</h4>
                <p className="text-sm text-gray-600 mb-2">BTech (Computer Science with specialization in AI)</p>
                <p className="text-xs text-gray-500 mb-3">Prefinal year student at IGDTUW</p>
                <div className="flex justify-center gap-2">
                  <Link
                    href="https://www.linkedin.com/in/harshita-agarwal-a33929289/"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contributions */}
        <Card>
          <CardHeader>
            <CardTitle>Key Contributions & Highlights</CardTitle>
            <CardDescription>What makes our approach unique and impactful</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <h3 className="font-semibold mb-4">Research Contributions</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Developed the first comprehensive machine learning model for human trafficking prediction using
                    multi-source, real-world data.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Proposed a novel feature engineering framework that integrates socioeconomic, demographic, and
                    crime-related indicators.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Achieved 89.29% prediction accuracy using a robust cross-validation methodology, ensuring model
                    reliability.
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
