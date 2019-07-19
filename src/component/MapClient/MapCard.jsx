import React, { PureComponent } from 'react';
import { Button, Modal, Tag } from 'antd';

export default class Card extends PureComponent {
    getCloseSvg(num, key) {
        return <span
        data-delete-key={key}
        className='ant-modal-close-x' 
        style={{
            position: 'absolute',
            right: '0',
            top: 78 + num * 56,
        }}>
            <i aria-label='icon: close' className='anticon anticon-close ant-modal-close-icon'>
                <svg viewBox='64 64 896 896' focusable='false' className='' data-icon='close' width='1em' height='1em' fill='currentColor' aria-hidden='true'>
                    <path d='M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'>
                    </path>
                </svg>
            </i>
        </span>;
    }
    showItem() {
        const { chooseItems, handleClick } = this.props;
        const closeIcon = this.getCloseSvg();
        const showList = [];
        let priceSum = 0;
        let index = 0;
        for (let key in chooseItems) {
            if (key !== 'length' && chooseItems[key]) {
                const item = chooseItems[key];
                const price = item.setHour * item.price;
                priceSum += price;
                showList.push(
                    <div key={key} onClick={(e) => handleClick('deleteItem', e.target)}>
                        <div style={{
                            marginTop: 8,
                        }}>
                            <Tag color='magenta'>机器编号: {item.number}</Tag>
                            <Tag color='green'>机器上网单价:{item.price}/h</Tag>
                            <Tag color='cyan'>预约时长: {item.setHour}h</Tag>
                        </div>
                        {`预付价格: ${price}元`}
                        {/* <Tag color='volcano'>预付价格: {item.setHour * item.price}元</Tag> */}
                        {this.getCloseSvg(index, key)}
                        {<div className='hr'></div>}
                    </div>
                );
                index ++;
            }
        }
        return [ showList, priceSum ];
    }
    render() {
        const { chooseItems, handleClick, showCard } = this.props;
        const [ arr, priceSum ] = this.showItem();
        return (
            <div className='map-client-card'>
                <Modal
                    visible={showCard}
                    title='订单信息'
                    // onOk={this.handleOk}
                    onCancel={() => handleClick('changeCardState', false)}
                    footer={[
                    <Button key='back' onClick={() => handleClick('changeCardState', false)}>
                        再看看
                    </Button>,
                    <Button key='submit' type='primary' loading={false} >
                        确认支付
                    </Button>,
                    ]}
                >
                    {arr}
                    <div style={{
                        fontSize: '16px',
                        fontWeight: '900',
                        textAlign: 'right',
                    }}>{`总预付价格：${priceSum}`}</div>
                </Modal>
            </div>
        );
    }
}