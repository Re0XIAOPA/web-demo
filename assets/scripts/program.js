// 定义相关信息
const loverName = "唐小姐";
const message = "我爱她！超级超级爱她！人生目标搞钱搞钱，去把她娶回家，她当老大我当小弟！嘿嘿 \n\n\t2024.8.15\n\t我的宝宝! 女神大人！😭";

// 构建输出信息
const outputMessage = `\n\t我们的恋爱开始于: 2023年10月04日 \n\n\t我的恋人 ${loverName} \n\t她是一个美丽的娃娃\n\n\t${message}\n\n`;

// 输出到控制台
console.log(outputMessage);

// 在createCards函数之前定义platformIcons对象
const platformIcons = {
    windows: `<svg viewBox="0 0 24 24"><path fill="#7c8aff" d="M0,3.5L9.9,2.1L9.9,11.2L0,11.2L0,3.5zM9.9,12.8L9.9,21.9L0,20.5L0,12.8L9.9,12.8zM11.1,1.9L24,0L24,11.1L11.1,11.1L11.1,1.9zM24,12.9L24,24L11.1,22.1L11.1,12.9L24,12.9z"/></svg>`,
    android: `<svg viewBox="0 0 24 24">
        <path fill="#7c8aff" d="M6,18c0,0.55,0.45,1,1,1h1v3.5C8,23.33,8.67,24,9.5,24s1.5-0.67,1.5-1.5V19h2v3.5c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5V19h1c0.55,0,1-0.45,1-1V8H6V18z M3.5,8C2.67,8,2,8.67,2,9.5v7c0,0.83,0.67,1.5,1.5,1.5S5,17.33,5,16.5v-7 C5,8.67,4.33,8,3.5,8z M20.5,8C19.67,8,19,8.67,19,9.5v7c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5v-7C22,8.67,21.33,8,20.5,8z M15.53,2.16l1.3-1.3c0.2-0.2,0.2-0.51,0-0.71c-0.2-0.2-0.51-0.2-0.71,0l-1.48,1.48C13.85,1.23,12.95,1,12,1 c-0.96,0-1.86,0.23-2.66,0.63L7.85,0.15c-0.2-0.2-0.51-0.2-0.71,0c-0.2,0.2-0.2,0.51,0,0.71l1.31,1.31C6.97,3.26,6,5.01,6,7h12 C18,5.01,17.03,3.25,15.53,2.16z M10,5H9V4h1V5z M15,5h-1V4h1V5z"/>
    </svg>`,
    ios: `<svg viewBox="0 0 24 24"><path fill="#7c8aff" d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"/></svg>`,
    mac: `<svg viewBox="0 0 24 24">
        <path fill="#7c8aff" d="M21.5,2h-19C1.67,2,1,2.67,1,3.5v13C1,17.33,1.67,18,2.5,18H10v2H8v2h8v-2h-2v-2h7.5c0.83,0,1.5-0.67,1.5-1.5v-13 C23,2.67,22.33,2,21.5,2z M21,16H3V4h18V16z"/>
    </svg>`,
    linux: `<svg viewBox="0 0 24 24"><path fill="#7c8aff" d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022z"/></svg>`
};

