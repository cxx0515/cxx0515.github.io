// 六年级数学题目生成器
class Grade6ExerciseGenerator {
  constructor() {
    // 百分数相关数据
    this.percentages = [10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90];
    
    // 比例相关数据
    this.ratios = [
      [1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 5], [3, 4], [3, 5], [4, 5]
    ];
  }
  
  // 生成题目
  generateExercise(topic, difficulty) {
    switch(topic) {
      case "fractionDivideInt":
        return this.generateFractionDivideInt(difficulty);
      case "fractionDivideFraction":
        return this.generateFractionDivideFraction(difficulty);
      case "percentConvert":
        return this.generatePercentConvert(difficulty);
      case "percentAddSubtract":
        return this.generatePercentAddSubtract(difficulty);
      case "percentMultiply":
        return this.generatePercentMultiply(difficulty);
      case "percentDivide":
        return this.generatePercentDivide(difficulty);
      case "proportion":
        return this.generateProportion(difficulty);
      case "complexMixed":
        return this.generateComplexMixed(difficulty);
      default:
        return this.generateFractionDivideInt(difficulty);
    }
  }
  
  // 获取难度参数
  getDifficultyParams(difficulty) {
    switch(difficulty) {
      case 'easy':
        return { maxOperand: 20 };
      case 'medium':
        return { maxOperand: 50 };
      case 'hard':
        return { maxOperand: 100 };
      default:
        return { maxOperand: 50 };
    }
  }
  
  // 生成随机整数
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 生成随机分数
  getRandomFraction(maxNum, maxDenom) {
    const num = this.getRandomInt(1, maxNum);
    const denom = this.getRandomInt(num + 1, maxDenom);
    return [num, denom];
  }
  
