---
title: "프런티어 모델 벤치마크의 진화"
description: "OpenAI, Google, Anthropic의 모델 발표에 등장하는 평가가 시간에 따라 어떻게 바뀌는지 추적하는 프로젝트."
status: active
updated: 2026-10-04
repo: isingmodel/evolution_of_benchmarks_in_frontier_models
cover:
  src: ./charts/benchmark_evolution.png
  alt: "2022년 말부터 2026년 9월까지 Anthropic, Google, OpenAI의 모델 릴리스를 세 줄의 타임라인에 놓고, 각 릴리스를 보고된 벤치마크의 과제 유형 비율 원그래프로 그린 그림"
facts:
  - { label: "대상", value: "OpenAI, Google, Anthropic" }
  - { label: "추적한 모델", value: "59" }
  - { label: "발표", value: "55" }
  - { label: "관측된 벤치마크", value: "286" }
  - { label: "데이터 기준일", value: "2026-09-30" }
  - { label: "라이선스", value: "Apache-2.0" }
---
각 모델의 벤치마크 구성에는 어떤 종류의 과제가 들어 있을까? 그 구성은 어떻게 바뀌고, 어떤 벤치마크가 공통 기준점이 되며, 어떤 벤치마크가 이후 릴리스에 다시 등장할까? 이 프로젝트는 릴리스 이력을 한눈에 보여 주는 그림을, 출처가 연결된 카탈로그와 벤치마크별 보고 이력에 대한 재현 가능한 분석으로 잇는다.

근거는 선별한 공개 출시 페이지에 등장하는 이름이다. 결과, 비교, 각주, 벤치마크 묶음의 구성 요소, 파트너 인용이 모두 포함된다. 이름이 등장한다는 사실만으로 새 모델의 점수가 있다거나, 그 벤치마크가 두드러지게 다뤄졌다거나, 학습에 쓰였다는 뜻은 아니다.

현재 데이터는 2026년 9월 30일까지의 모델 행 59개와 서로 다른 발표 55건을 담고 있으며, 릴리스 탐색은 2026년 10월 4일까지 확인했다. 모델 행은 이름이 붙은 모델 하나이고, 함께 발표된 변형 모델들은 발표 하나를 공유한다. 벤치마크 하나는 표준 카탈로그의 항목 하나를 뜻한다. 별칭은 같은 항목으로 묶이고, 명시된 버전은 따로 센다.

## 모델 릴리스별 벤치마크 유형

이 페이지 맨 위의 타임라인은 모델, 제공사, 출시일, 벤치마크 구성을 한 그림에 잇는다. 다섯 가지 색은 더 세밀한 분류 체계를 과제 유형으로 간추린 것이다. Agentic, Multimodal Perception, Generative Reasoning, Constraint Satisfaction, Knowledge Retrieval의 다섯 가지다.

모델 행은 모두 그려져 있고, 그림이 읽히도록 이름은 일부만 표시했다. 모든 행에 이름을 붙인 그림은 [전체 라벨 버전](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/assets/benchmark_evolution_detail.png)에 있다. 색은 각 출시 페이지에 실린 과제를 요약한 것으로 읽으면 된다. 이 유형들은 아직 잠정적인 분류에 기대고 있으며, 'Agentic'은 아래에서 따로 살펴보는 도구·환경 상호작용 지표보다 범위가 넓다. 시각적 표현 방식과 분류가 없는 경우의 처리는 [릴리스 그림 방법 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_evolution/README.md)에 설명되어 있다.

## 시간에 따른 벤치마크 유형

최근 180일 구간으로 보면 릴리스 포트폴리오 전반의 변화가 드러난다. 벤치마크가 실린 모델 행은 각각 가중치 1을 갖고, 이를 기록된 벤치마크 언급에 나눈다. 같은 벤치마크가 다시 등장하면 그만큼 다시 반영되므로, 이 그림은 새로 만들어진 벤치마크의 수가 아니라 보고의 구성을 보여 준다. 구간마다 분류가 있는 가중치를 100%로 정규화하고, 분류된 관측이 없는 구간은 빈 채로 둔다.

