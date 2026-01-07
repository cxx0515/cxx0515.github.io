// 四年级数学题目生成器
class Grade4ExerciseGenerator {
  constructor() {
    // 分数加减法 facts（同分母）
    this.sameDenominatorFractions = [];
    for (let denom = 2; denom <= 10; denom++) {
      for (let num1 = 1; num1 < denom; num1++) {
        for (let num2 = 1; num2 < denom; num2++) {
          this.sameDenominatorFractions.push([num1, denom, num2]);
        }
      }
    }
    
    // 简单的异分母分数（分母较小且有公倍数）
    this.simpleDifferentDenominatorFractions = [
      [1, 2, 1, 4], [1, 3, 1, 6], [1, 4, 1, 8], [1, 2, 1, 3],
      [1, 3, 1, 2], [1, 4, 1, 2], [1, 5, 1, 10], [1, 6, 1, 3]
    ];
  }
  
  // 生成题目
  generateExercise(topic, difficulty) {
    switch(topic) {
      case "multiply3x2":
        return this.generateMultiply3x2(difficulty);
      case "divide3x2":
        return this.generateDivide3x2(difficulty);
      case "fractionAddSame":
        return this.generateFractionAddSame(difficulty);
      case "fractionSubtractSame":
        return this.generateFractionSubtractSame(difficulty);
      case "fractionAddDiff":
        return this.generateFractionAddDiff(difficulty);
      case "fractionSubtractDiff":
        return this.generateFractionSubtractDiff(difficulty);
      case "mixedOperations3":
        return this.generateMixedOperations3(difficulty);
      case "operationLaws":
        return this.generateOperationLaws(difficulty);
      default:
        return this.generateMultiply3x2(difficulty);
    }
  }
  
  // 获取难度参数
  getDifficultyParams(difficulty) {
    switch(difficulty) {
      case 'easy':
        return { maxOperand: 500 };
      case 'medium':
        return { maxOperand: 800 };
      case 'hard':
        return { maxOperand: 999 };
      default:
        return { maxOperand: 800 };
    }
  }
  
  // 生成随机整数
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 生成三位数乘两位数
  generateMultiply3x2(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let threeDigit, twoDigit;
    if (difficulty === 'easy') {
      threeDigit = this.getRandomInt(100, 300);
      twoDigit = this.getRandomInt(10, 30);
    } else if (difficulty === 'medium') {
      threeDigit = this.getRandomInt(200, 600);
      twoDigit = this.getRandomInt(20, 60);
    } else {
      threeDigit = this.getRandomInt(300, 999);
      twoDigit = this.getRandomInt(30, 99);
    }
    
    const exercise = `${threeDigit} × ${twoDigit}`;
    const answer = threeDigit * twoDigit;
    return { exercise, answer: answer.toString() };
  }
  
  // 生成除数是两位数的除法
  generateDivide3x2(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let dividend, divisor;
    if (difficulty === 'easy') {
      // 生成能整除的情况
      divisor = this.getRandomInt(10, 30);
      const quotient = this.getRandomInt(5, 20);
      dividend = divisor * quotient;
    } else if (difficulty === 'medium') {
      divisor = this.getRandomInt(20, 60);
      const quotient = this.getRandomInt(10, 30);
      dividend = divisor * quotient;
    } else {
      divisor = this.getRandomInt(30, 99);
      const quotient = this.getRandomInt(15, 50);
      dividend = divisor * quotient;
    }
    
    const exercise = `${dividend} ÷ ${divisor}`;
    const answer = dividend / divisor;
    return { exercise, answer: answer.toString() };
  }
  
  // 生成同分母分数加法
  generateFractionAddSame(difficulty) {
    let fraction;
    if (difficulty === 'easy') {
      // 简单同分母分数
      const facts = this.sameDenominatorFractions.filter(f => f[1] <= 5);
      fraction = facts[this.getRandomInt(0, facts.length - 1)];
    } else if (difficulty === 'medium') {
      // 中等同分母分数
      const facts = this.sameDenominatorFractions.filter(f => f[1] <= 8);
      fraction = facts[this.getRandomInt(0, facts.length - 1)];
    } else {
      // 复杂同分母分数
      fraction = this.sameDenominatorFractions[this.getRandomInt(0, this.sameDenominatorFractions.length - 1)];
    }
    
    const num1 = fraction[0];
    const denom = fraction[1];
    const num2 = fraction[2];
    
    const exercise = `${num1}/${denom} + ${num2}/${denom}`;
    const numeratorSum = num1 + num2;
    
    // 化简分数
    const gcd = this.gcd(numeratorSum, denom);
    const simplifiedNum = numeratorSum / gcd;
    const simplifiedDenom = denom / gcd;
    
    let answer;
    if (simplifiedDenom === 1) {
      answer = simplifiedNum.toString();
    } else {
      answer = `${simplifiedNum}/${simplifiedDenom}`;
    }
    
    return { exercise, answer };
  }
  
