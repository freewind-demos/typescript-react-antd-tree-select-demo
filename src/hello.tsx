import React, {useState} from 'react'
import {TreeSelect} from 'antd';

type Option = {
    label: string,
    value: string,
    children?: Option[]
}
const treeData: Option[] = [
    {
        label: 'a1', value: 'a1', children: [
            {label: 'a2', value: 'a2'},
            {label: 'a3', value: 'a3'},
        ]
    },
    {
        label: 'b1', value: 'b1', children: [
            {label: 'b2', value: 'b2'},
            {label: 'b3', value: 'b3'},
        ]
    }
]
export default function Hello() {
    const [value, setValue] = useState<string>('b1')

    return <div>
        <TreeSelect style={{width: 200}} treeData={treeData} value={value} onChange={v => setValue(v)}/>
        <div>{JSON.stringify(value)}</div>
    </div>
};
