# The Husky Lottery

## 简介
UWCSSA Husky抽奖程序
*修改自 hsefz2018 的 https://github.com/hsefz2018/lottery-newyear2017 和 https://github.com/hsefz2018/lottery-newyear2016 ，以及kaichengyan 的 https://github.com/kaichengyan/TheVoiceLottery
以下是原程序提供的 README.md

>HSEFZ 2016-2017元旦文艺汇演抽奖程序
Chrome Canary (OS X, 57.0) 工作正常
Safari / Firefox 未测试
建议分辨率高于1280x800屏幕使用
双击点开index.html开始抽奖
P.S：
Powerpoint内嵌网页可见Live Web插件

## Demo
[The Husky Lottery](http://students.washington.edu/qiny8/projects/Lottery/)

## 注意事项
1. 抽取数量必须为正整数，理论上无上限，但是为了显示请勿同时输入太大的数字
2. 开始数字必须低于结束数字，并且长度（结束数字-开始数字）必须大于抽取数量，否则不会运行
3. 刷新页面即重置程序，所以请务必记录完所有的结果后再刷新或关闭页面

## 改动
1. 在开始抽奖前的界面里加入了输入框，可以让用户自己输入抽取数量，开始数字与结束数字
2. 修改了停止方式，由计时停止改为按停止按钮停止，并增加了停止按钮与停止一半按钮（第一次的数量向下取整）
3. 增加了判断指令，使得用户抽取多个数量时不会出现重复结果
4. 修改了排版，现在支持移动端使用了
5. 修复了使用停止一半时记录的数字和抽到的数字不一致的Bug