  // 生成同分母分数减法
  generateFractionSubtractSame(difficulty) {
    let fraction;
    if (difficulty === 'easy') {
      // 简单同分母分数
      const facts = this.sameDenominatorFractions.filter(f => f[1] <= 5 && f[0] > f[2]);
      fraction = facts[this.getRandomInt(0, facts.length - 1)];
    } else if (difficulty === 'medium') {
      // 中等同分母分数
      const facts = this.sameDenominatorFractions.filter(f => f[1] <= 8 && f[0] > f[2]);
      fraction = facts[this.getRandomInt(0, facts.length - 1)];
    } else {
      // 复杂同分母分数
      const facts = this.sameDenominatorFractions.filter(f => f[0] > f[2]);
      fraction = facts[this.getRandomInt(0, facts.length - 1)];
    }
    
    const num1 = fraction[0];
    const denom = fraction[1];
    const num2 = fraction[2];
    
    const exercise = `${num1}/${denom} - ${num2}/${denom}`;
    const numeratorDiff = num1 - num2;
    
    // 化简分数
    const gcd = this.gcd(numeratorDiff, denom);
    const simplifiedNum = numeratorDiff / gcd;
    const simplifiedDenom = denom / gcd;
    
    let answer;
    if (simplifiedNum === 0) {
      answer = "0";
    } else if (simplifiedDenom === 1) {
      answer = simplifiedNum.toString();
    } else {
      answer = `${simplifiedNum}/${simplifiedDenom}`;
    }
    
    return { exercise, answer };
  }
  
  // 生成异分母分数加法
  generateFractionAddDiff(difficulty) {
    let fractions;
    if (difficulty === 'easy' || difficulty === 'medium') {
      // 使用预定义的简单异分母分数
      fractions = this.simpleDifferentDenominatorFractions[this.getRandomInt(0, this.simpleDifferentDenominatorFractions.length - 1)];
    } else {
      // 随机生成异分母分数
      const denom1 = this.getRandomInt(2, 10);
      const denom2 = this.getRandomInt(2, 10);
      const num1 = this.getRandomInt(1, denom1 - 1);
      const num2 = this.getRandomInt(1, denom2 - 1);
      fractions = [num1, denom1, num2, denom2];
    }
    
    const num1 = fractions[0];
    const denom1 = fractions[1];
    const num2 = fractions[2];
    const denom2 = fractions[3];
    
    const exercise = `${num1}/${denom1} + ${num2}/${denom2}`;
    
    // 通分后计算
    const lcm = this.lcm(denom1, denom2);
    const newNum1 = num1 * (lcm / denom1);
    const newNum2 = num2 * (lcm / denom2);
    const numeratorSum = newNum1 + newNum2;
    
    // 化简分数
    const gcd = this.gcd(numeratorSum, lcm);
    const simplifiedNum = numeratorSum / gcd;
    const simplifiedDenom = lcm / gcd;
    
    let answer;
    if (simplifiedDenom === 1) {
      answer = simplifiedNum.toString();
    } else {
      answer = `${simplifiedNum}/${simplifiedDenom}`;
    }
    
    return { exercise, answer };
  }
  