![2023년부터 2026년 9월까지 다섯 가지 벤치마크 과제 유형의 최근 180일 비중을 쌓아 그린 영역 그래프. Agentic의 비중은 2024년 말에 처음 나타나 2026년 9월에는 약 70%까지 커진다](./charts/benchmark_growth.png)

이 곡선은 분류 체계로 본 서술적인 그림일 뿐이다. 초기에는 릴리스가 드물고 제공사 구성도 달라서 곡선이 그 영향을 받고, 분류의 빈틈과 잠정 라벨은 범주에 영향을 준다. [과제 유형·분야별 패널](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/assets/benchmark_growth_by_all_category.png)과 [다중 분류 그림](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/assets/benchmark_facet_trends.png)이 세부를 보완하고, 구간, 분모, 결측 처리 규칙은 [추세 방법 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_taxonomy_trends/README.md)에 있다.

이 두 그림은 함께 발표된 변형 모델을 포함해 이름이 붙은 모델 행을 그대로 쓴다. 아래의 공유 분석과 생애 주기 분석은 서로 다른 발표를 한 번씩만 세고, 상호작용 분석은 두 단위를 비교한다.

## 소수의 공유 벤치마크가 보고의 대부분을 차지한다

관측된 벤치마크의 25.9%가 둘 이상의 제공사에 등장하고, 이들이 벤치마크–발표 관측의 62.1%를 차지한다. 둘 이상의 제공사에 등장하는 벤치마크는 74개이고, 그중 38개는 세 곳 모두에 등장한다.

![관측된 표본을 보고한 제공사 수로 나눈 누적 막대그래프. 벤치마크 286개 가운데 74.1%는 한 제공사에만 등장하지만, 둘 또는 세 제공사가 공유하는 벤치마크가 관측 745건의 62.1%, 발표마다 같은 가중치를 준 경우의 63.3%를 차지한다](./charts/benchmark_shared_core.png)

벤치마크가 실린 발표마다 가중치 1을 주고 그 발표의 표준 벤치마크 집합에 나누면, 공유 벤치마크는 평균 포트폴리오의 63.3%를 차지한다. 발표마다 같은 가중치를 주어도 공유 벤치마크가 과반이라는 점은 그대로다. 따라서 긴 벤치마크 표나 함께 발표된 변형 모델만으로는 이 결과를 설명할 수 없다.

이 결과는 카탈로그 항목을 단위로 한다. 명시된 버전은 따로 세고, 과거의 일부 행은 여러 변형을 하나로 묶고 있다. 벤치마크 계열 단위의 집중이나, 점수 산정 방식이 서로 비교 가능하다는 점을 보여 주는 것은 아니다. [개수와 두 가지 가중 방식](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/sharing_summary.csv)은 저장소에 있다.

## 벤치마크마다 보고 이력이 있다

벤치마크 169개는 발표 한 건에만 등장하고, 그중 136개는 2026년에 처음 표본에 들어왔다. 최근에 들어온 벤치마크는 다시 등장할 시간이 적었으므로, 한 번만 등장했다고 해서 그 생애가 끝난 것은 아니다. 생애 주기 분석은 카탈로그의 모든 항목에 대해 처음과 마지막 관측, 재등장, 제공사 간 확산, 보고 공백을 따라간다.

![2023년부터 2026년까지 벤치마크 15개를 골라, 각 벤치마크를 언급한 발표를 제공사별로 표시하고 처음부터 마지막 관측까지를 회색 선으로 이은 타임라인](./charts/benchmark_lifecycle.png)

점은 실제 발표일이고, 회색 선은 처음과 마지막 관측을 이으며 그 사이에 공백이 있을 수 있다. 마지막 관측이 퇴역, 포화, 교체를 뜻하지는 않는다. [전체 카탈로그 보고서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_lifecycle/report.md)는 항목 288개를 다루며, 기준일까지 관측되지 않은 2개도 포함한다. [제공사별 이력](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_lifecycle/provider_lifecycles.csv)은 벤치마크가 기록되지 않은 페이지까지 포함해 이후의 출시를 세므로, 공백을 각 제공사의 출시 주기에 견주어 읽을 수 있다.

### 보고는 얼마나 자주 다른 제공사로 퍼지는가?

