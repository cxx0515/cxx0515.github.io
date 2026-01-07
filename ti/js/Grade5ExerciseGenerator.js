// 五年级数学题目生成器
class Grade5ExerciseGenerator {
  constructor() {
    // 异分母分数加减法 facts
    this.differentDenominatorFractions = [];
    for (let denom1 = 2; denom1 <= 10; denom1++) {
      for (let denom2 = 2; denom2 <= 10; denom2++) {
        if (denom1 !== denom2) {
          for (let num1 = 1; num1 < denom1; num1++) {
            for (let num2 = 1; num2 < denom2; num2++) {
              this.differentDenominatorFractions.push([num1, denom1, num2, denom2]);
            }
          }
        }
      }
    }
  }
  
  // 生成题目
  generateExercise(topic, difficulty) {
    switch(topic) {
      case "decimalMultiplyInt":
        return this.generateDecimalMultiplyInt(difficulty);
      case "decimalMultiplyDecimal":
        return this.generateDecimalMultiplyDecimal(difficulty);
      case "decimalDivideInt":
        return this.generateDecimalDivideInt(difficulty);
      case "decimalDivideDecimal":
        return this.generateDecimalDivideDecimal(difficulty);
      case "fractionAddDiff":
        return this.generateFractionAddDiff(difficulty);
      case "fractionSubtractDiff":
        return this.generateFractionSubtractDiff(difficulty);
      case "fractionMultiplyInt":
        return this.generateFractionMultiplyInt(difficulty);
      case "fractionMultiplyFraction":
        return this.generateFractionMultiplyFraction(difficulty);
      default:
        return this.generateDecimalMultiplyInt(difficulty);
    }
  }
  
  // 获取难度参数
  getDifficultyParams(difficulty) {
    switch(difficulty) {
      case 'easy':
        return { maxOperand: 10, decimalPlaces: 1 };
      case 'medium':
        return { maxOperand: 50, decimalPlaces: 2 };
      case 'hard':
        return { maxOperand: 100, decimalPlaces: 2 };
      default:
        return { maxOperand: 50, decimalPlaces: 2 };
    }
  }
  
  // 生成随机整数
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 生成随机小数
  getRandomDecimal(max, decimalPlaces) {
    const intValue = this.getRandomInt(1, max);
    if (decimalPlaces === 1) {
      const decimalPart = this.getRandomInt(1, 9);
      return parseFloat(`${intValue}.${decimalPart}`);
    } else {
      const decimalPart = this.getRandomInt(1, 99);
      const decimalStr = decimalPart.toString().padStart(2, '0');
      return parseFloat(`${intValue}.${decimalStr}`);
    }
  }
  
  // 生成小数乘整数
  generateDecimalMultiplyInt(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let decimal, integer;
    if (difficulty === 'easy') {
      decimal = this.getRandomDecimal(10, 1);
      integer = this.getRandomInt(2, 10);
    } else if (difficulty === 'medium') {
      decimal = this.getRandomDecimal(50, 2);
      integer = this.getRandomInt(2, 20);
    } else {
      decimal = this.getRandomDecimal(100, 2);
      integer = this.getRandomInt(2, 50);
    }
    
    const exercise = `${decimal} × ${integer}`;
    const answer = decimal * integer;
    
    // 格式化答案，保留适当的小数位数
    const formattedAnswer = this.formatDecimal(answer);
    return { exercise, answer: formattedAnswer };
  }
  
  // 生成小数乘小数
  generateDecimalMultiplyDecimal(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let decimal1, decimal2;
    if (difficulty === 'easy') {
      decimal1 = this.getRandomDecimal(5, 1);
      decimal2 = this.getRandomDecimal(5, 1);
    } else if (difficulty === 'medium') {
      decimal1 = this.getRandomDecimal(10, 2);
      decimal2 = this.getRandomDecimal(10, 2);
    } else {
      decimal1 = this.getRandomDecimal(20, 2);
      decimal2 = this.getRandomDecimal(20, 2);
    }
    
    const exercise = `${decimal1} × ${decimal2}`;
    const answer = decimal1 * decimal2;
    
    // 格式化答案，保留适当的小数位数
    const formattedAnswer = this.formatDecimal(answer);
    return { exercise, answer: formattedAnswer };
  }
  
