// 年级配置文件
// 定义1-6年级的数学知识点和题型

const gradeConfig = {
  1: {
    title: "一年级",
    units: [
      {
        title: "第一单元：10以内加减法",
        topics: [
          { 
            id: "add10", 
            name: "10以内加法",
            description: "掌握10以内数的加法运算"
          },
          { 
            id: "subtract10", 
            name: "10以内减法",
            description: "掌握10以内数的减法运算"
          }
        ]
      },
      {
        title: "第二单元：20以内进退位加减法",
        topics: [
          { 
            id: "add20", 
            name: "20以内进位加法",
            description: "掌握20以内进位加法运算"
          },
          { 
            id: "subtract20", 
            name: "20以内退位减法",
            description: "掌握20以内退位减法运算"
          }
        ]
      }
    ],
    topics: [
      { 
        id: "add10", 
        name: "10以内加法",
        description: "掌握10以内数的加法运算"
      },
      { 
        id: "subtract10", 
        name: "10以内减法",
        description: "掌握10以内数的减法运算"
      },
      { 
        id: "add20", 
        name: "20以内进位加法",
        description: "掌握20以内进位加法运算"
      },
      { 
        id: "subtract20", 
        name: "20以内退位减法",
        description: "掌握20以内退位减法运算"
      }
    ]
  },
  2: {
    title: "二年级",
    units: [
      {
        title: "第一单元：100以内加减法",
        topics: [
          { 
            id: "add100noCarry", 
            name: "100以内加法（不进位）",
            description: "掌握100以内不进位加法运算"
          },
          { 
            id: "subtract100noBorrow", 
            name: "100以内减法（不退位）",
            description: "掌握100以内不退位减法运算"
          },
          { 
            id: "add100carry", 
            name: "100以内加法（进位）",
            description: "掌握100以内进位加法运算"
          },
          { 
            id: "subtract100borrow", 
            name: "100以内减法（退位）",
            description: "掌握100以内退位减法运算"
          }
        ]
      },
      {
        title: "第二单元：表内乘除法",
        topics: [
          { 
            id: "multiplication", 
            name: "表内乘法",
            description: "掌握表内乘法运算（2-9的乘法口诀）"
          },
          { 
            id: "division", 
            name: "表内除法",
            description: "掌握表内除法运算（用乘法口诀求商）"
          }
        ]
      },
      {
        title: "第三单元：两步混合运算",
        topics: [
          { 
            id: "multiplyAdd", 
            name: "乘加混合运算",
            description: "掌握乘加混合运算顺序"
          },
          { 
            id: "multiplySubtract", 
            name: "乘减混合运算",
            description: "掌握乘减混合运算顺序"
          }
        ]
      }
    ],
    topics: [
      { 
        id: "add100noCarry", 
        name: "100以内加法（不进位）",
        description: "掌握100以内不进位加法运算"
      },
      { 
        id: "subtract100noBorrow", 
        name: "100以内减法（不退位）",
        description: "掌握100以内不退位减法运算"
      },
      { 
        id: "add100carry", 
        name: "100以内加法（进位）",
        description: "掌握100以内进位加法运算"
      },
      { 
        id: "subtract100borrow", 
        name: "100以内减法（退位）",
        description: "掌握100以内退位减法运算"
      },
      { 
        id: "multiplication", 
        name: "表内乘法",
        description: "掌握表内乘法运算（2-9的乘法口诀）"
      },
      { 
        id: "division", 
        name: "表内除法",
        description: "掌握表内除法运算（用乘法口诀求商）"
      },
      { 
        id: "multiplyAdd", 
        name: "乘加混合运算",
        description: "掌握乘加混合运算顺序"
      },
      { 
        id: "multiplySubtract", 
        name: "乘减混合运算",
        description: "掌握乘减混合运算顺序"
      }
    ]
  },
  3: {
    title: "三年级",
    units: [
      {
        title: "第一单元：混合运算",
        topics: [
          { 
            id: "multiplyAdd", 
            name: "乘加运算 (a+b×c)",
            description: "掌握乘加运算顺序"
          },
          { 
            id: "multiplySubtract", 
            name: "乘减运算 (a-b×c)",
            description: "掌握乘减运算顺序"
          },
          { 
            id: "divideAdd", 
            name: "除加运算 (a+e÷c)",
            description: "掌握除加运算顺序"
          },
          { 
            id: "divideSubtract", 
            name: "除减运算 (a-e÷c)",
            description: "掌握除减运算顺序"
          },
          { 
            id: "parentheses", 
            name: "带小括号的运算",
            description: "掌握带小括号的混合运算"
          }
        ]
      },
      {
        title: "期末复习：混合运算",
        topics: [
          { 
            id: "reviewMultiplyAdd", 
            name: "乘加运算 (复习)",
            description: "复习乘加运算"
          },
          { 
            id: "reviewMultiplySubtract", 
            name: "乘减运算 (复习)",
            description: "复习乘减运算"
          },
          { 
            id: "reviewDivideAdd", 
            name: "除加运算 (复习)",
            description: "复习除加运算"
          },
          { 
            id: "reviewDivideSubtract", 
            name: "除减运算 (复习)",
            description: "复习除减运算"
          },
          { 
            id: "reviewParentheses", 
            name: "带小括号的运算 (复习)",
            description: "复习带小括号的混合运算"
          }
        ]
      },
      {
        title: "第三单元：三位数加减",
        topics: [
          { 
            id: "threeDigitOperation", 
            name: "三位数加减混合运算",
            description: "掌握三位数加减混合运算"
          }
        ]
      },
      {
        title: "第六单元：乘除法运算",
        topics: [
          { 
            id: "twoDigitMultiply", 
            name: "两位数乘一位数",
            description: "掌握两位数乘一位数的运算"
          },
          { 
            id: "twoDigitDivide", 
            name: "两位数除一位数",
            description: "掌握两位数除一位数的运算"
          }
        ]
      },
      {
        title: "第七单元：小数运算",
        topics: [
          { 
            id: "decimalAdd", 
            name: "小数加法",
            description: "掌握简单小数加法运算"
          },
          { 
            id: "decimalSubtract", 
            name: "小数减法",
            description: "掌握简单小数减法运算"
          }
        ]
      }
    ],
    topics: [
      { 
        id: "multiplyAdd", 
        name: "乘加运算 (a+b×c)",
        description: "掌握乘加运算顺序"
      },
      { 
        id: "multiplySubtract", 
        name: "乘减运算 (a-b×c)",
        description: "掌握乘减运算顺序"
      },
      { 
        id: "divideAdd", 
        name: "除加运算 (a+e÷c)",
        description: "掌握除加运算顺序"
      },
      { 
        id: "divideSubtract", 
        name: "除减运算 (a-e÷c)",
        description: "掌握除减运算顺序"
      },
      { 
        id: "parentheses", 
        name: "带小括号的运算",
        description: "掌握带小括号的混合运算"
      },
      { 
        id: "reviewMultiplyAdd", 
        name: "乘加运算 (复习)",
        description: "复习乘加运算"
      },
      { 
        id: "reviewMultiplySubtract", 
        name: "乘减运算 (复习)",
        description: "复习乘减运算"
      },
      { 
        id: "reviewDivideAdd", 
        name: "除加运算 (复习)",
        description: "复习除加运算"
      },
      { 
        id: "reviewDivideSubtract", 
        name: "除减运算 (复习)",
        description: "复习除减运算"
      },
      { 
        id: "reviewParentheses", 
        name: "带小括号的运算 (复习)",
        description: "复习带小括号的混合运算"
      },
      { 
        id: "threeDigitOperation", 
        name: "三位数加减混合运算",
        description: "掌握三位数加减混合运算"
      },
      { 
        id: "twoDigitMultiply", 
        name: "两位数乘一位数",
        description: "掌握两位数乘一位数的运算"
      },
      { 
        id: "twoDigitDivide", 
        name: "两位数除一位数",
        description: "掌握两位数除一位数的运算"
      },
      { 
        id: "decimalAdd", 
        name: "小数加法",
        description: "掌握简单小数加法运算"
      },
      { 
        id: "decimalSubtract", 
        name: "小数减法",
        description: "掌握简单小数减法运算"
      }
    ]
  },
  4: {
    title: "四年级",
    units: [
      {
        title: "第一单元：三位数乘两位数",
        topics: [
          { 
            id: "multiply3x2", 
            name: "三位数乘两位数",
            description: "掌握三位数乘两位数的运算"
          }
        ]
      },
      {
        title: "第二单元：除数是两位数的除法",
        topics: [
          { 
            id: "divide3x2", 
            name: "除数是两位数的除法",
            description: "掌握除数是两位数的除法运算"
          }
        ]
      },
      {
        title: "第三单元：分数加减法",
        topics: [
          { 
            id: "fractionAddSame", 
            name: "同分母分数加法",
            description: "掌握同分母分数加法运算"
          },
          { 
            id: "fractionSubtractSame", 
            name: "同分母分数减法",
            description: "掌握同分母分数减法运算"
          },
          { 
            id: "fractionAddDiff", 
            name: "异分母分数加法",
            description: "掌握异分母分数加法运算"
          },
          { 
            id: "fractionSubtractDiff", 
            name: "异分母分数减法",
            description: "掌握异分母分数减法运算"
          }
        ]
      },
      {
        title: "第四单元：混合运算和运算定律",
        topics: [
          { 
            id: "mixedOperations3", 
            name: "三步四则混合运算",
            description: "掌握三步四则混合运算顺序"
          },
          { 
            id: "operationLaws", 
            name: "运算定律应用",
            description: "掌握加法交换律、结合律和乘法交换律、结合律、分配律的应用"
          }
        ]
      }
    ],
    topics: [
      { 
        id: "multiply3x2", 
        name: "三位数乘两位数",
        description: "掌握三位数乘两位数的运算"
      },
      { 
        id: "divide3x2", 
        name: "除数是两位数的除法",
        description: "掌握除数是两位数的除法运算"
      },
      { 
        id: "fractionAddSame", 
        name: "同分母分数加法",
        description: "掌握同分母分数加法运算"
      },
      { 
        id: "fractionSubtractSame", 
        name: "同分母分数减法",
        description: "掌握同分母分数减法运算"
      },
      { 
        id: "fractionAddDiff", 
        name: "异分母分数加法",
        description: "掌握异分母分数加法运算"
      },
      { 
        id: "fractionSubtractDiff", 
        name: "异分母分数减法",
        description: "掌握异分母分数减法运算"
      },
      { 
        id: "mixedOperations3", 
        name: "三步四则混合运算",
        description: "掌握三步四则混合运算顺序"
      },
      { 
        id: "operationLaws", 
        name: "运算定律应用",
        description: "掌握加法交换律、结合律和乘法交换律、结合律、分配律的应用"
      }
    ]
  },
  5: {
    title: "五年级",
    units: [
      {
        title: "第一单元：小数乘法",
        topics: [
          { 
            id: "decimalMultiplyInt", 
            name: "小数乘整数",
            description: "掌握小数乘整数的运算"
          },
          { 
            id: "decimalMultiplyDecimal", 
            name: "小数乘小数",
            description: "掌握小数乘小数的运算"
          }
        ]
      },
      {
        title: "第二单元：小数除法",
        topics: [
          { 
            id: "decimalDivideInt", 
            name: "小数除以整数",
            description: "掌握小数除以整数的运算"
          },
          { 
            id: "decimalDivideDecimal", 
            name: "小数除以小数",
            description: "掌握小数除以小数的运算"
          }
        ]
      },
      {
        title: "第三单元：分数乘除法",
        topics: [
          { 
            id: "fractionMultiplyInt", 
            name: "分数乘整数",
            description: "掌握分数乘整数的运算"
          },
          { 
            id: "fractionMultiplyFraction", 
            name: "分数乘分数",
            description: "掌握分数乘分数的运算"
          },
          { 
            id: "fractionAddDiff", 
            name: "异分母分数加法",
            description: "掌握异分母分数加法运算"
          },
          { 
            id: "fractionSubtractDiff", 
            name: "异分母分数减法",
            description: "掌握异分母分数减法运算"
          }
        ]
      }
    ],
    topics: [
      { 
        id: "decimalMultiplyInt", 
        name: "小数乘整数",
        description: "掌握小数乘整数的运算"
      },
      { 
        id: "decimalMultiplyDecimal", 
        name: "小数乘小数",
        description: "掌握小数乘小数的运算"
      },
      { 
        id: "decimalDivideInt", 
        name: "小数除以整数",
        description: "掌握小数除以整数的运算"
      },
      { 
        id: "decimalDivideDecimal", 
        name: "小数除以小数",
        description: "掌握小数除以小数的运算"
      },
      { 
        id: "fractionAddDiff", 
        name: "异分母分数加法",
        description: "掌握异分母分数加法运算"
      },
      { 
        id: "fractionSubtractDiff", 
        name: "异分母分数减法",
        description: "掌握异分母分数减法运算"
      },
      { 
        id: "fractionMultiplyInt", 
        name: "分数乘整数",
        description: "掌握分数乘整数的运算"
      },
      { 
        id: "fractionMultiplyFraction", 
        name: "分数乘分数",
        description: "掌握分数乘分数的运算"
      }
    ]
  },
  6: {
    title: "六年级",
    units: [
      {
        title: "第一单元：分数除法",
        topics: [
          { 
            id: "fractionDivideInt", 
            name: "分数除以整数",
            description: "掌握分数除以整数的运算"
          },
          { 
            id: "fractionDivideFraction", 
            name: "分数除以分数",
            description: "掌握分数除以分数的运算"
          }
        ]
      },
      {
        title: "第二单元：百分数",
        topics: [
          { 
            id: "percentConvert", 
            name: "百分数与小数转换",
            description: "掌握百分数与小数的相互转换"
          },
          { 
            id: "percentAddSubtract", 
            name: "百分数加减法",
            description: "掌握百分数加减法运算"
          },
          { 
            id: "percentMultiply", 
            name: "百分数乘法",
            description: "掌握百分数乘法运算"
          },
          { 
            id: "percentDivide", 
            name: "百分数除法",
            description: "掌握百分数除法运算"
          }
        ]
      },
      {
        title: "第三单元：比例和复杂混合运算",
        topics: [
          { 
            id: "proportion", 
            name: "比例计算",
            description: "掌握比例的基本性质和计算"
          },
          { 
            id: "complexMixed", 
            name: "复杂四则混合运算",
            description: "掌握包含小数、分数、百分数的复杂四则混合运算"
          }
        ]
      }
    ],
    topics: [
      { 
        id: "fractionDivideInt", 
        name: "分数除以整数",
        description: "掌握分数除以整数的运算"
      },
      { 
        id: "fractionDivideFraction", 
        name: "分数除以分数",
        description: "掌握分数除以分数的运算"
      },
      { 
        id: "percentConvert", 
        name: "百分数与小数转换",
        description: "掌握百分数与小数的相互转换"
      },
      { 
        id: "percentAddSubtract", 
        name: "百分数加减法",
        description: "掌握百分数加减法运算"
      },
      { 
        id: "percentMultiply", 
        name: "百分数乘法",
        description: "掌握百分数乘法运算"
      },
      { 
        id: "percentDivide", 
        name: "百分数除法",
        description: "掌握百分数除法运算"
      },
      { 
        id: "proportion", 
        name: "比例计算",
        description: "掌握比例的基本性质和计算"
      },
      { 
        id: "complexMixed", 
        name: "复杂四则混合运算",
        description: "掌握包含小数、分数、百分数的复杂四则混合运算"
      }
    ]
  }
};

// 难度配置
const difficultyConfig = {
  easy: {
    name: "基础难度",
    description: "题目较为简单，适合巩固基础知识和课堂练习"
  },
  medium: {
    name: "中等难度",
    description: "题目难度适中，符合大部分学生水平，适合课后练习"
  },
  hard: {
    name: "挑战难度",
    description: "题目较为复杂，适合学有余力的学生进行能力提升"
  }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { gradeConfig, difficultyConfig };
} else {
  window.gradeConfig = gradeConfig;
  window.difficultyConfig = difficultyConfig;
}