  // 生成分数除以整数
  generateFractionDivideInt(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let num, denom, integer;
    if (difficulty === 'easy') {
      num = this.getRandomInt(1, 10);
      denom = this.getRandomInt(num + 1, 15);
      integer = this.getRandomInt(2, 10);
    } else if (difficulty === 'medium') {
      num = this.getRandomInt(1, 20);
      denom = this.getRandomInt(num + 1, 30);
      integer = this.getRandomInt(2, 20);
    } else {
      num = this.getRandomInt(1, 30);
      denom = this.getRandomInt(num + 1, 50);
      integer = this.getRandomInt(2, 30);
    }
    
    const exercise = `${num}/${denom} ÷ ${integer}`;
    
    // 计算结果：分数除以整数等于分数乘以整数的倒数
    const resultNum = num;
    const resultDenom = denom * integer;
    
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
  
  // 生成分数除以分数
  generateFractionDivideFraction(difficulty) {
    const params = this.getDifficultyParams(difficulty);
    
    let num1, denom1, num2, denom2;
    if (difficulty === 'easy') {
      num1 = this.getRandomInt(1, 8);
      denom1 = this.getRandomInt(num1 + 1, 12);
      num2 = this.getRandomInt(1, 8);
      denom2 = this.getRandomInt(num2 + 1, 12);
    } else if (difficulty === 'medium') {
      num1 = this.getRandomInt(1, 15);
      denom1 = this.getRandomInt(num1 + 1, 25);
      num2 = this.getRandomInt(1, 15);
      denom2 = this.getRandomInt(num2 + 1, 25);
    } else {
      num1 = this.getRandomInt(1, 25);
      denom1 = this.getRandomInt(num1 + 1, 40);
      num2 = this.getRandomInt(1, 25);
      denom2 = this.getRandomInt(num2 + 1, 40);
    }
    
    // 确保第二个分数不为0
    if (num2 === 0) num2 = 1;
    if (denom2 === 0) denom2 = 1;
    
    const exercise = `${num1}/${denom1} ÷ ${num2}/${denom2}`;
    
    // 计算结果：分数除以分数等于第一个分数乘以第二个分数的倒数
    const resultNum = num1 * denom2;
    const resultDenom = denom1 * num2;
    
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
  
  // 生成百分数与小数转换
  generatePercentConvert(difficulty) {
    // 随机决定转换方向：0=百分数转小数，1=小数转百分数
    const direction = this.getRandomInt(0, 1);
    
    if (direction === 0) {
      // 百分数转小数
      const percent = this.percentages[this.getRandomInt(0, this.percentages.length - 1)];
      const exercise = `${percent}% = `;
      const answer = (percent / 100).toString();
      return { exercise, answer };
    } else {
      // 小数转百分数
      let decimal;
      if (difficulty === 'easy') {
        // 0.1, 0.2, ..., 0.9
        decimal = this.getRandomInt(1, 9) / 10;
      } else if (difficulty === 'medium') {
        // 0.01, 0.02, ..., 0.99 (步长0.01)
        const hundredths = this.getRandomInt(1, 99);
        decimal = hundredths / 100;
      } else {
        // 0.001, 0.002, ..., 0.999 (步长0.001)
        const thousandths = this.getRandomInt(1, 999);
        decimal = thousandths / 1000;
      }
      
      const exercise = `${decimal} = `;
      const answer = `${(decimal * 100)}%`;
      return { exercise, answer };
    }
  }
  
  // 生成百分数加减法
  generatePercentAddSubtract(difficulty) {
    let percent1, percent2;
    if (difficulty === 'easy') {
      percent1 = this.percentages[this.getRandomInt(0, this.percentages.length - 1)];
      percent2 = this.percentages[this.getRandomInt(0, this.percentages.length - 1)];
    } else if (difficulty === 'medium') {
      percent1 = this.getRandomInt(1, 100);
      percent2 = this.getRandomInt(1, 100);
    } else {
      percent1 = this.getRandomInt(1, 200);
      percent2 = this.getRandomInt(1, 200);
    }
    
    // 随机决定运算符
    const operator = this.getRandomInt(0, 1) === 0 ? '+' : '-';
    
    const exercise = `${percent1}% ${operator} ${percent2}%`;
    let result;
    if (operator === '+') {
      result = percent1 + percent2;
    } else {
      result = Math.max(0, percent1 - percent2); // 确保结果非负
    }
    
    const answer = `${result}%`;
    return { exercise, answer };
  }
  
  // 生成百分数乘法
  generatePercentMultiply(difficulty) {
    let percent, number;
    if (difficulty === 'easy') {
      percent = this.percentages[this.getRandomInt(0, this.percentages.length - 1)];
      number = this.getRandomInt(1, 20);
    } else if (difficulty === 'medium') {
      percent = this.getRandomInt(1, 100);
      number = this.getRandomInt(1, 50);
    } else {
      percent = this.getRandomInt(1, 200);
      number = this.getRandomInt(1, 100);
    }
    
    const exercise = `${percent}% × ${number}`;
    const decimalPercent = percent / 100;
    const answer = (decimalPercent * number).toString();
    return { exercise, answer };
  }
  
  // 生成百分数除法
  generatePercentDivide(difficulty) {
    let percent, number;
    if (difficulty === 'easy') {
      percent = this.percentages[this.getRandomInt(0, this.percentages.length - 1)];
      number = this.getRandomInt(1, 20);
    } else if (difficulty === 'medium') {
      percent = this.getRandomInt(1, 100);
      number = this.getRandomInt(1, 50);
    } else {
      percent = this.getRandomInt(1, 200);
      number = this.getRandomInt(1, 100);
    }
    
    // 确保能整除或者结果是简单小数
    const decimalPercent = percent / 100;
    const answer = decimalPercent / number;
    
    // 如果结果太复杂，重新生成
    if (Math.abs(answer * number * 100 - percent) > 0.0001) {
      return this.generatePercentDivide(difficulty);
    }
    
    const exercise = `${percent}% ÷ ${number}`;
    const formattedAnswer = this.formatDecimal(answer);
    return { exercise, answer: formattedAnswer };
  }
  
  // 生成比例计算
  generateProportion(difficulty) {
    // 随机选择一个问题类型（只保留计算题类型）
    const problemTypes = [
      "findMissingTerm",  // 求比例中的未知项
      "solveProportion"   // 解比例方程
    ];
    
    const problemType = problemTypes[this.getRandomInt(0, problemTypes.length - 1)];
    
    switch(problemType) {
      case "findMissingTerm":
        return this.generateFindMissingTerm(difficulty);
      case "solveProportion":
        return this.generateSolveProportion(difficulty);
      default:
        return this.generateFindMissingTerm(difficulty);
    }
  }
  
  // 生成求比例中的未知项
  generateFindMissingTerm(difficulty) {
    const ratio = this.ratios[this.getRandomInt(0, this.ratios.length - 1)];
    const multiplier = this.getRandomInt(2, 10);
    
    const a = ratio[0];
    const b = ratio[1];
    const c = a * multiplier;
    const d = b * multiplier;
    
    // 随机隐藏一个数
    const hiddenPosition = this.getRandomInt(0, 3);
    let exercise, answer;
    
    switch(hiddenPosition) {
      case 0: // 隐藏a
        exercise = `? : ${b} = ${c} : ${d}`;
        answer = a.toString();
        break;
      case 1: // 隐藏b
        exercise = `${a} : ? = ${c} : ${d}`;
        answer = b.toString();
        break;
      case 2: // 隐藏c
        exercise = `${a} : ${b} = ? : ${d}`;
        answer = c.toString();
        break;
      case 3: // 隐藏d
        exercise = `${a} : ${b} = ${c} : ?`;
        answer = d.toString();
        break;
    }
    
    return { exercise, answer };
  }
  

  
  // 生成解比例方程
  generateSolveProportion(difficulty) {
    const ratio = this.ratios[this.getRandomInt(0, this.ratios.length - 1)];
    const multiplier = this.getRandomInt(2, 10);
    
    const a = ratio[0];
    const b = ratio[1];
    const c = a * multiplier;
    const x = b * multiplier; // 未知数
    
    // 随机决定方程形式
    const equationForms = [
      `${a} : ${b} = x : ${c}`,  // a:b = x:c
      `${a} : ${b} = ${c} : x`,  // a:b = c:x
      `x : ${b} = ${a} : ${c}`,  // x:b = a:c
      `${a} : x = ${b} : ${c}`   // a:x = b:c
    ];
    
    const formIndex = this.getRandomInt(0, equationForms.length - 1);
    const exercise = equationForms[formIndex];
    const answer = x.toString();
    
    return { exercise, answer };
  }
  
  // 生成复杂四则混合运算
  generateComplexMixed(difficulty) {
    // 结合小数、分数、百分数的混合运算
    const operationTypes = [
      "decimal_fraction",     // 小数和分数混合
      "percent_decimal",      // 百分数和小数混合
      "fraction_percent",     // 分数和百分数混合
      "all_mixed"             // 三者混合
    ];
    
    const operationType = operationTypes[this.getRandomInt(0, operationTypes.length - 1)];
    
    switch(operationType) {
      case "decimal_fraction":
        return this.generateDecimalFractionMixed(difficulty);
      case "percent_decimal":
        return this.generatePercentDecimalMixed(difficulty);
      case "fraction_percent":
        return this.generateFractionPercentMixed(difficulty);
      case "all_mixed":
        return this.generateAllMixed(difficulty);
      default:
        return this.generateDecimalFractionMixed(difficulty);
    }
  }
  
  // 生成小数和分数混合运算
  generateDecimalFractionMixed(difficulty) {
    // 生成一个小数
    let decimal;
    if (difficulty === 'easy') {
      decimal = this.getRandomInt(1, 9) / 10;
    } else if (difficulty === 'medium') {
      const hundredths = this.getRandomInt(1, 99);
      decimal = hundredths / 100;
    } else {
      const thousandths = this.getRandomInt(1, 999);
      decimal = thousandths / 1000;
    }
    
    // 生成一个分数
    const fraction = this.getRandomFraction(10, 20);
    const num = fraction[0];
    const denom = fraction[1];
    
    // 随机决定运算符
    const operators = ['+', '-', '×', '÷'];
    const operator = operators[this.getRandomInt(0, operators.length - 1)];
    
    // 随机决定顺序
    const decimalFirst = this.getRandomInt(0, 1) === 0;
    
    let exercise, answer;
    if (decimalFirst) {
      exercise = `${decimal} ${operator} ${num}/${denom}`;
    } else {
      exercise = `${num}/${denom} ${operator} ${decimal}`;
    }
    
    // 计算答案
    const fractionValue = num / denom;
    let result;
    switch(operator) {
      case '+':
        result = decimal + fractionValue;
        break;
      case '-':
        result = decimalFirst ? decimal - fractionValue : fractionValue - decimal;
        break;
      case '×':
        result = decimal * fractionValue;
        break;
      case '÷':
        if (decimalFirst) {
          result = decimal / fractionValue;
        } else {
          result = fractionValue / decimal;
        }
        break;
    }
    
    answer = this.formatDecimal(result);
    return { exercise, answer };
  }
  
  // 生成百分数和小数混合运算
  generatePercentDecimalMixed(difficulty) {
    // 生成一个百分数
    const percent = this.getRandomInt(1, 100);
    const decimalPercent = percent / 100;
    
    // 生成一个小数
    let decimal;
    if (difficulty === 'easy') {
      decimal = this.getRandomInt(1, 9) / 10;
    } else if (difficulty === 'medium') {
      const hundredths = this.getRandomInt(1, 99);
      decimal = hundredths / 100;
    } else {
      const thousandths = this.getRandomInt(1, 999);
      decimal = thousandths / 1000;
    }
    
    // 随机决定运算符
    const operators = ['+', '-', '×', '÷'];
    const operator = operators[this.getRandomInt(0, operators.length - 1)];
    
    // 随机决定顺序
    const percentFirst = this.getRandomInt(0, 1) === 0;
    
    let exercise, answer;
    if (percentFirst) {
      exercise = `${percent}% ${operator} ${decimal}`;
    } else {
      exercise = `${decimal} ${operator} ${percent}%`;
    }
    
    // 计算答案
    let result;
    switch(operator) {
      case '+':
        result = decimalPercent + decimal;
        break;
      case '-':
        result = percentFirst ? decimalPercent - decimal : decimal - decimalPercent;
        break;
      case '×':
        result = decimalPercent * decimal;
        break;
      case '÷':
        if (percentFirst) {
          result = decimalPercent / decimal;
        } else {
          result = decimal / decimalPercent;
        }
        break;
    }
    
    answer = this.formatDecimal(result);
    return { exercise, answer };
  }
  
  // 生成分数和百分数混合运算
  generateFractionPercentMixed(difficulty) {
    // 生成一个分数
    const fraction = this.getRandomFraction(10, 20);
    const num = fraction[0];
    const denom = fraction[1];
    const fractionValue = num / denom;
    
    // 生成一个百分数
    const percent = this.getRandomInt(1, 100);
    const decimalPercent = percent / 100;
    
    // 随机决定运算符
    const operators = ['+', '-', '×', '÷'];
    const operator = operators[this.getRandomInt(0, operators.length - 1)];
    
    // 随机决定顺序
    const fractionFirst = this.getRandomInt(0, 1) === 0;
    
    let exercise, answer;
    if (fractionFirst) {
      exercise = `${num}/${denom} ${operator} ${percent}%`;
    } else {
      exercise = `${percent}% ${operator} ${num}/${denom}`;
    }
    
    // 计算答案
    let result;
    switch(operator) {
      case '+':
        result = fractionValue + decimalPercent;
        break;
      case '-':
        result = fractionFirst ? fractionValue - decimalPercent : decimalPercent - fractionValue;
        break;
      case '×':
        result = fractionValue * decimalPercent;
        break;
      case '÷':
        if (fractionFirst) {
          result = fractionValue / decimalPercent;
        } else {
          result = decimalPercent / fractionValue;
        }
        break;
    }
    
    answer = this.formatDecimal(result);
    return { exercise, answer };
  }
  
  // 生成三者混合运算
  generateAllMixed(difficulty) {
    // 生成一个小数
    let decimal;
    if (difficulty === 'easy') {
      decimal = this.getRandomInt(1, 9) / 10;
    } else if (difficulty === 'medium') {
      const hundredths = this.getRandomInt(1, 99);
      decimal = hundredths / 100;
    } else {
      const thousandths = this.getRandomInt(1, 999);
      decimal = thousandths / 1000;
    }
    
    // 生成一个分数
    const fraction = this.getRandomFraction(10, 20);
    const num = fraction[0];
    const denom = fraction[1];
    const fractionValue = num / denom;
    
    // 生成一个百分数
    const percent = this.getRandomInt(1, 100);
    const decimalPercent = percent / 100;
    
    // 生成一个包含三个数的表达式
    const elements = [
      { type: 'decimal', value: decimal },
      { type: 'fraction', value: fractionValue, display: `${num}/${denom}` },
      { type: 'percent', value: decimalPercent, display: `${percent}%` }
    ];
    
    // 随机打乱顺序
    this.shuffleArray(elements);
    
    // 随机选择两个运算符
    const operators = ['+', '-', '×', '÷'];
    const op1 = operators[this.getRandomInt(0, operators.length - 1)];
    const op2 = operators[this.getRandomInt(0, operators.length - 1)];
    
    // 构建表达式
    let exercise = '';
    if (elements[0].type === 'fraction') {
      exercise += elements[0].display;
    } else if (elements[0].type === 'percent') {
      exercise += elements[0].display;
    } else {
      exercise += elements[0].value;
    }
    
    exercise += ` ${op1} `;
    
    if (elements[1].type === 'fraction') {
      exercise += elements[1].display;
    } else if (elements[1].type === 'percent') {
      exercise += elements[1].display;
    } else {
      exercise += elements[1].value;
    }
    
    exercise += ` ${op2} `;
    
    if (elements[2].type === 'fraction') {
      exercise += elements[2].display;
    } else if (elements[2].type === 'percent') {
      exercise += elements[2].display;
    } else {
      exercise += elements[2].value;
    }
    
    // 计算答案（按照从左到右的顺序）
    let result;
    switch(op1) {
      case '+':
        result = elements[0].value + elements[1].value;
        break;
      case '-':
        result = elements[0].value - elements[1].value;
        break;
      case '×':
        result = elements[0].value * elements[1].value;
        break;
      case '÷':
        result = elements[0].value / elements[1].value;
        break;
    }
    
    switch(op2) {
      case '+':
        result = result + elements[2].value;
        break;
      case '-':
        result = result - elements[2].value;
        break;
      case '×':
        result = result * elements[2].value;
        break;
      case '÷':
        result = result / elements[2].value;
        break;
    }
    
    const answer = this.formatDecimal(result);
    return { exercise, answer };
  }
  
  // 格式化小数，去除 trailing zeros
  formatDecimal(number) {
    // 保留最多三位小数
    const rounded = Math.round(number * 1000) / 1000;
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
  
  // 打乱数组
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

// 导出类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Grade6ExerciseGenerator;
} else {
  window.Grade6ExerciseGenerator = Grade6ExerciseGenerator;
}