이 표에는 한 제공사에만 머문 벤치마크도 들어 있으며, 추적 기간 전체가 관측 기간 안에 들어오는 벤치마크만 포함한다.

| 추적 기간 | 대상 벤치마크 | 기간 안에 두 번째 제공사에서 관측 | 비율 |
| --- | ---: | ---: | ---: |
| 30일 | 209 | 26 | 12.4% |
| 90일 | 160 | 50 | 31.2% |
| 180일 | 113 | 45 | 39.8% |

행마다 대상 집단이 다르다. 시간은 벤치마크가 공개된 때가 아니라 이 데이터셋에 처음 언급된 때부터 재며, 대상 기간 안에 다른 제공사의 출시가 반드시 있는 것은 아니다. 추적은 2026-09-30에 끝난다. 이 값들은 보고를 기술하는 비율이지, 생존 곡선이나 업계 전체의 채택 확률이 아니다. [기간 정의와 근거](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/README.md#diffusion-with-complete-calendar-follow-up)는 개요 방법 문서에 있다.

## 분류에 얼마나 좌우되는가?

이 프로젝트는 도구나 환경과의 명시적인 상호작용도 따로 잰다. 이 좁은 지표는 도구, 환경, 브라우저, 터미널·코드베이스, 컴퓨터 조작 가운데 하나의 상호작용 라벨이 있어야 한다. 정적인 코드 생성, 단위 테스트 채점, 계획 수립만으로는 해당하지 않는다.

2026년에 벤치마크가 실린 발표마다 같은 가중치를 주면, 포트폴리오 가중치의 64.0%에 도구·환경 상호작용 라벨이 붙어 있다. 신뢰도 0.70 이상인 라벨만 남기면 17.2%가 된다. 이 조건에서는 포트폴리오 가중치의 36.6%만 상호작용 축에 라벨이 하나라도 있고, 승인된 상호작용 라벨의 커버리지는 0.0%다.

![2023년부터 2026년까지 발표 연도별 꺾은선 그래프 두 개. 왼쪽: 도구·환경 상호작용 라벨이 붙은 포트폴리오 가중치의 비중은 활성 라벨 전체로는 2026년에 64.0%까지 오르지만, 신뢰도 0.70 이상 라벨만 쓰면 17.2%로 내려간다. 오른쪽: 신뢰도 0.70 이상 라벨의 커버리지는 2025년 약 99%에서 2026년 36.6%로 떨어지고, 승인 라벨의 커버리지는 0이 된다](./charts/interaction_taxonomy_sensitivity.png)

활성 라벨 전체와 신뢰도로 거른 결과의 차이 때문에, 라벨의 품질 자체가 결과의 일부가 된다. 신뢰도 0.70 이상이라는 조건은 민감도를 보기 위한 필터이지 검토가 끝났다는 뜻이 아니다. 라벨이 없는 언급도 분모에는 그대로 남는다. 승인 라벨의 커버리지가 0이라는 것은 검토를 거친 추정 근거가 없다는 뜻이지, 상호작용이 없다는 증거가 아니다.

| 연도 | 발표 | 활성 라벨 전체 | 신뢰도 ≥0.70 라벨 | ≥0.70 커버리지 | 승인 라벨 커버리지 |
| --- | ---: | ---: | ---: | ---: | ---: |
| 2023 | 3 | 0.0% | 0.0% | 98.2% | 20.2% |
| 2024 | 8 | 9.7% | 6.6% | 99.1% | 13.6% |
| 2025 | 14 | 35.9% | 32.4% | 99.2% | 0.0% |
| 2026 YTD | 26 | 64.0% | 17.2% | 36.6% | 0.0% |

라벨이 붙은 비중과 커버리지는 모두 발표 가중치 전체를 분모로 쓴다. 커버리지는 정적 과제를 포함해 상호작용 라벨이 하나라도 남아 있는 경우를 뜻한다. 단위를 발표에서 모델 행으로 바꾸면 2026년 활성 라벨 전체 추정치는 64.0%에서 64.4%가 된다. [제공사별 비교](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/provider_interaction_trends.csv)와 [실제로 남은 라벨](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/interaction_classification.csv)로 더 자세히 볼 수 있다. 예전의 [넓은 소프트웨어·도구 과제 지표](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/readme_story/README.md)는 정적 코딩 테스트도 포함했으며, 탐색적인 비교로 남아 있다.

## 표본과 방법

| 제공사 | 모델 행 | 발표 | 벤치마크 있음 | 첫 추적 | 최근 추적 |
| --- | ---: | ---: | ---: | --- | --- |
| Anthropic | 21 | 21 | 19 | 2023-03-14 | 2026-09-28 |
| Google | 17 | 14 | 14 | 2023-12-06 | 2026-09-30 |
| OpenAI | 21 | 20 | 18 | 2022-11-30 | 2026-09-29 |

이 목록에는 선별한 범용 프런티어 릴리스와 사이버 특화 변형이 들어 있고, 제한적으로 공개된 출시도 포함한다. 모든 모델을 빠짐없이 담은 이력은 아니다.

벤치마크가 실린 발표는 51건이고, 표준 벤치마크–발표 관측은 745건이다. 발표의 단위는 제공사, 출시일, 정규화한 출처 URL의 조합이며, 별칭은 정확히 일치하는 대응표로 식별한다. [연도별 목록](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/annual_inventory.csv)은 연도마다 표본이 고르지 않다는 점을 보여 주고, [개요 방법 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/README.md)는 분모를 정의하고 원문 라벨, 모델 행, 발표 관측 사이의 수치를 맞춘다.

벤치마크 묶음과 그 구성 요소가 함께 등장할 수 있으므로, 이 개수는 서로 독립적인 시험의 수가 아니다. 과거의 일부 라벨은 여러 버전을 하나로 묶고 있고, 현재의 출시 페이지는 출시 이후 수정되었을 수 있다. 첫 관측은 이 표본 안에서의 이야기이며, 벤치마크가 언제 공개적으로 쓰이기 시작했는지를 보관 자료로 입증한 것은 아니다.

분류 표에는 라벨이 4,052개 있다. 36개는 승인되었고, 3,956개는 검토가 필요하며, 60개는 이전 방식의 초기 라벨이다. 항목 식별에 대한 승인과 분류에 대한 승인은 별개다. [서문 감사 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/docs/readme_data_audit_2026_10_04.md)에는 MTOB의 과제 정의와 빠져 있던 언급을 비롯한 정정 사항, 그리고 아직 풀리지 않은 MRCR 계보 문제가 기록되어 있다. [릴리스 감사 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/docs/data_refresh_2026_10_04.md)에는 출처 탐색 범위가 기록되어 있다.

## 근거 살펴보기

| 질문 | 여기서 시작 |
| --- | --- |
| 출시 페이지에 어떤 이름이 실렸나? | [모델 목록과 출처 URL](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/models.csv) |
| 벤치마크 이름이 무엇을 가리키나? | [카탈로그](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmarks.csv), [별칭](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmark_aliases.csv), [구분 판단](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmark_distinctness.csv) |
| 어떤 벤치마크가 어디에 등장했나? | [전체 생애 주기 보고서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_lifecycle/report.md)와 [출처가 연결된 관측](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_lifecycle/launch_mentions.csv) |
| 릴리스마다 벤치마크가 몇 개 보고되었나? | [벤치마크 수 그림](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/assets/benchmark_count_per_release.png) |
| 긴 컨텍스트, 저자·소속, 제공사 간 유사성은? | [보조 분석](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/README.md#exploratory-and-supporting-analyses) |
| 어떤 분류에 손이 더 가야 하나? | [분류 데이터](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmark_facets.csv), [검토 우선순위](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/readme_story/review_leverage_top.csv), [검토 지침](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/docs/facet_review_guidelines.md) |

앞으로의 진전은 영향이 큰 잠정 라벨을 검토하고, 벤치마크 계열과 구현 계보를 문서화하고, 각 언급이 직접적인 결과인지, 비교인지, 구성 요소인지, 인용인지를 기록하는 데 달려 있다. [현재 종합 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/SYNTHESIS.md)는 뒷받침된 결과와 이런 열린 연구 질문을 구분한다.

분석을 재현하고 데이터를 확장하는 방법은 [저장소 README](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models#reproduce-and-extend)에 있다.
