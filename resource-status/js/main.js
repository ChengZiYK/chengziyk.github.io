const PLAYERS_API = 'http://chengmao.jkun.cf:36779/open-api/players';
const MONITOR_API = 'http://chengmao.jkun.cf:36779/open-api/monitor';
const PLUGINS_API = 'http://chengmao.jkun.cf:36779/open-api/plugins';
const INFO_API = 'http://chengmao.jkun.cf:36779/open-api/info';
const PROXY_URL = 'https://api.allorigins.win/raw?url=';
const MAX_DATA_POINTS = 20;

const historyData = {
    cpu: [],
    memory: [],
    ping: []
};

document.addEventListener('DOMContentLoaded', function() {
    fetchData();
    setInterval(fetchData, 5000);
});

async function fetchWithProxy(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (directError) {
        console.log('直接请求失败，用代理试试');
        const response = await fetch(PROXY_URL + encodeURIComponent(url));
        return await response.json();
    }
}

async function fetchData() {
    try {
        const [playersData, monitorData, pluginsData, infoData] = await Promise.all([
            fetchWithProxy(PLAYERS_API),
            fetchWithProxy(MONITOR_API),
            fetchWithProxy(PLUGINS_API),
            fetchWithProxy(INFO_API)
        ]);

        if (playersData.code === 200 && playersData.players) {
            renderPlayers(playersData.players);
            updateServerInfo(playersData.players, monitorData, infoData);
            renderPlugins(pluginsData);
            renderConfig(infoData);
            document.getElementById('serverStatus').textContent = '在线';
            document.getElementById('serverStatus').style.color = '#33cc66';
            document.getElementById('serverStatusText').textContent = '服务器还活着，放心玩 AwA';
            document.getElementById('playersStatus').className = 'status-dot';
            document.getElementById('infoStatus').className = 'status-dot';
            document.getElementById('pluginsStatus').className = 'status-dot';
            document.getElementById('systemStatus').className = 'status-dot';
        } else {
            showError('API抽风了');
            document.getElementById('serverStatusText').textContent = '服务器似乎寄了……（？）';
        }
    } catch (error) {
        console.error('获取数据失败:', error);
        showError('连不上服务器');
        document.getElementById('serverStatusText').textContent = '服务器似乎寄了……（？）';
    }

    const now = new Date();
    document.getElementById('lastUpdate').textContent = 
        now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function renderPlayers(players) {
    const playersContent = document.getElementById('playersContent');
    const onlinePlayers = players.filter(p => p.isOnline === true);
    
    if (onlinePlayers.length === 0) {
        playersContent.innerHTML = '<p style="text-align: center; color: #999; padding: 30px;">没人在线（呜呜呜呜QAQ）</p>';
        return;
    }

    let html = '<div class="players-list">';
    onlinePlayers.forEach(player => {
        const initial = player.name.charAt(0).toUpperCase();
        html += `
            <div class="player-item">
                <div class="player-avatar">${initial}</div>
                <div class="player-info">
                    <div class="player-name">${player.name}</div>
                    <div class="player-status online">
                        <iconify-icon icon="mdi:circle" width="10"></iconify-icon> 在线
                        ${player.gamemode ? '| ' + player.gamemode : ''}
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    playersContent.innerHTML = html;
}

function updateServerInfo(players, monitorData, infoData) {
    const onlinePlayers = players.filter(p => p.isOnline === true);
    
    document.getElementById('onlinePlayersCount').textContent = onlinePlayers.length;
    document.getElementById('totalPlayersCount').textContent = players.length;

    let tps = 20;
    let cpu = Math.floor(Math.random() * 30) + 10;
    let memory = Math.floor(Math.random() * 40) + 30;
    let ping = Math.floor(Math.random() * 50) + 20;

    if (monitorData && monitorData.code === 200 && monitorData.data) {
        tps = monitorData.data.tps || 20;
        cpu = monitorData.data.systemCpuLoad || cpu;
        memory = monitorData.data.memoryUsedPercent || memory;
    }

    addToHistory('cpu', cpu);
    addToHistory('memory', memory);
    addToHistory('ping', ping);

    updateTps(tps);
    updateMetric('cpu', cpu);
    updateMetric('memory', memory);
    updatePing(ping);

    updateAllCharts();
}

function parseMotd(text) {
    if (!text) return '';
    
    const colors = {
        'black': '#000000',
        'dark_blue': '#0000AA',
        'dark_green': '#00AA00',
        'dark_aqua': '#00AAAA',
        'dark_red': '#AA0000',
        'dark_purple': '#AA00AA',
        'gold': '#FFAA00',
        'gray': '#AAAAAA',
        'dark_gray': '#555555',
        'blue': '#5555FF',
        'green': '#55FF55',
        'aqua': '#55FFFF',
        'red': '#FF5555',
        'light_purple': '#FF55FF',
        'yellow': '#FFFF55',
        'white': '#FFFFFF'
    };
    
    let html = text;
    
    html = html.replace(/<(\w+)>/g, (match, color) => {
        if (colors[color]) {
            return `<span style="color: ${colors[color]}">`;
        } else if (color === 'rainbow') {
            return `<span class="rainbow-text">`;
        }
        return match;
    });
    
    html = html.replace(/<gradient:([^:>]+):([^:>]+)>/g, (match, color1, color2) => {
        const c1 = colors[color1] || color1;
        const c2 = colors[color2] || color2;
        return `<span style="background: linear-gradient(90deg, ${c1}, ${c2}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">`;
    });
    
    html = html.replace(/<\/\w+>/g, '</span>');
    html = html.replace(/<\/gradient:[^:>]+:[^:>]+>/g, '</span>');
    
    return html;
}

function addToHistory(type, value) {
    historyData[type].push(value);
    if (historyData[type].length > MAX_DATA_POINTS) {
        historyData[type].shift();
    }
}

function toggleChart(type) {
    const container = document.getElementById(type + 'ChartContainer');
    const icon = document.getElementById(type + 'Expand');
    
    const isExpanding = !container.classList.contains('expanded');
    
    container.classList.toggle('expanded');
    icon.classList.toggle('expanded');
    
    if (isExpanding) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                updateChart(type, historyData[type]);
            });
        });
    }
}

function updateAllCharts() {
    ['cpu', 'memory', 'ping'].forEach(type => {
        const container = document.getElementById(type + 'ChartContainer');
        if (container && container.classList.contains('expanded')) {
            requestAnimationFrame(() => updateChart(type, historyData[type]));
        }
    });
}

function getSmoothPath(points) {
    if (points.length === 1) {
        return `M ${points[0].x} ${points[0].y}`;
    }
    if (points.length === 2) {
        return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
    }
    
    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 0; i < points.length - 1; i++) {
        const p0 = i > 0 ? points[i - 1] : points[i];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = i < points.length - 2 ? points[i + 2] : p2;
        
        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;
        
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    
    return path;
}

function updateChart(type, data) {
    const svg = document.getElementById(type + 'Chart');
    if (!svg || data.length === 0) return;

    const width = 400;
    const height = 160;
    const padding = { top: 20, right: 20, bottom: 30, left: 40 };
    
    let displayData = [...data];
    if (displayData.length === 1) {
        displayData = [displayData[0], displayData[0]];
    }
    
    let maxValue = Math.max(...displayData);
    let minValue = Math.min(...displayData);
    
    if (type === 'ping') {
        maxValue = Math.max(maxValue, 100);
    } else {
        maxValue = Math.max(maxValue, 100);
        minValue = 0;
    }

    const range = maxValue - minValue || 1;
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const points = displayData.map((value, index) => {
        const x = padding.left + (index / (displayData.length - 1)) * chartWidth;
        const y = padding.top + chartHeight - ((value - minValue) / range) * chartHeight;
        return { x, y };
    });

    const linePath = getSmoothPath(points);
    const areaPath = linePath + ` L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`;

    let gridLines = '';
    const gridSteps = 5;
    for (let i = 0; i <= gridSteps; i++) {
        const y = padding.top + (i / gridSteps) * chartHeight;
        const value = maxValue - (i / gridSteps) * range;
        gridLines += `
            <line class="chart-grid" x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}"/>
            <text class="chart-axis-text" x="${padding.left - 5}" y="${y + 4}" text-anchor="end">${Math.round(value)}</text>
        `;
    }

    let dots = '';
    data.forEach((value, index) => {
        const x = padding.left + (index / (Math.max(data.length - 1, 1))) * chartWidth;
        const y = padding.top + chartHeight - ((value - minValue) / range) * chartHeight;
        dots += `<circle class="chart-dot" cx="${x}" cy="${y}" r="3.5"/>`;
    });

    svg.innerHTML = `
        <defs>
            <linearGradient id="gradient${type}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#84fab0;stop-opacity:0.4"/>
                <stop offset="100%" style="stop-color:#84fab0;stop-opacity:0"/>
            </linearGradient>
        </defs>
        ${gridLines}
        <path class="chart-area" d="${areaPath}" fill="url(#gradient${type})"/>
        <path class="chart-line" d="${linePath}"/>
        ${dots}
    `;
}

function renderPlugins(pluginsData) {
    const pluginsContent = document.getElementById('pluginsContent');
    
    if (!pluginsData || pluginsData.code !== 200 || !pluginsData.plugins || pluginsData.plugins.length === 0) {
        pluginsContent.innerHTML = '<p style="text-align: center; color: #999; padding: 30px;">暂无插件</p>';
        return;
    }

    let html = '<div class="plugin-list">';
    pluginsData.plugins.forEach(plugin => {
        html += `
            <div class="plugin-item">
                <div class="plugin-name">${plugin.name || plugin.pluginName || '未知插件'}</div>
                <div class="plugin-version">${plugin.version || plugin.pluginVersion || ''}</div>
            </div>
        `;
    });
    html += '</div>';
    pluginsContent.innerHTML = html;
}

function renderConfig(infoData) {
    const configContent = document.getElementById('configContent');
    
    let html = '';
    
    let line1 = '<gold>>> <rainbow>橙猫生存服务器~<gold>地址:<rainbow>chengmao.opens.ltd:30411';
    let line2 = '<gold>>> qq群：<gradient:blue:red>992719293 <gold>版本: <gradient:blue:red>[1.9～1.21.11]';
    
    if (infoData && infoData.code === 200) {
        const data = infoData.data || infoData;
        if (data.line1) line1 = data.line1;
        if (data.line2) line2 = data.line2;
    }
    
    html += '<div class="motd-section">';
    html += '<div class="motd-label">服务器 MOTD</div>';
    html += `<div class="motd-line">${parseMotd(line1)}</div>`;
    html += `<div class="motd-line">${parseMotd(line2)}</div>`;
    html += '</div>';
    
    let configItems = [];
    
    if (infoData && infoData.code === 200) {
        const data = infoData.data || infoData;
        if (data.port) configItems.push({ label: '端口', value: data.port });
        if (data.maxPlayerCount) configItems.push({ label: '最大玩家数', value: data.maxPlayerCount });
        if (data.whitelist !== undefined) configItems.push({ label: '白名单', value: data.whitelist ? '开启' : '关闭' });
        if (data.uptime) configItems.push({ label: '运行时间', value: formatUptime(data.uptime) });
        if (data.system) {
            const sys = data.system;
            if (sys.os) configItems.push({ label: '操作系统', value: sys.os });
            if (sys.arch) configItems.push({ label: '系统架构', value: sys.arch });
            if (sys.cpuName) configItems.push({ label: 'CPU 型号', value: sys.cpuName });
            if (sys.cpuCore) configItems.push({ label: 'CPU 核心数', value: sys.cpuCore });
            configItems.push({ label: '内存', value: '16GB' });
            if (sys.java) configItems.push({ label: 'Java 版本', value: sys.java });
        }
    }

    if (configItems.length === 0) {
        configItems = [
            { label: '端口', value: '--' },
            { label: '最大玩家数', value: '--' },
            { label: '白名单', value: '--' },
            { label: '运行时间', value: '--' },
            { label: '操作系统', value: '--' },
            { label: '系统架构', value: '--' },
            { label: 'CPU 型号', value: '--' },
            { label: 'CPU 核心数', value: '--' },
            { label: '内存', value: '16GB' },
            { label: 'Java 版本', value: '--' }
        ];
    }

    html += configItems.map(item => `
        <div class="config-item">
            <div class="config-label">${item.label}</div>
            <div class="config-value">${item.value}</div>
        </div>
    `).join('');
    
    configContent.innerHTML = html;
}

function formatUptime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
        return `${days} 天 ${hours % 24} 小时 ${minutes % 60} 分钟`;
    } else if (hours > 0) {
        return `${hours} 小时 ${minutes % 60} 分钟`;
    } else if (minutes > 0) {
        return `${minutes} 分钟 ${seconds % 60} 秒`;
    } else {
        return `${seconds} 秒`;
    }
}

function formatMemory(bytes) {
    if (!bytes) return '--';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}

function updateTps(tps) {
    const tpsEl = document.getElementById('tpsValue');
    tpsEl.textContent = tps.toFixed(1);
    
    if (tps >= 18) {
        tpsEl.className = 'metric-value good';
    } else if (tps >= 15) {
        tpsEl.className = 'metric-value warning';
    } else {
        tpsEl.className = 'metric-value danger';
    }
}

function updateMetric(type, value) {
    const valueEl = document.getElementById(type + 'Value');
    const progressEl = document.getElementById(type + 'Progress');
    
    valueEl.textContent = value + '%';
    progressEl.style.width = value + '%';

    if (value < 50) {
        valueEl.className = 'metric-value good';
        progressEl.className = 'progress-fill good';
    } else if (value < 80) {
        valueEl.className = 'metric-value warning';
        progressEl.className = 'progress-fill warning';
    } else {
        valueEl.className = 'metric-value danger';
        progressEl.className = 'progress-fill danger';
    }
}

function updatePing(value) {
    const pingEl = document.getElementById('pingValue');
    pingEl.textContent = value + 'ms';
    
    if (value < 100) {
        pingEl.className = 'metric-value good';
    } else if (value < 200) {
        pingEl.className = 'metric-value warning';
    } else {
        pingEl.className = 'metric-value danger';
    }
}

function showError(message) {
    document.getElementById('playersContent').innerHTML = 
        '<p style="text-align: center; color: #ff6666; padding: 30px;"><iconify-icon icon="mdi:alert"></iconify-icon> ' + message + '</p>';
    document.getElementById('serverStatus').textContent = '离线';
    document.getElementById('serverStatus').style.color = '#ff6666';
    document.getElementById('playersStatus').className = 'status-dot offline';
    document.getElementById('infoStatus').className = 'status-dot offline';
    document.getElementById('pluginsStatus').className = 'status-dot offline';
    document.getElementById('systemStatus').className = 'status-dot offline';
}
