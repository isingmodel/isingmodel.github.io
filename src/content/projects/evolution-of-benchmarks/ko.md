---
title: "프런티어 모델 벤치마크의 진화"
description: "OpenAI, Google, Anthropic의 모델 발표에 이름이 실린 평가가 시간이 지나며 어떻게 달라지는지 추적하는 프로젝트."
status: active
updated: 2026-10-04
repo: isingmodel/evolution_of_benchmarks_in_frontier_models
cover:
  src: ./charts/benchmark_evolution.png
  alt: "2022년 말부터 2026년 9월까지 Anthropic, Google, OpenAI의 모델 출시를 회사별 세 줄로 나눠 그린 타임라인. 출시된 모델마다 보고된 벤치마크의 과제 유형 구성을 원그래프로 보여 준다."
facts:
  - { label: "대상 회사", value: "OpenAI, Google, Anthropic" }
  - { label: "추적한 모델", value: "59" }
  - { label: "발표", value: "55" }
  - { label: "관측된 벤치마크", value: "286" }
  - { label: "데이터 기준일", value: "2026-09-30" }
  - { label: "라이선스", value: "Apache-2.0" }
---
새 모델이 발표될 때 함께 이름이 실리는 벤치마크에는 어떤 종류의 과제가 담겨 있을까? 그 구성은 시간이 지나며 어떻게 달라질까? 어떤 벤치마크가 여러 회사의 공통 기준점이 되고, 어떤 벤치마크가 이후 출시에서도 계속 등장할까? 이 프로젝트는 모델 출시 이력을 한눈에 보여 주는 그림과, 항목마다 출처를 연결한 카탈로그, 그리고 벤치마크별 보고 이력을 재현 가능하게 분석한 결과를 함께 제공한다.

근거로 삼는 것은 선별한 공개 발표 페이지에 등장하는 벤치마크 이름이다. 결과, 비교, 각주, 벤치마크 스위트(suite)의 구성 항목, 파트너의 인용문 등 어디에 나오든 모두 센다. 다만 이름이 등장했다는 사실만으로 그 페이지에 새 모델의 점수가 실렸다거나, 그 벤치마크가 비중 있게 다뤄졌다거나, 학습에 쓰였다고 볼 수는 없다.

현재 데이터는 2026년 9월 30일까지의 발표 55건에 나온 모델 59개를 담고 있으며, 새로운 출시가 있는지는 2026년 10월 4일까지 확인했다. 이 글에서 모델은 이름이 붙은 모델 하나를 뜻한다. 함께 발표된 변형 모델들은 각각 별개의 모델로 세지만 발표는 하나를 공유한다. 벤치마크는 프로젝트 카탈로그의 항목 하나를 뜻한다. 같은 벤치마크를 가리키는 여러 이름은 한 항목으로 모으고, Terminal-Bench 2.0과 2.1처럼 버전이 명시된 것은 따로 센다. 저장소에서는 이 두 단위를 각각 model row, benchmark identity라고 부른다.

## 모델 출시별 벤치마크 유형

이 페이지 맨 위의 타임라인은 모든 모델을 회사와 출시일에 따라 배치하고, 모델마다 보고된 벤치마크의 구성을 원그래프로 그린 것이다. 다섯 가지 색은 과제 유형을 나타낸다. 프로젝트의 더 세밀한 분류 체계를 Agentic, Multimodal Perception, Generative Reasoning, Constraint Satisfaction, Knowledge Retrieval의 다섯 범주로 간추린 것이다.

모델은 빠짐없이 그렸지만, 그림이 복잡해지지 않도록 이름은 일부에만 붙였다. 모든 모델의 이름은 [전체 라벨 그림](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/assets/benchmark_evolution_detail.png)에서 확인할 수 있다. 색은 각 발표 페이지에 어떤 종류의 과제가 실렸는지를 요약한 것으로 읽으면 된다. 이 범주들은 아직 잠정적인 분류 라벨에서 나온 것이고, 'Agentic'은 아래에서 따로 재는 도구·환경과의 명시적 상호작용보다 범위가 넓다. 그림을 그린 방식과 분류가 없는 벤치마크를 처리한 방식은 [이 그림의 방법 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_evolution/README.md)에 설명되어 있다.

