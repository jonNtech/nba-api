const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    1:{
        'name': 'Kareem Abdul-Jabbar',
        'team': 'Los Angeles Lakers',
        'years': '1969-1989',
        'points': '38,387',
        'gamesPlayed': '1,560',
        'status': 'Retired',
        'bg':'gold',
        'color':'black',
        'picURL': "https://static.onecms.io/wp-content/uploads/sites/20/2020/12/08/Kareem-Abdul-Jabbar-1.jpg"
    },
    2:{
        'name': 'Lebron James',
        'team': 'Los Angeles Lakers',
        'years': '2003-Current',
        'points': '37,062',
        'gamesPlayed': '1,366',
        'status': 'Active',
        'bg':'gold',
        'color':'black',
        'picURL':'https://library.sportingnews.com/2021-12/lebron-james-los-angeles-lakers_kej02uf93prj18vqxkh8dfnqk.png'
    },
    3:{
        'name': 'Karl Malone',
        'team': 'Utah Jazz',
        'years': '1985-2004',
        'points': '36,928',
        'gamesPlayed': '1,476',
        'status': 'Retired',
        'bg':'purple',
        'color':'black',
        'picURL': 'https://www.cleveland.com/resizer/xYiU4SRx5DKDot7JEapsfqKrHds=/1280x0/smart/image.cleveland.com/home/cleve-media/width600/img/cavs_impact/photo/malone-c134fda8caa0af44.jpg'
    },
    4:{
        'name': 'Kobe Bryant',
        'team': 'Los Angeles Lakers',
        'years': '1996-2016',
        'points': '33,643',
        'gamesPlayed': '1,346',
        'status': 'Retired',
        'bg':'gold',
        'color':'black',
        'picURL': 'https://dynaimage.cdn.cnn.com/cnn/digital-images/org/98224ac3-aedc-44d4-9ad2-a6b8b0c06e2c.jpg'
    },
    5:{
        'name': 'Michael Jordan',
        'team': 'Chicago Bulls',
        'years': '1984-2003',
        'points': '32,292',
        'gamesPlayed': '1,072',
        'status': 'Retired',
        'bg':'red',
        'color':'black',
        'picURL': 'https://phantom-marca.unidadeditorial.es/ce0fa6ed4b08f63546dd1f8cfa910a18/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/17/16451255007747.jpg'
    },
    6:{
        'name': 'Dirk Nowitzki',
        'team': 'Dallas Mavericks',
        'years': '1998-2019',
        'points': '31,560',
        'gamesPlayed': '1,522',
        'status': 'Retired',
        'bg':'darkblue',
        'color':'white',
        'picURL': 'https://static.dw.com/image/48269678_101.jpg'
    },
    7:{
        'name': 'Wilt Chamberlain',
        'team': 'San Francisco Warriors',
        'years': '1959-1973',
        'points': '31,419',
        'gamesPlayed': '1,045',
        'status': 'Retired',
        'bg':'blue',
        'color':'black',
        'picURL': 'https://www.onthisday.com/images/people/wilt-chamberlain-medium.jpg'
    },
    8: {
        'name': 'Shaquille O\'Neal',
        'team': 'Los Angeles Lakers',
        'years': '1992-2011',
        'points': '28,596',
        'gamesPlayed': '1,207',
        'status': 'Retired',
        'bg':'gold',
        'color':'black',
        'picURL': 'https://phantom-marca.unidadeditorial.es/3b10e183272f5dc6bca9559da7865360/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/31/16303964956430.jpg'
    },
    9: {
        'name': 'Carmelo Anthony',
        'team': 'Los Angeles Lakers',
        'years': '2003-Current',
        'points': '28,289',
        'gamesPlayed': '1,260',
        'status': 'Active',
        'bg':'gold',
        'color':'black',
        'picURL': 'https://img.bleacherreport.net/img/images/photos/003/918/315/hi-res-4795a7a4d1fa0d599001268776d5e1df_crop_north.jpg?1634894430&w=3072&h=2048'
    },
    10:{
        'name': 'Moses Malone',
        'team': 'Houston Rockets',
        'years': '1976-1995',
        'points': '27,409',
        'gamesPlayed': '1,329',
        'status': 'Retired',
        'bg':'red',
        'color':'black',
        'picURL': 'https://media.bleacherreport.com/w_800,h_533,c_fill/br-img-article/002/206/258/hi-res-65b9936a6af6cbb167a18b7259132679_crop_exact.jpg'
    },
    'notRank':{
        'name': 'Not a number that is in the top 10',
        'team': '',
        'years': '',
        'points': '0',
        'gamesPlayed': '0',
        'status': 'Retired',
        'bg':'white',
        'color':'black',
        'picURL': 'https://a.espncdn.com/combiner/i?img=/i/espn/misc_logos/500/nba.png'
    }
}

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:playerRank', (req, res) => {
    let pRank = req.params.playerRank
    if(players[pRank]) {
        res.json(players[pRank])
    } else {
        res.json(players['notRank'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('The server is runnning')
})