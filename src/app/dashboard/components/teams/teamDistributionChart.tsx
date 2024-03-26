"use client";

import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
const COLORS = ["#00C49F", "#0088FE", "#FFBB28"];

const data01 = [
  { name: "Delta", value: 55 },
  { name: "Alpha", value: 30 },
  { name: "Canary", value: 15 },
];

function TeamDistributionChart() {
  return (
    <ResponsiveContainer height="100%">
      <PieChart width={100} height={100}>
        <Pie dataKey="value" isAnimationActive={true} data={data01} cx="50%" cy="50%" outerRadius={50} fill="#8884d8">
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default TeamDistributionChart;
