import React, { PureComponent } from 'react';
import Header from './Header';
import Set from './Set';
import Card from './MapCard';

export default class MapClient extends PureComponent {
    constructor() {
        super();
        this.state = {
            areaWidth: 9.5,
            selectArr: [],
            showType: 'icon',
            choosePosition: {},
            chooseItem: null,
            chooseItems: {
                length: 0,
            },
            setHour: 1,
            showCard: false,
            shouldShowIconScale: false,
        };
        this.wrapRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const mapArray = JSON.parse('[[{"type":0,"price":5,"areaType":null,"number":1},{"type":0,"price":5,"areaType":null,"number":3},{"type":0,"price":5,"areaType":null,"number":2},{"type":0,"price":5,"areaType":null,"number":4},{"type":0,"price":5,"areaType":null,"number":5},{"type":0,"price":5,"areaType":null,"number":6},{"type":0,"price":5,"areaType":null,"number":7},{"type":0,"price":5,"areaType":null,"number":8},{"type":0,"price":5,"areaType":null,"number":9},{"type":0,"price":5,"areaType":null,"number":10},{"type":0,"price":5,"areaType":null,"number":11},{"type":0,"price":5,"areaType":null,"number":12},{"type":0,"price":5,"areaType":null,"number":13},{"type":0,"price":5,"areaType":null,"number":15},{"type":0,"price":5,"areaType":null,"number":17},{"type":0,"price":5,"areaType":null,"number":16},{"type":0,"price":5,"areaType":null,"number":18},{"type":0,"price":5,"areaType":null,"number":19},{"type":0,"price":5,"areaType":null,"number":20},{"type":0,"price":5,"areaType":null,"number":21}],[{"type":0,"price":5,"areaType":null,"number":30},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":22}],[{"type":0,"price":5,"areaType":null,"number":31},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":23}],[{"type":0,"price":5,"areaType":null,"number":32},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":24}],[{"type":0,"price":5,"areaType":null,"number":33},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":25}],[{"type":0,"price":5,"areaType":null,"number":34},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":27}],[{"type":0,"price":5,"areaType":null,"number":37},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":65},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":28}],[{"type":0,"price":5,"areaType":null,"number":36},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":29}],[{"type":0,"price":5,"areaType":null,"number":38},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":66},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":70},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":39},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":40},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":64},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":69},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":41},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":42},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":43},{"type":4},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":67},{"type":4},{"type":4},{"type":4},{"type":0,"price":5,"areaType":null,"number":68},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":45},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":46},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":47},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":48},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":49},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}],[{"type":0,"price":5,"areaType":null,"number":50},{"type":0,"price":5,"areaType":null,"number":51},{"type":0,"price":5,"areaType":null,"number":52},{"type":0,"price":5,"areaType":null,"number":53},{"type":0,"price":5,"areaType":null,"number":55},{"type":0,"price":5,"areaType":null,"number":58},{"type":0,"price":5,"areaType":null,"number":63},{"type":0,"price":5,"areaType":null,"number":60},{"type":0,"price":5,"areaType":null,"number":59},{"type":0,"price":5,"areaType":null,"number":61},{"type":0,"price":5,"areaType":null,"number":57},{"type":0,"price":5,"areaType":null,"number":62},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4},{"type":4}]]');

        if (mapArray && mapArray.length!== 0 && mapArray[0] && mapArray[0].length!== 0) {
            const row = mapArray.length;
            const colunm = mapArray[0].length;
            this.setState({
                mapArray,
                row,
                colunm,
            });
        }
    }