  // 生成异分母分数减法
  generateFractionSubtractDiff(difficulty) {
    let fractions;
    if (difficulty === 'easy' || difficulty === 'medium') {
      // 使用预定义的简单异分母分数
      fractions = this.simpleDifferentDenominatorFractions[this.getRandomInt(0, this.simpleDifferentDenominatorFractions.length - 1)];
    } else {
      // 随机生成异分母分数
      const denom1 = this.getRandomInt(2, 10);
      const denom2 = this.getRandomInt(2, 10);
      const num1 = this.getRandomInt(1, denom1 - 1);
      const num2 = this.getRandomInt(1, denom2 - 1);
      fractions = [num1, denom1, num2, denom2];
    }
    
    const num1 = fractions[0];
    const denom1 = fractions[1];
    const num2 = fractions[2];
    const denom2 = fractions[3];
    
    // 确保第一个分数大于第二个分数
    let exercise, numeratorDiff;
    const value1 = num1 / denom1;
    const value2 = num2 / denom2;
    
    if (value1 >= value2) {
      exercise = `${num1}/${denom1} - ${num2}/${denom2}`;
      
      // 通分后计算
      const lcm = this.lcm(denom1, denom2);
      const newNum1 = num1 * (lcm / denom1);
      const newNum2 = num2 * (lcm / denom2);
      numeratorDiff = newNum1 - newNum2;
    } else {
      exercise = `${num2}/${denom2} - ${num1}/${denom1}`;
      
      // 通分后计算
      const lcm = this.lcm(denom1, denom2);
      const newNum1 = num1 * (lcm / denom1);
      const newNum2 = num2 * (lcm / denom2);
      numeratorDiff = newNum2 - newNum1;
    }
    
    // 如果结果为0
    if (numeratorDiff === 0) {
      return { exercise, answer: "0" };
    }
    
    // 通分后计算
    const lcm = this.lcm(denom1, denom2);
    const newNum1 = num1 * (lcm / denom1);
    const newNum2 = num2 * (lcm / denom2);
    
    // 重新确定计算方式
    if (value1 >= value2) {
      numeratorDiff = newNum1 - newNum2;
    } else {
      numeratorDiff = newNum2 - newNum1;
    }
    
    // 化简分数
    const gcd = this.gcd(numeratorDiff, lcm);
    const simplifiedNum = numeratorDiff / gcd;
    const simplifiedDenom = lcm / gcd;
    
    let answer;
    if (simplifiedDenom === 1) {
      answer = simplifiedNum.toString();
    } else {
      answer = `${simplifiedNum}/${simplifiedDenom}`;
    }
    
    return { exercise, answer };
  }
  
  // 生成三步四则混合运算
  generateMixedOperations3(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let a, b, c, d;
    if (difficulty === 'easy') {
      a = this.getRandomInt(1, 20);
      b = this.getRandomInt(2, 10);
      c = this.getRandomInt(1, 20);
      d = this.getRandomInt(1, 10);
    } else if (difficulty === 'medium') {
      a = this.getRandomInt(10, 50);
      b = this.getRandomInt(2, 20);
      c = this.getRandomInt(10, 50);
      d = this.getRandomInt(1, 20);
    } else {
      a = this.getRandomInt(20, 100);
      b = this.getRandomInt(2, 30);
      c = this.getRandomInt(20, 100);
      d = this.getRandomInt(1, 30);
    }
    
    // 随机选择运算类型
    const operations = [
      `${a} + ${b} × ${c} - ${d}`,
      `${a} - ${b} + ${c} × ${d}`,
      `${a} × ${b} + ${c} - ${d}`,
      `${a} + ${b} - ${c} ÷ ${d}`,
      `${a} - ${b} × ${c} + ${d}`,
      `${a} × ${b} - ${c} + ${d}`
    ];
    
    const exercise = operations[this.getRandomInt(0, operations.length - 1)];
    const answer = this.calculateExpression(exercise);
    return { exercise, answer };
  }
  
  // 生成运算定律应用题
  generateOperationLaws(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let a, b, c;
    if (difficulty === 'easy') {
      a = this.getRandomInt(1, 20);
      b = this.getRandomInt(1, 20);
      c = this.getRandomInt(1, 20);
    } else if (difficulty === 'medium') {
      a = this.getRandomInt(10, 50);
      b = this.getRandomInt(10, 50);
      c = this.getRandomInt(10, 50);
    } else {
      a = this.getRandomInt(20, 100);
      b = this.getRandomInt(20, 100);
      c = this.getRandomInt(20, 100);
    }
    
    // 随机选择运算定律类型
    const lawTypes = [
      {
        // 乘法分配律
        exercise: `${a} × ${b} + ${a} × ${c}`,
        answer: (a * b + a * c).toString()
      },
      {
        // 乘法分配律（变形）
        exercise: `${a} × (${b} + ${c})`,
        answer: (a * (b + c)).toString()
      },
      {
        // 乘法结合律
        exercise: `(${a} × ${b}) × ${c}`,
        answer: (a * b * c).toString()
      },
      {
        // 乘法交换律和结合律
        exercise: `${a} × ${b} × ${c}`,
        answer: (a * b * c).toString()
      }
    ];
    
    return lawTypes[this.getRandomInt(0, lawTypes.length - 1)];
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
      const addSubtractRegex = /(-?\d+)([+\-])(-?\d+)/;
      
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
      
      // 处理结果
      const result = parseFloat(expr);
      if (result % 1 !== 0) {
        // 保留适当的小数位数
        return parseFloat(result.toFixed(2)).toString();
      }
      return result.toString();
    } catch (error) {
      console.error('计算表达式时出错:', expression, error);
      return '?';
    }
  }
  
  // 求最大公约数
  gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // 求最小公倍数
  lcm(a, b) {
    return (a * b) / this.gcd(a, b);
  }
}

// 导出类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Grade4ExerciseGenerator;
} else {
  window.Grade4ExerciseGenerator = Grade4ExerciseGenerator;
}