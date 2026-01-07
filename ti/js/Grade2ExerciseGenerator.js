// 二年级数学题目生成器
class Grade2ExerciseGenerator {
  constructor() {
    // 表内乘法 facts
    this.multiplicationFacts = [];
    for (let i = 2; i <= 9; i++) {
      for (let j = 2; j <= 9; j++) {
        this.multiplicationFacts.push([i, j, i * j]);
      }
    }
    
    // 表内除法 facts
    this.divisionFacts = [];
    for (let i = 2; i <= 9; i++) {
      for (let j = 2; j <= 9; j++) {
        this.divisionFacts.push([i * j, i, j]);
      }
    }
  }
  
  // 生成题目
  generateExercise(topic, difficulty) {
    switch(topic) {
      case "add100noCarry":
        return this.generateAdd100NoCarry(difficulty);
      case "subtract100noBorrow":
        return this.generateSubtract100NoBorrow(difficulty);
      case "add100carry":
        return this.generateAdd100Carry(difficulty);
      case "subtract100borrow":
        return this.generateSubtract100Borrow(difficulty);
      case "multiplication":
        return this.generateMultiplication(difficulty);
      case "division":
        return this.generateDivision(difficulty);
      case "multiplyAdd":
        return this.generateMultiplyAdd(difficulty);
      case "multiplySubtract":
        return this.generateMultiplySubtract(difficulty);
      default:
        return this.generateAdd100NoCarry(difficulty);
    }
  }
  
  // 获取难度参数
  getDifficultyParams(difficulty) {
    switch(difficulty) {
      case 'easy':
        return { maxOperand: 50, carry: false };
      case 'medium':
        return { maxOperand: 80, carry: false };
      case 'hard':
        return { maxOperand: 100, carry: true };
      default:
        return { maxOperand: 80, carry: false };
    }
  }
  
  // 生成随机整数
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 100以内加法（不进位）
  generateAdd100NoCarry(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let a, b;
    if (difficulty === 'easy') {
      // 十位数1-5，个位数0-9，不进位
      const tensA = this.getRandomInt(1, 5);
      const onesA = this.getRandomInt(0, 9);
      a = tensA * 10 + onesA;
      
      const tensB = this.getRandomInt(1, 5);
      const onesB = this.getRandomInt(0, 9 - onesA);
      b = tensB * 10 + onesB;
    } else if (difficulty === 'medium') {
      // 十位数1-8，个位数0-9，不进位
      const tensA = this.getRandomInt(1, 8);
      const onesA = this.getRandomInt(0, 9);
      a = tensA * 10 + onesA;
      
      const tensB = this.getRandomInt(1, 8);
      const onesB = this.getRandomInt(0, 9 - onesA);
      b = tensB * 10 + onesB;
    } else {
      // 十位数1-9，个位数0-9，不进位
      const tensA = this.getRandomInt(1, 9);
      const onesA = this.getRandomInt(0, 9);
      a = tensA * 10 + onesA;
      
      const tensB = this.getRandomInt(1, 9);
      const onesB = this.getRandomInt(0, 9 - onesA);
      b = tensB * 10 + onesB;
    }
    
    const exercise = `${a} + ${b}`;
    const answer = a + b;
    return { exercise, answer: answer.toString() };
  }
  
  // 100以内减法（不退位）
  generateSubtract100NoBorrow(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let a, b;
    if (difficulty === 'easy') {
      // 十位数2-5，个位数0-9
      const tensA = this.getRandomInt(2, 5);
      const onesA = this.getRandomInt(0, 9);
      a = tensA * 10 + onesA;
      
      const tensB = this.getRandomInt(1, tensA);
      const onesB = this.getRandomInt(0, onesA);
      b = tensB * 10 + onesB;
    } else if (difficulty === 'medium') {
      // 十位数2-8，个位数0-9
      const tensA = this.getRandomInt(2, 8);
      const onesA = this.getRandomInt(0, 9);
      a = tensA * 10 + onesA;
      
      const tensB = this.getRandomInt(1, tensA);
      const onesB = this.getRandomInt(0, onesA);
      b = tensB * 10 + onesB;
    } else {
      // 十位数2-9，个位数0-9
      const tensA = this.getRandomInt(2, 9);
      const onesA = this.getRandomInt(0, 9);
      a = tensA * 10 + onesA;
      
      const tensB = this.getRandomInt(1, tensA);
      const onesB = this.getRandomInt(0, onesA);
      b = tensB * 10 + onesB;
    }
    
    const exercise = `${a} - ${b}`;
    const answer = a - b;
    return { exercise, answer: answer.toString() };
  }
  
