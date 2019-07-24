import React, { PureComponent } from 'react';
import { Tag, Slider } from 'antd';

export default class Set extends PureComponent {
    getShowItem(item) {
        const { setHour, handleClick } = this.props;
        if(item) {
            return (
            <div>
                <div style={{
                    display: 'flex',
                    height: '36px',
                    alignItems: 'center',
                    paddingLeft: 50,
                }}>
                    <Tag color="cyan">预约时长</Tag>
                    <span>{setHour} /h</span>
                    <div style={{
                        width: '50%',
                        marginLeft: 30,
                    }}>
                        <Slider defaultValue={setHour} max={12} min={1} onChange={value => handleClick('setHour', value)}/>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '90%',
                    height: '40px',
                    lineHeight: '40px',
                }}>
                    <div>
                        <Tag color="green">机器价格</Tag>
                        <span>{item.price}</span>(/h)
                    </div>
                    <div>
                        <Tag color="magenta">机器编号</Tag>
                        <span>{item.number}</span>
                    </div>
                </div>
            </div>
            );
        }
        return null;
    }
    render() {
        const { chooseItem, shouldShow, handleClick } = this.props;
        const showList = this.getShowItem(chooseItem);
        return(
            <div style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                paddingTop: chooseItem ? 15 : 0,
                background: 'white',
                boxShadow: 'rgb(240, 241, 242) 0px -2px 8px',
                touchAction: 'none',
            }}>
                {chooseItem && showList}
                <div style={{
                    height: '50px',
                    lineHeight: '50px',
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: '#ffab11',
                    opacity: shouldShow ? 1 : 0.6,
                    fontSize: '18px',
                }}
                onClick={() => handleClick('changeCardState', true)}
                >确认订单</div>
            </div>
        );
    }
}