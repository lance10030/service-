
module.exports = function(app) {
    /*测试跨域暂时使用*/
    app.post('/api/list',function (req,res) {
        res.send({
            message:'bingo',
            data:[
                {
                    intro:'话语速爆新歌',
                    pic:'http://p1.music.126.net/tycPEo_4NavAkecZgFrXvA==/19093019416714904.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                    listeners:'657.4万'
                },
                {
                    intro:'华语｜承蒙你出现 够我喜欢好多年',
                    pic:'http://p1.music.126.net/yiQIOykXyrGz9QWILZjcRw==/19207368625983378.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                    listeners:'657.4万'
                },
                {
                    intro:'浙江潮 | 一份来自江南的独立音乐地图',
                    pic:'http://p1.music.126.net/nSQ4VP6bJs3xVa3rJH3_VA==/109951162913391080.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                    listeners:'657.4万'
                },
                {
                    intro:'梦境闪回丨在后摇里听见情绪',
                    pic:'http://p1.music.126.net/4917ekuN-PUWqd3xxcxZgw==/19212866184091093.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                    listeners:'657.4万'
                },
                {
                    intro:'民谣地图｜你在哪座城市,怀念带不走的谁',
                    pic:'http://p1.music.126.net/R3gczZoPomyrRmOmeSwTbw==/109951162948624915.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                    listeners:'657.4万'
                },
                {
                    intro:'1976-2017 苹果发布会及广告音乐精选',
                    pic:'http://p1.music.126.net/9l0JFbiWEIwDcmBvcu-3fQ==/109951163023970954.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
                    listeners:'657.4万'
                }

            ]
        })
    });
    app.post('/api/songs',function (req,res) {
        res.send({
            message:'bingo',
            data:[
                {
                    name:'你曾说（合唱版）',
                    author:'周品-催子格',
                    album:'那年花开月正圆 电视原声带'
                },
                {
                    name:'你曾说（合唱版）',
                    author:'周品-催子格',
                    album:'那年花开月正圆 电视原声带'
                },
                {
                    name:'一步成诗',
                    author:'王安诗',
                    album:'一步成诗'
                },
                {
                    name:'Give me a chance',
                    author:'胡彦斌Tiger Hu',
                    album:'give me a chance'
                },
                {
                    name:'小棋童',
                    author:'双笙',
                    album:'小棋童'
                },
                {
                    name:'你曾说（合唱版）',
                    author:'周品-催子格',
                    album:'那年花开月正圆 电视原声带'
                },
                {
                    name:'你曾说（合唱版）',
                    author:'周品-催子格',
                    album:'那年花开月正圆 电视原声带'
                },
                {
                    name:'你曾说（合唱版）',
                    author:'周品-催子格',
                    album:'那年花开月正圆 电视原声带'
                },
                {
                    name:'你曾说（合唱版）',
                    author:'周品-催子格',
                    album:'那年花开月正圆 电视原声带'
                },
                {
                    name:'你曾说（合唱版）',
                    author:'周品-催子格',
                    album:'那年花开月正圆 电视原声带'
                },
            ]
        })
    });
    app.post('/api/recommend',function (req,res) {
        res.send({
            message:'bingo',
            data:['偶像','一箱情愿的不舍','Taylor Swift','双笙','周杰伦','不能说的秘密','老中医','花粥']
        })
    });
    app.post('/api/hotSongs',function (req,res) {
        res.send({
            message:'bongo!',
            data:[
                {
                    name:'你曾说（合唱版）',
                    author:'周品-催子格',
                    album:'那年花开月正圆 电视原声带'
                },
                {
                    name:'time to say goodbye',
                    author:'Alex',
                    album:'小轩窗，正梳妆，相顾无言惟有泪千行'
                },
                {
                    name:'一步成诗',
                    author:'王安诗',
                    album:'一步成诗'
                },
                {
                    name:'Give me a chance',
                    author:'胡彦斌Tiger Hu',
                    album:'give me a chance'
                },
                {
                    name:'小棋童',
                    author:'双笙',
                    album:'小棋童'
                },
                {
                    name:'summertime sadness',
                    author:'Del Rey',
                    album:'打雷啦'
                },
                {
                    name:'莉莉安',
                    author:'宋冬野',
                    album:'你好呀，李银河'
                },
                {
                    name:'明年今日',
                    author:'陈奕迅',
                    album:'人面不知何处去，桃花依旧笑春风'
                },
                {
                    name:'红玫瑰',
                    author:'陈奕迅',
                    album:'雨打梨花深闭门，冷雨敲窗被未温'
                },
                {
                    name:'Lil Mama',
                    author:'jain',
                    album:'may u have a beautiful sunset'
                }
            ]
        })
    });
    app.post ('/api/getList',function (req,res) {
        res.send({
            message:"bingo!",
            data:[
                {name:'lance1',num:1,gender:'male'},
                {name:'lance2',num:2,gender:'female'},
                {name:'lance3',num:3,gender:'female'},
                {name:'lance4',num:4,gender:'male'},
                {name:'lance5',num:5,gender:'female'}
            ]
        })
    })
    app.post('/api/getSeats',function (req,res) {
        res.send({
            message:"bingo!",
            data:{
                area:'西区',
                block:'A1',
                seats:[[{pos:'a14-73',price:'3.00',status:0},{pos:'a13-73',price:'30.00',status:1},{pos:'a12-73',price:'80.00',status:0},{pos:'a11-73',price:'38',status:0},{pos:'a10-73',price:'380.00',status:0}],
                    [{pos:'a14-71',price:'380.00',status:0},{pos:'a13-71',price:'380.00',status:1},{pos:'a12-71',price:'380.00',status:0},{pos:'a11-71',price:'380.00',status:0},{pos:'a10-71',price:'380.00',status:0}],
                    [{pos:'a14-69',price:'380.00',status:0},{pos:'a13-69',price:'380.00',status:1},{pos:'a12-69',price:'380.00',status:0},{pos:'a11-69',price:'380.00',status:0},{pos:'a10-69',price:'380.00',status:0}],
                    [{pos:'a14-67',price:'380.00',status:0},{pos:'a13-67',price:'380.00',status:1},{pos:'a12-67',price:'380.00',status:0},{pos:'a11-67',price:'380.00',status:0},{pos:'a10-67',price:'380.00',status:0}],
                    [{pos:'a14-65',price:'380.00',status:0},{pos:'a13-65',price:'380.00',status:1},{pos:'a12-65',price:'380.00',status:0},{pos:'a11-65',price:'380.00',status:0},{pos:'a10-65',price:'380.00',status:0}],
                    [{pos:'a14-63',price:'380.00',status:0},{pos:'a13-63',price:'380.00',status:1},{pos:'a12-63',price:'380.00',status:0},{pos:'a11-63',price:'380.00',status:0},{pos:'a10-63',price:'380.00',status:0}],
                    [{pos:'a14-61',price:'380.00',status:0},{pos:'a13-61',price:'380.00',status:1},{pos:'a12-61',price:'380.00',status:0},{pos:'a11-61',price:'380.00',status:0},{pos:'a10-61',price:'380.00',status:0}],
                    [{pos:'a14-59',price:'380.00',status:0},{pos:'a13-59',price:'380.00',status:1},{pos:'a12-59',price:'380.00',status:0},{pos:'a11-59',price:'380.00',status:0},{pos:'a10-59',price:'380.00',status:0}],
                    [{pos:'a14-57',price:'380.00',status:0},{pos:'a13-57',price:'380.00',status:1},{pos:'a12-57',price:'380.00',status:0},{pos:'a11-57',price:'380.00',status:0},{pos:'a10-57',price:'380.00',status:0}],
                    [{pos:'a14-55',price:'380.00',status:0},{pos:'a13-55',price:'380.00',status:1},{pos:'a12-55',price:'380.00',status:0},{pos:'a11-55',price:'380.00',status:0},{pos:'a10-55',price:'380.00',status:0}],
                    [{pos:'a15-53',price:'380.00',status:0},{pos:'a14-53',price:'380.00',status:1},{pos:'a13-53',price:'380.00',status:0},{pos:'a12-53',price:'380.00',status:0},{pos:'a11-53',price:'380.00',status:0},{pos:'a10-53',price:'380.00',status:0}],
                    [{pos:'a15-51',price:'380.00',status:0},{pos:'a14-51',price:'380.00',status:1},{pos:'a13-51',price:'380.00',status:0},{pos:'a12-51',price:'380.00',status:0},{pos:'a11-51',price:'380.00',status:0},{pos:'a10-51',price:'380.00',status:0}],
                    [{pos:'a15-49',price:'380.00',status:0},{pos:'a14-49',price:'380.00',status:1},{pos:'a13-49',price:'380.00',status:0},{pos:'a12-49',price:'380.00',status:0},{pos:'a11-49',price:'380.00',status:0},{pos:'a10-49',price:'380.00',status:0}],
                    [{pos:'a15-47',price:'380.00',status:0},{pos:'a14-47',price:'380.00',status:1},{pos:'a13-47',price:'380.00',status:0},{pos:'a12-47',price:'380.00',status:0},{pos:'a11-47',price:'380.00',status:0},{pos:'a10-47',price:'380.00',status:0}],
                    [{pos:'a15-45',price:'380.00',status:0},{pos:'a14-45',price:'380.00',status:1},{pos:'a13-45',price:'380.00',status:0},{pos:'a12-45',price:'380.00',status:0},{pos:'a11-45',price:'380.00',status:0},{pos:'a10-45',price:'380.00',status:0}],
                    [{pos:'a15-43',price:'380.00',status:0},{pos:'a14-43',price:'380.00',status:1},{pos:'a13-43',price:'380.00',status:0},{pos:'a12-43',price:'380.00',status:0},{pos:'a11-43',price:'380.00',status:0},{pos:'a10-43',price:'380.00',status:0}],
                    [{pos:'a15-41',price:'380.00',status:0},{pos:'a14-41',price:'380.00',status:1},{pos:'a13-41',price:'380.00',status:0},{pos:'a12-41',price:'380.00',status:0},{pos:'a11-41',price:'380.00',status:0},{pos:'a10-41',price:'380.00',status:0}],
                    [{pos:'a15-39',price:'380.00',status:0},{pos:'a14-39',price:'380.00',status:1},{pos:'a13-39',price:'380.00',status:0},{pos:'a12-39',price:'380.00',status:0},{pos:'a11-39',price:'380.00',status:0},{pos:'a10-39',price:'380.00',status:0}],
                    [{pos:'a15-37',price:'380.00',status:0},{pos:'a14-37',price:'380.00',status:1},{pos:'a13-37',price:'380.00',status:0},{pos:'a12-37',price:'380.00',status:0},{pos:'a11-37',price:'380.00',status:0},{pos:'a10-37',price:'380.00',status:0}],
                    [{pos:'a15-35',price:'380.00',status:0},{pos:'a14-35',price:'380.00',status:1},{pos:'a13-35',price:'380.00',status:0},{pos:'a12-35',price:'380.00',status:0},{pos:'a11-35',price:'380.00',status:0},{pos:'a10-35',price:'380.00',status:0}],
                    [{pos:'a15-33',price:'380.00',status:0},{pos:'a14-33',price:'380.00',status:1},{pos:'a13-33',price:'380.00',status:0},{pos:'a12-33',price:'380.00',status:0},{pos:'a11-33',price:'380.00',status:0},{pos:'a10-33',price:'380.00',status:0}],
                    [{pos:'a15-31',price:'380.00',status:0},{pos:'a14-31',price:'380.00',status:1},{pos:'a13-31',price:'380.00',status:0},{pos:'a12-31',price:'380.00',status:0},{pos:'a11-31',price:'380.00',status:0},{pos:'a10-31',price:'380.00',status:0}],
                    [{pos:'a15-29',price:'380.00',status:0},{pos:'a14-29',price:'380.00',status:1},{pos:'a13-29',price:'380.00',status:0},{pos:'a12-29',price:'380.00',status:0},{pos:'a11-29',price:'380.00',status:0},{pos:'a10-29',price:'380.00',status:0}],
                    [{pos:'a15-27',price:'380.00',status:0},{pos:'a14-27',price:'380.00',status:1},{pos:'a13-27',price:'380.00',status:0},{pos:'a12-27',price:'380.00',status:0},{pos:'a11-27',price:'380.00',status:0},{pos:'a10-27',price:'380.00',status:0}]],
                seat:{
                    "state": 0,
                    "message": "ok",
                    "data": [
                        {
                            "row": "B109",
                            "sits": [
                                {
                                    "id": "B10921",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排21座"
                                },
                                {
                                    "id": "B10923",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排23座"
                                },
                                {
                                    "id": "B10925",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排25座"
                                },
                                {
                                    "id": "B10927",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排27座"
                                },
                                {
                                    "id": "B10929",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排29座"
                                },
                                {
                                    "id": "B10931",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排31座"
                                },
                                {
                                    "id": "B10933",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排33座"
                                },
                                {
                                    "id": "B10935",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排35座"
                                },
                                {
                                    "id": "B10937",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排37座"
                                },
                                {
                                    "id": "B10939",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排39座"
                                },
                                {
                                    "id": "B10941",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排41座"
                                },
                                {
                                    "id": "B10943",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排43座"
                                },
                                {
                                    "id": "B10945",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区09排45座"
                                }
                            ]
                        },
                        {
                            "row": "B108",
                            "sits": [
                                {
                                    "id": "B10821",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排21座"
                                },
                                {
                                    "id": "B10823",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排23座"
                                },
                                {
                                    "id": "B10825",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排25座"
                                },
                                {
                                    "id": "B10827",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排27座"
                                },
                                {
                                    "id": "B10829",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排29座"
                                },
                                {
                                    "id": "B10831",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排31座"
                                },
                                {
                                    "id": "B10833",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排33座"
                                },
                                {
                                    "id": "B10835",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排35座"
                                },
                                {
                                    "id": "B10837",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排37座"
                                },
                                {
                                    "id": "B10839",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排39座"
                                },
                                {
                                    "id": "B10841",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排41座"
                                },
                                {
                                    "id": "B10843",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排43座"
                                },
                                {
                                    "id": "B10845",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区08排45座"
                                }
                            ]
                        },
                        {
                            "row": "B107",
                            "sits": [
                                {
                                    "id": "B10721",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排21座"
                                },
                                {
                                    "id": "B10723",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排23座"
                                },
                                {
                                    "id": "B10725",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排25座"
                                },
                                {
                                    "id": "B10727",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排27座"
                                },
                                {
                                    "id": "B10729",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排29座"
                                },
                                {
                                    "id": "B10731",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排31座"
                                },
                                {
                                    "id": "B10733",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排33座"
                                },
                                {
                                    "id": "B10735",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排35座"
                                },
                                {
                                    "id": "B10737",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排37座"
                                },
                                {
                                    "id": "B10739",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排39座"
                                },
                                {
                                    "id": "B10741",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排41座"
                                },
                                {
                                    "id": "B10743",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排43座"
                                },
                                {
                                    "id": "B10745",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排45座"
                                },
                                {
                                    "id": "B10747",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排47座"
                                },
                                {
                                    "id": "B10749",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排49座"
                                },
                                {
                                    "id": "B10751",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排51座"
                                },
                                {
                                    "id": "B10753",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排53座"
                                },
                                {
                                    "id": "B10755",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排55座"
                                },
                                {
                                    "id": "B10757",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区07排57座"
                                }
                            ]
                        },
                        {
                            "row": "B106",
                            "sits": [
                                {
                                    "id": "B10601",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排01座"
                                },
                                {
                                    "id": "B10603",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排03座"
                                },
                                {
                                    "id": "B10605",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排05座"
                                },
                                {
                                    "id": "B10607",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排07座"
                                },
                                {
                                    "id": "B10609",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排09座"
                                },
                                {
                                    "id": "B10611",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排11座"
                                },
                                {
                                    "id": "B10613",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排13座"
                                },
                                {
                                    "id": "B10615",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排15座"
                                },
                                {
                                    "id": "B10617",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排17座"
                                },
                                {
                                    "id": "B10619",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排19座"
                                },
                                {
                                    "id": "B10621",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排21座"
                                },
                                {
                                    "id": "B10623",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排23座"
                                },
                                {
                                    "id": "B10625",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排25座"
                                },
                                {
                                    "id": "B10627",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排27座"
                                },
                                {
                                    "id": "B10629",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排29座"
                                },
                                {
                                    "id": "B10631",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排31座"
                                },
                                {
                                    "id": "B10633",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排33座"
                                },
                                {
                                    "id": "B10635",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排35座"
                                },
                                {
                                    "id": "B10637",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排37座"
                                },
                                {
                                    "id": "B10639",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区06排39座"
                                }
                            ]
                        },
                        {
                            "row": "B105",
                            "sits": [
                                {
                                    "id": "B10501",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排01座"
                                },
                                {
                                    "id": "B10503",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排03座"
                                },
                                {
                                    "id": "B10505",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排05座"
                                },
                                {
                                    "id": "B10507",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排07座"
                                },
                                {
                                    "id": "B10509",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排09座"
                                },
                                {
                                    "id": "B10511",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排11座"
                                },
                                {
                                    "id": "B10513",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排13座"
                                },
                                {
                                    "id": "B10515",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排15座"
                                },
                                {
                                    "id": "B10517",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排17座"
                                },
                                {
                                    "id": "B10519",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排19座"
                                },
                                {
                                    "id": "B10521",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排21座"
                                },
                                {
                                    "id": "B10523",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排23座"
                                },
                                {
                                    "id": "B10525",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排25座"
                                },
                                {
                                    "id": "B10527",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排27座"
                                },
                                {
                                    "id": "B10529",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排29座"
                                },
                                {
                                    "id": "B10531",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排31座"
                                },
                                {
                                    "id": "B10533",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排33座"
                                },
                                {
                                    "id": "B10535",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排35座"
                                },
                                {
                                    "id": "B10537",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排37座"
                                },
                                {
                                    "id": "B10539",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区05排39座"
                                }
                            ]
                        },
                        {
                            "row": "B104",
                            "sits": [
                                {
                                    "id": "B10401",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排01座"
                                },
                                {
                                    "id": "B10403",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排03座"
                                },
                                {
                                    "id": "B10405",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排05座"
                                },
                                {
                                    "id": "B10407",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排07座"
                                },
                                {
                                    "id": "B10409",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排09座"
                                },
                                {
                                    "id": "B10411",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排11座"
                                },
                                {
                                    "id": "B10413",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排13座"
                                },
                                {
                                    "id": "B10415",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排15座"
                                },
                                {
                                    "id": "B10417",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排17座"
                                },
                                {
                                    "id": "B10419",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排19座"
                                },
                                {
                                    "id": "B10421",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排21座"
                                },
                                {
                                    "id": "B10423",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排23座"
                                },
                                {
                                    "id": "B10425",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排25座"
                                },
                                {
                                    "id": "B10427",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排27座"
                                },
                                {
                                    "id": "B10429",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排29座"
                                },
                                {
                                    "id": "B10431",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排31座"
                                },
                                {
                                    "id": "B10433",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排33座"
                                },
                                {
                                    "id": "B10435",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排35座"
                                },
                                {
                                    "id": "B10437",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排37座"
                                },
                                {
                                    "id": "B10439",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区04排39座"
                                }
                            ]
                        },
                        {
                            "row": "B103",
                            "sits": [
                                {
                                    "id": "B10301",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排01座"
                                },
                                {
                                    "id": "B10303",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排03座"
                                },
                                {
                                    "id": "B10305",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排05座"
                                },
                                {
                                    "id": "B10307",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排07座"
                                },
                                {
                                    "id": "B10309",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排09座"
                                },
                                {
                                    "id": "B10311",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排11座"
                                },
                                {
                                    "id": "B10313",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排13座"
                                },
                                {
                                    "id": "B10315",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排15座"
                                },
                                {
                                    "id": "B10317",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排17座"
                                },
                                {
                                    "id": "B10319",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排19座"
                                },
                                {
                                    "id": "B10321",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排21座"
                                },
                                {
                                    "id": "B10323",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排23座"
                                },
                                {
                                    "id": "B10325",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排25座"
                                },
                                {
                                    "id": "B10327",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排27座"
                                },
                                {
                                    "id": "B10329",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排29座"
                                },
                                {
                                    "id": "B10331",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排31座"
                                },
                                {
                                    "id": "B10333",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排33座"
                                },
                                {
                                    "id": "B10335",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排35座"
                                },
                                {
                                    "id": "B10337",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排37座"
                                },
                                {
                                    "id": "B10339",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区03排39座"
                                }
                            ]
                        },
                        {
                            "row": "B102",
                            "sits": [
                                {
                                    "id": "B10201",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排01座"
                                },
                                {
                                    "id": "B10203",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排03座"
                                },
                                {
                                    "id": "B10205",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排05座"
                                },
                                {
                                    "id": "B10207",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排07座"
                                },
                                {
                                    "id": "B10209",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排09座"
                                },
                                {
                                    "id": "B10211",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排11座"
                                },
                                {
                                    "id": "B10213",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排13座"
                                },
                                {
                                    "id": "B10215",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排15座"
                                },
                                {
                                    "id": "B10217",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排17座"
                                },
                                {
                                    "id": "B10219",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排19座"
                                },
                                {
                                    "id": "B10221",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排21座"
                                },
                                {
                                    "id": "B10223",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排23座"
                                },
                                {
                                    "id": "B10225",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排25座"
                                },
                                {
                                    "id": "B10227",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排27座"
                                },
                                {
                                    "id": "B10229",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排29座"
                                },
                                {
                                    "id": "B10231",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排31座"
                                },
                                {
                                    "id": "B10233",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排33座"
                                },
                                {
                                    "id": "B10235",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排35座"
                                },
                                {
                                    "id": "B10237",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排37座"
                                },
                                {
                                    "id": "B10239",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区02排39座"
                                }
                            ]
                        },
                        {
                            "row": "B101",
                            "sits": [
                                {
                                    "id": "B10101",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排01座"
                                },
                                {
                                    "id": "B10103",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排03座"
                                },
                                {
                                    "id": "B10105",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排05座"
                                },
                                {
                                    "id": "B10107",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排07座"
                                },
                                {
                                    "id": "B10109",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排09座"
                                },
                                {
                                    "id": "B10111",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排11座"
                                },
                                {
                                    "id": "B10113",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排13座"
                                },
                                {
                                    "id": "B10115",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排15座"
                                },
                                {
                                    "id": "B10117",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排17座"
                                },
                                {
                                    "id": "B10119",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排19座"
                                },
                                {
                                    "id": "B10121",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排21座"
                                },
                                {
                                    "id": "B10123",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排23座"
                                },
                                {
                                    "id": "B10125",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排25座"
                                },
                                {
                                    "id": "B10127",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排27座"
                                },
                                {
                                    "id": "B10129",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排29座"
                                },
                                {
                                    "id": "B10131",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排31座"
                                },
                                {
                                    "id": "B10133",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排33座"
                                },
                                {
                                    "id": "B10135",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排35座"
                                },
                                {
                                    "id": "B10137",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排37座"
                                },
                                {
                                    "id": "B10139",
                                    "type": "B",
                                    "price": "12000",
                                    "status": "wait_to_order",
                                    "area": "B1",
                                    "detail": "B1区01排39座"
                                }
                            ]
                        }
                    ]
                }
            }
        })
    })
    app.post('/api/getSeatStatus',function (req,res) {
       res.send({
           "state": 0,
           "message": "ok",
           "data": [
               {
                   "row": "B209",
                   "sits": [
                       {
                           "id": "B20901",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排01座"
                       },
                       {
                           "id": "B20902",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排02座"
                       },
                       {
                           "id": "B20903",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排03座"
                       },
                       {
                           "id": "B20904",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排04座"
                       },
                       {
                           "id": "B20905",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排05座"
                       },
                       {
                           "id": "B20906",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排06座"
                       },
                       {
                           "id": "B20907",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排07座"
                       },
                       {
                           "id": "B20908",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排08座"
                       },
                       {
                           "id": "B20909",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排09座"
                       },
                       {
                           "id": "B20910",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排10座"
                       },
                       {
                           "id": "B20911",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排11座"
                       },
                       {
                           "id": "B20912",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排12座"
                       },
                       {
                           "id": "B20913",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排13座"
                       },
                       {
                           "id": "B20914",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排14座"
                       },
                       {
                           "id": "B20915",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排15座"
                       },
                       {
                           "id": "B20916",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排16座"
                       },
                       {
                           "id": "B20917",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排17座"
                       },
                       {
                           "id": "B20918",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排18座"
                       },
                       {
                           "id": "B20919",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区09排19座"
                       }
                   ]
               },
               {
                   "row": "B208",
                   "sits": [
                       {
                           "id": "B20801",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排01座"
                       },
                       {
                           "id": "B20802",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排02座"
                       },
                       {
                           "id": "B20803",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排03座"
                       },
                       {
                           "id": "B20804",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排04座"
                       },
                       {
                           "id": "B20805",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排05座"
                       },
                       {
                           "id": "B20806",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排06座"
                       },
                       {
                           "id": "B20807",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排07座"
                       },
                       {
                           "id": "B20808",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排08座"
                       },
                       {
                           "id": "B20809",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排09座"
                       },
                       {
                           "id": "B20810",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排10座"
                       },
                       {
                           "id": "B20811",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排11座"
                       },
                       {
                           "id": "B20812",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排12座"
                       },
                       {
                           "id": "B20813",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排13座"
                       },
                       {
                           "id": "B20814",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排14座"
                       },
                       {
                           "id": "B20815",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排15座"
                       },
                       {
                           "id": "B20816",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排16座"
                       },
                       {
                           "id": "B20817",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排17座"
                       },
                       {
                           "id": "B20818",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排18座"
                       },
                       {
                           "id": "B20819",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区08排19座"
                       }
                   ]
               },
               {
                   "row": "B207",
                   "sits": [
                       {
                           "id": "B20701",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排01座"
                       },
                       {
                           "id": "B20702",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排02座"
                       },
                       {
                           "id": "B20703",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排03座"
                       },
                       {
                           "id": "B20704",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排04座"
                       },
                       {
                           "id": "B20705",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排05座"
                       },
                       {
                           "id": "B20706",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排06座"
                       },
                       {
                           "id": "B20707",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排07座"
                       },
                       {
                           "id": "B20708",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排08座"
                       },
                       {
                           "id": "B20709",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排09座"
                       },
                       {
                           "id": "B20710",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排10座"
                       },
                       {
                           "id": "B20711",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排11座"
                       },
                       {
                           "id": "B20712",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排12座"
                       },
                       {
                           "id": "B20713",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排13座"
                       },
                       {
                           "id": "B20714",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排14座"
                       },
                       {
                           "id": "B20715",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排15座"
                       },
                       {
                           "id": "B20716",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排16座"
                       },
                       {
                           "id": "B20717",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排17座"
                       },
                       {
                           "id": "B20718",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排18座"
                       },
                       {
                           "id": "B20719",
                           "type": "B",
                           "price": "12000",
                           "status": "wait_to_order",
                           "area": "B2",
                           "detail": "B2区07排19座"
                       }
                   ]
               }
           ]
       })
   })
    app.post('/api/submitOrder',function (req,res) {
        res.send({
            message:"bingo!",
            data:'收到数据了'
        })
    })
    app.post('/api/searchOrder',function (req,res) {
        res.send({
            message:"bingo!",
            data:{
                area:'A1',
                pos:['A10102','A10103','A10104'],
                price:'1000.00'
            }
        })
    })

    /*['http://p1.music.126.net/tycPEo_4NavAkecZgFrXvA==/19093019416714904.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
       'http://p1.music.126.net/yiQIOykXyrGz9QWILZjcRw==/19207368625983378.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
       'http://p1.music.126.net/nSQ4VP6bJs3xVa3rJH3_VA==/109951162913391080.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
       'http://p1.music.126.net/4917ekuN-PUWqd3xxcxZgw==/19212866184091093.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp'
       'http://p1.music.126.net/R3gczZoPomyrRmOmeSwTbw==/109951162948624915.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
       'http://p1.music.126.net/9l0JFbiWEIwDcmBvcu-3fQ==/109951163023970954.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp'
    ]*/
};