  // 100以内加法（进位）
  generateAdd100Carry(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let a, b;
    if (difficulty === 'easy') {
      // 和在20-50之间
      const sum = this.getRandomInt(20, 50);
      const tensA = this.getRandomInt(1, Math.min(4, Math.floor(sum/10)));
      const onesA = this.getRandomInt(1, 9);
      a = tensA * 10 + onesA;
      
      // 确保需要进位
      const onesB = this.getRandomInt(10 - onesA, 9);
      const tensB = Math.floor((sum - a - onesB) / 10);
      b = tensB * 10 + onesB;
    } else if (difficulty === 'medium') {
      // 和在50-80之间
      const sum = this.getRandomInt(50, 80);
      const tensA = this.getRandomInt(1, Math.min(7, Math.floor(sum/10)));
      const onesA = this.getRandomInt(1, 9);
      a = tensA * 10 + onesA;
      
      // 确保需要进位
      const onesB = this.getRandomInt(10 - onesA, 9);
      const tensB = Math.floor((sum - a - onesB) / 10);
      b = tensB * 10 + onesB;
    } else {
      // 和在80-100之间
      const sum = this.getRandomInt(80, 100);
      const tensA = this.getRandomInt(1, 9);
      const onesA = this.getRandomInt(1, 9);
      a = tensA * 10 + onesA;
      
      // 确保需要进位
      const onesB = this.getRandomInt(10 - onesA, 9);
      const tensB = Math.floor((sum - a - onesB) / 10);
      b = tensB * 10 + onesB;
    }
    
    // 确保是个有效的进位加法
    if (a % 10 + b % 10 <= 9) {
      // 如果不是进位加法，重新生成
      return this.generateAdd100Carry(difficulty);
    }
    
    // 确保结果不超过100
    if (a + b > 100) {
      return this.generateAdd100Carry(difficulty);
    }
    
    const exercise = `${a} + ${b}`;
    const answer = a + b;
    return { exercise, answer: answer.toString() };
  }
  
  // 100以内减法（退位）
  generateSubtract100Borrow(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let a, b;
    if (difficulty === 'easy') {
      // 被减数在20-50之间
      a = this.getRandomInt(20, 50);
      const onesA = a % 10;
      const onesB = this.getRandomInt(onesA + 1, 9);
      const tensB = this.getRandomInt(0, Math.floor(a/10) - 1);
      b = tensB * 10 + onesB;
    } else if (difficulty === 'medium') {
      // 被减数在50-80之间
      a = this.getRandomInt(50, 80);
      const onesA = a % 10;
      const onesB = this.getRandomInt(onesA + 1, 9);
      const tensB = this.getRandomInt(0, Math.floor(a/10) - 1);
      b = tensB * 10 + onesB;
    } else {
      // 被减数在80-100之间
      a = this.getRandomInt(80, 100);
      const onesA = a % 10;
      const onesB = this.getRandomInt(onesA + 1, 9);
      const tensB = this.getRandomInt(0, Math.floor(a/10) - 1);
      b = tensB * 10 + onesB;
    }
    
    // 确保需要退位
    if (a % 10 >= b % 10) {
      return this.generateSubtract100Borrow(difficulty);
    }
    
    const exercise = `${a} - ${b}`;
    const answer = a - b;
    return { exercise, answer: answer.toString() };
  }
  
  // 表内乘法
  generateMultiplication(difficulty) {
    let fact;
    if (difficulty === 'easy') {
      // 简单的乘法表（2-5）
      const facts = this.multiplicationFacts.filter(f => f[0] <= 5 && f[1] <= 5);
      fact = facts[this.getRandomInt(0, facts.length - 1)];
    } else if (difficulty === 'medium') {
      // 中等难度乘法表（2-7）
      const facts = this.multiplicationFacts.filter(f => f[0] <= 7 && f[1] <= 7);
      fact = facts[this.getRandomInt(0, facts.length - 1)];
    } else {
      // 困难难度乘法表（2-9）
      fact = this.multiplicationFacts[this.getRandomInt(0, this.multiplicationFacts.length - 1)];
    }
    
    const exercise = `${fact[0]} × ${fact[1]}`;
    return { exercise, answer: fact[2].toString() };
  }
  
