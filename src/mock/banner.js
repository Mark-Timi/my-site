import Mock from "mockjs";

Mock.mock('/api/banner', 'get', {
    code: 0,
    msg: '',
    data: [
        {
            id: '1',
            bigImg: 'https://w.wallhaven.cc/full/2y/wallhaven-2yjp6x.png',
            
            title: 'BRONX',
            description: 'first'
        },
        {
            id: '2',
            bigImg: 'https://w.wallhaven.cc/full/2y/wallhaven-2yx5og.jpg',
            title: 'WoodyZone',
            description: 'second'
        },
        {
            id: '3',
            bigImg: 'https://w.wallhaven.cc/full/zy/wallhaven-zy2x7v.png',
            title: 'KL404',
            description: 'third'
        },
    ]
})