## 시간에 따른 벤치마크 유형

각 시점의 직전 180일을 한 구간으로 묶어 보면 벤치마크 구성이 시간에 따라 어떻게 달라지는지가 드러난다. 벤치마크가 하나라도 기록된 모델에는 각각 가중치 1을 주고, 이를 그 모델에 기록된 벤치마크 언급에 고르게 나눈다. 같은 벤치마크가 이후 출시에 다시 등장하면 다시 세므로, 이 그림이 보여 주는 것은 새로 만들어진 벤치마크의 수가 아니라 보고되는 벤치마크의 구성이다. 구간마다 분류가 있는 가중치의 합을 100%로 맞추고, 분류된 관측이 하나도 없는 구간은 비워 둔다.

![2023년부터 2026년 9월까지 다섯 가지 벤치마크 과제 유형의 비중을 직전 180일 구간 기준으로 쌓아 그린 영역 그래프. Agentic의 비중은 2024년 9월에 처음 나타나 2026년 9월에는 약 70%까지 커진다.](./charts/benchmark_growth.png)

이 그림은 분류 체계를 통해 본 보고 현황을 기술한 것이며, 여러 요인에 영향을 받는다. 초기에는 출시가 드물고, 시기에 따라 회사 구성도 달라진다. 분류가 빠진 벤치마크와 잠정 라벨은 범주 자체에 영향을 준다. [과제 유형·분야별 패널](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/assets/benchmark_growth_by_all_category.png)과 [여러 분류 축을 함께 본 그림](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/assets/benchmark_facet_trends.png)에서 더 자세한 내용을 볼 수 있고, 구간, 분모, 결측값에 관한 규칙은 [추세 방법 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_taxonomy_trends/README.md)에 정리되어 있다.

위의 두 그림은 함께 발표된 변형 모델까지 포함해, 이름이 붙은 모델을 하나하나 따로 센다. 반면 아래의 공통 벤치마크 분석과 생애 주기 분석은 발표 하나를 한 번만 세고, 상호작용 분석은 두 방식을 비교한다.

## 소수의 공통 벤치마크가 보고의 대부분을 차지한다

관측된 벤치마크 가운데 둘 이상의 회사에 등장하는 것은 25.9%뿐이지만, 이들이 벤치마크–발표 관측의 62.1%를 차지한다. 여기서 관측 한 건은 벤치마크 하나가 발표 하나에 등장한 것을 가리킨다. 관측된 벤치마크 286개 중 74개가 둘 이상의 회사에 등장하고, 그중 38개는 세 회사 모두에 등장한다.

![관측된 표본을 벤치마크를 보고한 회사 수에 따라 나눈 누적 막대그래프 세 개. 벤치마크 286개 중 74.1%는 한 회사에만 등장하지만, 두 회사 또는 세 회사에 등장하는 벤치마크가 관측 745건의 62.1%를 차지하고, 발표마다 같은 가중치를 주어도 63.3%를 차지한다.](./charts/benchmark_shared_core.png)

발표마다 같은 가중치를 주어도 결론은 달라지지 않는다. 벤치마크를 하나라도 실은 발표에 각각 가중치 1을 주고 이를 그 발표의 벤치마크들에 나누면, 공통 벤치마크는 평균적으로 발표 하나의 벤치마크 구성에서 63.3%를 차지한다. 따라서 공통 벤치마크가 과반을 차지하는 현상을 긴 벤치마크 표나 함께 발표된 변형 모델만으로는 설명할 수 없다.

