import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {


    const countVotes = props.countVotes


    console.log(countVotes);

    const data = {
        labels: ["Yair Lapid, Yesh Atid", "Avigdor Lieberman, Yisrael Beiteinu", "Gideon Sa'ar, New Hope",
            "Benjamin Netanyahu, Likud", "Naftali Bennett, Yamina", "Merav Michaeli, Israeli Labor Party"],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <div className='header'>
                <h1 className='title'> Vote Status Chart</h1>
            </div>
            <div className='barchart'>
                <Bar
                    data={data}
                    options={options}
                />
            </div>
        </>
    );
}

export default BarChart;