  // 生成小数除以整数
  generateDecimalDivideInt(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let decimal, integer;
    if (difficulty === 'easy') {
      // 确保能整除
      integer = this.getRandomInt(2, 10);
      const result = this.getRandomDecimal(5, 1);
      decimal = result * integer;
    } else if (difficulty === 'medium') {
      integer = this.getRandomInt(2, 20);
      const result = this.getRandomDecimal(10, 2);
      decimal = result * integer;
    } else {
      integer = this.getRandomInt(2, 50);
      const result = this.getRandomDecimal(20, 2);
      decimal = result * integer;
    }
    
    const exercise = `${decimal} ÷ ${integer}`;
    const answer = decimal / integer;
    
    // 格式化答案，保留适当的小数位数
    const formattedAnswer = this.formatDecimal(answer);
    return { exercise, answer: formattedAnswer };
  }
  
  // 生成小数除以小数
  generateDecimalDivideDecimal(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let decimal1, decimal2;
    if (difficulty === 'easy') {
      // 确保能整除，结果为整数或一位小数
      decimal2 = this.getRandomDecimal(5, 1);
      const result = this.getRandomInt(2, 10);
      decimal1 = decimal2 * result;
    } else if (difficulty === 'medium') {
      decimal2 = this.getRandomDecimal(10, 2);
      const result = this.getRandomInt(2, 20);
      decimal1 = decimal2 * result;
    } else {
      decimal2 = this.getRandomDecimal(20, 2);
      const result = this.getRandomInt(2, 50);
      decimal1 = decimal2 * result;
    }
    
    const exercise = `${decimal1} ÷ ${decimal2}`;
    const answer = decimal1 / decimal2;
    
    // 格式化答案，保留适当的小数位数
    const formattedAnswer = this.formatDecimal(answer);
    return { exercise, answer: formattedAnswer };
  }
  
