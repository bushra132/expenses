import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint, index) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          lable={dataPoint.label}
          key={index}
        />
      ))}
    </div>
  );
};

export default Chart;
