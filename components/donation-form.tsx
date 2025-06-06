"use client"

import { useState } from "react"
import { Calendar, MenuIcon as Restaurant, User, MapPin, Clock, MessageSquare, Utensils, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

const DonationForm = () => {
  const [formStep, setFormStep] = useState(0)
  const [showThankYou, setShowThankYou] = useState(false)

  const nextStep = () => {
    if (formStep < 2) {
      setFormStep(formStep + 1)
    } else {
      // Submit form
      setShowThankYou(true)
    }
  }

  const prevStep = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1)
    }
  }

  if (showThankYou) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-green-600">Thank You!</CardTitle>
          <CardDescription className="text-center">Your donation has been submitted successfully.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="mx-auto rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center">
            <Utensils className="h-8 w-8 text-green-600" />
          </div>
          <p>A confirmation email has been sent to your email address.</p>
          <p className="font-medium">Your donation ID: #FD-2023-45678</p>
          <p className="text-sm text-muted-foreground">
            An NGO or recipient will be matched to your donation shortly. We'll notify you once a match is found.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => window.location.reload()}>
            Donate Again
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <Tabs defaultValue="individual" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="individual">Individual</TabsTrigger>
          <TabsTrigger value="business">Business/Restaurant</TabsTrigger>
        </TabsList>
        <TabsContent value="individual" className="space-y-4">
          {formStep === 0 && (
            <>
              <CardHeader>
                <CardTitle>Donor Information</CardTitle>
                <CardDescription>Please provide your details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                    <User className="ml-2 h-5 w-5 text-muted-foreground" />
                    <Input id="name" placeholder="John Doe" className="border-0 focus-visible:ring-0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Pickup Address</Label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                    <MapPin className="ml-2 h-5 w-5 text-muted-foreground" />
                    <Input id="address" placeholder="Full address" className="border-0 focus-visible:ring-0" />
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {formStep === 1 && (
            <>
              <CardHeader>
                <CardTitle>Food Details</CardTitle>
                <CardDescription>Tell us about the food you're donating</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="food-type">Food Type</Label>
                  <Select defaultValue="cooked">
                    <SelectTrigger>
                      <SelectValue placeholder="Select food type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cooked">Cooked Food</SelectItem>
                      <SelectItem value="raw">Raw Ingredients</SelectItem>
                      <SelectItem value="packaged">Packaged Food</SelectItem>
                      <SelectItem value="fruits">Fruits & Vegetables</SelectItem>
                      <SelectItem value="bakery">Bakery Items</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Diet Type</Label>
                  <RadioGroup defaultValue="vegetarian">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vegetarian" id="vegetarian" />
                      <Label htmlFor="vegetarian">Vegetarian</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="non-vegetarian" id="non-vegetarian" />
                      <Label htmlFor="non-vegetarian">Non-Vegetarian</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vegan" id="vegan" />
                      <Label htmlFor="vegan">Vegan</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity (serves how many people)</Label>
                  <Input id="quantity" type="number" placeholder="e.g. 20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiry">Best Before</Label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                    <Clock className="ml-2 h-5 w-5 text-muted-foreground" />
                    <Input id="expiry" type="datetime-local" className="border-0 focus-visible:ring-0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Additional Details</Label>
                  <div className="flex items-start border rounded-md focus-within:ring-1 focus-within:ring-ring">
                    <MessageSquare className="mt-2 ml-2 h-5 w-5 text-muted-foreground" />
                    <Textarea
                      id="description"
                      placeholder="Please provide any additional information"
                      className="border-0 focus-visible:ring-0 min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {formStep === 2 && (
            <>
              <CardHeader>
                <CardTitle>Confirmation</CardTitle>
                <CardDescription>Pickup preferences and final steps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup-time">Preferred Pickup Time</Label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                    <Calendar className="ml-2 h-5 w-5 text-muted-foreground" />
                    <Input id="pickup-time" type="datetime-local" className="border-0 focus-visible:ring-0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Pickup Options</Label>
                  <RadioGroup defaultValue="self">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="self" id="self" />
                      <Label htmlFor="self">I'll coordinate with the recipient</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="platform" id="platform" />
                      <Label htmlFor="platform">Use platform's logistics service (fees may apply)</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-3 border-t pt-3">
                  <div className="flex flex-col space-y-1">
                    <Label className="font-medium">Terms and Conditions</Label>
                    <p className="text-sm text-muted-foreground">
                      Please read and agree to our terms before proceeding.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        I confirm that the food I'm donating is safe for consumption and properly stored.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="privacy" />
                      <Label htmlFor="privacy" className="text-sm">
                        I agree to the platform's terms of service and privacy policy.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="updates" />
                      <Label htmlFor="updates" className="text-sm">
                        I would like to receive impact updates about my donation.
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          <CardFooter className="flex justify-between">
            {formStep > 0 ? (
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <div></div>
            )}
            <Button className="bg-green-600 hover:bg-green-700" onClick={nextStep}>
              {formStep === 2 ? "Submit Donation" : "Continue"}
            </Button>
          </CardFooter>
        </TabsContent>

        <TabsContent value="business">
          {formStep === 0 && (
            <>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Please provide your organization details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                    <Restaurant className="ml-2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="business-name"
                      placeholder="Restaurant or Business Name"
                      className="border-0 focus-visible:ring-0"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-type">Business Type</Label>
                  <Select defaultValue="restaurant">
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="hotel">Hotel</SelectItem>
                      <SelectItem value="catering">Catering Service</SelectItem>
                      <SelectItem value="corporate">Corporate Cafeteria</SelectItem>
                      <SelectItem value="event">Event Organizer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-person">Contact Person</Label>
                  <Input id="contact-person" placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-email">Email</Label>
                  <Input id="business-email" type="email" placeholder="contact@business.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-phone">Phone Number</Label>
                  <Input id="business-phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-address">Pickup Address</Label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                    <MapPin className="ml-2 h-5 w-5 text-muted-foreground" />
                    <Input id="business-address" placeholder="Full address" className="border-0 focus-visible:ring-0" />
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {formStep === 1 && (
            <>
              <CardHeader>
                <CardTitle>Donation Details</CardTitle>
                <CardDescription>Tell us about the food you're donating</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recurring">Donation Frequency</Label>
                  <Select defaultValue="one-time">
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time donation</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="food-items">Food Items</Label>
                  <Textarea
                    id="food-items"
                    placeholder="Please list the food items you're donating"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity-business">Quantity (serves how many people)</Label>
                  <Input id="quantity-business" type="number" placeholder="e.g. 50" />
                </div>
                <div className="space-y-2">
                  <Label>Food Safety Documentation</Label>
                  <div className="border rounded-md p-4">
                    <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center space-y-2">
                      <div className="p-2 rounded-full bg-green-50">
                        <Upload className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-sm font-medium">Upload Food Safety Certificate</span>
                      <span className="text-xs text-muted-foreground">PDF, JPG or PNG up to 5MB</span>
                      <input id="file-upload" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="special-handling">Special Handling Instructions</Label>
                  <Textarea
                    id="special-handling"
                    placeholder="Any special storage or handling requirements"
                    className="min-h-[80px]"
                  />
                </div>
              </CardContent>
            </>
          )}

          {formStep === 2 && (
            <>
              <CardHeader>
                <CardTitle>Logistics & Confirmation</CardTitle>
                <CardDescription>Set up your pickup preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="business-pickup-date">Preferred Pickup Date</Label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                    <Calendar className="ml-2 h-5 w-5 text-muted-foreground" />
                    <Input id="business-pickup-date" type="date" className="border-0 focus-visible:ring-0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-pickup-time">Preferred Pickup Time</Label>
                  <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring">
                    <Clock className="ml-2 h-5 w-5 text-muted-foreground" />
                    <Input id="business-pickup-time" type="time" className="border-0 focus-visible:ring-0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Logistics Preference</Label>
                  <RadioGroup defaultValue="premium">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard">Standard Pickup (₹249)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="premium" id="premium" />
                      <Label htmlFor="premium">Express Pickup (₹399) - 1 hour response time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bulk" id="bulk" />
                      <Label htmlFor="bulk">Bulk Transport (Custom pricing)</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Preferred NGO (Optional)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an NGO or let us match automatically" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Automatic Matching</SelectItem>
                      <SelectItem value="ngo1">Food for All Foundation</SelectItem>
                      <SelectItem value="ngo2">Hope Meals India</SelectItem>
                      <SelectItem value="ngo3">Feeding Hearts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3 border-t pt-3">
                  <div className="flex flex-col space-y-1">
                    <Label className="font-medium">Terms and Conditions</Label>
                    <p className="text-sm text-muted-foreground">
                      Please read and agree to our terms before proceeding.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="business-terms" />
                      <Label htmlFor="business-terms" className="text-sm">
                        I confirm that all donated food meets safety standards and regulations.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="business-privacy" />
                      <Label htmlFor="business-privacy" className="text-sm">
                        I agree to the platform's terms of service and privacy policy.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="business-tax" />
                      <Label htmlFor="business-tax" className="text-sm">
                        I would like to receive a donation receipt for tax purposes.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="business-updates" />
                      <Label htmlFor="business-updates" className="text-sm">
                        I would like to receive impact reports and updates.
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          <CardFooter className="flex justify-between">
            {formStep > 0 ? (
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <div></div>
            )}
            <Button className="bg-green-600 hover:bg-green-700" onClick={nextStep}>
              {formStep === 2 ? "Submit Donation" : "Continue"}
            </Button>
          </CardFooter>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

export default DonationForm