    getItemHtml(type, x, y) {
        const { colunm, areaWidth, showType, mapArray } = this.state;
        const itemStyle = {
            width: `${areaWidth / colunm}rem`,
            height: `${areaWidth / colunm}rem`,
            lineHight: `${areaWidth / colunm}rem`,
            // border: '1px solid black',
            display: 'flex',
        };
        let hasSelectTyp = 0;
        if (mapArray[y][x].selectType) {
            switch(mapArray[y][x].selectType) {
                case(0):
                    hasSelectTyp = 0;
                    break;
                case(1):
                    hasSelectTyp = 1;
                    break;
                case(-1):
                    hasSelectTyp = -1;
                    break;
                default:
                    break;
            }
        }
        // const hasSelect = (selectArr && selectArr[y] && selectArr[y][x] && selectArr[y][x] === 1) ? true : false;
        if (showType === 'number') {
            const number = type === 4 ? '' : mapArray[y][x].number || 'noSet';
            return <div 
            style={{
                ...itemStyle,
                backgroundColor: `${type === 4 ? '' : hasSelectTyp === -1 ? 'rgb(26, 250, 41)' : hasSelectTyp === 1 ? 'rgb(216, 30, 6)' : 'rgb(205, 205, 205)'}`
            }} data-column={x} key={x}>{number}</div>;
        } else if (showType === 'icon') {
            switch(type) {
                // 电脑正常展示
                case(0):
                    break;
                // 电脑向左
                case(1):
                    itemStyle.transform = 'rotate(90deg)';
                    break;
                case(2):
                    itemStyle.transform = 'rotate(180deg) rotateY(180deg)';
                    break;
                case(3):
                    itemStyle.transform = 'rotate(270deg) rotateY(180deg)';
                    break;
                case(4):
                    return <div style={itemStyle} data-column={x} key={x} ></div>;
                default:
                    break;
            }
            return (
                <div style={itemStyle} data-column={x} key={x} dangerouslySetInnerHTML={{
                    __html: `
                    <svg class="icon" aria-hidden="true" >
                        <use xlink:href="#icon-computer-${hasSelectTyp === -1 ? 'green-copy': hasSelectTyp === 1 ?'red' : 'gray-copy'}"></use>
                    </svg>
                    `,
                }}>
                </div>
            );
        }
        return null;
    }

    praseMap() {
        const { mapArray } = this.state;
        const colEl = [];
        const rowStyle = {
            display: 'flex',
        };
        
        for (let y = 0; y < mapArray.length; y++) {
            const row = [];
            for (let x = 0; x < mapArray[y].length; x++) {
                const item = mapArray[y][x];
                if (item) {
                    const { type } = item;
                    row.push(this.getItemHtml(type, x, y));
                }
            }
            colEl.push(<div data-row={y} style={rowStyle} key={y}>{row}</div>);
        }

        return colEl;
    }

    changeItemState(x, y, state) {
        const [ ... mapArray ] = this.state.mapArray;
        const chooseItems = { ... this.state.chooseItems };
        if (state === 'delete') {
            mapArray[y][x].selectType = 0;
            chooseItems[`${x}-${y}`] = null;
            chooseItems.length --;
        } else if (state === 'add') {
            mapArray[y][x].selectType = -1;
            chooseItems[`${x}-${y}`] = {
                ... mapArray[y][x],
                setHour: this.state.setHour,
            };
            chooseItems.length ++;
        }
        return [ mapArray, chooseItems ];
    }

    onMoveTo(x, y, starTime, duration, callBack) {
        const precent = (Date.now() - starTime) / duration;
        console.log(precent);
        if (precent < 1) {
            window.scrollTo(precent * x, precent * y);
            window.requestAnimationFrame(() => {
                this.onMoveTo(x, y, starTime, duration, callBack);
            });
        } else {
            window.scrollTo(x, y);
            callBack();
        }

    }

