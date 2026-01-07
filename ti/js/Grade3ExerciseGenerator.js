// 三年级数学题目生成器
class Grade3ExerciseGenerator {
  constructor() {
    // 表内乘法结果集
    this.multiplicationFacts = [];
    for (let i = 2; i <= 9; i++) {
      for (let j = 2; j <= 9; j++) {
        this.multiplicationFacts.push([i, j, i * j]);
      }
    }
    
    // 两位数除以一位数表（整除）
    this.twoDigitDivisionFacts = [];
    for (let i = 10; i <= 99; i++) {
      for (let j = 2; j <= 9; j++) {
        if (i % j === 0) {
          this.twoDigitDivisionFacts.push([i, j, i / j]);
        }
      }
    }
    
    // 三位数除以一位数表（整除）
    this.threeDigitDivisionFacts = [];
    for (let i = 100; i <= 999; i++) {
      for (let j = 2; j <= 9; j++) {
        if (i % j === 0) {
          this.threeDigitDivisionFacts.push([i, j, i / j]);
        }
      }
    }
  }
  
  // 生成题目
  generateExercise(topic, difficulty) {
    switch(topic) {
      case "multiplyAdd":
        return this.generateMultiplyAdd(difficulty);
      case "multiplySubtract":
        return this.generateMultiplySubtract(difficulty);
      case "divideAdd":
        return this.generateDivideAdd(difficulty);
      case "divideSubtract":
        return this.generateDivideSubtract(difficulty);
      case "parentheses":
        return this.generateWithParentheses(difficulty);
      case "reviewMultiplyAdd":
        return this.generateReviewMultiplyAdd(difficulty);
      case "reviewMultiplySubtract":
        return this.generateReviewMultiplySubtract(difficulty);
      case "reviewDivideAdd":
        return this.generateReviewDivideAdd(difficulty);
      case "reviewDivideSubtract":
        return this.generateReviewDivideSubtract(difficulty);
      case "reviewParentheses":
        return this.generateReviewWithParentheses(difficulty);
      case "threeDigitOperation":
        return this.generateThreeDigitOperation(difficulty);
      case "twoDigitMultiply":
        return this.generateTwoDigitMultiply(difficulty);
      case "twoDigitDivide":
        return this.generateTwoDigitDivide(difficulty);
      case "decimalAdd":
        return this.generateDecimalAdd(difficulty);
      case "decimalSubtract":
        return this.generateDecimalSubtract(difficulty);
      default:
        return this.generateMultiplyAdd(difficulty);
    }
  }
  
  // 获取难度参数
  getDifficultyParams(difficulty) {
    switch(difficulty) {
      case 'easy':
        return { maxValue: 50, numbersSimple: true, operationsSimple: true };
      case 'medium':
        return { maxValue: 80, numbersSimple: false, operationsSimple: true };
      case 'hard':
        return { maxValue: 99, numbersSimple: false, operationsSimple: false };
      default:
        return { maxValue: 80, numbersSimple: false, operationsSimple: true };
    }
  }
  
