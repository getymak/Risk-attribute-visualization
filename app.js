// 问卷数据 - 基于KYC填写.md的正确内容
const questionnaire = {
    // 风险承受能力部分 (Q1-Q10)
    ability: [
        {
            id: 1,
            title: "您目前的可投资产规模占总资产的比例大约是多少？",
            category: "风险承受能力",
            icon: "fa-chart-pie",
            subFeature: "资产规模",
            options: [
                { text: "超过70%", score: 20 },
                { text: "51%-70%", score: 15 },
                { text: "31%-50%", score: 10 },
                { text: "11%-30%", score: 5 },
                { text: "少于10%（含）", score: 0 }
            ]
        },
        {
            id: 2,
            title: "您的主要收入来源是?",
            category: "风险承受能力",
            icon: "fa-money-bill-wave",
            subFeature: "收入来源",
            options: [
                { text: "工资/薪水", score: 10 },
                { text: "租金", score: 15 },
                { text: "企业经营", score: 5 },
                { text: "投资收益", score: 20 },
                { text: "其他（请说明）", score: 5 }
            ]
        },
        {
            id: 3,
            title: "基于当前的家庭资产负债情况，在保持生活财务不受影响的前提下，您认为可投资产可接受的最大亏损值是多少？",
            category: "风险承受能力",
            icon: "fa-exclamation-triangle",
            subFeature: "亏损承受",
            options: [
                { text: "最大本金亏损50%以上", score: 20 },
                { text: "最大本金亏损30%-50%", score: 15 },
                { text: "最大本金亏损10%-30%", score: 10 },
                { text: "最大本金亏损10%以内", score: 5 },
                { text: "不能有亏损", score: 0 }
            ]
        },
        {
            id: 4,
            title: "您是否有固定的月度储蓄？",
            category: "风险承受能力",
            icon: "fa-piggy-bank",
            subFeature: "储蓄能力",
            options: [
                { text: "是，且储蓄额大于月度支出", score: 20 },
                { text: "是，且储蓄额与月度支出相当", score: 15 },
                { text: "是，但储蓄额少于月度支出", score: 10 },
                { text: "偶尔储蓄", score: 5 },
                { text: "没有储蓄", score: 0 }
            ]
        },
        {
            id: 5,
            title: "如果您突然失去主要收入来源，您能维持现有生活水平多久？",
            category: "风险承受能力",
            icon: "fa-clock",
            subFeature: "应急能力",
            options: [
                { text: "超过一年", score: 20 },
                { text: "6-12个月", score: 15 },
                { text: "3-6个月", score: 10 },
                { text: "1-3个月", score: 5 },
                { text: "不到一个月", score: 0 }
            ]
        },
        {
            id: 6,
            title: "您认为自己的投资知识和经验如何？",
            category: "风险承受能力",
            icon: "fa-graduation-cap",
            subFeature: "投资经验",
            options: [
                { text: "非常丰富，参与过股指期货、权证等资产投资，并倾向于自己作出投资决定", score: 20 },
                { text: "较为丰富，参与过股票、混合型基金、股票型基金等投资，有一定的投资经验", score: 15 },
                { text: "一般，参与过银行净值型理财、债券型基金、固收+基金等投资，有一些基本的投资知识", score: 10 },
                { text: "较少，仅参与货币型基金、银行存款以及固收理财等投资，缺乏投资经验", score: 5 },
                { text: "几乎没有，完全不懂投资", score: 0 }
            ]
        },
        {
            id: 7,
            title: "您是否有过投资失败的经历，如有遭受的损失是多少？",
            category: "风险承受能力",
            icon: "fa-chart-line",
            subFeature: "投资经历",
            options: [
                { text: "几乎没有亏损", score: 20 },
                { text: "最大本金亏损少于10%", score: 15 },
                { text: "最大本金亏损少于30%", score: 10 },
                { text: "最大本金亏损少于50%", score: 5 },
                { text: "最大本金亏损50%以上", score: 0 }
            ]
        },
        {
            id: 8,
            title: "您目前的债务负担如何？",
            category: "风险承受能力",
            icon: "fa-credit-card",
            subFeature: "债务状况",
            options: [
                { text: "无债务，财务自由", score: 20 },
                { text: "少量债务，不影响日常生活", score: 15 },
                { text: "适度债务，需要计划还款", score: 10 },
                { text: "较高债务，还款压力较大", score: 5 },
                { text: "非常高债务，几乎无法承受", score: 0 }
            ]
        },
        {
            id: 9,
            title: "您对家庭财务规划的态度是？",
            category: "风险承受能力",
            icon: "fa-home",
            subFeature: "财务规划",
            options: [
                { text: "非常重视，有详细的财务规划", score: 20 },
                { text: "较为重视，有一定的财务规划", score: 15 },
                { text: "一般，有基本的预算和储蓄", score: 10 },
                { text: "较少，没有明确的财务规划", score: 5 },
                { text: "几乎没有，随收入和支出变化而变化", score: 0 }
            ]
        },
        {
            id: 10,
            title: "您是否有为子女教育或退休等未来目标做了财务准备？",
            category: "风险承受能力",
            icon: "fa-baby",
            subFeature: "未来规划",
            options: [
                { text: "是的，已经做好了充分的准备", score: 20 },
                { text: "已经做了一些准备，但还有改进空间", score: 15 },
                { text: "有计划，但还没有开始实施", score: 10 },
                { text: "有考虑，但还没有具体的计划", score: 5 },
                { text: "没有，没有做任何准备", score: 0 }
            ]
        }
    ],
    // 风险承受态度部分 (Q11-Q20)
    attitude: [
        {
            id: 11,
            title: "当面对市场波动时，您的一般反应是什么？",
            category: "风险承受态度",
            icon: "fa-chart-area",
            subFeature: "市场反应",
            options: [
                { text: "兴奋，视为增加投资的机会", score: 20 },
                { text: "乐观，认为长期趋势会抵消短期波动", score: 15 },
                { text: "冷静，根据既定计划调整投资", score: 10 },
                { text: "担忧，可能会减少投资以降低风险", score: 5 },
                { text: "恐慌，可能会撤资以避免进一步损失", score: 0 }
            ]
        },
        {
            id: 12,
            title: "您如何看待高风险投资的潜在高回报？",
            category: "风险承受态度",
            icon: "fa-rocket",
            subFeature: "风险偏好",
            options: [
                { text: "极度偏好，高度倾向于高风险投资，认为只有通过承担极大风险才能获得显著的高回报，愿意为此付出相应代价。", score: 20 },
                { text: "积极追求，愿意承担较高风险以追求潜在的高回报，相信通过精准的投资决策可以最大化收益。", score: 15 },
                { text: "平衡看待，认为高风险与高回报是相辅相成的，会在投资组合中适当配置高风险资产，以追求更高的收益。", score: 10 },
                { text: "谨慎考虑，认识到高风险投资可能带来高回报，但在投资前会进行详细的分析和评估，确保风险在可承受范围内。", score: 5 },
                { text: "完全不考虑，认为高风险投资带来的潜在高回报并不值得冒险，更倾向于稳健的投资方式。", score: 0 }
            ]
        },
        {
            id: 13,
            title: "您如何看待投资中的\"不可能三角\"（即高收益、低风险、高流动性三者难以同时兼得）？",
            category: "风险承受态度",
            icon: "fa-triangle-exclamation",
            subFeature: "投资理念",
            options: [
                { text: "完全理解投资中的不可能三角，即高收益、低风险和高流动性三者不可能同时存在。我接受为了追求高收益可能需要承担更高的风险或牺牲流动性。", score: 20 },
                { text: "认同投资中存在一个不可能三角，通常需要在三者之间做出权衡。我认为明智的投资是在风险和收益之间找到合适的平衡点。", score: 15 },
                { text: "对投资中的不可能三角有一定的了解，但我认为通过精心选择和分散投资，可以在一定程度上缓解这个三角的约束。", score: 10 },
                { text: "不太相信投资中的不可能三角。认为通过正确的市场分析和时机把握，有可能找到同时具备高收益、低风险和高流动性的投资机会。", score: 5 },
                { text: "不同意投资中的不可能三角理论。相信市场上存在能够同时提供高收益、低风险和高流动性的投资产品，只是需要更多的研究和发现。", score: 0 }
            ]
        },
        {
            id: 14,
            title: "您如何看待时间周期与投资回报的联系？",
            category: "风险承受态度",
            icon: "fa-hourglass-half",
            subFeature: "时间观念",
            options: [
                { text: "深信投资回报与时间周期紧密相关，长期投资能够降低波动风险并提高获得稳定回报的可能性。", score: 20 },
                { text: "认为投资回报与时间周期有较强的联系，长期投资通常比短期投资更有可能获得较好的收益。", score: 15 },
                { text: "对时间周期与投资回报的关系持中立态度，虽然长期投资可能更稳定，但短期投资在某些市场条件下也能获得不错的收益。", score: 10 },
                { text: "认为时间周期对投资回报的影响有限，通过精准的市场预测和操作，短期投资也能实现高收益。", score: 5 },
                { text: "不相信时间周期与投资回报之间有必然联系，任何时间内都有可能通过高风险投资获得高额回报。", score: 0 }
            ]
        },
        {
            id: 15,
            title: "假设您的可投资产准备投资基金，您更喜欢以下哪一个投资组合，假设基金A预期回报30%，但是可能亏损40%，基金B预期回报3%，但是可能亏损3%",
            category: "风险承受态度",
            icon: "fa-balance-scale",
            subFeature: "投资组合",
            options: [
                { text: "90%投资基金A，10%基金B", score: 20 },
                { text: "70%投资基金A，30%基金B", score: 15 },
                { text: "50%投资基金A，50%基金B", score: 10 },
                { text: "30%投资基金A，70%基金B", score: 5 },
                { text: "10%投资基金A，90%基金B", score: 0 }
            ]
        },
        {
            id: 16,
            title: "假设您的可投资产准备投资基金，您更喜欢以下哪一个投资组合，假设基金A预期回报50%，但是需要放弃5年流动性，基金B预期回报5%，但是要放弃1年流动性",
            category: "风险承受态度",
            icon: "fa-exchange-alt",
            subFeature: "流动性偏好",
            options: [
                { text: "90%投资基金A，10%基金B", score: 20 },
                { text: "70%投资基金A，30%基金B", score: 15 },
                { text: "50%投资基金A，50%基金B", score: 10 },
                { text: "30%投资基金A，70%基金B", score: 5 },
                { text: "10%投资基金A，90%基金B", score: 0 }
            ]
        },
        {
            id: 17,
            title: "当市场出现不利变化时，您的情绪反应如何？",
            category: "风险承受态度",
            icon: "fa-sad-tear",
            subFeature: "情绪反应",
            options: [
                { text: "保持冷静，根据计划行事", score: 20 },
                { text: "有些焦虑，但努力保持客观", score: 15 },
                { text: "感到不安，可能会采取行动减少投资", score: 10 },
                { text: "感到恐慌，可能会做出冲动决策", score: 5 },
                { text: "感到绝望，可能会完全退出市场", score: 0 }
            ]
        },
        {
            id: 18,
            title: "如果投资收益未达到预期，您的感受是？",
            category: "风险承受态度",
            icon: "fa-frown",
            subFeature: "预期管理",
            options: [
                { text: "几乎没有影响，能够理性接受", score: 20 },
                { text: "不太在意，相信长期会好转", score: 15 },
                { text: "有些失望，但可以接受", score: 10 },
                { text: "非常失望，希望采取措施", score: 5 },
                { text: "无法接受，需要立即改变", score: 0 }
            ]
        },
        {
            id: 19,
            title: "一项原定3年的投资计划，在投资1年后，亏损达到多少会使您感到焦虑",
            category: "风险承受态度",
            icon: "fa-thermometer-half",
            subFeature: "焦虑阈值",
            options: [
                { text: "亏损50%以上", score: 20 },
                { text: "亏损30%-50%", score: 15 },
                { text: "亏损20%-30%", score: 10 },
                { text: "亏损10%-20%", score: 5 },
                { text: "亏损10%以内", score: 0 }
            ]
        },
        {
            id: 20,
            title: "以下那个选项更符合您对债务的看法？",
            category: "风险承受态度",
            icon: "fa-handshake",
            subFeature: "债务观念",
            options: [
                { text: "债务是工具，可以合理利用", score: 20 },
                { text: "债务是必要的，但应保持在可控范围内", score: 15 },
                { text: "债务是负担，应尽量避免", score: 10 },
                { text: "债务是风险，应尽快偿还", score: 5 },
                { text: "债务是灾难，必须完全避免", score: 0 }
            ]
        }
    ]
};

