import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Mail, MapPin, Hammer, Home, Wrench, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hammer className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Charm City Renovations</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#estimate" className="text-foreground hover:text-primary transition-colors">
              Free Estimate
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-semibold text-primary">410.864.0681</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Baltimore's Trusted Renovation Experts
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Transform Your Home with
            <span className="text-primary"> Quality Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Experience superior customer service, competitive pricing, and exceptional craftsmanship. Your dream
            renovation is just one call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#estimate">Get Your Free Estimate</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: 410.864.0681
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From kitchen remodels to full home renovations, we deliver exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Kitchen Remodeling</CardTitle>
                <CardDescription>
                  Transform your kitchen into the heart of your home with custom designs and quality craftsmanship.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Bathroom Renovation</CardTitle>
                <CardDescription>
                  Create your perfect bathroom oasis with modern fixtures and expert installation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Home Additions</CardTitle>
                <CardDescription>
                  Expand your living space with seamless additions that blend perfectly with your existing home.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Basement Finishing</CardTitle>
                <CardDescription>
                  Turn your basement into valuable living space with professional finishing services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Flooring Installation</CardTitle>
                <CardDescription>
                  Beautiful, durable flooring solutions from hardwood to tile, professionally installed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mb-4" />
                <CardTitle>General Contracting</CardTitle>
                <CardDescription>
                  Complete project management for all your renovation needs, big or small.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Charm City Renovations?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Superior Customer Service</h4>
                    <p className="text-muted-foreground">
                      We prioritize communication and ensure you're informed every step of the way.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Competitive Pricing</h4>
                    <p className="text-muted-foreground">
                      Quality work at fair prices with transparent, detailed estimates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Exceptional Results</h4>
                    <p className="text-muted-foreground">
                      Skilled craftsmen delivering beautiful, lasting renovations you'll love.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Licensed & Insured</h4>
                    <p className="text-muted-foreground">
                      Fully licensed contractors with comprehensive insurance for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <img
                src="/professional-renovation-team-working-on-home-impro.png"
                alt="Charm City Renovations team at work"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h3>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from satisfied homeowners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Outstanding work on our kitchen remodel! The team was professional, clean, and finished on time. We
                  couldn't be happier with the results."
                </p>
                <div className="font-semibold">Sarah & Mike Johnson</div>
                <div className="text-sm text-muted-foreground">Federal Hill</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Charm City Renovations transformed our basement into a beautiful family room. Their attention to
                  detail and customer service is unmatched."
                </p>
                <div className="font-semibold">David Chen</div>
                <div className="text-sm text-muted-foreground">Canton</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "From estimate to completion, everything was handled professionally. Fair pricing and excellent
                  craftsmanship. Highly recommend!"
                </p>
                <div className="font-semibold">Lisa Rodriguez</div>
                <div className="text-sm text-muted-foreground">Fells Point</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Estimate Form */}
      <section id="estimate" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Estimate</h3>
              <p className="text-xl text-muted-foreground">
                Ready to start your renovation? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Tell us about your renovation project and we'll provide a detailed, no-obligation estimate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Smith" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(410) 555-0123" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Project Address</Label>
                    <Input id="address" placeholder="123 Main St, Baltimore, MD 21201" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <select
                      id="projectType"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="kitchen">Kitchen Remodeling</option>
                      <option value="bathroom">Bathroom Renovation</option>
                      <option value="addition">Home Addition</option>
                      <option value="basement">Basement Finishing</option>
                      <option value="flooring">Flooring Installation</option>
                      <option value="general">General Contracting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <select
                      id="budget"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <select
                      id="timeline"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Please describe your renovation project in detail. Include any specific requirements, preferences, or questions you have."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Get My Free Estimate
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll contact you within 24 hours to schedule your free consultation.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Hammer className="h-8 w-8" />
                <h4 className="text-2xl font-bold">Charm City Renovations</h4>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Baltimore's trusted renovation experts delivering quality results, competitive pricing, and superior
                customer service.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-lg mb-4">Contact Info</h5>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>410.864.0681</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>charmcityreno@yahoo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Baltimore, MD & Surrounding Areas</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-lg mb-4">Services</h5>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Kitchen Remodeling</li>
                <li>Bathroom Renovation</li>
                <li>Home Additions</li>
                <li>Basement Finishing</li>
                <li>Flooring Installation</li>
                <li>General Contracting</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Charm City Renovations. All rights reserved. Licensed & Insured.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
