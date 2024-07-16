"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EventType } from "@/types/events";

const EventCard: React.FC<{ event: EventType }> = ({ event }) => {
  return (
    <div className="bg-white shadow-md w-full  overflow-hidden flex flex-col gap-1 rounded-[30px]  h-fit sm:p-1 ">
      <Image
        alt={event.name || ""}
        src={event.eventImage || ""}
        width={200}
        height={100}
        className="md:w-[417px] h-[360px]  w-full"
      />
      <div className="p-4 bg-white sm:mt-[-70px] rounded-[30px] flex flex-col gap-2 border-[#022543] border ">
        <div className="flex flex-row justify-between px-3 items-center border-b py-2">
          <p className="text-sm sm:text-base">{event.eventCategory || ""}</p>
          {/* <p className="text-sm text-gray-600">
            {event.eventDate.map((date: string | Date, index: number) => (
              <p key={index}>{new Date(date).toLocaleDateString()}</p>
            ))}
          </p> */}

          <div className="text-sm text-gray-600">
            {event.eventDate.map((dateTime: Date, index: number) => {
              const formattedDate = dateTime.toLocaleDateString();
              const formattedTime = dateTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });

              return (
                <p key={index}>
                  {formattedDate} - {formattedTime}
                </p>
              );
            })}
          </div>
        </div>
        {/* <h3 className="text-lg font-bold">{event.title}</h3> */}
        {/* <p className=" text-[#022543] text-xl sm:text-2xl md:text-3xlfont-bold ">{event. || ""}</p> */}
        <p className="text-[17px] text-[#022543] font-normal">
          {event.address || ""}
        </p>
        <Link href={`/event-details/${event.id || ""}`}>
          <button className="mt-2 bg-white text-[#022543] text-xl border-2 border-[#022543] w-full   py-1 px-3 rounded-[30px]">
            View Ticket Options
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
