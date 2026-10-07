---
title: "The Evolution of Benchmarks in Frontier Models"
description: "A history of the benchmarks named in OpenAI, Google, and Anthropic model announcements: how the task mix changes, which tests recur, and what the evidence supports."
status: active
updated: 2026-10-07
repo: isingmodel/evolution_of_benchmarks_in_frontier_models
cover:
  src: ./charts/benchmark_evolution.png
  alt: "Timeline of model releases from late 2022 to September 2026 in three lanes, one each for Anthropic, Google, and OpenAI. Each release is drawn as a pie chart of the task modes of its reported benchmarks."
facts:
  - { label: "Providers", value: "OpenAI, Google, Anthropic" }
  - { label: "Models tracked", value: "59" }
  - { label: "Announcements", value: "55" }
  - { label: "Benchmarks observed", value: "286" }
  - { label: "Data through", value: "2026-09-30" }
  - { label: "License", value: "Apache-2.0" }
---
Benchmarks are sets of tasks used to evaluate AI models, such as answering questions, writing code, or using tools. New model announcements arrive with collections of benchmark results. Some names recur across companies and generations; others appear briefly or only at one company. Following those names over time offers a way to study how the public evaluation of frontier models is changing.

This project traces the benchmarks named in selected announcements of leading AI models from OpenAI, Google, and Anthropic. It asks three questions: what kinds of tasks appear, which benchmarks become common reference points, and how often a benchmark returns after its first appearance. The timeline above gives an overview of the releases; the analyses below follow the patterns behind it.

The September 30, 2026 snapshot reveals a small shared set alongside many benchmarks seen only once. It also shows a growing share of tasks classified as agentic, although the size of that shift depends strongly on classifications that still need review.

## What the dataset records

The sample contains 59 named models from 55 announcements, spanning November 2022 to September 2026. It covers selected general-purpose frontier models and cybersecurity variants, including releases with restricted access. The search for additional releases was last checked on October 4, 2026; the figures in this article use announcements dated through September 30.

| Company | Named models | Announcements | Announcements naming benchmarks |
| --- | ---: | ---: | ---: |
| Anthropic | 21 | 21 | 19 |
| Google | 17 | 14 | 14 |
| OpenAI | 21 | 20 | 18 |
| Total | 59 | 55 | 51 |

A model and an announcement are different units. Several named variants can share a launch page, so counting each variant separately gives that page more influence. The release timeline keeps the variants separate to show every model. The analyses of shared benchmarks and reporting histories group models announced by the same company on the same date and source page into one announcement.

The catalog brings alternative names for the same benchmark together. Explicit versions, such as Terminal-Bench 2.0 and 2.1, remain separate entries. Of its 288 entries, 286 appear in the sample by the cutoff. Some older entries combine variants, and a benchmark suite and its components can each be named, so the catalog count should not be read as a count of independent tests.

Every recorded appearance comes from a public launch page. A name can appear in a score table, a comparison, a footnote, a component list, or a partner quotation. These are all included. The resulting history describes what companies mention in public; a mention alone does not establish that the new model was scored on that benchmark, that the benchmark was prominent, or that it was used in training.

## How the mix of tasks changes

The opening timeline places each model at its release date in a lane for its company. Each pie shows the task mix of the benchmarks recorded for that model. The circles have equal size, so a larger number of benchmarks does not produce a larger marker. Hollow circles mark models with no recorded benchmarks, and only some model names are printed to keep the overview readable.

The five colors compress a more detailed classification into broad task categories:

| Category | What it describes |
| --- | --- |
| Agentic | Tasks labeled for planning, tool use, or action in an environment |
| Multimodal Perception | Understanding images, audio, video, or combinations of these with text |
| Generative Reasoning | Reasoning through problems or generating solutions, including code |
| Constraint Satisfaction | Following instructions or meeting rules, formats, and safety constraints |
| Knowledge Retrieval | Recalling or retrieving information, including tasks centered on long context |

A benchmark can involve several of these activities. The chart assigns one color using a fixed priority rule over its detailed labels. The categories are therefore a visual summary of overlapping properties, and many underlying labels are provisional. In particular, the broad Agentic category can include planning without tool use. Explicit tool and environment interaction is examined separately later in this article.

