<body style="overflow: auto;">
    <!-- LOADING -->
    <div class="loading" id="loading" style="animation: 0.5s ease 0s 1 normal none running loaded; display: none;">
        <img src=".MyLogo20230104183815" alt="">
    </div>

    <!-- MENU -->
    <div class="menu close" id="menu">
        <div class="title">Menu</div>
        <ul class="list">
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">...</a>
            </li>
            <li>
                <a href="">...</a>
            </li>
            <li>
                <a href="https://discord.gg/ka2wymMFQe">Discord</a>
            </li>
            <li>
                <a href="">...</a>
            </li>
        </ul>
    </div>

    <!-- TOP -->
    <div class="top">
        <div class="inner">
            <div class="logo-info">
                
                    </div>

                    <div class="icon">
                        <span class="mdi-25px mdi-minecraft"></span>
                    </div>
                </div>
                <a href="index.html" class="logo">
                    <img src="./src/images/logo.png" alt="LOGO">
                </a>
                <a href="https://discord.gg/ka2wymMFQe" target="_blink">
                    <div class="info discord">
                        <div class="icon">
                            <span class="mdi-25px mdi-discord"></span>
                        </div>

                        <div class="txt r">
                            <small>Entra nel nostro discord</small>
                            <div class="users" id="ds-users">7730 Utenti Online</div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="menu-btn" id="menu-btn">
                <i class="fa-solid fa-bars"></i>
            </div>

            <div class="nav">
                <a class="page" href="index.html">Home</a>
                <a class="page" href="">...</a>
                <a class="page store" href="">...</a>
                <a class="page" href="https://discord.gg/ka2wymMFQe">Discord</a>
                <a class="page" href="">...</a>
            </div>
        </div>

        <!-- PARTICLES -->
        <div id="tsparticles">
            <canvas class="tsparticles-canvas-el" width="801" height="390" style="width: 100%; height: 100%; position: fixed; z-index: 0; top: 0px; left: 0px; pointer-events: none; background-color: rgb(0, 0, 0);">
            </canvas>
        </div>
    </div>

    <!-- BOTTOM -->
    <div class="bottom">
        <div class="center">
            <div class="inner">
                <div class="c">
                    <div class="title">Chi Siamo</div>
                    <div class="text">
                        testo
                    </div>
                </div>
                <div class="c cc">
                    <div class="title">Link Utili</div>
                    <div class="links" id="links">
                        <li>
                            <a class="utils" href="">...</a>
                        </li>
                        <li>
                            <a class="utils" href="https://discord.gg/ka2wymMFQe">Discord</a>
                        </li>
                        <li>
                            <a class="utils f" href="">Telegram (prossimamente)</a>
                            </li>
                    </div>
                 </div>

    <script> 
        // DISCORD
        const discord = "779073879351754783";
        fetch(`https://discordapp.com/api/guilds/${discord}/widget.json`)
            .then(result => result.json().then(data => 
                document.getElementById("ds-users").innerHTML = data.presence_count + " Utenti Online"
            ));