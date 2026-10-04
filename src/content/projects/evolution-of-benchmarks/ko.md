---
title: "프런티어 모델 벤치마크의 진화"
description: "OpenAI, Google, Anthropic이 프런티어 AI 모델을 소개할 때 내세운 벤치마크를 출시 페이지 기준으로 모은 데이터셋."
status: active
updated: 2026-08-13
repo: isingmodel/evolution_of_benchmarks_in_frontier_models
cover:
  src: ./charts/benchmark_evolution.png
  alt: "OpenAI, Google, Anthropic의 모델 출시를 시간순으로 놓고, 각 출시를 벤치마크 과제 유형 비율의 원그래프로 그린 타임라인"
facts:
  - { label: "대상", value: "OpenAI, Google, Anthropic" }
  - { label: "추적한 릴리스", value: "47" }
  - { label: "벤치마크 언급", value: "582" }
  - { label: "카탈로그 항목", value: "207" }
  - { label: "라이선스", value: "Apache-2.0" }
---
이 프로젝트는 OpenAI, Google, Anthropic의 프런티어 모델 출시 페이지에 실린 벤치마크와 평가 이름을 추적한다. 그 벤치마크 구성이 시간에 따라 어떻게 바뀌었는지, 곧 학술 시험과 정적인 문답 세트에서 코딩 환경, 도구 사용, 컴퓨터 조작 같은 실제 업무에 가까운 과제로 옮겨 가는 과정을 따라간다.

## 데이터셋

근거의 단위는 공개된 모델 출시 페이지에 등장한 벤치마크 언급이다. 어떤 벤치마크가 그 페이지에 나오면 해당 모델과 연결한다. 기술 보고서, 시스템 카드, 벤치마크 논문은 저자, 별칭, 과제 설계 같은 카탈로그 메타데이터를 검증하는 데 쓴다.

| 제공사 | 릴리스 | 첫 릴리스 | 최근 릴리스 |
| --- | ---: | --- | --- |
| OpenAI | 17 | 2022-11-30 | GPT-5.6-Cyber (2026-08-10) |
| Google | 12 | 2023-12-06 | Gemini 3.7 Flash (2026-08-13) |
| Anthropic | 18 | 2023-03-14 | Claude 5 Opus (2026-07-24) |

모든 릴리스는 같은 총 가중치를 갖는다. 출시 페이지 하나에 식별된 벤치마크가 열 개 있으면 각각 그 릴리스 가중치의 10분의 1을 받는다. 벤치마크 표가 긴 릴리스가 시계열을 좌우하지 않게 하기 위해서다.

주요 파일은 다음과 같다.

| 파일 | 내용 |
| --- | --- |
| [models.csv](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/models.csv) | 모델 릴리스, 날짜, 출처 URL, 벤치마크 언급 원문 |
| [benchmarks.csv](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmarks.csv) | 표준 벤치마크 카탈로그와 출처 |
| [benchmark_aliases.csv](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmark_aliases.csv) | 별칭과 벤치마크의 일대일 대응 |
| [benchmark_facets.csv](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmark_facets.csv) | 다중 라벨 분류와 검토 상태 |
| [benchmark_distinctness.csv](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmark_distinctness.csv) | 벤치마크 계열과 구분 여부에 대한 판단 |

## 출시 페이지는 시험에서 업무 시뮬레이션으로 옮겨 가고 있다

정적인 문답은 여전히 자주 등장하지만, 2024년 이후 구성이 크게 바뀌었다. 현재 분류 체계로 보면 2026년(연초 이후) 가중 포트폴리오의 73.4%가 업무 시뮬레이션 성격을 띤다. 2023년에는 12.0%였다.

![2023년부터 2026년까지 출시 연도별로 정적 시험형, 업무 시뮬레이션, 특수 분야 벤치마크의 가중 비중을 그린 꺾은선 그래프](./charts/static_to_work_simulation_trend.png)

| 출시 연도 | 정적 평가 | 업무 시뮬레이션 | 특수 맥락 | 릴리스 |
| ---: | ---: | ---: | ---: | ---: |
| 2023 | 82.4% | 12.0% | 53.7% | 3 |
| 2024 | 70.7% | 18.0% | 28.0% | 8 |
| 2025 | 54.4% | 39.1% | 48.7% | 14 |
| 2026 YTD | 16.1% | 73.4% | 42.3% | 18 |

2026년 추정치는 분류 검토가 어디까지 되었는지에 민감하다. 활성 라벨 전체로는 73.4%, 분모를 고정한 하한으로는 33.8%, 신뢰도 높은 라벨이 빠짐없이 붙은 언급만 보면 58.0%다. 민감도 표 전체는 [static_work_sensitivity.csv](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/readme_story/static_work_sensitivity.csv)에 있다.

업무 시뮬레이션 신호의 상당 부분은 SWE-bench Verified, OSWorld-Verified, SWE-bench Pro, HumanEval, 그리고 TAU 계열에서 나온다.

## 새로 공개된 벤치마크는 연구소 사이에 빠르게 퍼진다