    handleMapClick(e) {
        if (!this.wrapRef.current.style.transform) {
            const mainWidth = document.body.scrollWidth;
            const elHeight = this.wrapRef.current.clientHeight;
            const { pageX, pageY } = e;
            this.wrapRef.current.style.transformOrigin = '0 0 0';
            this.wrapRef.current.style.transform = 'scale(2.5)';
            // setTimeout(() => { console.log(e.pageX) }, 1000);
            
            setTimeout(() => {
                this.onMoveTo(pageX / mainWidth * document.body.scrollWidth - document.body.clientWidth / 2, 
                    (pageY - 80) / elHeight * (elHeight * 2.5) - document.body.clientHeight / 2, Date.now(), 250, () => {
                        this.setState({
                            shouldShowIconScale: true,
                        });
                    });
            }, 350);
        } else {
            let { target } = e;
            while(!target.getAttribute('data-column')) {
                if (target.className === 'mapWrapper') {
                    break;
                } else {
                    target = target.parentNode;
                }
            }
            const x = target.getAttribute('data-column');
            const y = target.parentNode.getAttribute('data-row');
            if (x && y
                && this.state.mapArray[y][x].selectType !== 1
                && this.state.mapArray[y][x].type !== 4
                ) {
                // shouldSend to server
                let { mapArray, chooseItems } = this.state;
                let chooseItem;
                const choosePosition = {};
                
                if (mapArray[y][x].selectType === -1) {
                    // 移除改订单
                    [ mapArray, chooseItems ] = this.changeItemState(x, y, 'delete');
                    chooseItem = null;
                } else {
                    // 添加该订单
                    [ mapArray, chooseItems ] = this.changeItemState(x, y, 'add');
                    choosePosition.x = x;
                    choosePosition.y = y;
                    chooseItem = mapArray[y][x];
                }
                
                this.setState({
                    mapArray,
                    chooseItem,
                    chooseItems,
                    choosePosition,
                });
            }
        }
    }

    handleClick(type, value) {
        switch(type) {
            case('openMap'):
                if (this.wrapRef.current && this.wrapRef.current.style) {
                    this.wrapRef.current.style.transform = '';
                    window.scrollTo(0, 0);
                    this.setState({
                        shouldShowIconScale: false,
                    });
                }
                break;
            case('changeShowType'):
                this.setState({
                    showType: value,
                });
                break;
            case('setHour'):
                const { x, y } = this.state.choosePosition;
                const chooseItems = { ... this.state.chooseItems };
                if (chooseItems[`${x}-${y}`]) {
                    chooseItems[`${x}-${y}`].setHour = value;
                }
                this.setState({
                    chooseItems,
                    setHour: value,
                });
                break;
            case('changeCardState'):
                if (value && this.state.chooseItems.length === 0) {
                    return;
                }
                this.setState({
                    showCard: value,
                });
                break;
            case('deleteItem'):
                while(!value.getAttribute('data-delete-key')) {
                    if (value.className === 'map-client-card') {
                        break;
                    } else {
                        value = value.parentNode;
                    }
                }
                const key = value.getAttribute('data-delete-key');
                if (key) {
                    const [ x, y ] = key.split('-');
                    const [ mapArray, chooseItems ] = this.changeItemState(x, y, 'delete');
                    this.setState({
                        chooseItems,
                        mapArray,
                    });
                }
                break;
            default:
                break;
        }
    }

    render() {
        const { mapArray, areaWidth, showType, chooseItem, setHour, chooseItems, showCard, shouldShowIconScale } = this.state;
        if (!mapArray) return null;
        const shouldShow = !(chooseItems.length === 0);
        const showList = this.praseMap();
        return (
            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgb(243, 240, 240)',
            }}>
                <Header handleClick={this.handleClick} showType={showType}/>
                <div
                ref={this.wrapRef}
                onClick={(e) => this.handleMapClick(e)}
                style={{
                    marginTop: 85,
                    padding: `10px ${(10 - areaWidth) / 2}rem`,
                    backgroundColor: '#f3f0f0',
                    transitionDuration: '0.3s',
                }}>{showList}</div>
                <div style={{
                    color: 'lightslategray',
                    textAlign: 'center',
                }}>power by 嘉鱼互娱</div>
                {shouldShowIconScale && <div 
                style={{
                    position: 'fixed',
                    bottom: '20vh',
                    right: '10vw',
                }}
                onClick={() => this.handleClick('openMap')}
                dangerouslySetInnerHTML={{
                    __html: `
                    <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px">
                        <use xlink:href="#icon-ziyuanldpi"></use>
                    </svg>
                    `,
                }}></div>}
                <Set chooseItem={chooseItem} shouldShow={shouldShow} setHour={setHour} handleClick={this.handleClick}/>
                {showCard && <Card showCard={showCard} handleClick={this.handleClick} chooseItems={chooseItems}/>}
            </div>
        );
    }
}