  // 生成异分母分数加法
  generateFractionAddDiff(difficulty) {
    let fractions;
    if (difficulty === 'easy') {
      // 使用分母较小的分数
      const filtered = this.differentDenominatorFractions.filter(f => 
        f[1] <= 6 && f[3] <= 6);
      fractions = filtered[this.getRandomInt(0, filtered.length - 1)];
    } else if (difficulty === 'medium') {
      // 使用中等分母的分数
      const filtered = this.differentDenominatorFractions.filter(f => 
        f[1] <= 8 && f[3] <= 8);
      fractions = filtered[this.getRandomInt(0, filtered.length - 1)];
    } else {
      // 使用任意分母的分数
      fractions = this.differentDenominatorFractions[this.getRandomInt(0, this.differentDenominatorFractions.length - 1)];
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
    if (difficulty === 'easy') {
      // 使用分母较小的分数
      const filtered = this.differentDenominatorFractions.filter(f => 
        f[1] <= 6 && f[3] <= 6);
      fractions = filtered[this.getRandomInt(0, filtered.length - 1)];
    } else if (difficulty === 'medium') {
      // 使用中等分母的分数
      const filtered = this.differentDenominatorFractions.filter(f => 
        f[1] <= 8 && f[3] <= 8);
      fractions = filtered[this.getRandomInt(0, filtered.length - 1)];
    } else {
      // 使用任意分母的分数
      fractions = this.differentDenominatorFractions[this.getRandomInt(0, this.differentDenominatorFractions.length - 1)];
    }
    
    const num1 = fractions[0];
    const denom1 = fractions[1];
    const num2 = fractions[2];
    const denom2 = fractions[3];
    
    // 确保第一个分数大于第二个分数
    const value1 = num1 / denom1;
    const value2 = num2 / denom2;
    
    let exercise, numeratorDiff, finalDenom;
    if (value1 >= value2) {
      exercise = `${num1}/${denom1} - ${num2}/${denom2}`;
      
      // 通分后计算
      const lcm = this.lcm(denom1, denom2);
      finalDenom = lcm;
      const newNum1 = num1 * (lcm / denom1);
      const newNum2 = num2 * (lcm / denom2);
      numeratorDiff = newNum1 - newNum2;
    } else {
      exercise = `${num2}/${denom2} - ${num1}/${denom1}`;
      
      // 通分后计算
      const lcm = this.lcm(denom1, denom2);
      finalDenom = lcm;
      const newNum1 = num1 * (lcm / denom1);
      const newNum2 = num2 * (lcm / denom2);
      numeratorDiff = newNum2 - newNum1;
    }
    
    // 如果结果为0
    if (numeratorDiff === 0) {
      return { exercise, answer: "0" };
    }
    
    // 化简分数
    const gcd = this.gcd(Math.abs(numeratorDiff), finalDenom);
    const simplifiedNum = numeratorDiff / gcd;
    const simplifiedDenom = finalDenom / gcd;
    
    let answer;
    if (simplifiedDenom === 1) {
      answer = simplifiedNum.toString();
    } else {
      answer = `${simplifiedNum}/${simplifiedDenom}`;
    }
    
    return { exercise, answer };
  }
  
  // 生成分数乘整数
  generateFractionMultiplyInt(difficulty) {
    let num, denom, integer;
    if (difficulty === 'easy') {
      num = this.getRandomInt(1, 5);
      denom = this.getRandomInt(num + 1, 10);
      integer = this.getRandomInt(2, 5);
    } else if (difficulty === 'medium') {
      num = this.getRandomInt(1, 8);
      denom = this.getRandomInt(num + 1, 12);
      integer = this.getRandomInt(2, 10);
    } else {
      num = this.getRandomInt(1, 12);
      denom = this.getRandomInt(num + 1, 15);
      integer = this.getRandomInt(2, 20);
    }
    
    const exercise = `${num}/${denom} × ${integer}`;
    
    // 计算结果
    const resultNum = num * integer;
    
    // 化简分数
    const gcd = this.gcd(resultNum, denom);
    const simplifiedNum = resultNum / gcd;
    const simplifiedDenom = denom / gcd;
    
    let answer;
    if (simplifiedDenom === 1) {
      answer = simplifiedNum.toString();
    } else {
      answer = `${simplifiedNum}/${simplifiedDenom}`;
    }
    
    return { exercise, answer };
  }
  
  // 生成分数乘分数
  generateFractionMultiplyFraction(difficulty) {
    let num1, denom1, num2, denom2;
    if (difficulty === 'easy') {
      num1 = this.getRandomInt(1, 4);
      denom1 = this.getRandomInt(num1 + 1, 6);
      num2 = this.getRandomInt(1, 4);
      denom2 = this.getRandomInt(num2 + 1, 6);
    } else if (difficulty === 'medium') {
      num1 = this.getRandomInt(1, 6);
      denom1 = this.getRandomInt(num1 + 1, 10);
      num2 = this.getRandomInt(1, 6);
      denom2 = this.getRandomInt(num2 + 1, 10);
    } else {
      num1 = this.getRandomInt(1, 10);
      denom1 = this.getRandomInt(num1 + 1, 15);
      num2 = this.getRandomInt(1, 10);
      denom2 = this.getRandomInt(num2 + 1, 15);
    }
    
    const exercise = `${num1}/${denom1} × ${num2}/${denom2}`;
    
    // 计算结果
    const resultNum = num1 * num2;
    const resultDenom = denom1 * denom2;
    
    // 化简分数
    const gcd = this.gcd(resultNum, resultDenom);
    const simplifiedNum = resultNum / gcd;
    const simplifiedDenom = resultDenom / gcd;
    
    let answer;
    if (simplifiedDenom === 1) {
      answer = simplifiedNum.toString();
    } else {
      answer = `${simplifiedNum}/${simplifiedDenom}`;
    }
    
    return { exercise, answer };
  }
  
  // 格式化小数，去除 trailing zeros
  formatDecimal(number) {
    // 保留最多两位小数
    const rounded = Math.round(number * 100) / 100;
    // 转换为字符串并去除 trailing zeros
    let str = rounded.toString();
    if (str.indexOf('.') !== -1) {
      str = str.replace(/\.?0+$/, '');
    }
    return str;
  }
  
  // 求最大公约数
  gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  }
  
  // 求最小公倍数
  lcm(a, b) {
    return Math.abs(a * b) / this.gcd(a, b);
  }
}

// 导出类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Grade5ExerciseGenerator;
} else {
  window.Grade5ExerciseGenerator = Grade5ExerciseGenerator;
}