// 一年级数学题目生成器
class Grade1ExerciseGenerator {
  constructor() {
    // 10以内加法表
    this.additionFacts10 = [];
    for (let i = 0; i <= 10; i++) {
      for (let j = 0; j <= 10 - i; j++) {
        this.additionFacts10.push([i, j, i + j]);
      }
    }
    
    // 10以内减法表
    this.subtractionFacts10 = [];
    for (let i = 0; i <= 10; i++) {
      for (let j = 0; j <= i; j++) {
        this.subtractionFacts10.push([i, j, i - j]);
      }
    }
  }
  
  // 生成题目
  generateExercise(topic, difficulty) {
    switch(topic) {
      case "add10":
        return this.generateAdd10(difficulty);
      case "subtract10":
        return this.generateSubtract10(difficulty);
      case "add20":
        return this.generateAdd20(difficulty);
      case "subtract20":
        return this.generateSubtract20(difficulty);
      default:
        return this.generateAdd10(difficulty);
    }
  }
  
  // 获取难度参数
  getDifficultyParams(difficulty) {
    switch(difficulty) {
      case 'easy':
        return { maxOperand: 5, carry: false };
      case 'medium':
        return { maxOperand: 8, carry: false };
      case 'hard':
        return { maxOperand: 10, carry: true };
      default:
        return { maxOperand: 8, carry: false };
    }
  }
  
  // 生成随机整数
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 10以内加法
  generateAdd10(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    if (difficulty === 'easy' || difficulty === 'medium') {
      // 简单难度：直接从预定义的加法表中选择
      const fact = this.additionFacts10[this.getRandomInt(0, this.additionFacts10.length - 1)];
      const exercise = `${fact[0]} + ${fact[1]}`;
      return { exercise, answer: fact[2].toString() };
    } else {
      // 困难难度：随机生成
      const a = this.getRandomInt(0, params.maxOperand);
      const b = this.getRandomInt(0, params.maxOperand);
      const exercise = `${a} + ${b}`;
      const answer = a + b;
      return { exercise, answer: answer.toString() };
    }
  }
  
  // 10以内减法
  generateSubtract10(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    if (difficulty === 'easy' || difficulty === 'medium') {
      // 简单难度：直接从预定义的减法表中选择
      const fact = this.subtractionFacts10[this.getRandomInt(0, this.subtractionFacts10.length - 1)];
      const exercise = `${fact[0]} - ${fact[1]}`;
      return { exercise, answer: fact[2].toString() };
    } else {
      // 困难难度：随机生成
      const a = this.getRandomInt(0, params.maxOperand);
      const b = this.getRandomInt(0, a);
      const exercise = `${a} - ${b}`;
      const answer = a - b;
      return { exercise, answer: answer.toString() };
    }
  }
  
  // 20以内进位加法
  generateAdd20(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let a, b;
    if (difficulty === 'easy') {
      // 简单难度：和在10-15之间
      const sum = this.getRandomInt(10, 15);
      a = this.getRandomInt(sum - 9, 9); // 保证a>=1
      b = sum - a;
    } else if (difficulty === 'medium') {
      // 中等难度：和在10-18之间
      const sum = this.getRandomInt(10, 18);
      a = this.getRandomInt(sum - 9, 9);
      b = sum - a;
    } else {
      // 困难难度：和在10-20之间
      const sum = this.getRandomInt(10, 20);
      a = this.getRandomInt(sum - 9, 10);
      b = sum - a;
    }
    
    // 确保是个位数相加大于10的进位加法
    if (a % 10 + b % 10 <= 9) {
      // 如果不是进位加法，重新生成
      return this.generateAdd20(difficulty);
    }
    
    const exercise = `${a} + ${b}`;
    const answer = a + b;
    return { exercise, answer: answer.toString() };
  }
  
  // 20以内退位减法
  generateSubtract20(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let a, b;
    if (difficulty === 'easy') {
      // 简单难度：被减数在10-15之间
      a = this.getRandomInt(10, 15);
      b = this.getRandomInt(1, a % 10); // 保证需要退位
    } else if (difficulty === 'medium') {
      // 中等难度：被减数在10-18之间
      a = this.getRandomInt(10, 18);
      b = this.getRandomInt(1, a % 10);
    } else {
      // 困难难度：被减数在10-20之间
      a = this.getRandomInt(10, 20);
      b = this.getRandomInt(1, a % 10);
    }
    
    const exercise = `${a} - ${b}`;
    const answer = a - b;
    return { exercise, answer: answer.toString() };
  }
  
  // 计算表达式结果
  calculateExpression(expression) {
    try {
      // 简单的表达式计算（仅支持加减法）
      const parts = expression.split(' ');
      let result = parseInt(parts[0]);
      
      for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const operand = parseInt(parts[i + 1]);
        
        if (operator === '+') {
          result += operand;
        } else if (operator === '-') {
          result -= operand;
        }
      }
      
      return result.toString();
    } catch (error) {
      console.error('计算表达式时出错:', expression, error);
      return '?';
    }
  }
}

// 导出类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Grade1ExerciseGenerator;
} else {
  window.Grade1ExerciseGenerator = Grade1ExerciseGenerator;
}