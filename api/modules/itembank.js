import { http } from '../http'

export default {
  // GET:根据userId获得今日答题情况
  getTodayByUserId: data => http.get('exercise/getTodayByUserId', data),

  // GET:根据userId获取今日是否打卡
  todayIsCard: data => http.get('exercise/todayIsCard', data),

  // GET:立即打卡，根据userId进行立即打卡
  immediatelyPunchUserId: data => http.get('exercise/immediatelyPunchUserId', data),

  // GET:查看打卡天数，根据userId查看连续打卡天数
  getDaysCount: data => http.get('exercise/getDaysCount', data),

  // GET:查看用户某天的答题情况，根据userId和日期查看某天的答题情况
  getAnswerSituation: data => http.get('exercise/getAnswerSituation', data),

  // GET:大厂面试，根据userId获取我的面试情况
  getInterviewSituation: data => http.get('exercise/getInterviewSituation', data),

  // GET:专题练习，根据userId获取我的练习情况
  getExerciseSituation: data => http.get('exercise/getExerciseSituation', data),

  // GET:获得大厂公司列表，适用于原型页面"题库-->面试题"
  getCompanyList: () => http.get('exercise/getCompanyList'),

  // GET:大厂面试，获得面试套题列表
  viewSuitList: data => http.get('exercise/viewSuitList', data),

  // GET:根据面试套题ID获取套题详情，对应原型页面：考试详情--咕泡第1界答题大赛
  viewSuitById: data => http.get('exercise/viewSuitById', data),

  // GET:根据试卷ID,试卷signboard,试卷类型（“专题”或“大厂题”）获取该答题
  getAnswerBySignboard: data => http.get('exercise/getAnswerBySignboard', data),

  // GET:大厂面试套题，开始考试
  startSuitByUserId: data => http.get('exercise/startSuitByUserId', data),

  // GET:根据套题ID获取套题的所有题目
  getListBySuitId: data => http.get('exercise/getListBySuitId', data),

  // GET:根据试卷里的ID获取本道题目的内容（大厂面试考试专用）
  getFactoryContentById: data => http.get('exercise/getFactoryContentById', data),

  // POST:根据试卷里的ID提交面试题答案(答题时新增回答或修改回答)
  putFactoryContent: data => http.postAplt('exercise/putFactoryContent', data),

  // POST:面试做完，提交整张试卷的接口
  commitFactory: data => http.postAplt('exercise/commitFactory', data),

  // GET:获得所有的专题分类
  viewClassifyList: data => http.get('exercise/viewClassifyList', data),

  // GET:根据专题分类ID获取该分类所有的标签
  getLabelListByClassifyId: data => http.get('exercise/getLabelListByClassifyId', data),

  // GET:专题练习--确认练习(非常重要，是本次练习开始的标识，会返回signboard作为本次练习的唯一标识)
  startExerciseByUserId: data => http.get('exercise/startExerciseByUserId', data),

  // GET:专题练习--根据标签和题型筛选专题题库的题目列表
  getQuestionBankList: data => http.get('exercise/getQuestionBankList', data),

  // GET:专题练习--根据试卷里的ID获取本道题目的内容（专题练习专用）
  getQuestionContentById: data => http.get('exercise/getQuestionContentById', data),

  // POST:专题练习--根据试卷里的ID提交答案(答题时新增回答或修改回答)
  putQuestionContent: data => http.postAplt('exercise/putQuestionContent', data),

  // POST:专题练习--练习做完，提交整张试卷的接口
  commitQuestion: data => http.postAplt('exercise/commitQuestion', data),

  // GET:大厂面试考试评估--根据userId获取该用户的全部已提交考卷
  getCommitFactoryList: data => http.get('exercise/getCommitFactoryList', data),

  // GET:专题练习考试评估--根据userId获取该用户的全部已提交考卷
  getCommitQuestionList: data => http.get('exercise/getCommitQuestionList', data),

  // GET:考试评估--大厂面试和专题练习通用--根据signboard获取一场考试的结果评估情况
  getAssessmentResult: data => http.get('exercise/getAssessmentResult', data),

  // GET:考试评估--大厂面试和专题练习通用--根据signboard获取一场考试的全部答题ID列表
  getAnswerList: data => http.get('exercise/getAnswerList', data),

  // GET:答案解析--大厂面试和专题练习通用--根据答题ID获取该答题的解析情况
  getAnswerById: data => http.get('exercise/getAnswerById', data),
}
