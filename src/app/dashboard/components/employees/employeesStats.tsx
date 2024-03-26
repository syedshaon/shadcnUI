import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangleIcon, BadgeCheckIcon, LaptopIcon, PartyPopperIcon, UserCheck2Icon, UserIcon, UserRoundXIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WorkLocationTrends from "./workLocationTrends";

function EmployeesStats() {
  const totalEmployees = 100;
  const emplyeePresent = 80;
  const employeePresentPercentage = (emplyeePresent / totalEmployees) * 100;
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex gap-2">
              <UserIcon />
              <span className="text-5xl font-bold">{totalEmployees}</span>
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
            <CardTitle className="text-base">Employees Present</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div className="flex gap-2">
              {employeePresentPercentage > 75 ? <UserCheck2Icon /> : <UserRoundXIcon />}

              <span className="text-5xl font-bold">{emplyeePresent}</span>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            {employeePresentPercentage > 75 ? (
              <span className="flex text-left text-green-500 gap-1 items-center">
                <BadgeCheckIcon /> {employeePresentPercentage}% of employess are present
              </span>
            ) : (
              <span className="flex text-left text-red-500 gap-1 items-center">
                <AlertTriangleIcon /> {employeePresentPercentage}% of employess are present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className="border-pink-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employee of the Month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="/images/cm.jpg" alt="Employee of the Month" />
              <AvatarFallback className="bg-pink-300  dark:bg-pink-800">CM</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Colin Murray!</span>
          </CardContent>
          <CardFooter className="mt-auto">
            <span className="flex text-left  gap-2 text-muted-foreground items-center">
              <PartyPopperIcon className="text-pink-500" /> Congratulations Colin!
            </span>
          </CardFooter>
        </Card>
      </div>

      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center text-lg  gap-2">
            <LaptopIcon /> Employee work location trends
          </CardTitle>
        </CardHeader>
        <CardContent className="h-96 pl-0">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}

export default EmployeesStats;
