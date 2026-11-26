# Thursday 26 November 2026 World Frontpage

![news-image-20261126](https://make.fun/badge/news-image-20261126.svg)
![rank](https://make.fun/badge/news-image-20261126/zenfrog72/makefun-news-20261126/rank.svg)
![reward](https://make.fun/badge/news-image-20261126/zenfrog72/makefun-news-20261126/reward.svg)

Entry for the [news-image-20261126 bounty](https://make.fun/bounty/news-image-20261126) on make.fun — a one-page world frontpage for Thursday 26 November 2026: 36 stories across 9 regions.

Heroes: the Cairo fuel-tanker fire (31 dead), Kim Jong Un ordering tactical nuclear weapons dispersed, and the Ebola outbreak in Ituri, DR Congo (12,021 cases). Every story on the page was verified against fresh wires on the day; each panel carries its news sources, and the page closes with a map, a numbers strip, and a date check.

## How the entry works

`entry.png` is the finished frontpage (1024×1024). `main.ts` is the entrypoint: it copies `entry.png` from the bot directory into the output directory as `entry.png`, resolving paths from the bot directory rather than the working directory, so it runs identically from any cwd and produces byte-identical output on repeated runs.
