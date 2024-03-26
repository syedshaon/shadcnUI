"use client";
import React, { PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    office: 82,
    wfh: 44,
  },
  {
    name: "Feb",
    office: 80,
    wfh: 40,
  },
  {
    name: "Mar",
    office: 83,
    wfh: 42,
  },
  {
    name: "Apr",
    office: 50,
    wfh: 50,
  },
  {
    name: "May",
    office: 40,
    wfh: 60,
  },
  {
    name: "Jun",
    office: 60,
    wfh: 40,
  },
  {
    name: "Jul",
    office: 55,
    wfh: 55,
  },
  {
    name: "Aug",
    office: 49,
    wfh: 61,
  },
  {
    name: "Sep",
    office: 44,
    wfh: 70,
  },
  {
    name: "Oct",
    office: 40,
    wfh: 40,
  },
  {
    name: "Nov",
    office: 50,
    wfh: 50,
  },
  {
    name: "Dec",
    office: 50,
    wfh: 50,
  },
];
function WorkLocationTrends() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip
          separator=": "
          formatter={(value, name) => {
            if (name === "wfh") {
              return [value, "Work from home"];
            } else {
              return [value, "Work from office"];
            }
          }}
          labelClassName="font-bold"
          wrapperClassName=" !text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "wfh") {
              return <span>Work from home</span>;
            } else {
              return <span>Work from office</span>;
            }
          }}
        />
        <Bar dataKey="office" stackId={1} fill="#ec4899" />
        <Bar dataKey="wfh" radius={[4, 4, 0, 0]} stackId={1} fill="#6b7280" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default WorkLocationTrends;
