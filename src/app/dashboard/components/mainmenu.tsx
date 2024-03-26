import React from "react";
import MenuTitle from "./menuTitle";
import MenuItem from "./menuItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import LightDarktoggle from "@/components/ui/light-dark-toggle";

function Mainmenu() {
  return (
    <nav className="bg-muted overflow-auto  p-4 flex flex-col">
      <header className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <div className=" py-4 grow">
        <MenuItem href="/dashboard">My Dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>
      <footer className="flex gap-2 justify-between items-center">
        <Avatar>
          <AvatarImage src=" " />
          <AvatarFallback className="bg-pink-300  dark:bg-pink-800">CN</AvatarFallback>
        </Avatar>
        <Link className="underline" href="/">
          Logout
        </Link>
        <LightDarktoggle className="ml-auto" />
      </footer>
    </nav>
  );
}

export default Mainmenu;