이 결과는 카탈로그 항목을 기준으로 센 것이다. 버전이 명시된 벤치마크는 따로 세지만, 예전 항목 가운데는 여러 변형을 하나로 묶은 것도 있다. 이 결과가 벤치마크 계열 단위의 집중을 보여 주는 것은 아니며, 회사들이 같은 벤치마크를 서로 비교 가능한 방식으로 채점한다는 뜻도 아니다. [두 가지 가중 방식에 따른 수치](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/sharing_summary.csv)는 저장소에 있다.

## 벤치마크마다 보고 이력이 있다

관측된 벤치마크 가운데 169개는 발표 한 건에만 등장하고, 그중 136개는 2026년에 처음 표본에 들어왔다. 최근에 들어온 벤치마크는 다시 등장할 시간이 그만큼 짧았으므로, 한 번만 등장했다고 해서 수명이 다했다고 볼 수는 없다. 생애 주기 분석은 카탈로그의 모든 항목에 대해 처음과 마지막 관측 시점, 재등장, 다른 회사로의 확산, 보고가 끊긴 기간을 추적한다.

![2023년부터 2026년까지 벤치마크 15개를 골라 그린 타임라인. 각 벤치마크를 언급한 발표를 회사별 기호로 표시하고, 처음 관측된 때부터 마지막으로 관측된 때까지를 회색 선으로 이었다.](./charts/benchmark_lifecycle.png)

각 기호는 실제 발표일에 찍혀 있다. 회색 선은 처음과 마지막 관측을 이은 것이어서, 그 사이에 보고가 끊긴 기간이 있을 수 있다. 마지막으로 관측되었다고 해서 그 벤치마크가 더는 쓰이지 않는다거나, 포화되었다거나, 다른 벤치마크로 대체되었다는 뜻은 아니다. [전체 카탈로그 보고서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_lifecycle/report.md)는 기준일까지 한 번도 관측되지 않은 2개를 포함해 항목 288개를 모두 다룬다. [회사별 이력](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_lifecycle/provider_lifecycles.csv)은 벤치마크가 하나도 기록되지 않은 페이지까지 포함해 각 회사의 이후 출시도 함께 세므로, 공백을 그 회사의 출시 빈도에 비추어 읽을 수 있다.

### 보고는 얼마나 자주 다른 회사로 퍼지는가?

아래 표는 벤치마크가 처음 등장한 뒤 정해진 기간 안에 두 번째 회사에서도 관측된 경우가 얼마나 되는지를 보여 준다. 추적 기간 전체가 데이터가 다루는 기간 안에 들어오는 벤치마크만 대상으로 삼았으며, 두 번째 회사에 등장하지 않은 벤치마크도 대상에 포함된다.

| 추적 기간 | 대상 벤치마크 | 기간 안에 두 번째 회사에서 관측 | 비율 |
| --- | ---: | ---: | ---: |
| 30일 | 209 | 26 | 12.4% |
| 90일 | 160 | 50 | 31.2% |
| 180일 | 113 | 45 | 39.8% |

