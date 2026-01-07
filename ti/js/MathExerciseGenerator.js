// 数学练习生成器主控制器
class MathExerciseGenerator {
  constructor() {
    this.currentGrade = 3; // 默认三年级
    this.currentDifficulty = 'medium';
    this.selectedTopics = [];
    this.exercises = [];
    this.exerciseAnswers = [];
    this.currentPages = [];
    this.exercisesGenerated = false;
    
    // 初始化
    this.init();
  }
  
  // 初始化
  init() {
    // 绑定事件监听器
    this.bindEvents();
    
    // 加载默认年级的主题
    this.loadTopicsForGrade(this.currentGrade);
  }
  
  // 绑定事件监听器
  bindEvents() {
    // 年级按钮事件
    const gradeButtons = document.querySelectorAll('.grade-button');
    gradeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // 移除所有按钮的选中状态
        gradeButtons.forEach(btn => btn.classList.remove('selected'));
        // 为当前按钮添加选中状态
        e.target.classList.add('selected');
        // 设置年级
        this.setGrade(parseInt(e.target.dataset.grade));
      });
    });
    
    // 难度选择事件
    const difficultyOptions = document.querySelectorAll('.difficulty-option');
    difficultyOptions.forEach(option => {
      option.addEventListener('click', () => {
        this.setDifficulty(option.dataset.level);
      });
    });
    
    // 生成题目按钮事件
    const generateBtn = document.getElementById('generateBtn');
    if (generateBtn) {
      generateBtn.addEventListener('click', () => {
        this.generateExercises();
      });
    }
    
    // 导出图片按钮事件
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        this.exportToImages();
      });
    }
    
    // 打印按钮事件
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
        this.printExercises();
      });
    }
    
    // 导出答案按钮事件
    const exportAnswerBtn = document.getElementById('exportAnswerBtn');
    if (exportAnswerBtn) {
      exportAnswerBtn.addEventListener('click', () => {
        this.exportAnswers();
      });
    }
    
    // 清除设置按钮事件
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.clearAllSettings();
      });
    }
    
    // 全选按钮事件
    const selectAllBtn = document.getElementById('selectAllBtn');
    if (selectAllBtn) {
      selectAllBtn.addEventListener('click', () => {
        this.toggleSelectAll();
      });
    }
  }
  
  // 设置年级
  setGrade(grade) {
    this.currentGrade = grade;
    this.loadTopicsForGrade(grade);
    this.updateHeaderTitle();
  }
  
  // 设置难度
  setDifficulty(difficulty) {
    this.currentDifficulty = difficulty;
    
    // 更新UI中的难度选择
    const difficultyOptions = document.querySelectorAll('.difficulty-option');
    difficultyOptions.forEach(option => {
      option.classList.remove('selected');
      if (option.dataset.level === difficulty) {
        option.classList.add('selected');
      }
    });
  }
  
  // 为指定年级加载主题
  loadTopicsForGrade(grade) {
    const unitsContainer = document.querySelector('.units-container');
    if (!unitsContainer) return;
    
    // 清空现有内容
    unitsContainer.innerHTML = '';
    
    // 获取年级配置
    const units = ExerciseGeneratorFactory.getUnitsForGrade(grade);
    
    // 创建主题选择框
    units.forEach((unit, unitIndex) => {
      const unitBox = document.createElement('div');
      unitBox.className = 'unit-box';
      
      const unitTitle = document.createElement('div');
      unitTitle.className = 'unit-title';
      unitTitle.textContent = unit.title;
      
      const topicsList = document.createElement('div');
      topicsList.className = 'topics-list';
      
      unit.topics.forEach((topic, topicIndex) => {
        const topicCheckbox = document.createElement('div');
        topicCheckbox.className = 'topic-checkbox';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `topic-${grade}-${unitIndex}-${topicIndex}`;
        checkbox.name = 'topic';
        checkbox.value = topic.id;
        
        const label = document.createElement('label');
        label.htmlFor = `topic-${grade}-${unitIndex}-${topicIndex}`;
        label.textContent = topic.name;
        
        topicCheckbox.appendChild(checkbox);
        topicCheckbox.appendChild(label);
        topicsList.appendChild(topicCheckbox);
      });
      
      unitBox.appendChild(unitTitle);
      unitBox.appendChild(topicsList);
      unitsContainer.appendChild(unitBox);
    });
  }
  
  // 更新头部标题
  updateHeaderTitle() {
    const gradeConfig = ExerciseGeneratorFactory.getGradeConfig();
    const gradeInfo = gradeConfig[this.currentGrade];
    
    if (gradeInfo) {
      const headerTitle = document.querySelector('h1');
      if (headerTitle) {
        headerTitle.textContent = `${gradeInfo.title}计算练习生成器`;
      }
      
      const subtitle = document.querySelector('.subtitle');
      if (subtitle) {
        subtitle.textContent = `北师大版${gradeInfo.title}数学计算题练习`;
      }
    }
  }
  
  // 获取选中的主题
  getSelectedTopics() {
    this.selectedTopics = [];
    const checkboxes = document.querySelectorAll('input[name="topic"]:checked');
    checkboxes.forEach(checkbox => {
      this.selectedTopics.push(checkbox.value);
    });
    return this.selectedTopics;
  }
  
  // 切换全选
  toggleSelectAll() {
    const allCheckboxes = document.querySelectorAll('input[name="topic"]');
    const allChecked = Array.from(allCheckboxes).every(cb => cb.checked);
    
    allCheckboxes.forEach(checkbox => {
      checkbox.checked = !allChecked;
    });
    
    const selectAllBtn = document.getElementById('selectAllBtn');
    if (selectAllBtn) {
      selectAllBtn.innerHTML = `<span class="btn-icon">${!allChecked ? '✓' : '☐'}</span> ${!allChecked ? '取消全选' : '全选主题'}`;
    }
  }
  
  // 生成练习题
  generateExercises() {
    const selectedTopics = this.getSelectedTopics();
    
    if (selectedTopics.length === 0) {
      alert('请至少选择一个主题！');
      return;
    }
    
    // 显示加载指示器
    this.showLoadingIndicator('正在生成题目，请稍候...');
    
    // 获取题目数量和每行题目数
    const totalCount = parseInt(document.getElementById('totalCount').value) || 68;
    const perRow = parseInt(document.getElementById('perRow').value) || 4;
    
    // 清空之前的题目
    this.exercises = [];
    this.exerciseAnswers = [];
    const usedExercises = new Set();
    
    // 获取当前年级的题目生成器
    const generator = ExerciseGeneratorFactory.getGenerator(this.currentGrade);
    
    // 生成题目
    for (let i = 0; i < totalCount; i++) {
      const topic = selectedTopics[i % selectedTopics.length];
      let exerciseObj;
      
      try {
        exerciseObj = generator.generateExercise(topic, this.currentDifficulty);
      } catch (error) {
        console.error('生成题目时出错:', error);
        // 如果出错，使用默认题目
        exerciseObj = { exercise: "1 + 1", answer: "2" };
      }
      
      // 简单去重
      let attempts = 0;
      while (usedExercises.has(exerciseObj.exercise) && attempts < 3) {
        try {
          exerciseObj = generator.generateExercise(topic, this.currentDifficulty);
        } catch (error) {
          console.error('重新生成题目时出错:', error);
          exerciseObj = { exercise: "1 + 1", answer: "2" };
        }
        attempts++;
      }
      
      usedExercises.add(exerciseObj.exercise);
      this.exercises.push(exerciseObj.exercise);
      this.exerciseAnswers.push(exerciseObj.answer);
    }
    
    // 打乱题目顺序
    this.shuffleExercises();
    
    // 分页
    this.currentPages = this.paginateExercises(this.exercises, perRow);
    
    // 渲染题目
    setTimeout(() => {
      this.renderExercises();
      this.adjustFontSize();
      this.exercisesGenerated = true;
      
      // 隐藏加载指示器
      this.hideLoadingIndicator();
    }, 100);
  }
  
  // 打乱题目顺序
  shuffleExercises() {
    for (let i = this.exercises.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.exercises[i], this.exercises[j]] = [this.exercises[j], this.exercises[i]];
      [this.exerciseAnswers[i], this.exerciseAnswers[j]] = [this.exerciseAnswers[j], this.exerciseAnswers[i]];
    }
  }
  
  // 分页
  paginateExercises(exercises, perRow) {
    const rowsPerPage = 22; // 每页行数
    const exercisesPerPage = rowsPerPage * perRow;
    const pages = [];
    
    for (let i = 0; i < exercises.length; i += exercisesPerPage) {
      const pageExercises = exercises.slice(i, i + exercisesPerPage);
      pages.push(pageExercises);
    }
    
    return pages;
  }
  
  // 渲染题目
  renderExercises() {
    const perRow = parseInt(document.getElementById('perRow').value) || 4;
    const exercisesContent = document.getElementById('exercisesContent');
    const paginationInfo = document.getElementById('paginationInfo');
    
    if (!exercisesContent || !paginationInfo) return;
    
    // 清空内容
    exercisesContent.innerHTML = '';
    
    // 获取年级配置
    const gradeConfig = ExerciseGeneratorFactory.getGradeConfig();
    const gradeInfo = gradeConfig[this.currentGrade];
    
    // 渲染每页题目
    this.currentPages.forEach((pageExercises, pageIndex) => {
      const pageContainer = document.createElement('div');
      pageContainer.className = 'page-a4';
      pageContainer.id = `page-${pageIndex}`;
      pageContainer.style.position = 'relative';
      
      const header = document.createElement('div');
      header.className = 'exercise-header';
      header.innerHTML = `
        <h2>${gradeInfo.title}计算练习</h2>
        <div class="info">
          <span>班级：__________</span>
          <span>姓名：__________</span>
          <span>学号：__________</span>
        </div>
      `;
      pageContainer.appendChild(header);
      
      const exercisesGrid = document.createElement('div');
      exercisesGrid.className = 'exercises-grid';
      exercisesGrid.style.gridTemplateColumns = `repeat(${perRow}, 1fr)`;
      
      pageExercises.forEach(exercise => {
        const exerciseItem = document.createElement('div');
        exerciseItem.className = 'exercise-item';
        exerciseItem.innerHTML = `<span>${exercise} = </span>`;
        exercisesGrid.appendChild(exerciseItem);
      });
      
      pageContainer.appendChild(exercisesGrid);
      exercisesContent.appendChild(pageContainer);
    });
    
    // 更新分页信息
    if (this.currentPages.length > 1) {
      paginationInfo.textContent = `共 ${this.exercises.length} 道题目，分 ${this.currentPages.length} 页显示`;
      paginationInfo.style.display = 'block';
    } else {
      paginationInfo.textContent = `共 ${this.exercises.length} 道题目`;
      paginationInfo.style.display = 'block';
    }
  }
  
  // 调整字体大小
  adjustFontSize() {
    const perRow = parseInt(document.getElementById('perRow').value) || 4;
    const maxLength = this.getMaxExerciseLength();
    const optimalSize = this.calculateOptimalFontSize(maxLength, perRow);
    
    const exerciseItems = document.querySelectorAll('.exercise-item');
    exerciseItems.forEach(item => {
      item.style.fontSize = `${optimalSize}px`;
    });
  }
  
  // 获取最长题目长度
  getMaxExerciseLength() {
    let maxLength = 0;
    this.exercises.forEach(exercise => {
      maxLength = Math.max(maxLength, exercise.length);
    });
    return maxLength;
  }
  
  // 计算最优字体大小
  calculateOptimalFontSize(maxLength, perRow) {
    let baseSize;
    
    if (perRow <= 3) {
      baseSize = 18;
    } else if (perRow <= 4) {
      baseSize = 16;
    } else if (perRow <= 5) {
      baseSize = 14;
    } else {
      baseSize = 12;
    }
    
    // 根据题目长度进一步调整
    if (maxLength > 25) {
      baseSize = Math.max(10, baseSize - 4);
    } else if (maxLength > 20) {
      baseSize = Math.max(12, baseSize - 3);
    } else if (maxLength > 15) {
      baseSize = Math.max(14, baseSize - 2);
    }
    
    return baseSize;
  }
  
  // 显示加载指示器
  showLoadingIndicator(message) {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
      loadingIndicator.textContent = message;
      loadingIndicator.classList.add('active');
    }
  }
  
  // 隐藏加载指示器
  hideLoadingIndicator() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
      loadingIndicator.classList.remove('active');
    }
  }
  
  // 为每一页生成单独的练习题预览区域截图
  async generatePageImages() {
    if (!this.exercisesGenerated) {
      return [];
    }
    
    const pageImages = [];
    
    for (let i = 0; i < this.currentPages.length; i++) {
      const pageElement = document.getElementById(`page-${i}`);
      if (!pageElement) continue;
      
      try {
        // 等待页面完全渲染
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 添加截图优化样式
        pageElement.classList.add('screenshot-mode');
        
        // 确保元素在页面上可见
        pageElement.style.display = 'block';
        pageElement.style.visibility = 'visible';
        pageElement.style.opacity = '1';
        
        // 优化截图参数，提高清晰度
        const canvas = await html2canvas(pageElement, {
          scale: 3, // 提高scale值以获得更高分辨率
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false,
          allowTaint: true,
          foreignObjectRendering: false, // 禁用foreignObject以提高兼容性
          removeContainer: true,
          imageTimeout: 15000, // 增加图片加载超时时间
          letterRendering: true, // 启用字母渲染优化
          onclone: function(clonedDoc) {
            // 在克隆的文档中确保字体渲染优化
            const clonedPage = clonedDoc.getElementById(`page-${i}`);
            if (clonedPage) {
              clonedPage.style.webkitFontSmoothing = 'antialiased';
              clonedPage.style.mozOsxFontSmoothing = 'grayscale';
              clonedPage.style.textRendering = 'optimizeLegibility';
            }
          }
        });
        
        // 移除截图优化样式
        pageElement.classList.remove('screenshot-mode');
        
        const imageData = canvas.toDataURL('image/png', 1.0); // 最高质量
        pageImages.push({
          page: i + 1,
          data: imageData
        });
        
        console.log(`第${i+1}页截图完成，尺寸: ${canvas.width}x${canvas.height}，分辨率: ${canvas.width/210*25.4} DPI`);
      } catch (error) {
        console.error(`生成第${i+1}页图片时出错:`, error);
        // 移除截图优化样式
        pageElement.classList.remove('screenshot-mode');
      }
    }
    
    return pageImages;
  }
  
  // 生成答案页面
  createAnswerPages() {
    if (!this.exercisesGenerated || this.exercises.length === 0) {
      return null;
    }
    
    const perRow = parseInt(document.getElementById('perRow').value) || 4;
    const answerPages = this.paginateExercises(this.exercises, perRow);
    const answerAnswerPages = this.paginateExercises(this.exerciseAnswers, perRow);
    
    return { answerPages, answerAnswerPages };
  }
  
  // 渲染答案页面
  renderAnswerPages() {
    const result = this.createAnswerPages();
    if (!result) return null;
    
    const { answerPages, answerAnswerPages } = result;
    const perRow = parseInt(document.getElementById('perRow').value) || 4;
    const maxLength = this.getMaxExerciseLength();
    const optimalAnswerSize = this.calculateOptimalAnswerFontSize(maxLength, perRow);
    
    const answerContainer = document.createElement('div');
    answerContainer.id = 'answerContainer';
    answerContainer.style.position = 'absolute';
    answerContainer.style.left = '-9999px';
    answerContainer.style.top = '0';
    answerContainer.style.width = '210mm';
    answerContainer.style.zIndex = '-1000';
    
    // 添加小字号样式类
    answerContainer.classList.add('small-font');
    
    document.body.appendChild(answerContainer);
    
    // 获取年级配置
    const gradeConfig = ExerciseGeneratorFactory.getGradeConfig();
    const gradeInfo = gradeConfig[this.currentGrade];
    
    answerPages.forEach((pageExercises, pageIndex) => {
      const pageAnswers = answerAnswerPages[pageIndex] || [];
      const pageContainer = document.createElement('div');
      pageContainer.className = 'answer-page-a4';
      pageContainer.id = `answer-page-${pageIndex}`;
      pageContainer.style.position = 'relative';
      
      const header = document.createElement('div');
      header.className = 'answer-header';
      header.innerHTML = `
        <h2>${gradeInfo.title}计算练习答案</h2>
        <div class="info">
          <span>班级：__________</span>
          <span>姓名：__________</span>
          <span>学号：__________</span>
        </div>
      `;
      pageContainer.appendChild(header);
      
      const answersGrid = document.createElement('div');
      answersGrid.className = 'answers-grid';
      answersGrid.style.gridTemplateColumns = `repeat(${perRow}, 1fr)`;
      
      pageExercises.forEach((exercise, idx) => {
        const answer = pageAnswers[idx] || '';
        const answerItem = document.createElement('div');
        answerItem.className = 'answer-item';
        answerItem.style.fontSize = `${optimalAnswerSize}px`;
        answerItem.innerHTML = `<span>${exercise} = ${answer}</span>`;
        answersGrid.appendChild(answerItem);
      });
      
      pageContainer.appendChild(answersGrid);
      answerContainer.appendChild(pageContainer);
    });
    
    return answerContainer;
  }
  
  // 计算答案页面的最优字号（比题目页面小2px）
  calculateOptimalAnswerFontSize(maxLength, perRow) {
    // 先计算题目页面的字号，然后减2
    const questionSize = this.calculateOptimalFontSize(maxLength, perRow);
    return Math.max(10, questionSize - 2); // 最小10px
  }
  
  // 导出为图片
  async exportToImages() {
    if (!this.exercisesGenerated) {
      alert('请先生成练习题！');
      return;
    }
    
    this.showLoadingIndicator('正在生成题目图片，请稍候...');
    
    try {
      // 确保页面完全渲染
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const pageImages = await this.generatePageImages();
      
      if (pageImages.length === 0) {
        alert('无法生成截图，请重试！');
        this.hideLoadingIndicator();
        return;
      }
      
      const zip = new JSZip();
      const dateStr = new Date().toISOString().slice(0, 10);
      
      // 获取年级配置
      const gradeConfig = ExerciseGeneratorFactory.getGradeConfig();
      const gradeInfo = gradeConfig[this.currentGrade];
      
      pageImages.forEach((img, index) => {
        const base64Data = img.data.split(',')[1];
        zip.file(`${gradeInfo.title}计算练习-第${img.page}页-${dateStr}.png`, base64Data, {base64: true});
      });
      
      const zipBlob = await zip.generateAsync({type: 'blob'});
      saveAs(zipBlob, `${gradeInfo.title}计算练习-${dateStr}.zip`);
      
      this.hideLoadingIndicator();
    } catch (error) {
      console.error('导出图片时出错:', error);
      alert('导出失败，请重试！');
      this.hideLoadingIndicator();
    }
  }
  
  // 打印题目
  async printExercises() {
    if (!this.exercisesGenerated) {
      alert('请先生成练习题！');
      return;
    }
    
    this.showLoadingIndicator('正在准备打印，请稍候...');
    
    try {
      // 确保页面完全渲染
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const pageImages = await this.generatePageImages();
      
      if (pageImages.length === 0) {
        alert('无法生成打印内容，请重试！');
        this.hideLoadingIndicator();
        return;
      }
      
      const printWindow = window.open('', '_blank');
      printWindow.document.open();
      
      let printHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>计算练习 - 打印</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { 
                    margin: 0; 
                    padding: 0; 
                    background: white;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-rendering: optimizeLegibility;
                }
                .print-page {
                    width: 210mm;
                    height: 297mm;
                    page-break-after: always;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: white;
                }
                .print-page:last-child {
                    page-break-after: auto;
                }
                .print-page img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    display: block;
                }
                @media print {
                    body { 
                        margin: 0; 
                        padding: 0;
                    }
                    .print-page {
                        width: 100%;
                        height: 100%;
                        page-break-inside: avoid;
                    }
                    @page {
                        margin: 0;
                        size: A4 portrait;
                    }
                }
            </style>
        </head>
        <body>
      `;
      
      pageImages.forEach(img => {
        printHTML += `
            <div class="print-page">
                <img src="${img.data}" alt="计算练习 第${img.page}页" style="max-width: 100%; max-height: 100%;">
            </div>
        `;
      });
      
      printHTML += `
        </body>
        </html>
      `;
      
      printWindow.document.write(printHTML);
      printWindow.document.close();
      
      // 等待图片加载完成
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
        
        // 打印完成后关闭窗口
        printWindow.onafterprint = function() {
            setTimeout(() => {
                printWindow.close();
            }, 500);
        };
      }, 1000);
      
      this.hideLoadingIndicator();
    } catch (error) {
      console.error('打印时出错:', error);
      alert('打印失败，请重试！');
      this.hideLoadingIndicator();
    }
  }
  
  // 导出答案
  async exportAnswers() {
    if (!this.exercisesGenerated) {
      alert('请先生成练习题！');
      return;
    }
    
    this.showLoadingIndicator('正在生成答案图片，请稍候...');
    
    try {
      // 渲染答案页面
      const answerContainer = this.renderAnswerPages();
      if (!answerContainer) {
        this.hideLoadingIndicator();
        return;
      }
      
      // 等待DOM更新
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const answerPages = document.querySelectorAll('.answer-page-a4');
      const pageImages = [];
      
      for (let i = 0; i < answerPages.length; i++) {
        const pageElement = answerPages[i];
        if (!pageElement) continue;
        
        try {
          // 等待页面完全渲染
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // 添加截图优化样式
          pageElement.classList.add('screenshot-mode');
          
          // 确保元素在页面上可见
          pageElement.style.display = 'block';
          pageElement.style.visibility = 'visible';
          pageElement.style.opacity = '1';
          
          // 优化截图参数，提高清晰度
          const canvas = await html2canvas(pageElement, {
            scale: 3, // 提高scale值以获得更高分辨率
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
            allowTaint: true,
            foreignObjectRendering: false,
            removeContainer: true,
            imageTimeout: 15000,
            letterRendering: true,
            onclone: function(clonedDoc) {
              // 在克隆的文档中确保字体渲染优化
              const clonedPage = clonedDoc.getElementById(`answer-page-${i}`);
              if (clonedPage) {
                clonedPage.style.webkitFontSmoothing = 'antialiased';
                clonedPage.style.mozOsxFontSmoothing = 'grayscale';
                clonedPage.style.textRendering = 'optimizeLegibility';
              }
            }
          });
          
          // 移除截图优化样式
          pageElement.classList.remove('screenshot-mode');
          
          const imageData = canvas.toDataURL('image/png', 1.0); // 最高质量
          pageImages.push({
            page: i + 1,
            data: imageData
          });
          
          console.log(`答案第${i+1}页截图完成，尺寸: ${canvas.width}x${canvas.height}，分辨率: ${canvas.width/210*25.4} DPI`);
        } catch (error) {
          console.error(`生成答案第${i+1}页图片时出错:`, error);
          // 移除截图优化样式
          pageElement.classList.remove('screenshot-mode');
        }
      }
      
      if (pageImages.length === 0) {
        alert('无法生成答案截图，请重试！');
        this.hideLoadingIndicator();
        // 移除答案容器
        if (answerContainer && answerContainer.parentNode) {
          answerContainer.parentNode.removeChild(answerContainer);
        }
        return;
      }
      
      const zip = new JSZip();
      const dateStr = new Date().toISOString().slice(0, 10);
      
      // 获取年级配置
      const gradeConfig = ExerciseGeneratorFactory.getGradeConfig();
      const gradeInfo = gradeConfig[this.currentGrade];
      
      pageImages.forEach((img, index) => {
        const base64Data = img.data.split(',')[1];
        zip.file(`${gradeInfo.title}计算练习答案-第${img.page}页-${dateStr}.png`, base64Data, {base64: true});
      });
      
      const zipBlob = await zip.generateAsync({type: 'blob'});
      saveAs(zipBlob, `${gradeInfo.title}计算练习答案-${dateStr}.zip`);
      
      // 移除答案容器
      if (answerContainer && answerContainer.parentNode) {
        answerContainer.parentNode.removeChild(answerContainer);
      }
      
      this.hideLoadingIndicator();
    } catch (error) {
      console.error('导出答案ZIP文件时出错:', error);
      alert('导出答案失败，请重试！');
      this.hideLoadingIndicator();
      
      // 确保移除答案容器
      const answerContainer = document.getElementById('answerContainer');
      if (answerContainer && answerContainer.parentNode) {
        answerContainer.parentNode.removeChild(answerContainer);
      }
    }
  }
  
  // 清除所有设置
  clearAllSettings() {
    // 清除所有选中的主题
    const checkboxes = document.querySelectorAll('input[name="topic"]:checked');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    
    // 重置难度选择到中等难度
    this.setDifficulty('medium');
    
    // 重置题目总数
    const totalCountInput = document.getElementById('totalCount');
    if (totalCountInput) {
      totalCountInput.value = 68;
    }
    
    // 重置每行题目数
    const perRowSelect = document.getElementById('perRow');
    if (perRowSelect) {
      perRowSelect.value = 4;
    }
    
    // 清除已生成的题目
    this.exercises = [];
    this.currentPages = [];
    this.exerciseAnswers = [];
    this.exercisesGenerated = false;
    
    // 清除预览区域
    const exercisesContent = document.getElementById('exercisesContent');
    const paginationInfo = document.getElementById('paginationInfo');
    if (exercisesContent) {
      exercisesContent.innerHTML = '';
    }
    if (paginationInfo) {
      paginationInfo.textContent = '';
      paginationInfo.style.display = 'none';
    }
    
    // 显示提示
    const gradeConfig = ExerciseGeneratorFactory.getGradeConfig();
    const gradeInfo = gradeConfig[this.currentGrade];
    alert(`所有${gradeInfo.title}设置已清除，请重新选择主题并生成练习题！`);
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  window.mathExerciseGenerator = new MathExerciseGenerator();
});

// 导出类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MathExerciseGenerator;
} else {
  window.MathExerciseGenerator = MathExerciseGenerator;
}