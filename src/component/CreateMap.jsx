import React, { PureComponent } from 'react';

import MapForm from './MapForm';
import Map from './Map';
import MapItem from './MapItem';

class MapAll extends PureComponent {
    constructor() {
        super();

        const { mapArray, row, column } = this.moduleInit();
        const historyList = JSON.parse(window.localStorage.getItem('mapList'));
        this.state = {
            row, // y
            column, // x
            mapArray,
            choseItemType: {
                price: 5,
                areaType: null,
                type: 0,
            },
            selectItemPosition: {
                x: null,
                y: null,
            },
            itemNumber: 1,
            moduleType: 0,
            historyList,
        };

        this.handleMapItemChange = this.handleMapItemChange.bind(this);
        this.handleSetChange = this.handleSetChange.bind(this);
        this.onSelectItemIdChange = this.onSelectItemIdChange.bind(this);
    }

    moduleInit() {
        const row = 10,
            column = 10;
        const mapArray = this.handleMapArrUpdate(row, column);

        return {
            mapArray, 
            row, 
            column,
        };
    }

    setHistory(mapArray) {
        let { row, column, itemNumber } = this.state;
        const key = `${row}X${column}`;
        let mapList = JSON.parse(window.localStorage.getItem('mapList'));

        if (mapList) {
            mapList[key] = new Date().toLocaleString();
        } else {
            mapList = {
                [key]: new Date().toLocaleString(),
            };
        }

        window.localStorage.setItem(`${key}-number`, ++ itemNumber);
        window.localStorage.setItem('mapList', JSON.stringify(mapList));
        window.localStorage.setItem(key, JSON.stringify(mapArray));
    }

    handleMapArrUpdate(x, y) {
        const mapArray = [];
        for (let i = 0; i < y; i++) {
            const columnArr = [];
            for (let j = 0; j < x; j++) {
                columnArr.push({
                    type: 4,
                });
            }
            mapArray.push(columnArr);
        }
        return mapArray;
    }

    handleSetChange(type, value) {
        const { row, column } = this.state;
        const option = {};
        const choseItemType = { ... this.state.choseItemType };
        switch (type) {
            case ('row'):
                option.row = value;
                option.mapArray = this.handleMapArrUpdate(column, value);
                break;
            case ('column'):
                option.column = value;
                option.mapArray = this.handleMapArrUpdate(value, row);
                break;
            case ('price'):
                choseItemType.price = value;
                option.choseItemType = choseItemType;
                break;
            case ('type'):
                choseItemType.type = value;
                option.choseItemType = choseItemType;
                break;
            case ('areaType'):
                choseItemType.areaType = value;
                option.choseItemType = choseItemType;
                break;
            case ('moduleType'):
                return this.setState({
                    moduleType: value,
                });
            case ('historyMap'):
                const [ arr, itemNumber ] = this.onLoadHistoryMap(value);
                if (!arr || !itemNumber) {
                    return null;
                }
                option.mapArray = arr;
                option.itemNumber = itemNumber;
                break;
            default:
                break;
        }
        return this.setState({
            ...option,
        });
    }

    handleMapItemChange(x, y, option, type) {
        if (type === 'map' && this.state.moduleType === 1) {
            return;
        }
        let { choseItemType, itemNumber } = this.state;
        if (option.number === null && this.state.choseItemType.type !== 4) {
            option.number = itemNumber;
            this.setState({
                itemNumber: ++ itemNumber,
            });
        } 

        option = { ...choseItemType, ...option };
        const [ ... mapArray ] = this.state.mapArray;
        mapArray[y][x] = { ...mapArray[y][x], ...option };
        this.setHistory(mapArray);
        this.setState({
            mapArray,
        });
    }

    onLoadHistoryMap(key) {
        const arr = JSON.parse(window.localStorage.getItem(key));
        const itemNumber = JSON.parse(window.localStorage.getItem(`${key}-number`));
        return [ arr, itemNumber ];
    }

    onSelectItemIdChange(pos) {
        const { selectItemPosition } = this.state;
        if (pos.x === selectItemPosition.x && pos.y === selectItemPosition.y) {
            return;
        }
        this.setState({
            selectItemPosition: pos,
        });
    }

    render() {
        const { mapArray, row, column, choseItemType, selectItemPosition, moduleType, historyList } = this.state;
        return (
            <div>
                <MapForm 
                    row={row} 
                    column={column} 
                    handleSetChange={this.handleSetChange} 
                    choseItemType={choseItemType}
                    moduleType={moduleType}
                    historyList={historyList}
                />
                <Map 
                    row={row} 
                    column={column} 
                    mapArray={mapArray} 
                    handleMapItemChange={this.handleMapItemChange} 
                    onSelectItemIdChange={this.onSelectItemIdChange}
                />
                <MapItem  
                    selectItemPosition={selectItemPosition} 
                    mapArray={mapArray} 
                    handleMapItemChange={this.handleMapItemChange}
                />
            </div>
        );
    }
}

export default MapAll;
