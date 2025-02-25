"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BookingPopoverProps {
  buttonText?: string;
  buttonClassName?: string;
  showIcon?: boolean;
}

const BookingPopover = ({
  buttonText = "Book Now",
  buttonClassName = "",
  showIcon = true,
}: BookingPopoverProps) => {
  const [bookingStep, setBookingStep] = React.useState(0);
  const router = useRouter();
  const [consultationType, setConsultationType] = React.useState("in-person");

  const handleConfirmBooking = () => {
    router.push(`/appointments?type=${consultationType}`);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className={buttonClassName}>
          {buttonText}
          {showIcon && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <Progress value={bookingStep * 33} className="w-full" />
          {bookingStep === 0 ? (
            <>
              <div className="space-y-2">
                <h4 className="font-medium leading-none">
                  Choose Consultation Type
                </h4>
                <p className="text-sm text-muted-foreground">
                  Select your preferred appointment type
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => {
                    setConsultationType("in-person"); // Update this line
                    setBookingStep(1);
                  }}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  In-Person
                </Button>
                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => {
                    setConsultationType("virtual"); // Update this line
                    setBookingStep(1);
                  }}
                >
                  Virtual
                </Button>
              </div>
            </>
          ) : bookingStep === 1 ? (
            <>
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Select Time</h4>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred date
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="justify-center">
                    Today
                  </Button>
                  <Button variant="outline" className="justify-center">
                    Tomorrow
                  </Button>
                  <Button variant="outline" className="justify-center">
                    Next Week
                  </Button>
                </div>
                <Button onClick={() => setBookingStep(2)}>Continue</Button>
                <Button variant="outline" onClick={() => setBookingStep(0)}>
                  Back
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Confirm Booking</h4>
                <p className="text-sm text-muted-foreground">
                  Review your appointment details
                </p>
              </div>
              <div className="grid gap-2">
                {/* Update this button to use the new handler */}
                <Button onClick={handleConfirmBooking}>Confirm Booking</Button>
                <Button variant="outline" onClick={() => setBookingStep(1)}>
                  Back
                </Button>
              </div>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default BookingPopover;
