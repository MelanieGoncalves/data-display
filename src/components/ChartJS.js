import React from 'react'
import { Line } from 'react-chartjs-2'

function ChartJS() {
    const data = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            
            borderColor: 'blue',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          },
          {
              label: ' Average Temperature',
              
              borderColor: 'green',
              borderWidth: 2,
              data: [59, 63, 72, 75, 74]
          }
        ]
      }
    return (
        <div>
            <Line 
                data={data} 
                options={{
                    title: {
                        display:true,
                        text: "Weather Activity by Month",
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    )
}

export default ChartJS