// 创建卡片函数
function createCards() {
    const tables = document.querySelectorAll('table');

    tables.forEach(table => {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        const isToolsSection = table.closest('.tools-section:first-child');
        const rows = table.querySelectorAll('tbody tr');

        rows.forEach(row => {
            if (!row.querySelector('.tool-name')?.textContent.trim()) return;

            const card = document.createElement('div');
            card.className = 'card';

            // 获取基础数据
            const name = row.querySelector('.tool-name')?.textContent.trim() || '';
            const link = row.querySelector('a[href^="http"]')?.href || '#';

            // 创建图标元素
            const iconElement = document.createElement('div');
            iconElement.className = 'card-icon';

            const imgElement = document.createElement('img');
            const existingImg = row.querySelector('img');
            if (existingImg && existingImg.src) {
                imgElement.src = existingImg.src;
                // 预加载图片以防闪烁
                const preloadImg = new Image();
                preloadImg.src = existingImg.src;
            }
            imgElement.alt = name;
            imgElement.onerror = () => {
                imgElement.src = 'assets/images/tools/default.png';
            };
            iconElement.appendChild(imgElement);

            // 创建卡片内容
            card.appendChild(iconElement);

            const titleDiv = document.createElement('div');
            titleDiv.className = 'card-title';
            titleDiv.textContent = name;
            card.appendChild(titleDiv);

            // 如果是工具客户端区域，添加平台图标
            if (isToolsSection) {
                const platformIconsDiv = document.createElement('div');
                platformIconsDiv.className = 'platform-icons';

                // 获取支持的平台（这里需要根据实际情况判断）
                const supportedPlatforms = getSupportedPlatforms(name.toLowerCase());

                // 只显示支持的平台图标
                supportedPlatforms.forEach(platform => {
                    const iconWrapper = document.createElement('div');
                    iconWrapper.className = 'platform-icon-wrapper';
                    iconWrapper.innerHTML = platformIcons[platform];
                    iconWrapper.title = getPlatformName(platform);
                    platformIconsDiv.appendChild(iconWrapper);
                });

                card.appendChild(platformIconsDiv);
                // 保存支持的平台信息到卡片数据中
                card.dataset.platforms = supportedPlatforms.join(',');
            }

            // 添加点击事件
            if (link && link !== '#') {
                card.classList.add('clickable');
                addCardClickHandler(card, link);
            }

            gridContainer.appendChild(card);
        });

        // 替换表格
        const container = table.parentNode;
        container.insertBefore(gridContainer, table);
        table.style.display = 'none';
    });
}

// 修改平台名称映射，添加 GitHub
const platformNames = {
    windows: 'Windows',
    android: 'Android',
    ios: 'iOS',
    mac: 'macOS',
    linux: 'Linux',
    github: 'GitHub'
};

// 导入下载链接配置
import { downloadLinks } from './config.js';

// 修改获取支持平台的函数
function getSupportedPlatforms(toolName) {
    const links = downloadLinks[toolName];
    if (!links) return [];
    // 过滤掉 github，因为它是通用的
    return Object.keys(links).filter(platform => platform !== 'github');
}

// 在文件顶部添加导入
import { initAirportCards } from './airport-modal.js';
import { initSoftwareCards } from './software-cards.js';

