// 机场配置数据
const airportDetails = {
    '顶级机场': {
        price: '¥15.60/年 200G/月',
        description: '稳定性好，速度快，解锁流媒体',
        features: [
            {
                title: '全球节点优质覆盖',
                description: '覆盖全球多个区域，智能优选最佳线路',
                icon: `<svg viewBox="0 0 24 24">
                    <path fill="#7c8aff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>`
            },
            {
                title: '稳定流媒体解锁',
                description: '解锁Netflix、Disney+等主流流媒体服务',
                icon: `<svg viewBox="0 0 24 24">
                    <path fill="#7c8aff" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9 8h2v8H9zm4 0h2v8h-2z"/>
                </svg>`
            },
            {
                title: '无限制客户端',
                description: '支持多设备同时在线，不限制客户端数量',
                icon: `<svg viewBox="0 0 24 24">
                    <path fill="#7c8aff" d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>
                </svg>`
            }
        ],
        link: 'https://xn--mes358a9urctx.com/#/register?code=fY6Y8I3k',
        tags: ['稳定', '高速', '性价比'] // 新增标签属性
    }
    // 可以添加更多机场配置...
};

// 导出配置
export { airportDetails }; 