The next figure combines releases within a moving 180-day window. Under this classification, the Agentic category first appears in September 2024 and reaches roughly 70% of the classified task mix by September 2026.

![Share of five benchmark task categories within a moving 180-day window, from 2023 to September 2026. The Agentic share first appears in September 2024 and reaches roughly 70% by September 2026.](./charts/benchmark_growth.png)

To build the chart, each model with recorded benchmarks receives one unit of weight, divided evenly across its recorded benchmark mentions. Repeated appearances in later releases count again, and jointly announced variants each contribute separately. Within each window, the weight with a usable classification is scaled to 100%; windows without classified observations remain blank.

The changing colors show a shift in the tasks represented on launch pages. Their proportions also depend on which companies released models in each period and which benchmarks have labels. Early releases are sparse, and unclassified benchmarks are excluded from the color proportions. The apparent growth of Agentic tasks therefore needs to be read alongside the classification checks below.

## A small shared set accounts for most appearances

Most benchmark names in the sample belong to just one company's announcement history. Only 74 of the 286 observed benchmarks, or 25.9%, appear at two or more companies. Of these, 38 appear at all three.

Those shared benchmarks recur often. Across the 51 announcements that name benchmarks, there are 745 distinct benchmark–announcement pairs: one pair for each benchmark named in each announcement. The shared set accounts for 62.1% of those pairs.

![Three bars compare benchmark counts, benchmark–announcement pairs, and equal-announcement weights. Shared benchmarks are 25.9% of observed entries but account for 62.1% of pairs and 63.3% of equal-announcement weight.](./charts/benchmark_shared_core.png)

The pattern also holds when every announcement has equal influence. Give each announcement one unit of weight and divide it across its distinct benchmarks: a page naming ten benchmarks contributes one tenth to each, while a page naming two contributes one half to each. Under this calculation, shared benchmarks account for 63.3% of the average announcement's benchmark mix. The result persists after reducing the influence of long benchmark lists and grouping jointly announced variants.

This is evidence of recurring common reference points within the sample. It does not establish that companies use identical scoring protocols or that their published scores are directly comparable. The calculation follows catalog entries, including separate versions, rather than merging all versions into benchmark families.

## A single appearance does not establish a short lifetime

At the other end of the distribution, 169 benchmarks appear in only one announcement. Of those, 136 first enter the sample in 2026. Many have therefore had little time to appear again before the cutoff.

The reporting histories below help distinguish repeated appearances from long gaps. Each marker is an announcement that names the benchmark, and its shape identifies the company. The grey line connects the first and last recorded appearances; it can span periods with no mentions.

![Reporting histories of 15 selected benchmarks. Company-specific markers show announcements that name each benchmark, and grey lines connect their first and last recorded appearances.](./charts/benchmark_lifecycle.png)

GSM8K, a math benchmark, and HumanEval, a coding benchmark, appear among the earlier entries. Later entries include OSWorld-Verified, which tests computer use, and successive versions of Terminal-Bench, which evaluates tasks in a terminal environment. Keeping those versions on separate rows makes changes in the reported version visible.

These histories have two important boundaries. The first recorded appearance is the benchmark's entry into this selected sample, which may be later than its publication. The last recorded appearance only marks the end of the evidence available here. It cannot establish that the benchmark was retired, saturated, or replaced. A gap also needs to be read against the company's release schedule: months without a new launch provide fewer opportunities for another mention.

### How often does a benchmark appear at another company?

For each benchmark, the analysis starts a clock at its first recorded appearance and asks whether a second company names it within 30, 90, or 180 days. A benchmark enters a calculation only if the entire follow-up period ends by September 30, 2026. Those that remain exclusive to one company are included in the denominator.

| Follow-up period | Benchmarks with complete follow-up | Named by a second company within the period | Share |
| --- | ---: | ---: | ---: |
| 30 days | 209 | 26 | 12.4% |
| 90 days | 160 | 50 | 31.2% |
| 180 days | 113 | 45 | 39.8% |

