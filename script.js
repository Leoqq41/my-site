document.addEventListener('DOMContentLoaded', function() {
    console.log('个人主页已加载');
    
    // 初始化Pyodide
    async function initPyodide() {
        if (!window.pyodide) {
            window.pyodide = await loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
            });
        }
        return window.pyodide;
    }
    
    // 运行Python代码
    async function runPythonCode(code, outputElement) {
        try {
            const pyodide = await initPyodide();
            outputElement.textContent = "运行中...";
            
            // 重定向stdout
            pyodide.setStdout({ write: (text) => {
                outputElement.textContent += text;
            }});
            
            // 运行代码
            await pyodide.runPythonAsync(code);
        } catch (error) {
            outputElement.textContent = `错误: ${error.message}`;
        }
    }
    
    // 为所有代码块添加运行功能
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach((block, index) => {
        const code = block.querySelector('code').textContent;
        const codeContainer = document.createElement('div');
        codeContainer.className = 'code-container';
        
        // 创建控制栏
        const controlBar = document.createElement('div');
        controlBar.className = 'code-control-bar';
        
        // 运行按钮
        const runButton = document.createElement('button');
        runButton.className = 'run-button';
        runButton.textContent = '运行代码';
        
        // 折叠按钮
        const collapseButton = document.createElement('button');
        collapseButton.className = 'collapse-button';
        collapseButton.textContent = '▼';
        
        controlBar.appendChild(runButton);
        controlBar.appendChild(collapseButton);
        
        // 输出区域
        const outputArea = document.createElement('div');
        outputArea.className = 'code-output';
        outputArea.id = `output-${index}`;
        
        // 重新组织代码块
        const preElement = block.querySelector('pre');
        codeContainer.appendChild(controlBar);
        codeContainer.appendChild(preElement);
        codeContainer.appendChild(outputArea);
        
        block.innerHTML = '';
        block.appendChild(codeContainer);
        
        // 运行按钮点击事件
        runButton.addEventListener('click', async () => {
            outputArea.textContent = '';
            await runPythonCode(code, outputArea);
        });
        
        // 折叠按钮点击事件
        collapseButton.addEventListener('click', () => {
            preElement.classList.toggle('collapsed');
            outputArea.classList.toggle('collapsed');
            collapseButton.textContent = preElement.classList.contains('collapsed') ? '▶' : '▼';
        });
    });
});
