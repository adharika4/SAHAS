import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Phone, Shield, Users, ExternalLink, BookOpen, Heart, Globe, Mail } from "lucide-react"
import Link from "next/link"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Learn & Prevent</h1>
              <p className="text-gray-600 mt-2">Education, Awareness, and Prevention Resources in India</p>
            </div>
            <Badge variant="outline" className="text-red-600 border-red-600">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Critical Information
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Emergency Helpline */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <Phone className="w-5 h-5" />
              Emergency Helpline
            </CardTitle>
            <CardDescription className="text-red-700">If you or someone you know needs immediate help:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div>
                <p className="text-2xl font-bold text-red-800">1098</p>
                <p className="text-sm text-red-700">
                  Childline India - 24/7 National Helpline for Children in Distress
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-800">112</p>
                <p className="text-sm text-red-700">
                  National Emergency Number (All emergencies including women and child safety)
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-800">181</p>
                <p className="text-sm text-red-700">Women Helpline - Available in many Indian states</p>
              </div>
              <div className="sm:ml-auto">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Understanding Human Trafficking in India */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Understanding Human Trafficking in India
            </CardTitle>
            <CardDescription>
              Learn about the different forms and warning signs specific to the Indian context.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Types of Trafficking</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      Sex Trafficking
                    </h4>
                    <p className="text-sm text-gray-600">
                      The recruitment, transportation, or harboring of persons, particularly women and children, for
                      sexual exploitation through force, fraud, or coercion.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      Labor Trafficking
                    </h4>
                    <p className="text-sm text-gray-600">
                      Forcing or deceiving individuals into bonded labor, domestic work, or hazardous occupations,
                      especially in rural and marginalized communities.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      Child Trafficking
                    </h4>
                    <p className="text-sm text-gray-600">
                      The illegal movement or exploitation of children for labor, begging, organ trade, forced marriage,
                      or sexual exploitation.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Warning Signs in India</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Signs of physical abuse, malnourishment, or untreated illnesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Fearful or submissive behavior, especially around employers or strangers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Living at work sites (factories, homes, construction sites)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Lack of identity documents or freedom of movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Excessive work hours with little to no pay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Not allowed to speak freely or answer questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Sudden disappearance from schools or communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Government & NGO Initiatives in India */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Government & NGO Initiatives in India
            </CardTitle>
            <CardDescription>Organizations actively working to combat human trafficking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Ministry of Home Affairs (MHA)</h4>
                    <p className="text-xs text-gray-500">Federal Agency</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Leads national anti-human trafficking operations and supports Anti-Human Trafficking Units (AHTUs).
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit Website
                  </Link>
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">National Commission for Women (NCW)</h4>
                    <p className="text-xs text-gray-500">Government Body</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Monitors crimes against women, supports rescue operations, and promotes anti-trafficking policies.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit Website
                  </Link>
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Bachpan Bachao Andolan (BBA)</h4>
                    <p className="text-xs text-gray-500">NGO</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  A prominent NGO rescuing trafficked children and advocating child rights across India.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit Website
                  </Link>
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Childline India Foundation</h4>
                    <p className="text-xs text-gray-500">NGO</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Operates the 1098 Child Helpline, providing immediate rescue and support services for children.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit Website
                  </Link>
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">International Justice Mission India (IJM)</h4>
                    <p className="text-xs text-gray-500">NGO</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Works with Indian authorities to rescue trafficking victims and strengthen the justice system.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit Website
                  </Link>
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Shakti Vahini</h4>
                    <p className="text-xs text-gray-500">NGO</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Focuses on anti-human trafficking, especially the rescue of women and children from forced
                  prostitution and bonded labor.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit Website
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Awareness & Reporting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Community Awareness & Reporting
            </CardTitle>
            <CardDescription>How You Can Help in India</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">How to Report</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-sm font-medium text-red-600">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Call the Helpline</h4>
                      <p className="text-sm text-gray-600">📞 Childline 1098</p>
                      <p className="text-sm text-gray-600">📞 Women Helpline 181</p>
                      <p className="text-sm text-gray-600">📞 Police Helpline 112</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-sm font-medium text-red-600">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Contact Local Authorities</h4>
                      <p className="text-sm text-gray-600">
                        Report directly to the nearest police station or Anti-Human Trafficking Unit.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-sm font-medium text-red-600">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Submit Online Complaints</h4>
                      <p className="text-sm text-gray-600">
                        Use the National Cyber Crime Reporting Portal for trafficking-related cyber cases.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Prevention Tips</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Educate yourself and others about trafficking patterns and warning signs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Stay vigilant in bus stands, railway stations, and crowded places where traffickers may operate.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Support Indian NGOs and government campaigns fighting human trafficking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Report suspicious movements of minors or vulnerable individuals in your community.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Advocate for stronger laws and better implementation of anti-trafficking measures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Support rescued survivors through rehabilitation programs and local shelters.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