For example, 45 of the 113 benchmarks with a full 180 days of follow-up appear at a second company within that period. A benchmark first mentioned near the cutoff cannot yet contribute to this six-month comparison.

Each row follows a different set of benchmarks, so the percentages cannot be joined into a single adoption curve. A full calendar window also does not guarantee that another company launched a model during it. The table describes how mentions spread within this sample, with those differences in opportunity left visible.

## The agentic trend depends on the labels

The broad task chart raises a more specific question: how much of the reported benchmark mix requires interaction with tools or an environment? Here the analysis uses labels for tool use, environment interaction, browsing, terminal or codebase interaction, and computer control. Static code generation, unit-test scoring, or planning alone does not meet this definition.

The calculation gives each announcement equal weight, as in the shared-benchmark analysis. It then compares three choices of labels: all current labels, those with a confidence rating of at least 0.70, and those that have passed review. A confidence rating is a filter for checking sensitivity; it is neither a probability of correctness nor a substitute for review.

For the 26 announcements in 2026 that name benchmarks, the choices produce very different results:

| Labels used | Weight tagged for tool or environment interaction | Weight with any interaction classification |
| --- | ---: | ---: |
| All current labels, including provisional ones | 64.0% | 100.0% |
| Labels with confidence ≥0.70 | 17.2% | 36.6% |
| Reviewed and accepted labels only | No reviewed estimate | 0.0% |

The last column measures classification coverage. A benchmark is covered when it has a retained label describing its interaction pattern, including a label that identifies a static task. Both columns use the full original weight as their denominator. Benchmarks that lose their labels remain unknown and keep their weight; the remaining labels are not scaled up to fill the gap.

![Annual interaction shares and classification coverage from 2023 to 2026. All current labels give a 64.0% interaction share in 2026, while the confidence filter gives 17.2% with only 36.6% coverage. Reviewed-label coverage is zero from 2025 onward.](./charts/interaction_taxonomy_sensitivity.png)

This coverage gap explains why the estimates need care. In 2025, labels meeting the confidence threshold cover 99.2% of the weight and give a 32.4% interaction share. In 2026, coverage falls to 36.6% and the measured share falls to 17.2%. That comparison alone cannot establish a decline in interactive tasks. Likewise, zero coverage by reviewed labels means there is no reviewed basis for an estimate.

Counting named models separately changes the 2026 estimate using all current labels only slightly, from 64.0% to 64.4%. Label selection has a much larger effect. Across the full classification table, only 36 of 4,052 labels are accepted; 3,956 still need review, and 60 come from an older classification process without full review. Establishing what a benchmark name refers to and reviewing the tasks it measures are separate pieces of work.

## What this history tells us

The clearest pattern is the coexistence of recurring shared benchmarks and a long list of names seen only once. A minority of benchmarks accounts for most recorded appearances, even when announcements receive equal weight. The task charts add a useful view of how the reported mix changes, but the strength of the apparent agentic shift remains sensitive to unfinished classification work.

The sample is selective, its coverage varies over time, and launch pages may have changed since publication. It provides a history of public benchmark mentions rather than a complete account of model evaluation. The next steps are to review the labels that most affect the results, document relationships between benchmark versions and families, and distinguish direct results from comparisons, component lists, and quotations. Archived launch pages and benchmark publication dates would also make the timing analysis more informative.

## Data and further reading

The underlying records and analysis code are public, so readers can inspect individual observations or reproduce the figures:

- [Model inventory and source pages](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/models.csv) and [benchmark catalog](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/data/benchmarks.csv).
- [Calculation methods](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/README.md), including announcement weights, follow-up periods, and classification coverage.
- [Timeline methods](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_evolution/README.md) and [moving-window methods](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_taxonomy_trends/README.md).
- [Complete reporting histories](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/benchmark_lifecycle/report.md) for all 288 catalog entries, including the two without an appearance by this cutoff.
- [Classification evidence](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/analysis/project_overview/interaction_classification.csv) and [data audit](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models/blob/main/docs/readme_data_audit_2026_10_04.md).

The [project repository](https://github.com/isingmodel/evolution_of_benchmarks_in_frontier_models#reproduce-and-extend) includes instructions for reproducing the analysis and extending the dataset.
