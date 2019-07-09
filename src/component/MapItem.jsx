import React, { PureComponent } from 'react';
import { Form, InputNumber, Radio, Input, Col } from 'antd';

export default class MapItem extends PureComponent {
    getPostionIcon(type) {
        const itemHeight = 30;
        const itemWidth = 30;
        const itemStyle = {
            width: itemHeight,
            height: itemWidth,
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
                return <div style={itemStyle}
                dangerouslySetInnerHTML={{
                    __html: `
                    <svg class="icon" aria-hidden="true" style="width: ${itemWidth}; height: ${itemHeight}">
                    </svg>
                    `,
                }}></div>;
            default:
                break;
        }
        return (
            <div style={itemStyle} dangerouslySetInnerHTML={{
                __html: `
                <svg class="icon" aria-hidden="true" style="width: ${itemWidth}; height: ${itemHeight}">
                    <use xlink:href="#icon-taishidiannaoblack-copy"></use>
                </svg>
                `,
            }}>
            </div>
        );
    }
    handleChange(type, value) {
        const { selectItemPostion } = this.props;
        const option = {};
        option[type] = value;
        this.props.handleMapItemChange(selectItemPostion.x, selectItemPostion.y, option);
    }
    createBtn() {
        const radioBtn = [];
        for (let i = 0; i < 5; i++) {
            radioBtn.push(
                <Radio.Button value={i} key={i}>{this.getPostionIcon(i)}</Radio.Button>
            );
        }
        return radioBtn;
    }
    render() {
        const formWrapStyle = {
            labelCol: { span: 10 },
            wrapperCol: { span: 25 },
        }
        const { selectItemPostion, mapArray } = this.props;
        let currrentSelectItemInfo = null;
        if (selectItemPostion.x && selectItemPostion.y) {
            currrentSelectItemInfo = { ...mapArray[selectItemPostion.y][selectItemPostion.x]};
        }
        if (!currrentSelectItemInfo) {
            return null;
        }
        const radioBtn = this.createBtn();

        return (
            <Form layout="horizontal" >
                <Form.Item label="选择位置填充内容" {...formWrapStyle} required={true} >
                    <Radio.Group  value={currrentSelectItemInfo.type} buttonStyle="solid" onChange={(e) => this.handleChange('type', e.target.value)}>
                        {radioBtn}
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="该机器上网价格: " {...formWrapStyle} required={true}>
                    <InputNumber  value={currrentSelectItemInfo.price} onChange={(value) => this.handleChange('price', value)}/>
                </Form.Item>
                <Form.Item label="机器区域编号: " {...formWrapStyle}>
                    <Col span={4}>
                        <Input size="large" placeholder="例如:A区" value={currrentSelectItemInfo.areaType} onChange={(e) => this.handleChange('areaType', e.target.value)}/>
                    </Col>
                </Form.Item>
                <Form.Item label="机器编号: " {...formWrapStyle} required={true}>
                    <Col span={4}>
                        <InputNumber size="large" placeholder="例如: A" value={currrentSelectItemInfo.number} onChange={(value) => this.handleChange('number', value)}/>
                    </Col>
                </Form.Item>
            </Form>
        );
    }
}