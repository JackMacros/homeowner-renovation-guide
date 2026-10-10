# 毛坯房装修业主指南

这是一套面向中国毛坯房业主的施工管理指南。它不教授业主代替工人施工，而是帮助业主掌握：

- 工序顺序和工种衔接；
- 常见偷工减料与质量风险；
- 材料进场如何核对；
- 哪些节点必须暂停、等待和验收；
- 如何检查、记录、整改和放行下一工序。

## Guide 网站

当前目录已经是可运行的 Docusaurus 静态网站，包含响应式首页、自动侧边栏、面包屑、目录、暗色模式、中文全文搜索和打印样式。

```bash
npm ci
npm run start
```

`npm run start` 是开发模式，中文本地搜索索引尚未生成，搜索框会显示提示。要在本机验证可用的检索功能，请运行 `npm run preview`：它会先构建搜索索引，再启动生产预览；修改内容后重新运行即可。生产构建使用 `npm run build`，成品输出到 `build/`。服务器部署与 Nginx 配置见 [DEPLOYMENT.md](DEPLOYMENT.md)。

## 开始阅读

1. [整体施工流程](docs/00-process-overview.md)
2. [工序卡的阅读与编写规则](docs/01-stage-template.md)
3. 按照整体流程进入每一个施工阶段。
4. [专题指南](docs/topics/index.md)：工人、合同、材料、预算、工具和现场记录。

## 当前编写进度

第一批已经完成：

- [01 现场保护与施工放线](docs/stages/01-site-protection-and-layout.md)
- [02 拆除与清运](docs/stages/02-demolition.md)
- [03 砌墙、门洞与基层修补](docs/stages/03-masonry-and-repair.md)

第二批已经完成：

- [04 门窗、空调、新风等前置工程](docs/stages/04-windows-and-hvac.md)
- [05 水电与给排水改造](docs/stages/05-mep-rough-in.md)
- [06 封槽、找平与防水基层](docs/stages/06-chasing-repair-and-waterproof-base.md)
- [07 防水与闭水试验](docs/stages/07-waterproofing.md)

第三批已经完成：

- [08 瓷砖铺贴与地面找平](docs/stages/08-tiling-and-leveling.md)
- [09 吊顶、木工与隐蔽设备封板](docs/stages/09-ceiling-and-carpentry.md)
- [10 墙面基层与涂装](docs/stages/10-wall-finishing.md)

第四批已经完成：

- [11 门、柜体、台面与地板](docs/stages/11-doors-cabinets-and-flooring.md)
- [12 开关、灯具、洁具与设备](docs/stages/12-fixtures-and-equipment.md)
- [13 整体验收、整改与交付](docs/stages/13-final-acceptance.md)

主施工流程已经从01到13全部完成。后续可继续增加材料选购、合同报价、预算、工具和验收表等专题页面。

## 专题指南

- [专题总览](docs/topics/index.md)
- [如何筛选工人和施工队](docs/topics/01-worker-selection.md)
- [报价、合同、付款与质保](docs/topics/02-quotation-contract-payment.md)
- [材料采购与品牌型号管理](docs/topics/03-material-procurement.md)
- [预算、进度与采购计划](docs/topics/04-budget-and-schedule.md)
- [业主验收工具箱](docs/topics/05-inspection-toolkit.md)
- [现场留证、变更与问题闭环](docs/topics/06-site-records-and-changes.md)
- [装修法规、申报与标准底线](docs/topics/07-legal-and-standards.md)
- [室内环境、检测与入住准备](docs/topics/08-indoor-air-and-move-in.md)
- [专题一手来源研究笔记](docs/references/topic-source-notes.md)

## 可直接使用的模板

- [模板总览](docs/templates/index.md)
- [工人和施工队比选表](docs/templates/01-contractor-comparison.md)
- [施工范围与报价清单](docs/templates/02-scope-and-quotation.md)
- [材料采购、进场与余料台账](docs/templates/03-material-register.md)
- [预算、进度与付款跟踪表](docs/templates/04-budget-schedule-payment.md)
- [现场变更单](docs/templates/05-change-order.md)
- [问题整改与复验单](docs/templates/06-issue-rectification.md)
- [阶段验收与放行单](docs/templates/07-stage-acceptance.md)
- [竣工验收与资料交付清单](docs/templates/08-final-handover.md)
- [施工日志](docs/templates/09-site-daily-log.md)

## 一页式阶段验收清单

- [01至13阶段现场清单总览](docs/checklists/index.md)

## 使用边界

本指南用于辅助业主管理、沟通和验收，不能替代结构设计、施工图、产品技术说明、当地规范、物业要求或具备相应能力的专业人员意见。涉及承重结构、燃气、供暖、外立面及其他依法需要审批的项目，不应仅依据本指南自行施工。

