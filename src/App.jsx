import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { date: '1 Apr', earnings: 50000 },
  { date: '2 Apr', earnings: 1200000 },
  { date: '3 Apr', earnings: 500000 },
  { date: '4 Apr', earnings: 300000 },
  { date: '5 Apr', earnings: 800000 },
];

function App() {
  return (
    <div style={{ width: '100%', height: 400, padding: '2rem' }}>
      <h2>Earnings Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