// 统一的DOMContentLoaded事件处理
document.addEventListener('DOMContentLoaded', function () {
    // 导航栏相关
    const toggleButton = document.getElementById('toggleButton');
    const navLinks = document.getElementById('navLinks');

    // 切换菜单示/隐藏
    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 点击导航链接时关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleButton.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 点击页面其他地方时关闭菜单
    document.addEventListener('click', (event) => {
        if (!toggleButton.contains(event.target) && !navLinks.contains(event.target)) {
            toggleButton.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // 移动端处理
    if (window.innerWidth <= 768) {
        navLinks.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                toggleButton.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // 滚动时收起菜单
    window.addEventListener('scroll', () => {
        if (navLinks.classList.contains('active')) {
            toggleButton.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // 处理显示切换
    function handleDisplayToggle() {
        const isMobile = window.innerWidth <= 930;
        document.querySelectorAll('table').forEach(table => {
            table.style.display = isMobile ? 'none' : 'table';
        });
        document.querySelectorAll('.mobile-grid').forEach(grid => {
            grid.style.display = isMobile ? 'grid' : 'none';
        });
    }

    // 初始化显示
    handleDisplayToggle();

    // 监听窗口大小变化
    window.addEventListener('resize', handleDisplayToggle);

    // 添加提示窗处理代码
    const dailyNotice = document.getElementById('dailyNotice');
    const acknowledgeBtn = document.querySelector('.acknowledge');
    const cancelBtn = document.querySelector('.cancel');
    const canceledMessage = document.getElementById('canceledMessage');
    const warningMessage = document.getElementById('warningMessage');
    const mask = document.getElementById('mask');

    let cancelCount = 0;
    const maxCancelCount = 5;

    // 检查是否��经显示过提示
    if (!localStorage.getItem('noticeShown')) {
        dailyNotice.style.display = 'flex';
        mask.style.display = 'block';
    }

    acknowledgeBtn.addEventListener('click', function () {
        dailyNotice.style.display = 'none';
        mask.style.display = 'none';
        localStorage.setItem('noticeShown', 'true');
    });

    cancelBtn.addEventListener('click', function () {
        cancelCount++;

        if (cancelCount >= maxCancelCount) {
            dailyNotice.style.display = 'none';
            canceledMessage.style.display = 'block';
            mask.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            warningMessage.style.display = 'block';
            setTimeout(() => {
                warningMessage.style.display = 'none';
            }, 2000);
        }
    });

    // 每24小时重置提示显示状态
    const resetNoticeStatus = () => {
        const lastShown = localStorage.getItem('lastShownTime');
        const now = new Date().getTime();

        if (lastShown && (now - parseInt(lastShown)) >= 24 * 60 * 60 * 1000) {
            localStorage.removeItem('noticeShown');
        }

        if (!lastShown) {
            localStorage.setItem('lastShownTime', now.toString());
        }
    };

    resetNoticeStatus();

    // 修改导航链接点击事件
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            const targetElement = document.querySelector(target);

            // 关闭移动端菜单
            toggleButton.classList.remove('active');
            navLinks.classList.remove('active');

            if (targetElement) {
                // 获取header的高度
                const headerHeight = document.querySelector('header').offsetHeight;
                // 计算目标位置，考虑header高度
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                // 执行平滑滚动
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 创建卡片后初始化机场卡片点击事件
    createCards();
    initAirportCards();
    initSoftwareCards();
});

function getPlatformName(platform) {
    return platformNames[platform] || platform;
}

// 修改下载弹窗处理函数
function createDownloadModal(toolName, downloadUrl) {
    const existingModal = document.querySelector('.download-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.className = 'download-modal';

    // 获取工具的下载链接
    const links = downloadLinks[toolName.toLowerCase()];
    if (!links) return;

    const content = `
        <div class="download-content">
            <button class="close-modal">×</button>
            <div class="download-header">
                <h3>${toolName}</h3>
                <p>选择下载平台</p>
            </div>
            <div class="download-grid">
                ${['windows', 'mac', 'linux', 'android', 'ios', 'github'].map(platform => `
                    <div class="download-item ${!links[platform] ? 'disabled' : ''}" 
                         data-platform="${platform}"
                         data-url="${links[platform] || ''}">
                        <div class="download-icon">
                            ${platform === 'github' ? githubIcon : platformIcons[platform]}
                        </div>
                        <div class="download-name">${getPlatformName(platform)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    modal.innerHTML = content;
    document.body.appendChild(modal);

    setTimeout(() => modal.classList.add('active'), 10);

    // 关闭按钮事件
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });

    // 点击外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });

    // 修改下载项点击事件
    modal.querySelectorAll('.download-item').forEach(item => {
        if (!item.classList.contains('disabled')) {
            item.addEventListener('click', () => {
                const url = item.dataset.url;
                if (url) {
                    window.open(url, '_blank');
                }
            });
        }
    });
}

// 修改卡片点击事件处理
function addCardClickHandler(card, link) {
    card.addEventListener('click', () => {
        const toolName = card.querySelector('.card-title').textContent;
        createDownloadModal(toolName, link);
    });
}

// 加 GitHub 图标
const githubIcon = `<svg viewBox="0 0 24 24">
    <path fill="#7c8aff" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
</svg>`;