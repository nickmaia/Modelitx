import Chart from "react-apexcharts";
import { useContext } from 'react';
import { GraphContext } from '../../App';

const Grafico = () => {

    const { graphData } = useContext(GraphContext)

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={graphData.options}
                        series={graphData.series}
                        type="line"

                    />
                </div>
            </div>
        </div>
    )
}

export default Grafico;