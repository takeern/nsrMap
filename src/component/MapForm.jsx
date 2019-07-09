import React, { PureComponent } from 'react';
import { Form, InputNumber, Radio, Input, Col, Select } from 'antd';

class MapForm extends PureComponent {

    handleChange(type, value) {
        this.props.handleSetChange(type, value);
    }

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
    getSelectOption() {
        const { histroyList } = this.props;
        const arr = [];
        let defaultValue = null;
        for (let key in histroyList) {
            if (!defaultValue) {
                defaultValue = key;
            }
            arr.push(<Select.Option value={key} key={key}>{`${key}------${histroyList[key]}`}</Select.Option>)
        }
        return [ defaultValue, arr ];
    }

    render() {
        const { row, column, choseItemType, moduleType } = this.props;
        const formWrapStyle = {
            labelCol: { span: 10 },
            wrapperCol: { span: 25 },
        }
        const radioBtn = [];
        for (let i = 0; i < 5; i++) {
            radioBtn.push(
                <Radio.Button value={i} key={i}>{this.getPostionIcon(i)}</Radio.Button>
            );
        }
        const [ defaultValue, options ] = this.getSelectOption();
    
        return (
            <div>
                <Form layout="horizontal" >
                    {defaultValue && 
                        (<Form.Item label="选择历史map: " {...formWrapStyle} required={true}>
                            <Select style={{ width: 300 }} onChange={(value) => this.handleChange('histroyMap', value)}>
                                {options}
                            </Select >
                        </Form.Item>)
                    }
                    <Form.Item label="行: " {...formWrapStyle} required={true}>
                        <InputNumber min={10} max={50} defaultValue={row} onChange={(value) => this.handleChange('row', value)}/>
                    </Form.Item>
                    <Form.Item label="列: " {...formWrapStyle} required={true}>
                        <InputNumber min={10} max={50} defaultValue={column} onChange={(value) => this.handleChange('column', value)}/>
                    </Form.Item>
                    <Form.Item label="模式" {...formWrapStyle} required={true}>
                        <Radio.Group defaultValue={moduleType} buttonStyle="solid" onChange={(e) => this.handleChange('moduleType', e.target.value)}>
                            <Radio.Button value={0}>编辑</Radio.Button>
                            <Radio.Button value={1}>查看</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="选择位置填充内容" {...formWrapStyle} required={true}>
                        <Radio.Group defaultValue={choseItemType.type} buttonStyle="solid" onChange={(e) => this.handleChange('type', e.target.value)}>
                            {radioBtn}
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="上网价格: " {...formWrapStyle} required={true}>
                        <InputNumber min={0} max={50} defaultValue={choseItemType.price} onChange={(value) => this.handleChange('price', value)}/>
                    </Form.Item>
                    <Form.Item label="机器区域编号: " {...formWrapStyle}>
                        <Col span={2}>
                            <Input size="large" placeholder="例如: A区" onChange={(e) => this.handleChange('areaType', e.target.value)}/>
                        </Col>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

// const FormWrapper = Form.create({ name: 'map' })(MapForm);

export default MapForm;