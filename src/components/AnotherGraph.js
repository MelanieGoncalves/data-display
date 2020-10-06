import React from 'react'
import {XYPlot, YAxis, XAxis, HorizontalGridLines, LineMarkSeries, VerticalGridLines} from 'react-vis'
import DiscreteColorLegend from 'react-vis/es/legends/discrete-color-legend.js';
import dataset1 from '../data/MOCK_NUMS1.json'
import dataset2 from '../data/MOCK_NUMS2.json'
import dataset3 from '../data/MOCK_NUMS3.json'

function AnotherGraph() {
    const ITEMS = ['aa', 'bb']
    return (
        <div>
            <XYPlot width={800} height={500} getX={d => d.id} getY={d => d.bb}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <LineMarkSeries data={dataset1}/>
                <LineMarkSeries data={dataset2} />
                {/* <LineMarkSeries data={dataset3} /> */}
                <XAxis/>
                <YAxis />
               
            </XYPlot>
            <DiscreteColorLegend items={ITEMS} />
           
        </div>
    )
}

export default AnotherGraph
