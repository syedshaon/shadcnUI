import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, ListChecks, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import TeamDistributionChart from "./teamDistributionChart";
import SupportTicketsResolved from "./supportTicketResolved";
const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
    avatar: "cm",
  },
  {
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    firstName: "Tina",
    lastName: "Fey",
    avatar: "tf",
  },
  {
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: "rl",
  },
  {
    firstName: "Jenny",
    lastName: "Jones",
  },
];

function TeamStats() {
  const totalEmployees = 100;
  const emplyeePresent = 80;
  const employeePresentPercentage = (emplyeePresent / totalEmployees) * 100;
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex gap-2">
              <Users />
              <span className="text-5xl font-bold">8</span>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className=" flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between">
              <span>Team Leaders</span> <Star className="text-yellow-600" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex flex-wrap gap-2">
              {teamLeaders.map((lead) => {
                return (
                  <Avatar key={lead.firstName}>
                    <AvatarImage src={`/images/${lead.avatar}.jpg`} alt="Employee of the Month" />
                    <AvatarFallback className="bg-gray-300  dark:bg-gray-800">
                      {lead.firstName.slice(0, 1)} {lead.lastName.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                );
              })}
            </div>
          </CardContent>
        </Card>
        <Card className="  flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between">
              <span>Team Distribution</span> <PieChart />
            </CardTitle>
          </CardHeader>
          <CardContent className=" p-0 flex justify-center items-center h-36">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>

      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center text-lg  gap-2">
            <ListChecks /> Support tickets resolved
          </CardTitle>
        </CardHeader>
        <CardContent className="h-96 pl-0">
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
}

export default TeamStats;
