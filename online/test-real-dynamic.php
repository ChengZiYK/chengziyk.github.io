<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="真实PHP动态页面测试">
    <title>真实PHP动态页面测试</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../fontawesome/css/all.min.css">
    <link rel="stylesheet" href="../css/templatemo-style.css">
    <link rel="shortcut icon" type="image/png" href="../img/CZ.ico">
    <style>
        body {
            background-image: url('../img/wallpaper.png');
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
        }
        .tm-hero {
            min-height: 400px;
            background: transparent;
        }
        .tm-container-content {
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-radius: 8px;
            padding: 30px;
            margin: 20px auto;
            max-width: calc(100% - 40px);
            box-sizing: border-box;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15),
                        0 4px 16px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }
        .tm-hero .display-4 {
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5),
                        0 2px 10px rgba(0, 0, 0, 0.3);
        }
        .tm-hero .text-white {
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        .card {
            margin-bottom: 20px;
            border-radius: 8px;
        }
        .footer-divider {
            height: 2px;
            background-color: rgba(0, 0, 0, 0.2);
            width: 100%;
        }
        .nav-indicator {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            transition: all 0.3s ease;
            border-radius: 2px;
        }
        .nav-link {
            border-bottom: none !important;
        }
        .dynamic-content {
            font-size: 24px;
            font-weight: bold;
            color: #007acc;
            text-align: center;
            padding: 40px;
            background-color: #f0f8ff;
            border-radius: 8px;
            margin: 20px 0;
        }
        .server-info {
            background-color: #e8f5e9;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light" style="margin: 20px auto; max-width: calc(100% - 40px); border-radius: 8px; background-color: rgba(255, 255, 255, 0.7); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.3); padding-top: 0.5rem; padding-bottom: 0.5rem; position: relative; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4);">
        <div class="container-fluid">
            <a class="navbar-brand" href="../index.html">
                <i class="fas fa-seedling mr-2"></i>Bili_YKChengZi
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto" id="navbar-nav" style="position: relative;">
                    <li class="nav-item">
                        <a class="nav-link nav-link-1" href="../index.html">首页</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-2" href="../system.html">操作系统</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-4 active" href="../online.html">在线工具</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-5" href="../minecraftserver.html">我的世界服务器</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-3" href="../about.html">关于</a>
                    </li>
                    <div class="nav-indicator" id="nav-indicator"></div>
                </ul>
            </div>
        </div>
    </nav>

    <div class="tm-hero d-flex justify-content-center align-items-center">
        <div class="text-center mb-5">
            <h1 class="text-white mb-4 display-4">真实PHP动态页面</h1>
            <p class="text-white lead mb-5 max-w-2xl mx-auto">这是真实的服务器端动态页面！</p>
        </div>
    </div>

    <div class="container-fluid tm-container-content tm-mt-60">
        <div class="row mb-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-success text-white">
                        <h3><i class="fas fa-check-circle mr-2"></i>这是真实的动态页面！</h3>
                    </div>
                    <div class="card-body">
                        <p>下面的内容都是由 PHP 在服务器端生成的，每次刷新都会重新生成！</p>
                        <div class="alert alert-info">
                            <i class="fas fa-info-circle"></i> <strong>提示：</strong> 按 F5 刷新页面，看看内容是否变化！
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-lg-6 mb-4">
                <div class="card">
                    <div class="card-header bg-light">
                        <h3><i class="fas fa-dice mr-2"></i>服务器生成的随机数字</h3>
                    </div>
                    <div class="card-body">
                        <p>这个数字由服务器端 PHP 生成：</p>
                        <div class="dynamic-content">
                            🎲 随机数字: <?php echo rand(100000, 999999); ?>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6 mb-4">
                <div class="card">
                    <div class="card-header bg-light">
                        <h3><i class="fas fa-quote-left mr-2"></i>服务器返回的随机名言</h3>
                    </div>
                    <div class="card-body">
                        <p>这句名言由服务器端 PHP 选择：</p>
                        <div class="dynamic-content" style="font-size: 18px;">
                            <?php
                            $quotes = [
                                '学到老，活到老。',
                                '不积跬步，无以至千里。',
                                '知识就是力量。',
                                '失败是成功之母。',
                                '行动胜于空谈。',
                                '时间就是金钱。',
                                '每一个不曾起舞的日子，都是对生命的辜负。',
                                '世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的心灵。'
                            ];
                            $randomIndex = array_rand($quotes);
                            echo '💬 "' . $quotes[$randomIndex] . '"';
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-lg-6 mb-4">
                <div class="card">
                    <div class="card-header bg-light">
                        <h3><i class="fas fa-clock mr-2"></i>服务器时间</h3>
                    </div>
                    <div class="card-body">
                        <p>这个时间是服务器的时间：</p>
                        <div class="dynamic-content">
                            ⏰ <?php echo date('Y年m月d日 H:i:s'); ?>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6 mb-4">
                <div class="card">
                    <div class="card-header bg-light">
                        <h3><i class="fas fa-palette mr-2"></i>服务器生成的随机颜色</h3>
                    </div>
                    <div class="card-body">
                        <p>这个颜色由服务器端 PHP 生成：</p>
                        <?php
                        $colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];
                        $randomColor = $colors[array_rand($colors)];
                        ?>
                        <div class="dynamic-content" style="background-color: <?php echo $randomColor; ?>; color: #fff;">
                            🎨 颜色: <?php echo $randomColor; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-light">
                        <h3><i class="fas fa-server mr-2"></i>服务器信息</h3>
                    </div>
                    <div class="card-body">
                        <div class="server-info">
                            <p><strong>PHP 版本:</strong> <?php echo PHP_VERSION; ?></p>
                            <p><strong>服务器软件:</strong> <?php echo $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'; ?></p>
                            <p><strong>服务器时间:</strong> <?php echo date('Y-m-d H:i:s'); ?></p>
                            <p><strong>您的IP:</strong> <?php echo $_SERVER['REMOTE_ADDR'] ?? 'Unknown'; ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-light">
                        <h3><i class="fas fa-question-circle mr-2"></i>如何验证这是真实的动态页面？</h3>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead class="thead-light">
                                    <tr>
                                        <th>验证方法</th>
                                        <th>说明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>查看页面源代码</td>
                                        <td>右键 → 查看页面源代码，你会看到 PHP 已经执行完，只有 HTML</td>
                                    </tr>
                                    <tr>
                                        <td>多次刷新</td>
                                        <td>每次刷新，上面的随机数字、名言、颜色都会变化</td>
                                    </tr>
                                    <tr>
                                        <td>禁用 JavaScript</td>
                                        <td>即使禁用 JS，内容仍然正常显示（因为是服务器生成的）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="alert alert-warning">
                            <i class="fas fa-exclamation-triangle"></i> <strong>注意：</strong> 这个页面需要在支持 PHP 的服务器上运行才能生效！如果直接在本地打开 .php 文件，PHP 代码不会执行。
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="pt-5 pb-3 tm-footer" style="background: transparent;">
            <div class="container-fluid tm-container-small">
                <div class="footer-divider mb-5"></div>
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-12 px-5 mb-5">
                        <h3 class="tm-text-primary mb-4 tm-footer-title">关于 Bili_YKChengZi</h3>
                        <p style="color: black;">Bili_YKChengZi 主要分享 Windows 系统相关内容，包括系统优化、修改。我制作的内容仅供学习和技术交流使用，请大家支持正版软件。</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 px-5 mb-5">
                        <h3 class="tm-text-primary mb-4 tm-footer-title">快速导航</h3>
                        <ul class="tm-footer-links">
                            <li><a href="../index.html" style="color: black;">首页</a></li>
                            <li><a href="../system.html" style="color: black;">操作系统</a></li>
                            <li><a href="../online.html" style="color: black;">在线工具</a></li>
                            <li><a href="../minecraftserver.html" style="color: black;">我的世界服务器</a></li>
                            <li><a href="../about.html" style="color: black;">关于</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 px-5 mb-5">
                        <h3 class="tm-text-primary mb-4 tm-footer-title">联系我</h3>
                        <ul class="tm-contacts">
                            <li>
                                <a href="#" style="color: black;">
                                    <i class="fab fa-github mr-2"></i>
                                    GitHub: Bili_YKChengZi
                                </a>
                            </li>
                            <li>
                                <a href="#" style="color: black;">
                                    <i class="fas fa-play-circle mr-2"></i>
                                    B站: Bili_YKChengZi
                                </a>
                            </li>
                            <li>
                                <a href="#" style="color: black;">
                                    <i class="fas fa-envelope mr-2"></i>
                                    邮箱: belugajia@outlook.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script src="../js/plugins.js"></script>
    <script>
        $(window).on("load", function() {
            $("body").addClass("loaded");
            initNavIndicator();
        });

        function initNavIndicator() {
            const nav = document.getElementById('navbar-nav');
            const indicator = document.getElementById('nav-indicator');
            const links = nav.querySelectorAll('.nav-link');

            function setIndicatorPosition(link) {
                const rect = link.getBoundingClientRect();
                const navRect = nav.getBoundingClientRect();
                
                indicator.style.left = (rect.left - navRect.left) + 'px';
                indicator.style.width = rect.width + 'px';
                
                if (link.classList.contains('nav-link-1')) {
                    indicator.style.backgroundColor = '#33CCFF';
                } else if (link.classList.contains('nav-link-2')) {
                    indicator.style.backgroundColor = '#FF6666';
                } else if (link.classList.contains('nav-link-3')) {
                    indicator.style.backgroundColor = '#33CC66';
                } else if (link.classList.contains('nav-link-4')) {
                    indicator.style.backgroundColor = '#CC66CC';
                } else if (link.classList.contains('nav-link-5')) {
                    indicator.style.backgroundColor = '#FF9933';
                }
            }

            const activeLink = nav.querySelector('.active');
            if (activeLink) {
                setIndicatorPosition(activeLink);
            }

            links.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    setIndicatorPosition(this);
                });
            });

            nav.addEventListener('mouseleave', function() {
                const activeLink = nav.querySelector('.active');
                if (activeLink) {
                    setIndicatorPosition(activeLink);
                }
            });
        }
    </script>
</body>
</html>