행마다 대상 벤치마크의 집합이 다르다. 시간은 벤치마크가 공개된 날이 아니라 이 데이터셋에서 처음 언급된 날부터 재며, 추적 기간 안에 다른 회사의 출시가 반드시 있었던 것도 아니다. 추적은 2026-09-30에 끝난다. 이 비율은 이 표본에서의 보고 양상을 기술한 것이지, 생존 곡선이나 업계 전체의 채택 확률이 아니다. [기간의 정의와 근거 자료](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/README.md#diffusion-with-complete-calendar-follow-up)는 개요 방법 문서에 있다.

## 결과는 분류에 얼마나 좌우되는가?

이 프로젝트는 도구나 환경과의 명시적인 상호작용도 따로 잰다. 이 더 좁은 지표에 해당하려면 도구 사용, 환경, 브라우저, 터미널·코드베이스, 컴퓨터 조작 가운데 하나의 상호작용 라벨이 붙어 있어야 한다. 정적인 코드 생성, 단위 테스트 채점, 계획 수립만으로는 해당하지 않는다.

2026년을 예로 들어, 벤치마크를 실은 발표마다 같은 가중치를 주어 보자. 잠정 라벨을 포함한 활성 라벨 전체를 기준으로 하면 전체 가중치의 64.0%에 도구·환경 상호작용 라벨이 붙어 있다. 신뢰도 0.70 이상인 라벨만 남기면 이 값은 17.2%가 된다. 이렇게 거르고 나면 상호작용 축에 라벨이 하나라도 남는 가중치는 36.6%뿐이다. 검토를 거쳐 승인된 라벨만 보면 이 비중, 곧 커버리지는 0.0%다.

![2023년부터 2026년까지 발표 연도별 꺾은선 그래프 두 개. 왼쪽: 도구·환경 상호작용 라벨이 붙은 가중치의 비중은 활성 라벨 전체를 쓰면 2026년에 64.0%까지 오르지만, 신뢰도 0.70 이상 라벨만 쓰면 2025년 32.4%에서 2026년 17.2%로 내려간다. 오른쪽: 신뢰도 0.70 이상 라벨의 커버리지는 2025년 약 99%에서 2026년 36.6%로 떨어지고, 승인된 라벨의 커버리지는 2023년 약 20%에서 2025년 이후 0이 된다.](./charts/interaction_taxonomy_sensitivity.png)

두 추정치의 차이는 라벨의 품질 자체가 결과의 일부라는 것을 보여 준다. 신뢰도 0.70 이상이라는 조건은 민감도를 확인하기 위한 필터이지, 검토를 마쳤다는 뜻이 아니다. 라벨이 없는 벤치마크도 분모에는 그대로 남는다. 승인된 라벨의 커버리지가 0이라는 것은 검토를 거친 추정 근거가 없다는 뜻이지, 상호작용이 없다는 증거가 아니다.

| 연도 | 발표 | 비중 (활성 라벨 전체) | 비중 (신뢰도 ≥0.70 라벨) | 커버리지 (신뢰도 ≥0.70 라벨) | 커버리지 (승인된 라벨) |
| --- | ---: | ---: | ---: | ---: | ---: |
| 2023 | 3 | 0.0% | 0.0% | 98.2% | 20.2% |
| 2024 | 8 | 9.7% | 6.6% | 99.1% | 13.6% |
| 2025 | 14 | 35.9% | 32.4% | 99.2% | 0.0% |
| 2026 (9월 30일까지) | 26 | 64.0% | 17.2% | 36.6% | 0.0% |

비중과 커버리지는 모두 같은 분모, 곧 라벨 유무와 관계없이 발표 가중치 전체를 쓴다. 커버리지는 필터를 거친 뒤에도 상호작용 축의 라벨이 하나라도 남아 있다는 뜻이며, 정적 과제임을 나타내는 라벨도 여기에 포함된다. 집계 단위를 발표에서 모델로 바꾸면 2026년의 활성 라벨 전체 기준 추정치는 64.0%에서 64.4%가 된다. [회사별 비교](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/provider_interaction_trends.csv)와 [필터별로 남은 라벨 목록](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/interaction_classification.csv)에서 더 자세히 살펴볼 수 있다. 예전에 쓰던 [넓은 범위의 소프트웨어·도구 과제 지표](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/readme_story/README.md)는 정적 코딩 테스트까지 포함했으며, 탐색적인 비교 자료로 남아 있다.

## 표본과 방법

| 회사 | 모델 | 발표 | 벤치마크가 있는 발표 | 추적 시작일 | 최근 발표일 |
| --- | ---: | ---: | ---: | --- | --- |
| Anthropic | 21 | 21 | 19 | 2023-03-14 | 2026-09-28 |
| Google | 17 | 14 | 14 | 2023-12-06 | 2026-09-30 |
| OpenAI | 21 | 20 | 18 | 2022-11-30 | 2026-09-29 |

이 표본은 범용 프런티어 모델과 그 사이버 보안 특화 변형의 출시 가운데 선별한 것으로, 접근이 제한된 출시도 포함한다. 모든 모델을 빠짐없이 담은 이력은 아니다.

발표 55건 가운데 벤치마크를 하나라도 실은 것은 51건이고, 여기서 벤치마크–발표 관측 745건이 나온다. 발표는 회사, 출시일, 정규화한 출처 URL의 조합으로 구분하고, 벤치마크의 별칭은 정확히 일치하는 대응표를 통해 한 항목으로 모은다. [연도별 집계](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/annual_inventory.csv)를 보면 연도에 따라 표본이 얼마나 고르지 않은지 알 수 있다. [개요 방법 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/README.md)는 각 분모를 정의하고, 원문 표기, 모델, 발표 관측의 수치가 서로 어떻게 맞아떨어지는지 정리한다.

벤치마크 스위트와 그 구성 항목이 각각 이름으로 등장할 수 있으므로, 이 개수를 서로 독립적인 시험의 수로 볼 수는 없다. 예전 표기 가운데는 여러 버전을 하나로 묶은 것이 있고, 발표 페이지는 출시 이후 수정되었을 수 있다. 첫 관측은 이 표본에 처음 등장한 시점일 뿐, 그 벤치마크가 언제부터 공개적으로 쓰였는지를 보관 기록으로 입증한 것은 아니다.

분류 표에는 라벨이 4,052개 있다. 36개는 승인되었고, 3,956개는 아직 검토가 필요하며, 60개는 예전 분류 체계에서 충분한 검토 없이 생성된 것이다. 벤치마크 항목 자체를 승인하는 것과 그 분류 라벨을 승인하는 것은 별개의 절차다. [데이터 점검 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/docs/readme_data_audit_2026_10_04.md)에는 MTOB의 과제 정의와 누락되었던 언급을 바로잡은 것을 비롯한 정정 내용과, 아직 해결되지 않은 MRCR의 계보 문제가 기록되어 있다. [출시 점검 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/docs/data_refresh_2026_10_04.md)에는 새 출시를 찾기 위해 어디까지 확인했는지가 기록되어 있다.

## 근거 살펴보기

| 질문 | 살펴볼 자료 |
| --- | --- |
| 발표 페이지에 어떤 벤치마크 이름이 실렸나? | [모델 목록과 출처 URL](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/models.csv) |
| 벤치마크 이름이 무엇을 가리키나? | [카탈로그](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmarks.csv), [별칭](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmark_aliases.csv), [별개 항목 여부 판단](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmark_distinctness.csv) |
| 특정 벤치마크가 어디에 등장했나? | [전체 생애 주기 보고서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_lifecycle/report.md)와 [출처가 연결된 관측 목록](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_lifecycle/launch_mentions.csv) |
| 출시마다 벤치마크가 몇 개 보고되었나? | [출시별 벤치마크 수 그림](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/assets/benchmark_count_per_release.png) |
| 긴 컨텍스트, 벤치마크 저자와 소속, 회사 간 유사성은? | [보조 분석](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/README.md#exploratory-and-supporting-analyses) |
| 어떤 분류에 손이 더 가야 하나? | [분류 라벨 데이터](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmark_facets.csv), [검토 우선순위](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/readme_story/review_leverage_top.csv), [검토 지침](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/docs/facet_review_guidelines.md) |

앞으로의 진전은 세 가지에 달려 있다. 결과에 영향이 큰 잠정 라벨을 검토하는 것, 벤치마크의 계열과 구현 계보를 문서화하는 것, 그리고 각 언급이 직접 보고한 결과인지, 비교인지, 스위트의 구성 항목인지, 인용인지를 기록하는 것이다. [현재 종합 문서](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/SYNTHESIS.md)는 데이터로 뒷받침되는 결과와 이런 열린 연구 질문을 구분해 정리한다.

분석을 재현하고 데이터를 확장하는 방법은 [저장소 README](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models#reproduce-and-extend)에 나와 있다.
