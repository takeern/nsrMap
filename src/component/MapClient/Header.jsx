import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
    render() {
        const { handleClick, showType } = this.props;
        const modelText = showType === 'icon' ? '展示编号' : '展示图标';
        return(
            <div className='map-client-header' style={{
                position: 'fixed',
                width: '100vw',
                top: 0,
                boxShadow: '0 2px 8px #f0f1f2',
                zIndex: 100,
                background: 'white',
                paddingTop: '8px',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div style={{
                        fontSize: '20px',
                        marginLeft: '30px',
                    }}>钓得一逼网咖</div>
                    <div style={{
                        display: 'flex',
                    }}>
                        <div 
                        onClick={() => handleClick('changeShowType', showType === 'icon' ? 'number' : 'icon')}
                        className='btn-border' 
                        style={{ 
                            width: 70,
                            color: 'white',
                            borderColor: 'rgb(255, 85, 0)',
                            backgroundColor: 'rgb(255, 85, 0)',
                            opacity: '0.85',
                            lineHeight: '30px',
                            height: '30px',
                        }}>{modelText}</div>
                        <div 
                        style={{
                            margin: '0 10px',
                        }}
                        onClick={() => handleClick('openMap')}
                        dangerouslySetInnerHTML={{
                            __html: `
                            <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px">
                                <use xlink:href="#icon-ziyuanldpi"></use>
                            </svg>
                            `,
                        }}></div>
                    </div>
                </div>
                <div className='hr'></div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <div dangerouslySetInnerHTML={{
                            __html: `
                            <svg class="icon" aria-hidden="true" style="width: 25px; height: 25px">
                                <use xlink:href="#icon-computer-red"></use>
                            </svg>
                            `,
                        }}></div>
                        <div>已预订</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <div dangerouslySetInnerHTML={{
                            __html: `
                            <svg class="icon" aria-hidden="true" style="width: 25px; height: 25px">
                                <use xlink:href="#icon-computer-gray-copy"></use>
                            </svg>
                            `,
                        }}></div>
                        <div>可选</div>
                    </div>
                </div>
            </div>
        );
    }
}