import React, {useState} from 'react'
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line,} from 'recharts'
import dataset1 from '../data/MOCK_DATA1.json'
import dataset2 from '../data/MOCK_NUMS1.json'
import dataset3 from '../data/MOCK_NUMS2.json'
import dataset4 from '../data/MOCK_NUMS3.json'


function Graph() {
    const [opacity, setOpacity] = useState({aa: 1, bb:1})

    const vehicleTypes = (dataset1) => {
        return dataset1
        .map(dataItem => dataItem.vehicle)
        .filter((vehicleType, index, array) => array.indexOf(vehicleType) === index)
    }

    const shirtSizes = (dataset) => {
        return dataset  
            .map(item => item.shirtsize)
            .filter((size, index, array) => array.indexOf(size) === index)
    }

    const counts = dataset => {
        vehicleTypes(dataset)
            .map(vehicleType => ({
                type:vehicleType,
                count: dataset.filter(item => item.vehicle === vehicleType).length
            }))
        }

    const handleMouseEnter = (e) => {
        const { dataKey } = e

        setOpacity({
            ...opacity, [dataKey]: 0.5
        })
    }

    const HandleMouseLeave = (e) => {
        const { dataKey } = e
        setOpacity({
            ...opacity, [dataKey]: 1
        })
    }

    return (
        <div>
            {/* <LineChart width={730} height={250} data={counts(dataset1)}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart> */}

            <LineChart width={730} height={250} data={dataset2}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Legend onMouseEnter={handleMouseEnter} onMouseLeave={HandleMouseLeave}/>
                <Line type="monotone" dataKey="aa" strokeOpacity={opacity.aa} stroke="#8884d8" />
                <Line type="monotone" dataKey="bb" strokeOpacity={opacity.bb} stroke="#111111" />
                <Line type="monotone" dataKey="cc" strokeOpacity={opacity.cc} stroke="#777777" />
            </LineChart>
        </div>
    )
}

export default Graph
