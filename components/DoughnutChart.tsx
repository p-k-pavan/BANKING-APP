"use client"

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS,ArcElement,Tooltip,Legend } from 'chart.js';

ChartJS.register(ArcElement,Tooltip,Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const accountNames = accounts.map((a)=> a.name);
    const balances = accounts.map((a) => a.currentBalance);

    const data = {
        datasets : [
            {
                label: 'Bank',
                data: [1250,2500,3750],
                backgroundColor:['#0747b6','#2265d8','#2f91fa']
            }
        ],
        labels:['SB','CB','JA']
    }
    return<Doughnut 
       data={data}
       options={{
        cutout:'60%',
        plugins:{
            legend:{
                display:false
            }
        }
       }}
    
    />
}

export default DoughnutChart