document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    
    // 创建canvas元素
    const canvas = document.createElement('canvas');
    canvas.classList.add('canvas-container');
    document.body.appendChild(canvas);
    
    // 获取canvas上下文
    const ctx = canvas.getContext('2d');
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const time = new Date().getTime() * 0.002;
        const x = Math.sin(time) * 200 + canvas.width / 2;
        const y = Math.cos(time) * 200 + canvas.height / 2;
        
        drawGlobe(x, y, 150);
        requestAnimationFrame(draw);
    }

    function drawGlobe(centerX, centerY, radius) {
        ctx.beginPath();
        for (let i = 0; i < Math.PI * 2; i += Math.PI / 180) {
            const x = centerX + radius * Math.cos(i);
            const y = centerY + radius * Math.sin(i);
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
       
