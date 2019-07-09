import React, { PureComponent } from 'react';

export default class Map extends PureComponent {
    constructor() {
        super();
        this.state = {
            itemHeight: 30,
            itemWidth: 30,
        };
    }

    getStyle() {
        const { row, column } = this.props;
        const wrapWidth = this.state.itemWidth * row;
        const wrapHight = this.state.itemHeight * column;
        const wrapStyle = {
            width: this.state.itemWidth * column,
            height: this.state.itemHeight * row,
            margin: '0 auto'
        }
        return wrapStyle;
    }

    getItemHtml(type, x) {
        const { itemHeight, itemWidth } = this.state;
        const itemStyle = {
            width: itemHeight,
            height: itemWidth,
            border: '1px solid black',
        };
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
                <svg class="icon" aria-hidden="true" style="width: ${itemWidth}; height: ${itemHeight}">
                    <use xlink:href="#icon-taishidiannaoblack-copy"></use>
                </svg>
                `,
            }}>
            </div>
        );
    }

    getHtml() {
        const { mapArray } = this.props;
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
                    row.push(this.getItemHtml(type, x));
                }
            }
            colEl.push(<div data-row={y} style={rowStyle} key={y}>{row}</div>);
        }

        return colEl;
    }

    handleClick(e) {
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
        if (x && y) {
            this.props.onSelectItemIdChange({ x, y });
            this.props.handleMapItemChange(x, y, { number: null }, 'map');
        }
    }

    render() {
        const el = this.getHtml();
        const wrapStyle = this.getStyle();
        return (
            <div style={wrapStyle} onClick={(e) => this.handleClick(e)} className='mapWrapper'>{el}</div>
        );
    }
}