최근 벤치마크 몇 개는 이 데이터셋에서 처음 관측된 지 며칠 만에 다른 제공사의 출시 페이지에 등장했다.

| 벤치마크 | 처음 쓴 곳 | 다음으로 쓴 곳 | 간격 |
| --- | --- | --- | ---: |
| MMMLU | Anthropic | OpenAI | 2일 |
| Terminal-Bench 2.0 | Google | Anthropic | 6일 |
| OfficeQA Pro | Anthropic | OpenAI | 7일 |
| Finance Agent v2 | Google | Anthropic | 9일 |
| GDPval-AA v2 | Anthropic | OpenAI | 9일 |
| Terminal-Bench 2.1 | Google | Anthropic | 9일 |

이 날짜는 여기서 다루는 출시 페이지에 채택된 시점을 잰 것이다.

## Gemini는 긴 컨텍스트를 출시 서사의 일부로 만들었다

2024년 Google의 가중 벤치마크 포트폴리오에서 긴 컨텍스트 평가는 39.3%를 차지했다. 같은 기준으로 OpenAI는 2.4%, Anthropic은 5.8%였다. 이 시기 Google의 수치를 끌어올린 것은 주로 Needle In A Haystack이었다.

![2024년 제공사별 긴 컨텍스트 벤치마크 비중을 그린 막대그래프: OpenAI 2.4%, Google 39.3%, Anthropic 5.8%](./charts/gemini_long_context_case.png)

| 제공사 | 넓은 기준 비중 | 주 분류만 본 비중 | 2024년 주요 요인 | 릴리스 |
| --- | ---: | ---: | --- | ---: |
| OpenAI | 2.4% | 2.4% | EgoSchema | 3 |
| Google | 39.3% | 35.7% | Needle In A Haystack | 2 |
| Anthropic | 5.8% | 2.1% | SWE-bench Verified | 3 |

## OpenAI 관련 벤치마크가 공통 기준점이 되었다

Google의 출시 페이지에서 OpenAI가 만들었거나 OpenAI 소속 저자가 참여한 벤치마크의 릴리스 정규화 비중은 6.1%에서 20.2%로 올랐다. Anthropic과 Google을 합친 비중은 16.9%에서 20.4%로 올랐고, Anthropic은 이전과 비슷한 수준에 머물렀다.

| 포트폴리오 | 2023–24 원값 | 2023–24 정규화 | 2025–26 원값 | 2025–26 정규화 |
| --- | ---: | ---: | ---: | ---: |
| Anthropic + Google | 14.5% | 16.9% | 19.6% | 20.4% |
| Anthropic | 19.0% | 25.0% | 18.8% | 20.6% |
| Google | 8.8% | 6.1% | 21.0% | 20.2% |

## 같은 기록을 보는 다른 방법

이동 구간으로 보면 대표 벤치마크 범주의 장기적인 변화가 더 잘 드러난다.

![벤치마크 범주의 이동 구간 추세](./charts/benchmark_growth.png)

출시 페이지 하나에 실리는 벤치마크 언급 수는 제공사와 릴리스에 따라 크게 다르다.

![모델 릴리스별 벤치마크 수](./charts/benchmark_count_per_release.png)

저장소에는 다중 분류 체계 추세와 남은 검토 분량을 비롯한 [차트가 더 있다](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models#other-charts).

## 방법

| 단계 | 규칙 |
| --- | --- |
| 추출 | 공개된 출시 페이지마다 표시된 벤치마크 이름과 변형을 기록한다 |
| 식별 | 정확한 표준 이름이나 검토를 거친 별칭과 맞춘다 |
| 가중 | 릴리스마다 총 가중치 1을 주고, 식별된 벤치마크에 나눈다 |
| 분류 | 상호작용 방식, 과제 메커니즘, 측정하려는 구성 개념, 맥락에 걸쳐 여러 분류를 붙인다 |
| 검토 | 분류마다 신뢰도, 출처, 검토 상태를 함께 저장한다 |

차트는 다중 라벨 분류 체계에서 뽑은 간결한 대표 분류를 쓴다. 분류 표에는 현재 3,410행이 있다. 29행은 승인되었고, 3,339행은 검토를 기다리며, 42행은 이전 방식의 행이다. 이 가운데 1,533행은 신뢰도가 0.70 미만이다. 검토 우선순위는 불확실성과, 그 벤치마크가 영향을 주는 출시 페이지 언급 수로 정한다.

## 한계

- 출시 페이지가 얼마나 자세한지는 제공사와 릴리스마다 다르므로, 이 데이터셋에는 각 회사가 무엇을 공개하기로 했는지도 반영되어 있다.
- 비교는 벤치마크의 등장 여부와 릴리스 단위 가중치를 쓴다. 점수 척도와 평가 방식은 출처마다 다르다.
- 분류 검토는 아직 진행 중이며, 신뢰도 격차는 2026년 릴리스에서 가장 크다.
- 출시 페이지가 수정되면 최초 출시일 이후에 공개 기록이 달라질 수 있다.

분석을 재현하는 방법과 새 릴리스를 추가하는 방법은 [저장소 README](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models#readme)에 있다.
