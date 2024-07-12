const questions = [
    {
        text: "나에게 신체적인 위협이나 폭력을 가했다 (예: 물건던지기, 주먹질 등)",
        type: "harassment"
    },
    {
        text: "성적 수치심을 느끼게 하는 말 또는 행동을 피해자에게 했다",
        type: "harassment"
    },
    {
        text: "나에게 욕설이나 위협적인 말을 했다",
        type: "harassment"
    },
    {
        text: "나에게 부서이동 또는 퇴사를 강요했다",
        type: "harassment"
    },
    // bullying 질문들 (20개)
    {
        text: "나의 업무능력이나 성과를 인정하지 않거나 조롱했다",
        type: "bullying"
    },
    {
        text: "내 성과를 가로채거나, 성과 달성을 방해했다",
        type: "bullying"
    },
    {
        text: "나에게 휴가나 병가, 각종 복지혜택 등을 쓰지 못하도록 압력을 주었다",
        type: "bullying"
    },
    {
        text: "일하거나 휴식하는 보습을 지나치게 감시했다 (예:CCTV를 통한 감시",
        type: "bullying"
    },
    {
        text: "사고위험이 있는 작업을 할 때 나에게 주의사항이나 안전장비를 전달해주지 않았다",
        type: "bullying"
    },
    {
        text: "나에게 상사의 관혼상제나 개인적인 일상생활과 관련된 일을 하도록 했다",
        type: "bullying"
    },
    {
        text: "누군가 내 개인사에 대한 뒷담화나 소문을 퍼뜨렸다",
        type: "bullying"
    },
    {
        text: "나를 부적절하게 의심하거나, 누명을 씌웠다",
        type: "bullying"
    },
    {
        text: "누군가 내 개인사에 대한 뒷담화나 소문을 퍼뜨렸다",
        type: "bullying"
    },
    {
        text: "누군가 내 물건을 허락 없이 가져가거나 망가뜨렸다",
        type: "bullying"
    },
    {
        text: "다른 사람들 앞에서 (또는 온라인상에서) 나에게 모욕감을 주는 언행을 했다",
        type: "bullying"
    },
    {
        text: "내 의사와 상관없이 음주/흡연을 강요했다",
        type: "bullying"
    },
    {
        text: "나의 의사와 관계없이 불필요한 추가근무(야근, 주말출근 등)을 강요했다",
        type: "bullying"
    },
    {
        text: "나에게 부당한 징계를 주었다 (반성문, 처벌 등)",
        type: "bullying"
    },
    {
        text: "훈련, 승진, 보상, 일상적인 대우 등에서 차별을 했다",
        type: "bullying"
    },
    {
        text: "나에게 힘들고, 모두가 꺼리는 업무를 주었다",
        type: "bullying"
    },
    {
        text: "허드렛일만 시키거나 일을 거의 주지 않았다",
        type: "bullying"
    },
    {
        text: "업무와 관련된 중요한 정보나 의사결정 과정에서 나를 제외했다",
        type: "bullying"
    },
    {
        text: "누군가 사소한 일에 트집을 잡거나 시비를 걸었다",
        type: "bullying"
    },
    {
        text: "내 의사와 관계없이 회식 참여를 강요했다",
        type: "bullying"
    },
    {
        text: "나를 업무 외의 대화나 친목 모임에서 제외했다",
        type: "bullying"
    },
];

function createQuestions() {
    const questionsDiv = document.getElementById("questions");
    questions.forEach((question, index) => {
        const questionHtml = `
            <div class="question">
                <p>${index + 1}. ${question.text}</p>
                <input type="number" id="q${index}" min="0" value="0"> 회
            </div>
        `;
        questionsDiv.innerHTML += questionHtml;
    });
}

function showResult() {
    const result = document.getElementById("result");
    let harassmentCount = 0;
    let bullyingCount = 0;

    questions.forEach((question, index) => {
        const value = parseInt(document.getElementById(`q${index}`).value) || 0;
        if (question.type === "harassment") {
            harassmentCount += value;
        } else {
            bullyingCount += value;
        }
    });

    let interpretation = "";
    if (harassmentCount >= 4) {
        interpretation += "당신은 harassment의 피해자일 수 있습니다. ";
    }
    if (bullyingCount >= 8) {
        interpretation += "당신은 bullying의 피해자일 수 있습니다. ";
    }
    if (interpretation === "") {
        interpretation = "현재로서는 직장 내 괴롭힘의 피해자로 볼 수 없습니다.";
    }

    result.innerHTML = `
        <p>Harassment 관련 경험 횟수: ${harassmentCount}</p>
        <p>Bullying 관련 경험 횟수: ${bullyingCount}</p>
        <p><strong>${interpretation}</strong></p>
        <p>만약 괴롭힘이 의심된다면, 전문가와 상담하는 것이 좋습니다.</p>
    `;
    result.style.display = "block";
}

// 페이지 로드 시 질문 생성
window.onload = function() {
    createQuestions();
    document.getElementById("result").style.display = "none";
};