// 子特征权重配置 - 每个维度各100分
const subFeatureWeights = {
    ability: {
        "资产规模": 0.1,
        "收入来源": 0.1,
        "亏损承受": 0.15,
        "储蓄能力": 0.1,
        "应急能力": 0.1,
        "投资经验": 0.15,
        "投资经历": 0.1,
        "债务状况": 0.1,
        "财务规划": 0.05,
        "未来规划": 0.05
    },
    attitude: {
        "市场反应": 0.15,
        "风险偏好": 0.15,
        "投资理念": 0.1,
        "时间观念": 0.1,
        "投资组合": 0.1,
        "流动性偏好": 0.1,
        "情绪反应": 0.1,
        "预期管理": 0.1,
        "焦虑阈值": 0.05,
        "债务观念": 0.05
    }
};

// 题目到子特征的映射
const questionToSubFeature = {
    // 风险承受能力
    1: "资产规模", 2: "收入来源", 3: "亏损承受", 4: "储蓄能力",
    5: "应急能力", 6: "投资经验", 7: "投资经历", 8: "债务状况",
    9: "财务规划", 10: "未来规划",
    // 风险承受态度
    11: "市场反应", 12: "风险偏好", 13: "投资理念", 14: "时间观念",
    15: "投资组合", 16: "流动性偏好", 17: "情绪反应", 18: "预期管理",
    19: "焦虑阈值", 20: "债务观念"
};

