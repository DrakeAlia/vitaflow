"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainNav from "@/components/MainNav";

export default function AppointmentsPage() {
  const searchParams = useSearchParams();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [consultationType, setConsultationType] = useState(
    searchParams.get("type") || "in-person"
  );

  const handleBooking = () => {
    // Handle the appointment booking process
    console.log("Booking appointment:", { date, consultationType });
    // You could redirect to a confirmation page or dashboard after booking
  };

  return (
    <>
      <MainNav />
      <main className="min-h-screen pt-20 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <h1 className="text-3xl font-bold">Book Your Consultation</h1>
              <p className="text-muted-foreground">
                Select your preferred appointment type and time
              </p>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={consultationType}>
                <TabsList className="mb-6">
                  <TabsTrigger
                    value="in-person"
                    onClick={() => setConsultationType("in-person")}
                  >
                    In-Person
                  </TabsTrigger>
                  <TabsTrigger
                    value="virtual"
                    onClick={() => setConsultationType("virtual")}
                  >
                    Virtual
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="in-person">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-lg font-medium mb-4">Select Date</h2>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium mb-4">
                        Available Times
                      </h2>
                      <div className="grid grid-cols-2 gap-2">
                        {/* Time slots */}
                        <Button variant="outline" onClick={() => {}}>
                          9:00 AM
                        </Button>
                        <Button variant="outline" onClick={() => {}}>
                          10:00 AM
                        </Button>
                        {/* More time slots */}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="virtual">
                  {/* Similar content for virtual appointments */}
                </TabsContent>

                <div className="mt-8 text-right">
                  <Button onClick={handleBooking}>Confirm Booking</Button>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
