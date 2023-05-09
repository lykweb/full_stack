<template>
  <div class="content">
    <div class="stage-level">
      <div class="stage-item stage-start"><span class="stage-start-text">入学阶段</span></div>
      <div class="stage-item stage-progress"><span class="stage-progress-text">校内学习阶段</span></div>
      <div class="stage-item stage-end"><span class="stage-end-text">毕业、就业阶段</span></div>
    </div>
    <div class="behavior">
      <div class="behavior-start">
        <div class="behavior-title behavior-start-title">新生入学</div>
        <div class="behavior-content">
          <svg version="1.1"
            baseProfile="full"
            width="100%" height="806"
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <image href="../../assets/img/png/9.png" :x="newStudentNode.x" :y="newStudentNode.y" height="122px" width="122px"></image>
              <foreignObject :x="newStudentNode.textObject.x" :y="newStudentNode.textObject.y" :height="newStudentNode.textObject.height" :width="newStudentNode.textObject.width">
                <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 15px; color: #fff;">{{newStudentNode.textObject.text}}</div>
              </foreignObject>
              <path :d="newStudentNode.outerPath" fill="transparent" stroke="rgba(64,98,255, 0.5)" />
              <g v-for="childNode in newStudentNode.children" :key="childNode.name">
                <path :d="childNode.nodePath" stroke="transparent" fill="rgba(64,98,255, 1)" />
                <text font-size="15" fill="white" :x="childNode.textObject.x" :y="childNode.textObject.y">{{childNode.textObject.text}}</text>
                <path :d="childNode.outerPath" fill="transparent" stroke="rgba(64,98,255, 0.5)" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="behavior-progress">
        <div class="behavior-progress-item">
          <div class="behavior-title behavior-progress-title">2019-2020</div>
        </div>
      </div>
      <div class="behavior-end">
        <div class="behavior-title behavior-end-title">毕业后方向</div>
      </div>
    </div>
  </div>
</template>

<script src="./StudentBehaviorMap"></script>
<style src="./StudentBehaviorMap.less" lang="less" scoped></style>