// 全局变量
let currentQuestion = 0;
let answers = {};
let allQuestions = [];

// 初始化
function init() {
    // 合并所有问题
    allQuestions = [...questionnaire.ability, ...questionnaire.attitude];
    
    // 显示第一题
    showQuestion(0);
    
    // 绑定事件
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('download-btn').addEventListener('click', downloadExcel);
    document.getElementById('restart-btn').addEventListener('click', restart);
}

// 显示问题
function showQuestion(index) {
    const question = allQuestions[index];
    
    // 更新问题内容
    document.getElementById('question-title').textContent = question.title;
    document.getElementById('question-category').textContent = question.category;
    document.getElementById('question-icon').className = `fas ${question.icon} text-xl`;
    
    // 更新进度
    const progress = ((index + 1) / allQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${index + 1}/${allQuestions.length}`;
    
    // 生成选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, optionIndex) => {
        const button = document.createElement('button');
        button.className = 'option-button w-full p-4 text-left rounded-lg bg-white border-2 border-gray-200 hover:border-blue-500 transition-all';
        button.innerHTML = `
            <div class="flex items-center">
                <div class="w-6 h-6 rounded-full border-2 border-gray-300 mr-4 flex items-center justify-center">
                    <div class="w-3 h-3 rounded-full bg-blue-500 hidden option-dot"></div>
                </div>
                <span class="text-lg">${option.text}</span>
            </div>
        `;
        
        // 检查是否已选择
        if (answers[question.id] === optionIndex) {
            button.classList.add('selected');
            button.querySelector('.option-dot').classList.remove('hidden');
        }
        
        button.addEventListener('click', () => selectOption(question.id, optionIndex, button));
        optionsContainer.appendChild(button);
    });
    
    // 更新按钮状态
    document.getElementById('prev-btn').disabled = index === 0;
    const nextBtn = document.getElementById('next-btn');
    if (index === allQuestions.length - 1) {
        nextBtn.textContent = '查看结果';
        nextBtn.innerHTML = '查看结果<i class="fas fa-chart-bar ml-2"></i>';
    } else {
        nextBtn.innerHTML = '下一题<i class="fas fa-arrow-right ml-2"></i>';
    }
}

// 选择选项
function selectOption(questionId, optionIndex, button) {
    // 移除其他选项的选中状态
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
        btn.querySelector('.option-dot').classList.add('hidden');
    });
    
    // 设置当前选项为选中状态
    button.classList.add('selected');
    button.querySelector('.option-dot').classList.remove('hidden');
    
    // 保存答案
    answers[questionId] = optionIndex;
    
    // 启用下一题按钮
    document.getElementById('next-btn').disabled = false;
}

// 下一题
function nextQuestion() {
    if (currentQuestion < allQuestions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        // 显示结果
        showResults();
    }
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

// 计算得分 (满分100分制)
function calculateScores() {
    const scores = {
        ability: { total: 0, subFeatures: {} },
        attitude: { total: 0, subFeatures: {} }
    };
    
    // 初始化子特征得分
    Object.keys(subFeatureWeights.ability).forEach(sf => {
        scores.ability.subFeatures[sf] = { score: 0, count: 0 };
    });
    Object.keys(subFeatureWeights.attitude).forEach(sf => {
        scores.attitude.subFeatures[sf] = { score: 0, count: 0 };
    });
    
    // 计算每题得分
    allQuestions.forEach(question => {
        const answer = answers[question.id];
        if (answer !== undefined) {
            const score = question.options[answer].score;
            const subFeature = questionToSubFeature[question.id];
            
            if (question.id <= 10) {
                // 风险承受能力
                scores.ability.subFeatures[subFeature].score += score;
                scores.ability.subFeatures[subFeature].count++;
            } else {
                // 风险承受态度
                scores.attitude.subFeatures[subFeature].score += score;
                scores.attitude.subFeatures[subFeature].count++;
            }
        }
    });
    
    // 计算子特征平均分和总分 (满分100分)
    ['ability', 'attitude'].forEach(type => {
        Object.keys(scores[type].subFeatures).forEach(sf => {
            const subFeatureData = scores[type].subFeatures[sf];
            if (subFeatureData.count > 0) {
                subFeatureData.average = subFeatureData.score / subFeatureData.count;
                subFeatureData.percentage = (subFeatureData.average / 20) * 100;
                scores[type].total += subFeatureData.average * subFeatureWeights[type][sf];
            }
        });
        scores[type].total = Math.round(scores[type].total * 100) / 100;
    });
    
    // 计算综合得分 (取两者平均分，满分100)
    scores.total = Math.round((scores.ability.total + scores.attitude.total) / 2 * 100) / 100;
    
    return scores;
}

// 获取等级 (基于100分制)
function getLevel(score) {
    if (score >= 80) return { level: 'C5', desc: '激进型投资者' };
    if (score >= 64) return { level: 'C4', desc: '积极型投资者' };
    if (score >= 48) return { level: 'C3', desc: '平衡型投资者' };
    if (score >= 32) return { level: 'C2', desc: '稳健型投资者' };
    return { level: 'C1', desc: '保守型投资者' };
}

// 显示结果
function showResults() {
    const scores = calculateScores();
    
    // 隐藏问卷，显示结果
    document.getElementById('questionnaire').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    
    // 显示得分
    document.getElementById('ability-score').textContent = scores.ability.total.toFixed(1);
    document.getElementById('attitude-score').textContent = scores.attitude.total.toFixed(1);
    document.getElementById('total-score').textContent = scores.total.toFixed(1);
    
    // 显示等级
    const abilityLevel = getLevel(scores.ability.total);
    const attitudeLevel = getLevel(scores.attitude.total);
    const totalLevel = getLevel(scores.total);
    
    document.getElementById('ability-level').textContent = abilityLevel.level;
    document.getElementById('attitude-level').textContent = attitudeLevel.level;
    document.getElementById('total-level').textContent = totalLevel.desc;
    
    // 生成雷达图
    createRadarChart('abilityRadar', scores.ability.subFeatures, '风险承受能力');
    createRadarChart('attitudeRadar', scores.attitude.subFeatures, '风险承受态度');
    
    // 生成详细评价
    generateDetailedEvaluation(scores);
}

// 创建雷达图
function createRadarChart(canvasId, subFeatures, title) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    const labels = Object.keys(subFeatures);
    const data = labels.map(label => subFeatures[label].percentage || 0);
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: data,
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(102, 126, 234, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(102, 126, 234, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// 生成详细评价
function generateDetailedEvaluation(scores) {
    const container = document.getElementById('detailed-evaluation');
    
    const abilityLevel = getLevel(scores.ability.total);
    const attitudeLevel = getLevel(scores.attitude.total);
    const totalLevel = getLevel(scores.total);
    
    const abilityEval = getAbilityEvaluation(scores.ability.total);
    const attitudeEval = getAttitudeEvaluation(scores.attitude.total);
    const totalEval = getTotalEvaluation(scores.total);
    
    container.innerHTML = `
        <div class="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <h4 class="font-bold text-lg mb-2">风险承受能力评价 (${scores.ability.total.toFixed(1)}分 - ${abilityLevel.level})</h4>
            <p class="text-gray-700 mb-3">${abilityEval.description}</p>
            <div class="bg-blue-50 p-4 rounded border-l-4 border-blue-400 mb-3">
                <h5 class="font-medium text-blue-700 mb-2">详细分析：</h5>
                <p class="text-gray-600 text-sm">${abilityEval.details}</p>
            </div>
            <div class="bg-blue-100 p-4 rounded">
                <h5 class="font-medium text-blue-700 mb-2">典型案例：</h5>
                <p class="text-gray-600 text-sm">${abilityEval.example}</p>
            </div>
        </div>
        <div class="bg-white p-6 rounded-lg border-l-4 border-purple-500">
            <h4 class="font-bold text-lg mb-2">风险承受态度评价 (${scores.attitude.total.toFixed(1)}分 - ${attitudeLevel.level})</h4>
            <p class="text-gray-700 mb-3">${attitudeEval.description}</p>
            <div class="bg-purple-50 p-4 rounded border-l-4 border-purple-400 mb-3">
                <h5 class="font-medium text-purple-700 mb-2">详细分析：</h5>
                <p class="text-gray-600 text-sm">${attitudeEval.details}</p>
            </div>
            <div class="bg-purple-100 p-4 rounded">
                <h5 class="font-medium text-purple-700 mb-2">典型案例：</h5>
                <p class="text-gray-600 text-sm">${attitudeEval.example}</p>
            </div>
        </div>
        <div class="bg-white p-6 rounded-lg border-l-4 border-green-500">
            <h4 class="font-bold text-lg mb-2">综合投资建议 (${scores.total.toFixed(1)}分 - ${totalLevel.desc})</h4>
            <div class="space-y-4">
                <div class="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <h5 class="font-medium text-green-700 mb-2">资产配置建议：</h5>
                    <p class="text-gray-600 text-sm">${totalEval.allocation}</p>
                </div>
                <div class="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <h5 class="font-medium text-green-700 mb-2">适合产品：</h5>
                    <p class="text-gray-600 text-sm">${totalEval.products}</p>
                </div>
                <div class="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <h5 class="font-medium text-green-700 mb-2">投资策略：</h5>
                    <p class="text-gray-600 text-sm">${totalEval.strategy}</p>
                </div>
                <div class="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <h5 class="font-medium text-green-700 mb-2">风险收益预期：</h5>
                    <p class="text-gray-600 text-sm">${totalEval.risk}</p>
                </div>
                <div class="bg-green-100 p-4 rounded">
                    <h5 class="font-medium text-green-700 mb-2">投资案例：</h5>
                    <p class="text-gray-600 text-sm">${totalEval.example}</p>
                </div>
            </div>
        </div>
    `;
}

// 获取能力评价 (基于100分制)
function getAbilityEvaluation(score) {
    if (score >= 80) {
        return {
            level: "很强",
            description: "您具备很强的风险承受能力，拥有充足的资金实力、丰富的投资经验和稳定的收入来源，能够承担较高的投资风险。",
            details: "您的财务状况非常健康，可投资资产占比较高，收入来源稳定多样化，储蓄能力强，应急资金充足。您在投资方面经验丰富，对各类金融产品有深入了解，过往投资表现良好。债务负担轻微或无债务，财务规划完善，为未来目标做好了充分准备。",
            example: "案例：张先生，35岁，IT高管，年收入80万，可投资资产占总资产60%，有10年投资经验，参与过股票、基金、期货等多种投资，储蓄率40%，应急资金可维持2年生活，无房贷车贷，已为子女教育和退休做好规划。"
        };
    }
    if (score >= 64) {
        return {
            level: "较强",
            description: "您具备较强的风险承受能力，有一定的资金基础和投资经验，能够承担中等偏高的投资风险。",
            details: "您的财务基础较为扎实，可投资资产占比适中，收入来源相对稳定，有一定的储蓄习惯和应急准备。在投资方面有一定经验，了解基本的投资知识，过往投资有盈有亏但总体可控。债务负担在合理范围内，对财务规划有一定重视。",
            example: "案例：李女士，30岁，银行职员，年收入35万，可投资资产占总资产45%，有5年投资经验，主要投资股票和基金，储蓄率25%，应急资金可维持8个月生活，有适量房贷，正在为子女教育储备资金。"
        };
    }
    if (score >= 48) {
        return {
            level: "中等",
            description: "您具备中等的风险承受能力，资金状况和投资经验处于平均水平，适合承担中等程度的投资风险。",
            details: "您的财务状况处于中等水平，可投资资产占比一般，收入来源主要依靠工资，储蓄习惯有待加强。投资经验有限，主要接触过银行理财和基金产品，对复杂金融工具了解不多。债务负担适中，财务规划意识一般。",
            example: "案例：王先生，28岁，公司职员，年收入20万，可投资资产占总资产30%，有2年投资经验，主要购买银行理财和货币基金，储蓄率15%，应急资金可维持4个月生活，有房贷压力，刚开始考虑理财规划。"
        };
    }
    if (score >= 32) {
        return {
            level: "较弱",
            description: "您的风险承受能力较为有限，建议选择相对稳健的投资方式，控制投资风险。",
            details: "您的财务状况相对紧张，可投资资产占比较低，收入来源单一，储蓄能力有限。投资经验不足，主要接触过银行存款和货币基金等低风险产品。债务负担较重，财务规划需要加强，应优先改善财务状况。",
            example: "案例：赵女士，26岁，销售员，年收入12万，可投资资产占总资产20%，投资经验不足1年，只买过余额宝，储蓄率10%，应急资金可维持2个月生活，有信用卡债务和房租压力，财务规划意识薄弱。"
        };
    }
    return {
        level: "很弱",
        description: "您的风险承受能力较弱，建议优先考虑资本保值，选择低风险的投资产品。",
        details: "您的财务状况较为困难，可投资资产很少，收入不稳定，几乎没有储蓄。投资经验极少，对金融产品了解有限。债务负担沉重，缺乏财务规划，急需改善基本财务状况和建立应急资金。",
        example: "案例：陈先生，24岁，临时工，年收入8万，可投资资产占总资产不足10%，无投资经验，无储蓄习惯，应急资金不足1个月生活费，有多项债务，收入勉强维持生活，需要先解决基本财务问题。"
    };
}

// 获取态度评价 (基于100分制)
function getAttitudeEvaluation(score) {
    if (score >= 80) {
        return {
            level: "积极进取",
            description: "您对投资风险持积极态度，愿意为了获得更高收益而承担相应风险，具备良好的风险管理心态。",
            details: "您在市场波动时能保持冷静甚至兴奋，将其视为投资机会。您深度理解高风险高回报的投资逻辑，认同投资的'不可能三角'理论，相信时间能够平滑风险。您偏好高风险高收益的投资组合，对流动性要求不高，情绪控制能力强，能理性面对亏损和未达预期的情况。",
            example: "案例：投资老手刘总，在2020年疫情市场大跌时，不仅没有恐慌抛售，反而加大了对优质股票的投资。他认为'危机就是机会'，最终在市场反弹中获得了丰厚回报。他的投资组合中股票占比70%，从不因为短期波动而改变长期策略。"
        };
    }
    if (score >= 64) {
        return {
            level: "积极稳健",
            description: "您对投资风险持较为积极的态度，能够接受一定程度的市场波动，追求稳健增长。",
            details: "您在市场波动时能保持相对乐观，认为长期趋势会抵消短期波动。您愿意承担较高风险以追求潜在高回报，理解投资中的权衡关系，相信投资回报与时间周期相关。您偏好平衡的投资组合，对流动性有一定要求，能够较好地管理情绪和预期。",
            example: "案例：白领张经理，在市场调整期间会适当增加定投金额，但不会做出激进的投资决策。她的投资组合股债比例为6:4，每月定投基金，即使遇到亏损也会坚持既定计划，相信时间的复利效应。"
        };
    }
    if (score >= 48) {
        return {
            level: "平衡理性",
            description: "您对投资风险持平衡态度，既希望获得合理收益，也注重控制风险，追求稳健投资。",
            details: "您在市场波动时能保持冷静，会根据既定计划调整投资。您平衡看待风险与收益的关系，对投资的'不可能三角'有一定理解，对时间与收益的关系持中立态度。您偏好均衡的投资组合，对流动性有适中要求，情绪控制能力一般，对亏损和未达预期有一定容忍度。",
            example: "案例：教师李老师，采用股债5:5的投资策略，市场好时不会过度兴奋，市场差时也不会过度恐慌。她会定期检视投资组合，根据市场情况进行小幅调整，追求长期稳健的投资回报。"
        };
    }
    if (score >= 32) {
        return {
            level: "谨慎保守",
            description: "您对投资风险较为谨慎，更注重资金安全，偏好稳定收益的投资方式。",
            details: "您在市场波动时会感到担忧，可能会减少投资以降低风险。您对高风险投资较为谨慎，需要详细分析后才会投资，对投资理论了解有限，更相信稳健的投资方式。您偏好低风险的投资组合，对流动性要求较高，容易受情绪影响，对亏损和未达预期的容忍度较低。",
            example: "案例：退休前的老王，主要投资银行理财和债券基金，股票投资占比不超过20%。市场波动时他会感到不安，经常查看账户余额，一旦亏损超过5%就会考虑赎回，更看重本金安全。"
        };
    }
    return {
        level: "极度保守",
        description: "您对投资风险非常谨慎，强调资金安全，建议选择保本型投资产品。",
        details: "您在市场波动时容易恐慌，可能会完全撤出市场。您完全不考虑高风险投资，不相信投资理论，认为任何时候都可能获得高回报。您只接受保本型投资，对流动性要求很高，情绪控制能力较弱，无法接受任何亏损和未达预期的情况。",
        example: "案例：保守的阿姨，只敢把钱存银行定期，即使银行理财产品也不敢买。她认为'投资有风险'，宁可接受低收益也不愿承担任何本金损失的可能，一听到别人投资亏损就更加坚定自己的选择。"
    };
}

// 获取综合评价 (基于100分制)
function getTotalEvaluation(score) {
    if (score >= 80) {
        return {
            level: "C5 - 激进型投资者",
            allocation: "建议配置：股票型基金60-80%，债券型基金15-25%，货币基金5-15%",
            products: "适合投资成长性较好的股票、股票型基金、指数基金、股指期货等高风险高收益产品",
            strategy: "采用积极的投资策略，可以进行波段操作和择时投资，适合参与新股申购、可转债投资等",
            risk: "预期年化收益15-25%，但需承受30-50%的最大回撤风险",
            example: "投资案例：小明投资100万，配置70%股票基金、20%债券基金、10%货币基金。在牛市中获得25%收益，熊市中最大亏损35%，但长期年化收益达到18%。"
        };
    }
    if (score >= 64) {
        return {
            level: "C4 - 积极型投资者",
            allocation: "建议配置：股票型基金40-60%，债券型基金25-40%，货币基金10-20%",
            products: "适合投资混合型基金、优质蓝筹股票、行业ETF等中高风险产品",
            strategy: "采用稳健积极的投资策略，以长期投资为主，适度进行资产配置调整",
            risk: "预期年化收益10-18%，需承受20-35%的最大回撤风险",
            example: "投资案例：小红投资50万，配置50%股票基金、35%债券基金、15%货币基金。市场好时收益15%，市场差时亏损20%，长期年化收益约12%。"
        };
    }
    if (score >= 48) {
        return {
            level: "C3 - 平衡型投资者",
            allocation: "建议配置：股票型基金20-40%，债券型基金40-60%，货币基金15-25%",
            products: "适合投资平衡型基金、债券基金、银行净值型理财等中等风险产品",
            strategy: "采用均衡的投资策略，注重风险控制，定期进行资产再平衡",
            risk: "预期年化收益6-12%，需承受10-25%的最大回撤风险",
            example: "投资案例：小李投资30万，配置30%股票基金、50%债券基金、20%货币基金。收益相对稳定，年化收益约8%，最大亏损不超过15%。"
        };
    }
    if (score >= 32) {
        return {
            level: "C2 - 稳健型投资者",
            allocation: "建议配置：股票型基金10-25%，债券型基金50-70%，货币基金20-30%",
            products: "适合投资债券基金、银行理财、国债等低风险产品",
            strategy: "采用保守稳健的投资策略，以资本保值增值为主要目标",
            risk: "预期年化收益4-8%，需承受5-15%的最大回撤风险",
            example: "投资案例：小张投资20万，配置20%股票基金、60%债券基金、20%货币基金。追求稳定收益，年化收益约6%，很少出现亏损。"
        };
    }
    return {
        level: "C1 - 保守型投资者",
        allocation: "建议配置：债券型基金30-50%，货币基金40-60%，定期存款10-20%",
        products: "适合投资货币基金、国债、银行存款、保本理财等保本型产品",
        strategy: "采用极度保守的投资策略，以资本保全为首要目标，不接受本金损失",
        risk: "预期年化收益2-5%，基本不承受本金损失风险",
        example: "投资案例：小王投资10万，配置40%债券基金、50%货币基金、10%定期存款。追求绝对安全，年化收益约3%，从不亏损本金。"
    };
}

// 下载Excel
function downloadExcel() {
    const scores = calculateScores();
    
    // 创建工作簿
    const wb = XLSX.utils.book_new();
    
    // 创建答案数据
    const answerData = [];
    answerData.push(['题目编号', '题目内容', '选择答案', '得分', '子特征']);
    
    allQuestions.forEach(question => {
        const answer = answers[question.id];
        if (answer !== undefined) {
            const selectedOption = question.options[answer];
            answerData.push([
                `Q${question.id}`,
                question.title,
                selectedOption.text,
                selectedOption.score,
                questionToSubFeature[question.id]
            ]);
        }
    });
    
    // 添加评分汇总
    answerData.push([]);
    answerData.push(['评分汇总', '', '', '', '']);
    answerData.push(['风险承受能力总分', scores.ability.total.toFixed(1), '', '', '']);
    answerData.push(['风险承受态度总分', scores.attitude.total.toFixed(1), '', '', '']);
    answerData.push(['综合评价总分', scores.total.toFixed(1), '', '', '']);
    
    const abilityLevel = getLevel(scores.ability.total);
    const attitudeLevel = getLevel(scores.attitude.total);
    const totalLevel = getLevel(scores.total);
    
    answerData.push(['风险承受能力等级', abilityLevel.level, '', '', '']);
    answerData.push(['风险承受态度等级', attitudeLevel.level, '', '', '']);
    answerData.push(['综合投资者类型', totalLevel.desc, '', '', '']);
    
    // 创建工作表
    const ws = XLSX.utils.aoa_to_sheet(answerData);
    
    // 添加到工作簿
    XLSX.utils.book_append_sheet(wb, ws, '客户答案');
    
    // 下载文件
    const fileName = `投资者风险评价报告_${new Date().toISOString().slice(0, 10)}.xlsx`;
    XLSX.writeFile(wb, fileName);
}

// 重新开始
function restart() {
    currentQuestion = 0;
    answers = {};
    document.getElementById('questionnaire').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    showQuestion(0);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);