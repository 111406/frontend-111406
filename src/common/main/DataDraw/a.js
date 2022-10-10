const da=[]
const label1=[]
const dataT = [
    {
        name: '-3s',
        time: 12,
        num: 0,
        amt: 2400,
    },
    {
        name: '-2s',
        time: 16,
        num: 107.5,
        amt: 2210,
    },
    {
        name: '-1s',
        time: 19,
        num: 787,
        amt: 2290,
    },
    {
        name: '0s',
        time: 20,
        num: 2500,
        amt: 2000,
    },
    {
        name: '1s',
        time: 23,
        num: 787,
        amt: 2181,
    },
    {
        name: '2s',
        time: 26,
        num: 107.5,
        amt: 2500,
    },
    {
        name: '3s',
        time: 32,
        num: 0,
        amt: 2100,
    },
    ];

dataT.map((a)=>(
    da.push(a.num)
))
dataT.map((a)=>(
    label1.push(a.name)
))

export const data1234={
    labels:label1,
    datasets:[
        {
            label: "First dataset",
            data: da,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            lineTension: 0.5
        }
    ]
}

