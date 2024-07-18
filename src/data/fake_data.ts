/* eslint-disable unicorn/filename-case */

export const lineChartData = {
    labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ],
    datasets: [
        {
            label: 'Steps',
            data: [3000, 5000, 4500, 6000, 8000, 7500, 10000],
            borderColor: 'rgb(75,192,192)',
            backgroundColor: 'rgb(75,192,192)',
        },
        {
            label: 'Steps',
            data: [2000, 5300, 2500, 800, 6000, 8000, 5500],
            borderColor: 'rgb(75,20,192)',
            backgroundColor: 'rgb(75,20,192)',

        },
        {
            label: 'Steps',
            data: [1000, 1500, 500, 5000, 5555, 5200, 20000],
            borderColor: 'red',
            backgroundColor: 'red',

        },
    ],
}

export const pieChartData = {
    labels: [
        'Facebook',
        'Instagram',
        'Twitter',
        'Youtube',
        'LinkedIn',
    ],
    datasets:[
        {
            label: 'Time Spent',
            data: [120, 60, 30, 90, 45],
            backgroundColor: [
                'blue',
                'green',
                'red',
                'yellow',
                'orange',
            ],
            hoverOffset: 4,
        }
    ]
}