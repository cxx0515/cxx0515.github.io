// 题目生成器工厂类
class ExerciseGeneratorFactory {
  // 获取指定年级的题目生成器
  static getGenerator(grade) {
    switch(grade) {
      case 1:
        return new Grade1ExerciseGenerator();
      case 2:
        return new Grade2ExerciseGenerator();
      case 3:
        return new Grade3ExerciseGenerator();
      case 4:
        return new Grade4ExerciseGenerator();
      case 5:
        return new Grade5ExerciseGenerator();
      case 6:
        return new Grade6ExerciseGenerator();
      default:
        throw new Error(`不支持的年级: ${grade}`);
    }
  }
  
  // 获取所有年级的配置信息
  static getGradeConfig() {
    return gradeConfig;
  }
  
  // 获取指定年级的题目类型
  static getTopicsForGrade(grade) {
    const config = gradeConfig[grade];
    return config ? config.topics : [];
  }
  
  // 获取指定年级的单元配置
  static getUnitsForGrade(grade) {
    const config = gradeConfig[grade];
    return config ? (config.units || [{ title: `${config.title}计算练习`, topics: config.topics }]) : [];
  }
}

// 导出工厂类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ExerciseGeneratorFactory;
} else {
  window.ExerciseGeneratorFactory = ExerciseGeneratorFactory;
}