import React from 'react'
import {VictoryChart, VictoryGroup, VictoryLine} from 'victory'
import dataset1 from '../data/MOCK_NUMS1.json'
import dataset2 from '../data/MOCK_NUMS2.json'
import dataset3 from '../data/MOCK_NUMS3.json'

function VictoryGraph() {
    return (
        <div>
            <VictoryChart>
                <VictoryGroup data={dataset1} colorScale={"qualitative"}>
                    <VictoryLine x="id" y="aa"/>
                </VictoryGroup>
            </VictoryChart>
        </div>
    )
}

export default VictoryGraph