  // 生成随机整数
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 生成乘加题目
  generateMultiplyAdd(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    const a = this.getRandomInt(10, params.maxValue);
    const b = this.getRandomInt(2, 9);
    const c = this.getRandomInt(2, 9);
    
    let exercise;
    if (Math.random() < 0.5) {
      exercise = `${a} + ${b} × ${c}`;
    } else {
      exercise = `${c} × ${b} + ${a}`;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成乘减题目
  generateMultiplySubtract(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    let a, b, c;
    
    do {
      a = this.getRandomInt(20, params.maxValue);
      b = this.getRandomInt(2, 9);
      c = this.getRandomInt(2, 9);
    } while (a <= b * c);
    
    let exercise;
    if (Math.random() < 0.5) {
      exercise = `${a} - ${b} × ${c}`;
    } else {
      const d = this.getRandomInt(1, b * c - 1);
      exercise = `${c} × ${b} - ${d}`;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成除加题目
  generateDivideAdd(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    const a = this.getRandomInt(10, params.maxValue);
    
    // 从预定义的除法表中随机选择
    const division = this.twoDigitDivisionFacts[this.getRandomInt(0, this.twoDigitDivisionFacts.length - 1)];
    const e = division[0];
    const c = division[1];
    
    let exercise;
    if (Math.random() < 0.5) {
      exercise = `${a} + ${e} ÷ ${c}`;
    } else {
      exercise = `${e} ÷ ${c} + ${a}`;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成除减题目
  generateDivideSubtract(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    let a;
    let division;
    
    // 添加最大尝试次数，避免无限循环
    let attempts = 0;
    const maxAttempts = 50;
    
    do {
      a = this.getRandomInt(20, params.maxValue);
      division = this.twoDigitDivisionFacts[this.getRandomInt(0, this.twoDigitDivisionFacts.length - 1)];
      attempts++;
      if (attempts > maxAttempts) {
        // 如果尝试次数过多，使用默认值
        a = 50;
        division = this.twoDigitDivisionFacts[0];
        break;
      }
    } while (a <= division[0]);
    
    const e = division[0];
    const c = division[1];
    
    let exercise;
    if (Math.random() < 0.5) {
      exercise = `${a} - ${e} ÷ ${c}`;
    } else {
      // 确保减数小于商，且不为0
      const maxSubtract = Math.max(1, division[2] - 1);
      if (maxSubtract <= 0) {
        exercise = `${a} - ${e} ÷ ${c}`; // 回退到第一种形式
      } else {
        exercise = `${e} ÷ ${c} - ${this.getRandomInt(1, maxSubtract)}`;
      }
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成带小括号的题目
  generateWithParentheses(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    const types = ['add_multiply', 'subtract_multiply', 'add_divide', 'subtract_divide'];
    const type = types[this.getRandomInt(0, types.length - 1)];
    
    let exercise;
    
    switch(type) {
      case 'add_multiply':
        const h1 = this.getRandomInt(2, 5);
        const i1 = this.getRandomInt(2, 5);
        const c1 = this.getRandomInt(2, 9);
        if (Math.random() < 0.5) {
          exercise = `(${h1} + ${i1}) × ${c1}`;
        } else {
          exercise = `${c1} × (${h1} + ${i1})`;
        }
        break;
        
      case 'subtract_multiply':
        let h2, i2;
        do {
          h2 = this.getRandomInt(3, 9);
          i2 = this.getRandomInt(1, h2 - 1);
        } while (h2 - i2 === 1);
        const c2 = this.getRandomInt(2, 9);
        if (Math.random() < 0.5) {
          exercise = `(${h2} - ${i2}) × ${c2}`;
        } else {
          exercise = `${c2} × (${h2} - ${i2})`;
        }
        break;
        
      case 'add_divide':
        const multiplication = this.multiplicationFacts[this.getRandomInt(0, this.multiplicationFacts.length - 1)];
        const sum = multiplication[2];
        let j3, k3;
        do {
          j3 = this.getRandomInt(2, sum - 2);
          k3 = sum - j3;
        } while (j3 === 1 || k3 === 1);
        const c3 = multiplication[0];
        exercise = `(${j3} + ${k3}) ÷ ${c3}`;
        break;
        
      case 'subtract_divide':
        const multiplication2 = this.multiplicationFacts[this.getRandomInt(0, this.multiplicationFacts.length - 1)];
        const diff = multiplication2[2];
        // 确保 j4 大于 diff，避免出现负数
        const j4 = this.getRandomInt(diff + 2, diff + 10);
        const k4 = j4 - diff;
        const c4 = multiplication2[0];
        exercise = `(${j4} - ${k4}) ÷ ${c4}`;
        break;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成复习乘加题目
  generateReviewMultiplyAdd(difficulty) {
    // 两位数乘一位数
    const twoDigit = this.getRandomInt(10, 99);
    const oneDigit = this.getRandomInt(2, 9);
    const product = twoDigit * oneDigit;
    
    // 加法部分，确保非负数
    const addNum = this.getRandomInt(0, 99);
    
    let exercise;
    if (Math.random() < 0.5) {
      exercise = `${addNum} + ${twoDigit} × ${oneDigit}`;
    } else {
      exercise = `${twoDigit} × ${oneDigit} + ${addNum}`;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成复习乘减题目
  generateReviewMultiplySubtract(difficulty) {
    // 两位数乘一位数
    const twoDigit = this.getRandomInt(10, 99);
    const oneDigit = this.getRandomInt(2, 9);
    const product = twoDigit * oneDigit;
    
    let exercise;
    // 第一种形式：a - b×c
    if (Math.random() < 0.5) {
      const minuend = this.getRandomInt(product, product + 50); // 被减数要大于等于乘积
      exercise = `${minuend} - ${twoDigit} × ${oneDigit}`;
    } 
    // 第二种形式：b×c - a
    else {
      const subtrahend = this.getRandomInt(0, product - 1); // 减数要小于乘积
      exercise = `${twoDigit} × ${oneDigit} - ${subtrahend}`;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成复习除加题目
  generateReviewDivideAdd(difficulty) {
    // 使用一些简单的默认除法
    const simpleDivisions = [
      [12, 3, 4], [15, 3, 5], [18, 3, 6], [21, 3, 7],
      [16, 4, 4], [20, 4, 5], [24, 4, 6], [28, 4, 7],
      [25, 5, 5], [30, 5, 6], [35, 5, 7], [40, 5, 8],
      [36, 6, 6], [42, 6, 7], [48, 6, 8], [54, 6, 9]
    ];
    
    const division = simpleDivisions[this.getRandomInt(0, simpleDivisions.length - 1)];
    const dividend = division[0];
    const divisor = division[1];
    const addNum = this.getRandomInt(0, 99);
    
    let exercise;
    if (Math.random() < 0.5) {
      exercise = `${addNum} + ${dividend} ÷ ${divisor}`;
    } else {
      exercise = `${dividend} ÷ ${divisor} + ${addNum}`;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成复习除减题目
  generateReviewDivideSubtract(difficulty) {
    // 使用一些简单的默认除法
    const simpleDivisions = [
      [12, 3, 4], [15, 3, 5], [18, 3, 6], [21, 3, 7],
      [16, 4, 4], [20, 4, 5], [24, 4, 6], [28, 4, 7],
      [25, 5, 5], [30, 5, 6], [35, 5, 7], [40, 5, 8],
      [36, 6, 6], [42, 6, 7], [48, 6, 8], [54, 6, 9]
    ];
    
    const division = simpleDivisions[this.getRandomInt(0, simpleDivisions.length - 1)];
    const dividend = division[0];
    const divisor = division[1];
    const quotient = division[2];
    
    let exercise;
    if (Math.random() < 0.5) {
      const minuend = this.getRandomInt(quotient, quotient + 50);
      exercise = `${minuend} - ${dividend} ÷ ${divisor}`;
    } else {
      const subtrahend = this.getRandomInt(0, quotient - 1);
      exercise = `${dividend} ÷ ${divisor} - ${subtrahend}`;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成复习小括号题目
  generateReviewWithParentheses(difficulty) {
    const types = [
      'add_multiply', 'subtract_multiply', 
      'add_divide', 'subtract_divide',
      'multiply_add', 'multiply_subtract',
      'divide_add', 'divide_subtract'
    ];
    const type = types[this.getRandomInt(0, types.length - 1)];
    
    let exercise;
    
    switch(type) {
      // (a + b) × c 或 c × (a + b)，其中c是一位数，a+b是两位数
      case 'add_multiply':
        const add1 = this.getRandomInt(10, 89); // 确保和是两位数
        const add2 = this.getRandomInt(1, 99 - add1);
        const mul1 = this.getRandomInt(2, 9);
        
        if (Math.random() < 0.5) {
          exercise = `(${add1} + ${add2}) × ${mul1}`;
        } else {
          exercise = `${mul1} × (${add1} + ${add2})`;
        }
        break;
        
      // (a - b) × c 或 c × (a - b)，确保a>b，c是一位数
      case 'subtract_multiply':
        let sub1, sub2;
        do {
          sub1 = this.getRandomInt(11, 99);
          sub2 = this.getRandomInt(1, sub1 - 1);
        } while (sub1 - sub2 < 10); // 确保差是两位数
        const mul2 = this.getRandomInt(2, 9);
        
        if (Math.random() < 0.5) {
          exercise = `(${sub1} - ${sub2}) × ${mul2}`;
        } else {
          exercise = `${mul2} × (${sub1} - ${sub2})`;
        }
        break;
        
      // (a + b) ÷ c，其中c是一位数，a+b是两位数且能被c整除
      case 'add_divide':
        const div1 = this.getRandomInt(2, 9);
        const quotient1 = this.getRandomInt(2, 20); // 商的范围
        const total1 = div1 * quotient1; // a+b的和
        
        // 拆分和为两个数
        let add3 = this.getRandomInt(1, total1 - 1);
        let add4 = total1 - add3;
        
        // 确保两个数都是正数且和等于total1
        if (add3 < 1 || add4 < 1) {
          add3 = Math.max(1, add3);
          add4 = total1 - add3;
        }
        
        exercise = `(${add3} + ${add4}) ÷ ${div1}`;
        break;
        
      // (a - b) ÷ c，其中c是一位数，a-b是正数且能被c整除
      case 'subtract_divide':
        const div2 = this.getRandomInt(2, 9);
        const quotient2 = this.getRandomInt(1, 20); // 商的范围
        const diff2 = div2 * quotient2; // a-b的差
        
        // a要大于b，且a是两位数
        const a2 = this.getRandomInt(diff2 + 10, 99); // 确保a是两位数
        const b2 = a2 - diff2;
        
        // 确保b2是正数
        if (b2 <= 0) {
          const simpleAdd1 = this.getRandomInt(10, 40);
          const simpleAdd2 = this.getRandomInt(10, 40);
          const simpleMul = this.getRandomInt(2, 9);
          exercise = `(${simpleAdd1} + ${simpleAdd2}) × ${simpleMul}`;
        } else {
          exercise = `(${a2} - ${b2}) ÷ ${div2}`;
        }
        break;
        
      // a × (b + c) 或 (b + c) × a，其中a是一位数，b+c是两位数
      case 'multiply_add':
        const add5 = this.getRandomInt(10, 89);
        const add6 = this.getRandomInt(1, 99 - add5);
        const mul3 = this.getRandomInt(2, 9);
        
        if (Math.random() < 0.5) {
          exercise = `${mul3} × (${add5} + ${add6})`;
        } else {
          exercise = `(${add5} + ${add6}) × ${mul3}`;
        }
        break;
        
      // a × (b - c) 或 (b - c) × a，其中a是一位数，b>c且b-c是两位数
      case 'multiply_subtract':
        let sub3, sub4;
        do {
          sub3 = this.getRandomInt(11, 99);
          sub4 = this.getRandomInt(1, sub3 - 1);
        } while (sub3 - sub4 < 10);
        const mul4 = this.getRandomInt(2, 9);
        
        if (Math.random() < 0.5) {
          exercise = `${mul4} × (${sub3} - ${sub4})`;
        } else {
          exercise = `(${sub3} - ${sub4}) × ${mul4}`;
        }
        break;
        
      // a ÷ (b + c)，其中a是两位数，b+c是一位数且能整除a
      case 'divide_add':
        const add7 = this.getRandomInt(1, 8); // b
        const add8 = this.getRandomInt(1, 9 - add7); // c，确保b+c在2-9之间
        const sum7 = add7 + add8;
        
        // 找能被sum7整除的两位数
        let dividend3;
        do {
          dividend3 = this.getRandomInt(10, 99);
        } while (dividend3 % sum7 !== 0);
        
        exercise = `${dividend3} ÷ (${add7} + ${add8})`;
        break;
        
      // a ÷ (b - c)，其中a是两位数，b>c且b-c是一位数且能整除a
      case 'divide_subtract':
        let sub5, sub6;
        do {
          sub5 = this.getRandomInt(2, 9);
          sub6 = this.getRandomInt(1, sub5 - 1);
        } while (sub5 - sub6 < 2); // 确保差在2-9之间
        const diff3 = sub5 - sub6;
        
        // 找能被diff3整除的两位数
        let dividend4;
        do {
          dividend4 = this.getRandomInt(10, 99);
        } while (dividend4 % diff3 !== 0);
        
        exercise = `${dividend4} ÷ (${sub5} - ${sub6})`;
        break;
        
      default:
        // 默认生成一个简单的小括号题目
        const simpleAdd1 = this.getRandomInt(10, 40);
        const simpleAdd2 = this.getRandomInt(10, 40);
        const simpleMul = this.getRandomInt(2, 9);
        exercise = `(${simpleAdd1} + ${simpleAdd2}) × ${simpleMul}`;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成三位数加减题目
  generateThreeDigitOperation(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    const operations = ['add', 'subtract', 'mixed'];
    const operation = operations[this.getRandomInt(0, operations.length - 1)];
    
    let exercise;
    
    switch(operation) {
      case 'add':
        // 连加：确保结果不超过1000
        let num1, num2, num3;
        do {
          num1 = this.getRandomInt(100, 700);
          num2 = this.getRandomInt(100, 700);
          num3 = this.getRandomInt(100, 700);
        } while (num1 + num2 + num3 > 1000);
        exercise = `${num1} + ${num2} + ${num3}`;
        break;
        
      case 'subtract':
        // 连减：确保每一步都不为负数
        const large = this.getRandomInt(500, 999);
        const medium = this.getRandomInt(200, large - 100);
        const small = this.getRandomInt(100, medium - 50);
        exercise = `${large} - ${medium} - ${small}`;
        break;
        
      case 'mixed':
        // 加减混合：确保每一步都不为负数
        const patterns = ['a + b - c', 'a - b + c'];
        const pattern = patterns[this.getRandomInt(0, patterns.length - 1)];
        
        if (pattern === 'a + b - c') {
          // a + b - c 模式
          const sum = this.getRandomInt(200, 800);
          const a1 = this.getRandomInt(100, sum - 100);
          const b1 = sum - a1;
          const c1 = this.getRandomInt(50, sum - 50);
          exercise = `${a1} + ${b1} - ${c1}`;
        } else {
          // a - b + c 模式
          const a2 = this.getRandomInt(200, 900);
          const b2 = this.getRandomInt(100, a2 - 100);
          const c2 = this.getRandomInt(50, 500);
          exercise = `${a2} - ${b2} + ${c2}`;
        }
        break;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成两位数乘一位数题目
  generateTwoDigitMultiply(difficulty) {
    const twoDigit = this.getRandomInt(10, 99);
    const oneDigit = this.getRandomInt(2, 9);
    let exercise = `${twoDigit} × ${oneDigit}`;
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成两位数除一位数题目
  generateTwoDigitDivide(difficulty) {
    // 直接从预定义的整除表中随机选择
    const division = this.twoDigitDivisionFacts[this.getRandomInt(0, this.twoDigitDivisionFacts.length - 1)];
    
    const dividend = division[0]; // 被除数
    const divisor = division[1]; // 除数
    
    let exercise = `${dividend} ÷ ${divisor}`;
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成小数加法题目
  generateDecimalAdd(difficulty) {
    // 生成小数（一位或两位小数）
    const types = ['one-decimal', 'two-decimal'];
    const type1 = types[this.getRandomInt(0, types.length - 1)];
    const type2 = types[this.getRandomInt(0, types.length - 1)];
    
    const num1 = this.generateDecimalByType(type1);
    const num2 = this.generateDecimalByType(type2);
    
    let exercise = `${num1} + ${num2}`;
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 生成小数减法题目
  generateDecimalSubtract(difficulty) {
    // 生成小数（一位或两位小数）
    const types = ['one-decimal', 'two-decimal'];
    const type1 = types[this.getRandomInt(0, types.length - 1)];
    const type2 = types[this.getRandomInt(0, types.length - 1)];
    
    const num1 = this.generateDecimalByType(type1);
    const num2 = this.generateDecimalByType(type2);
    
    // 确保被减数大于减数
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    let exercise;
    if (n1 >= n2) {
      exercise = `${num1} - ${num2}`;
    } else {
      exercise = `${num2} - ${num1}`;
    }
    
    // 计算答案
    const answer = this.calculateExpression(exercise);
    return { exercise: exercise, answer: answer };
  }
  
  // 根据类型生成小数
  generateDecimalByType(type) {
    switch(type) {
      case 'one-decimal':
        // 一位小数：0.1-9.9
        const int1 = this.getRandomInt(0, 9);
        const dec1 = this.getRandomInt(1, 9);
        return `${int1}.${dec1}`;
      case 'two-decimal':
        // 两位小数：0.01-9.99
        const int2 = this.getRandomInt(0, 9);
        const dec2 = this.getRandomInt(1, 99);
        // 确保是两位小数
        const dec2Str = dec2.toString().padStart(2, '0');
        return `${int2}.${dec2Str}`;
      default:
        return this.getRandomInt(0, 9).toString();
    }
  }
  
  // 计算表达式结果（正确处理小括号）
  calculateExpression(expression) {
    try {
      // 替换中文符号为英文符号
      let expr = expression
        .replace(/×/g, '*')
        .replace(/÷/g, '/');
      
      // 首先计算所有小括号内的表达式
      while (expr.includes('(')) {
        // 找到最内层的小括号
        let start = expr.lastIndexOf('(');
        let end = expr.indexOf(')', start);
        
        if (start === -1 || end === -1) break;
        
        // 提取小括号内的表达式
        const innerExpr = expr.substring(start + 1, end);
        
        // 计算小括号内的表达式（先乘除后加减）
        const innerResult = this.calculateWithoutParentheses(innerExpr);
        
        // 替换小括号及其内容为计算结果
        expr = expr.substring(0, start) + innerResult + expr.substring(end + 1);
      }
      
      // 计算最终结果（已无小括号）
      const finalResult = this.calculateWithoutParentheses(expr);
      
      // 处理小数结果
      if (finalResult % 1 !== 0) {
        // 保留适当的小数位数
        const decimalPlaces = finalResult.toString().split('.')[1]?.length || 0;
        if (decimalPlaces > 2) {
          return parseFloat(finalResult.toFixed(2)).toString();
        }
        return finalResult.toString();
      }
      
      return finalResult.toString();
    } catch (error) {
      console.error('计算表达式时出错:', expression, error);
      return '?';
    }
  }
  
  // 计算没有小括号的表达式（先乘除后加减）
  calculateWithoutParentheses(expr) {
    // 去除空格
    expr = expr.replace(/\s+/g, '');
    
    // 处理乘除法
    const multiplyDivideRegex = /(\d+(?:\.\d+)?)([*/])(\d+(?:\.\d+)?)/;
    let match;
    
    while ((match = expr.match(multiplyDivideRegex))) {
      const left = parseFloat(match[1]);
      const operator = match[2];
      const right = parseFloat(match[3]);
      
      let result;
      if (operator === '*') {
        result = left * right;
      } else if (operator === '/') {
        if (right === 0) throw new Error('除以零错误');
        result = left / right;
      }
      
      // 替换匹配的部分为结果
      expr = expr.replace(multiplyDivideRegex, result);
    }
    
    // 处理加减法
    const addSubtractRegex = /(-?\d+(?:\.\d+)?)([+\-])(-?\d+(?:\.\d+)?)/;
    
    while ((match = expr.match(addSubtractRegex))) {
      const left = parseFloat(match[1]);
      const operator = match[2];
      const right = parseFloat(match[3]);
      
      let result;
      if (operator === '+') {
        result = left + right;
      } else if (operator === '-') {
        result = left - right;
      }
      
      // 替换匹配的部分为结果
      expr = expr.replace(addSubtractRegex, result);
    }
    
    // 返回最终结果
    return parseFloat(expr);
  }
}

// 导出类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Grade3ExerciseGenerator;
} else {
  window.Grade3ExerciseGenerator = Grade3ExerciseGenerator;
}