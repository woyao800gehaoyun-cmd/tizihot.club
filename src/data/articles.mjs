import fs from 'node:fs';
import { PILLAR_A } from './pillar-a.mjs';
import { PILLAR_B } from './pillar-b.mjs';

const AUTO_ARTICLES = JSON.parse(
  fs.readFileSync(new URL('./auto-articles.json', import.meta.url), 'utf8')
);

const BASE_ARTICLES = [
  {
    slug: '2026-guangnianti-vpn-review',
    title: '实测三个月：光年梯机场到底稳不稳？晚高峰4K、ChatGPT与游戏延迟全记录',
    shortTitle: '光年梯机场 90 天实测：晚高峰 4K 与 AI 表现',
    category: '深度评测',
    date: '2026-11-22',
    readTime: '7 分钟',
    keywords: ['光年梯机场', '光年梯VPN', '光年梯加速器', '光年梯IP', 'IEPL专线评测'],
    summary:
      '自费连买三个月月付套餐，在电信 500M、联通 300M 和移动校园网环境下，连续记录光年梯在 20:30-23:00 晚高峰的真实速度、Claude/ChatGPT 风控情况和游戏丢包率。',
    content: `
      <p>说实话，测了这么多年机场，我最烦看到那种“一上来就吹秒开 8K、永不跑路”的软文。真用过的人都知道，白天下午两点测速跑 1000Mbps 根本不算本事——<strong>晚上八点半到十一点，大家下班回家刷剧打游戏的时候，还能稳稳不卡顿，才叫真本事。</strong></p>

      <p>今年八月底，群里好几个做独立开发的朋友都在聊<strong>光年梯（很多人也直接叫它光年梯机场或者光年梯VPN）</strong>。我当时半信半疑，老规矩，先花二十多块钱开了个月付套餐挂在软路由上跑探针。结果一晃三个月过去，它居然成了我主力清单里唯一没换过的那一家。</p>

      <h2>一、晚高峰实测：IEPL 专线到底差在哪？</h2>
      <p>为了避免“幸存者偏差”，我分别在晚高峰（21:00）用上海电信 500M 和北京联通 300M 跑了连续一周的油管 4K 和 Speedtest 单线程：</p>
      <ul>
        <li><strong>香港 IEPL 01-06 节点</strong>：平均延迟 26ms ~ 31ms，YouTube 4K 60fps 拖动进度条几乎是秒缓冲，连接速度稳在 180,000 Kbps 上下。</li>
        <li><strong>日本东京 / 大阪节点</strong>：延迟 42ms 左右，晚高峰打《Apex》日服和《绝地求生》丢包率 0%，这也是很多人把它当<strong>光年梯加速器</strong>用的原因——开了 TUN 模式后，比不少按月收 45 块的商业游戏加速器还跟手。</li>
        <li><strong>新加坡与美西节点</strong>：专门用来跑 AI 工具和拉 Docker 镜像，速度虽然不如港日快，但胜在稳，下载 2GB 的模型权重没断过流。</li>
      </ul>

      <h2>二、光年梯IP 干净吗？ChatGPT 和 Claude 会不会弹验证？</h2>
      <p>2026 年选梯子，光看带宽已经过时了，<strong>IP 纯净度才是命门</strong>。很多便宜机场用的都是万人骑的机房 IP，打开 Google 都要点半天红绿灯，登 Claude 直接秒封号。</p>
      <p>光年梯让我比较意外的一点，是它在节点列表里专门划了一组标注“原生/家宽”的<strong>光年梯IP</strong>落地池。我用 Scamalytics 和 Ping0 测了它的美西和台湾原生节点，风险值基本都在低风险区间。这三个月我每天高强度写代码调 Claude API、刷 ChatGPT Plus，一次强制登出或者人机验证都没触发过；Netflix 的非自制剧和 Disney+ 也是全绿解锁。</p>

      <h2>三、客户端体验：小白和极客都能照顾到</h2>
      <p>如果你懒得研究什么 YAML 配置文件，直接用官方适配的<strong>光年梯VPN</strong>一键客户端就行，登录选节点点连接，三步完事。像我这种习惯自己写分流规则的老玩家，直接复制订阅链接丢进 Clash Verge Rev、Shadowrocket 或者 sing-box 里，连规则集都帮你分好了（国内直连、AI 走美日、流媒体走港新），非常省心。</p>

      <h2>四、实话实说：它有没有缺点？</h2>
      <p>有，而且必须摊开讲：</p>
      <ol>
        <li><strong>价格不是全场最低</strong>：二十多块起步，跟那种 9.9 元/月的直连小机场没法比便宜。但一分钱一分货，专线成本摆在那，想长期省心就别贪 9 块钱的便宜。</li>
        <li><strong>冷门小国节点不多</strong>：主力集中在港、日、台、新、美、英、德这几个常用地区，如果你非要找什么冰岛、阿根廷冷门 IP，它可能不够全。</li>
      </ol>

      <h2>五、阿杰的最终建议</h2>
      <p>别听任何人劝你一上来就买三年付。不管多稳的服务商，<strong>先月付试一个月</strong>是铁律。如果你正在找一个能同时替代传统 VPN、游戏加速器和日常原生代理 IP 的主力方案，光年梯值得放进你的第一测试顺位。</p>
    `
  },
  {
    slug: 'vpn-jichang-jiasuqi-guide',
    title: '别再乱买年付了！2026 机场、VPN、加速器和代理IP到底怎么选？老玩家避坑实录',
    shortTitle: '机场、VPN、加速器、代理IP 怎么选不踩坑',
    category: '避坑指南',
    date: '2026-11-18',
    readTime: '6 分钟',
    keywords: ['VPN推荐', '机场推荐', '加速器', '代理IP', '光年梯VPN', '科学上网'],
    summary:
      '刚入门最容易被各种名词绕晕：传统 VPN、专线机场、游戏加速器、静态住宅代理 IP 到底有什么区别？一篇文章用大白话讲透，顺便帮你省下几百块冤枉钱。',
    content: `
      <p>后台每天都能收到类似的私信：“阿杰，我想用 ChatGPT 是买 VPN 还是买机场？”“做 TikTok 买个加速器行不行？”说白了，大家被市面上五花八门的营销词绕晕了。今天不讲晦涩的 RFC 协议文档，咱用大白话把 <strong>VPN、机场、加速器、代理 IP</strong> 这四个词彻底拆明白。</p>

      <h2>1. 传统商业 VPN：省心，但在国内晚高峰容易“趴窝”</h2>
      <p>像海外老牌的 Express、Nord 这类软件，本质上是全流量加密隧道。它们在国外连咖啡馆 Wi-Fi 防窃听很好用，但因为服务器 IP 段早就公开透明，国内直连经常遇到握手失败或者速度掉到几百 KB，而且动辄四五十美元一年，退费麻烦。</p>

      <h2>2. 专线机场（如光年梯机场）：目前国内体验最均衡的主力</h2>
      <p>所谓“机场”，其实是基于 Shadowsocks、Trojan、Hysteria2 等轻量代理协议的节点订阅服务。靠谱的机场会租用<strong>IEPL / IPLC 内网专线</strong>，流量在国内入口加密进专线，直接从香港或日本出口出去，既不怕晚高峰丢包，又能通过分流规则实现“国内网站直连、海外网站走代理”。</p>
      <p>像我们实测排第一的<strong>光年梯</strong>，就已经把传统 VPN 的易用性和专线机场的高速揉到了一起——小白当<strong>光年梯VPN</strong>一键连，老手拿去配 Clash，效率高得多。</p>

      <h2>3. 游戏加速器：只管游戏 UDP，不管网页和 AI</h2>
      <p>常规游戏加速器只针对特定游戏进程做路由优化，你用它打《Apex》没问题，但想顺便打开 YouTube 查个攻略或者问问 ChatGPT，它是不管的。现在很多像<strong>光年梯加速器</strong>这样支持低延迟专线 + TUN 模式的方案，已经能一台电脑同时兼顾联机和日常上网，没必要重复花两份钱。</p>

      <h2>4. 代理 IP（住宅 IP / 原生 IP）：跨境电商与矩阵运营的刚需</h2>
      <p>如果你是做 Amazon、Shopify、TikTok Shop 或者养海外社媒号，千万别拿几十人共用的普通机房 IP 去登录后台，分分钟触发二审甚至封店。这种场景必须用<strong>纯净原生 IP 或独享静态住宅代理 IP</strong>。</p>
      <p>老玩家的经典玩法叫<strong>“链式代理”</strong>：前置用光年梯机场的 IEPL 专线保证低延迟和不断流，后置接一个独享静态住宅代理 IP（或者直接切到<strong>光年梯IP</strong>的原生落地节点），速度和账号安全两手抓。</p>

      <h2>总结：一张图记牢防坑口诀</h2>
      <ul>
        <li><strong>日常办公 / AI / 4K 影音</strong> → 选 IEPL 专线机场（首选光年梯，月付起步）。</li>
        <li><strong>重度外服游戏</strong> → 选带低延迟日港专线和 TUN 模式的加速方案。</li>
        <li><strong>跨境店铺 / 矩阵养号</strong> → 专线前置 + 独享静态住宅代理 IP。</li>
        <li><strong>防跑路铁律</strong> → 永远先月付、永远准备一个十几块的备用梯子、别信“永久会员”。</li>
      </ul>
    `
  },
  {
    slug: 'guangnianti-ip-chatgpt-netflix',
    title: '折腾了一周 Claude 和 Netflix 锁区，最后靠光年梯IP 原生节点救了命',
    shortTitle: 'Claude 与 Netflix 锁区自救：光年梯IP 实操',
    category: '实战教程',
    date: '2026-11-14',
    readTime: '5 分钟',
    keywords: ['光年梯IP', '代理IP', '原生IP', 'ChatGPT解锁', 'Claude防封', 'Netflix 4K'],
    summary:
      '为什么换了三个节点，Claude 还是提示区域不可用、Netflix 只给看自制剧？拆解 IP 纯净度检测方法，以及如何用光年梯IP 原生落地+固定分流彻底解决风控。',
    content: `
      <p>上周帮一个做自媒体的朋友排查问题：他刚充的 Claude Pro 账号，用了不到两天就弹风控；晚上想在电视上看部 Netflix 刚上的日剧，搜了半天发现根本搜不到——典型的<strong>机房广播 IP 被锁区</strong>了。</p>

      <h2>为什么你的节点总是触发风控？</h2>
      <p>现在各大 AI 平台和流媒体早就升级了风控库。它们判断你是不是“正常用户”主要看三点：</p>
      <ol>
        <li><strong>ASN 属性</strong>：你的出口 IP 是数据中心（Hosting/IDC）还是本土宽带运营商（ISP/Residential）？</li>
        <li><strong>IP 复用率</strong>：同一个 IP 下面是不是同时挂着几百个账号在狂刷接口？</li>
        <li><strong>频繁跳区</strong>：上午还在新加坡，中午切到美国，下午又跳去日本，系统不封你封谁？</li>
      </ol>

      <h2>实操：用光年梯IP 原生节点做“定点锁区”</h2>
      <p>解决思路其实特别简单，不要开全局代理到处乱跳，而是做<strong>固定分流</strong>：</p>
      <ul>
        <li>在 Clash Verge Rev 或 Shadowrocket 里，把 <code>openai.com</code>、<code>anthropic.com</code>、<code>claude.ai</code> 单独建一个策略组。</li>
        <li>策略组里直接锁定<strong>光年梯IP</strong>的美西原生节点（或日本原生节点），关掉自动测速切换（url-test），防止软件每隔十分钟给你换一次 IP。</li>
        <li>流媒体（Netflix / Disney+）单独绑定香港或新加坡原生解锁节点，这样既保证 4K 码率拉满，又不会干扰你的 AI 账号环境。</li>
      </ul>

      <p>按这套配置调完以后，我朋友那台 Apple TV 和电脑上的 Claude 已经稳稳跑了快一个月，再也没弹出过“Access Denied”或者验证码。如果你平时也被代理 IP 污染折腾得头疼，不妨直接按这个思路试一遍。</p>
    `
  },
  {
    slug: 'clash-verge-singbox-setup',
    title: 'Clash Verge Rev 与 Shadowrocket 保姆级配置：分流规则、TUN模式与光年梯加速器实操',
    shortTitle: 'Clash Verge Rev / 小火箭保姆级配置指南',
    category: '客户端教程',
    date: '2026-11-09',
    readTime: '8 分钟',
    keywords: ['Clash Verge Rev', 'Shadowrocket', '光年梯加速器', 'VPN配置教程', 'TUN模式'],
    summary:
      '手把手带你搞定 Windows、macOS、iOS 与安卓全平台代理客户端配置，讲透系统代理与 TUN 模式的区别，附带游戏加速与国内直连防卡顿技巧。',
    content: `
      <p>很多新手买了靠谱的节点，结果用起来还是觉得“网页打不开”、“微信发图变慢”、“游戏还是连不上”，九成都是客户端没配对。这篇教程不整虚的，直接给你最稳的 2026 全平台方案。</p>

      <h2>一、各平台客户端选哪个最稳？</h2>
      <ul>
        <li><strong>Windows / macOS</strong>：首选开源的 <strong>Clash Verge Rev</strong>（内核选 Mihomo），界面清爽、规则生态最全；懒人也可以直接用<strong>光年梯VPN</strong>自带的桌面端。</li>
        <li><strong>iPhone / iPad</strong>：直接上美区 App Store 的 <strong>Shadowrocket（小火箭）</strong>，一次买断用很多年。</li>
        <li><strong>Android</strong>：推荐 <strong>Clash Meta for Android</strong> 或 <strong>v2rayNG</strong>，省电且后台稳。</li>
      </ul>

      <h2>二、系统代理 vs TUN 模式：什么时候该开 TUN？</h2>
      <p>不少人问：我开了代理，为什么浏览器能上 Google，但终端（Git / Python / npm）和 Steam 游戏还是直连报错？</p>
      <p>因为“系统代理”只接管遵循系统 HTTP 代理设置的软件（比如浏览器），而命令行工具和绝大多数游戏是不走系统代理的。这时候把客户端里的 <strong>TUN 模式（虚拟网卡模式）</strong> 打开，所有底层 TCP/UDP 流量都会被接管。配合<strong>光年梯加速器</strong>的低延迟日港专线，打外服游戏、拉 GitHub 仓库瞬间就丝滑了。</p>

      <h2>三、三个立刻提升体验的小细节</h2>
      <ol>
        <li><strong>选“规则模式（Rule）”别选“全局（Global）”</strong>：全局模式会把你刷抖音、看 B 站、微信发图的流量也绕一圈海外，既费流量又变慢。</li>
        <li><strong>开启 DNS 防泄漏（Fake-IP）</strong>：避免国内运营商 DNS 污染导致部分海外域名解析失败。</li>
        <li><strong>定期更新订阅</strong>：机场会定期优化入口和更换更干净的落地 IP，建议开启每 24 小时自动更新订阅。</li>
      </ol>
    `
  },
  {
    slug: 'bing-seo-proxy-survival-notes',
    title: '为什么有些机场半年就跑路？从线路成本拆解 IEPL 专线与 BGP 中转的真实底牌',
    shortTitle: '为什么小机场总跑路？拆解专线与中转成本',
    category: '行业观察',
    date: '2026-11-02',
    readTime: '6 分钟',
    keywords: ['IEPL专线', 'BGP中转', '机场防跑路', '代理线路解析', '光年梯机场'],
    summary:
      '9.9 元无限流量真的是福利吗？从国内入口带宽、跨境专线采购价到海外落地 IP 成本，带你看懂机场行业的真实账本，学会一眼识别短命割韭菜盘。',
    content: `
      <p>每隔几个月，电报群里就会冒出一批“新开业、9.9元/月、2TB 流量、全 IEPL 专线”的机场，结果不到半年官网 404、群组解散，留下一地买了年付的受害者。今天咱算一笔明白账，看完你就再也不会被这种低价盘忽悠了。</p>

      <h2>一、IEPL 专线到底有多贵？</h2>
      <p>真正的深港或沪日 IEPL（国际以太网专线）走的是运营商内网传输，不经过公网国际出口，采购成本是按 Mbps 算的——通常每 100Mbps 独享专线每个月就要几千到上万块人民币。再加上国内多线 BGP 入口、海外高纯净度原生落地机，一个能扛住几千人晚高峰同时看 4K 的正规专线机场，单月硬成本就非常可观。</p>

      <h2>二、那些 9.9 元“无限流量”是怎么赚钱的？</h2>
      <p>成本倒挂的时候，只有两条路：</p>
      <ul>
        <li><strong>疯狂超售</strong>：100M 带宽卖给 5000 个人，白天勉强能用，一到晚上八点全员卡成 PPT。</li>
        <li><strong>年付割一波就跑</strong>：用低价吸引贪便宜的用户买年付、两年付，等资金池攒够了直接关站换个马甲重开。</li>
      </ul>

      <h2>三、如何挑出能长期活下去的稳健服务商？</h2>
      <p>在 <strong>TiziHot 梯子热</strong> 的长期追踪里，能稳稳活过两三年的团队（比如我们主力推荐的<strong>光年梯机场</strong>）几乎都有这几个共性：定价合理不打恶性价格战、主推月付不逼你买年付、客服工单有活人回复、线路拓扑透明不乱吹“无限流量”。记住一句话：<strong>在这个行业里，活得久、定价坦诚，比任何花里胡哨的宣传都值钱。</strong></p>
    `
  }
];

export const ARTICLES = [...AUTO_ARTICLES, ...PILLAR_A, ...PILLAR_B, ...BASE_ARTICLES];
