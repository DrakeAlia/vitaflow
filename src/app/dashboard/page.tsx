"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MainNav from "@/components/MainNav";


export default function DashboardPage() {
  // You'd typically check if user is logged in here
  // And fetch their data

  return (
    <>
      <MainNav />
      <main className="min-h-screen pt-20 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">My Health Dashboard</h1>

          <Tabs defaultValue="appointments">
            <TabsList>
              <TabsTrigger value="appointments">My Appointments</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
              <TabsTrigger value="records">Health Records</TabsTrigger>
            </TabsList>

            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold">
                    Upcoming Appointments
                  </h2>
                </CardHeader>
                <CardContent>
                  {/* Appointments listing */}
                  {/* Could include a "Book New" button that links to /appointments */}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Other tab contents */}
          </Tabs>
        </div>
      </main>
    </>
  );
}
