// 网站地址 blog.bigqianduan.top

let getIp = () => {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

module.exports = {
    // 基础配置
    base: '/', // 部署站点的基础路径
    locales: { // 默认标题
        '/': {
            title: '前端一锅煮',
            description: '这是一个基于 VuePress 构建的用于前端学习、笔记记录、趣文推荐的个人博客网站',
        }
    },
    head: [ // 添加链接 pwa 的 manifest 如果需要
        ['link', { rel: 'icon', href: '/logo.jpg' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    host: getIp(),
    port: 3009,
    dest: '.vuepress/dist', // 指定 vuepress build 的输出目录
    ga: 'UA-109714208-2', // 提供一个 Google Analytics ID 来使 GA 生效
    serviceWorker: false, // pwa
    
    // 主题配置
    // theme: 'undefined',
    themeConfig: { 
        repo: 'https://github.com/cjm0/blog',
        editLinks: true,
        repoLabel: 'GitHub',
        docsDir: 'src', // 假如文档不是放在仓库的根目录下
        locales: {
            '/': {
                docsBranch: 'master', // 假如文档放在一个特定的分支下
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
                nav: [ // 顶部导航栏
                    {
                        text: '首页', 
                        link: '/'
                    },
                    {
                        text: '分类', 
                        items: [
                            {text: 'Hot', link: '/page/hot/'},
                            {text: '教程', link: '/page/a/'},
                            {text: '资源', link: '/page/b/'},
                            {text: '疑难解析', link: '/page/c/'},
                            {text: '趣闻杂记', link: '/page/d/'},
                        ]
                    },
                    {
                        text: '全部文章', 
                        link: '/page/list/'
                    },
                    {
                        text: 'VuePress笔记', 
                        link: '/page/vuepress/'
                    },
                    {
                        text: '关于', 
                        link: '/page/about/'
                    },
                ],
                sidebar: { // 文档侧边栏 跳转到不同页面
                    '/page/vuepress/':  genSidebarConfig('VuePress笔记'),
                    '/page/hot/':  sidebarHot('Hot'),
                    '/page/a/':  sidebarA('教程'),
                    '/page/b/':  sidebarB('资源'),
                    '/page/c/':  sidebarC('疑难解析'),
                    '/page/d/':  sidebarD('趣闻杂记')
                }
            }
        }
    },
}

function genSidebarConfig (title) {
    return [
        {
            title,
            collapsable: false, // 让一个组永远都是展开状态
            children: [
                '',
                'api',
                'config',
                'theme'
           ]
        }
    ]
}

function sidebarHot (title) { // 推荐
    return [
        {
            title,
            collapsable: false, // 让一个组永远都是展开状态
            children: [
                '',
                'source_link',
                'emoji',
           ]
        }
    ]
}

function sidebarA (title) { // 教程
    return [
        {
            title,
            collapsable: false, // 让一个组永远都是展开状态
            children: [
                '',
                'sh',
           ]
        }
    ]
}

function sidebarB (title) { // 资源
    return [
        {
            title,
            collapsable: false, // 让一个组永远都是展开状态
            children: [
                '',
                'source_link',
                'vue_ui_contrast',
                'emoji',
           ]
        }
    ]
}

function sidebarC (title) { // 疑难解析
    return [
        {
            title,
            collapsable: false, // 让一个组永远都是展开状态
            children: [
                '',
                'css_layout_two',
           ]
        }
    ]
}

function sidebarD (title) { // 趣闻杂记
    return [
        {
            title,
            collapsable: false, // 让一个组永远都是展开状态
            children: [
                '',
           ]
        }
    ]
}