  // 表内除法
  generateDivision(difficulty) {
    let fact;
    if (difficulty === 'easy') {
      // 简单的除法表（除数2-5）
      const facts = this.divisionFacts.filter(f => f[1] <= 5);
      fact = facts[this.getRandomInt(0, facts.length - 1)];
    } else if (difficulty === 'medium') {
      // 中等难度除法表（除数2-7）
      const facts = this.divisionFacts.filter(f => f[1] <= 7);
      fact = facts[this.getRandomInt(0, facts.length - 1)];
    } else {
      // 困难难度除法表（除数2-9）
      fact = this.divisionFacts[this.getRandomInt(0, this.divisionFacts.length - 1)];
    }
    
    const exercise = `${fact[0]} ÷ ${fact[1]}`;
    return { exercise, answer: fact[2].toString() };
  }
  
  // 乘加混合运算
  generateMultiplyAdd(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let a, b, c;
    if (difficulty === 'easy') {
      a = this.getRandomInt(1, 10);
      b = this.getRandomInt(2, 5);
      c = this.getRandomInt(1, 20);
    } else if (difficulty === 'medium') {
      a = this.getRandomInt(1, 20);
      b = this.getRandomInt(2, 7);
      c = this.getRandomInt(1, 30);
    } else {
      a = this.getRandomInt(1, 30);
      b = this.getRandomInt(2, 9);
      c = this.getRandomInt(1, 50);
    }
    
    // 随机决定运算顺序
    if (Math.random() < 0.5) {
      const exercise = `${a} + ${b} × ${c}`;
      const answer = a + b * c;
      return { exercise, answer: answer.toString() };
    } else {
      const exercise = `${b} × ${c} + ${a}`;
      const answer = b * c + a;
      return { exercise, answer: answer.toString() };
    }
  }
  
  // 乘减混合运算
  generateMultiplySubtract(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let a, b, c;
    if (difficulty === 'easy') {
      a = this.getRandomInt(10, 30);
      b = this.getRandomInt(2, 5);
      c = this.getRandomInt(1, 10);
    } else if (difficulty === 'medium') {
      a = this.getRandomInt(20, 50);
      b = this.getRandomInt(2, 7);
      c = this.getRandomInt(1, 20);
    } else {
      a = this.getRandomInt(30, 80);
      b = this.getRandomInt(2, 9);
      c = this.getRandomInt(1, 30);
    }
    
    // 确保结果为正数
    if (a < b * c) {
      // 交换位置
      const temp = a;
      a = b * c + this.getRandomInt(5, 20);
      b = temp;
    }
    
    // 随机决定运算顺序
    if (Math.random() < 0.5) {
      const exercise = `${a} - ${b} × ${c}`;
      const answer = a - b * c;
      return { exercise, answer: answer.toString() };
    } else {
      const exercise = `${b} × ${c} - ${this.getRandomInt(0, b * c - 1)}`;
      const answer = b * c - parseInt(exercise.split(' ')[2]);
      return { exercise, answer: answer.toString() };
    }
  }
  
  // 计算表达式结果
  calculateExpression(expression) {
    try {
      // 替换中文符号为英文符号
      let expr = expression
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/\s+/g, '');
      
      // 先计算乘除法
      const multiplyDivideRegex = /(\d+)([*/])(\d+)/;
      let match;
      
      while ((match = expr.match(multiplyDivideRegex))) {
        const left = parseInt(match[1]);
        const operator = match[2];
        const right = parseInt(match[3]);
        
        let result;
        if (operator === '*') {
          result = left * right;
        } else if (operator === '/') {
          if (right === 0) throw new Error('除以零错误');
          result = left / right;
        }
        
        expr = expr.replace(multiplyDivideRegex, result);
      }
      
      // 再计算加减法
      const addSubtractRegex = /(\d+)([+\-])(\d+)/;
      
      while ((match = expr.match(addSubtractRegex))) {
        const left = parseInt(match[1]);
        const operator = match[2];
        const right = parseInt(match[3]);
        
        let result;
        if (operator === '+') {
          result = left + right;
        } else if (operator === '-') {
          result = left - right;
        }
        
        expr = expr.replace(addSubtractRegex, result);
      }
      
      return expr;
    } catch (error) {
      console.error('计算表达式时出错:', expression, error);
      return '?';
    }
  }
}

// 导出类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Grade2ExerciseGenerator;
} else {
  window.Grade2ExerciseGenerator = Grade2ExerciseGenerator;
}