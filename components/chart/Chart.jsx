import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

import { Flex } from "@chakra-ui/react";

function Chart({ data }) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <LineChart
        width={1200}
        height={250}
        data={data}
        margin={{ top: 20, right: 0, bottom: -10 }}
      >
        <XAxis
          dataKey="created_at"
          domain={[0, "dataMax"]}
          tickSize={6}
          interval="preserveStart"
          minTickGap={3}
        />
        <YAxis type="number" domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
        <Tooltip />
        <Legend layout="horizontal" verticalAlign="top" align="center" />
        <Line
          strokeWidth={3}
          type="natural"
          dataKey="stress"
          stroke="#129A6F"
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </Flex>
  );
}

export default Chart;
