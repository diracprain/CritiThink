import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";

interface FallacyRadarProps {
  data: {
    type: string;
    score: number;
  }[];
}

export function FallacyRadar({ data }: FallacyRadarProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="type" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="谬误指数"
          dataKey="score"
          stroke="#FF6D00"
          fill="#FF6D00"
          fillOpacity={0.6}
          animationDuration={1000}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
