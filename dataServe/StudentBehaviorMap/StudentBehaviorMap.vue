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
                <text v-for="subNode in childNode.children" :key="subNode.name" font-size="14" fill="#252f47" :x="subNode.x" :y="subNode.y">{{subNode.name}}</text>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="behavior-progress">
        <div class="behavior-progress-item">
          <div class="behavior-title behavior-progress-title">2019-2020</div>
          <div :style="{height: progressHeight + 'px'}" class="behavior-content behavior-progress-content">
            <div class="progress-bgs">
              <div :style="{height: orbit + 'px'}" class="progress-orbit"></div>
            </div>
            <div class="parent-node" :style="{width: pNodeR + 'px', height: pNodeR + 'px', left: pNodeLeft + 'px', top: pNodeTop + 'px'}">
            </div>
            <div :style="{width: pNodeR + 'px', height: pNodeR + 'px', left: pNodeLeft + 'px', top: pNodeTop + 'px'}" class="parent-node-text">
              <div :style="{marginTop: (pNodeR/2 - 30) + 'px'}">学习行为</div>
              <div class="parent-node-text-bottom">LEARNING BEHAVIOR</div>
            </div>
            <!-- 学籍异动 -->
            <div :style="{width: progressItemW + 'px', left: studentStatusLeft + 'px', top: studentStatusTop + 'px'}" class="student-status">
              <div :style="{width: studentStatusR + 'px', height: studentStatusR + 'px', marginLeft: (progressItemW/2-studentStatusR/2) + 'px'}" class="student-status-bg"></div>
              <div class="info-title">{{studentStatusItem.name}}</div>
              <div v-for="(item, index) in studentStatusItem.list" :key="`${item.name}_${index}}`" class="info-item">
                <div v-if="index < 5">
                  <span class="blue-dot"></span>
                  <span >{{item.name}}</span>
                </div>
                <div v-else>
                  <span class="blue-dot"></span>
                  <span v-on:click="moreHandle(item)">更多...</span>
                </div>
              </div>
            </div>
            <!-- 第二课堂 -->
            <div :style="{width: progressItemW + 'px', left: secClassroomLeft + 'px', top: secClassroomTop + 'px'}" class="student-status">
              <div :style="{width: secClassroomR + 'px', height: secClassroomR + 'px', marginLeft: (progressItemW/2-secClassroomR/2) + 'px'}" class="student-status-bg"></div>
              <div class="info-title">{{studentStatusItem.name}}</div>
              <div v-for="(item, index) in secClassroomItem.list" :key="`${item.name}_${index}}`" class="info-item">
                <div v-if="index < 5">
                  <span class="blue-dot"></span>
                  <span >{{item.name}}</span>
                </div>
                <div v-else>
                  <span class="blue-dot"></span>
                  <span v-on:click="moreHandle(item)">更多...</span>
                </div>
              </div>
            </div>
            <!-- 课堂成绩 -->
            <div :style="{width: progressItemW + 'px', left: achievementLeft + 'px', top: achievementTop + 'px'}" class="student-status">
              <div :style="{width: achievementR + 'px', height: achievementR + 'px', marginLeft: (progressItemW/2-achievementR/2) + 'px'}" class="student-status-bg"></div>
              <div class="info-title">{{achievementItem.name}}</div>
              <div v-for="(item, index) in achievementItem.list" :key="`${item.name}_${index}}`" class="info-item">
                <div v-if="index < 5">
                  <span class="blue-dot"></span>
                  <span >{{item.name}}</span>
                </div>
                <div v-else>
                  <span class="blue-dot"></span>
                  <span v-on:click="moreHandle(item)">更多...</span>
                </div>
              </div>
            </div>
            <!-- 上课签到 -->
            <div :style="{width: progressItemW + 'px', left: signInLeft + 'px', top: signInTop + 'px'}" class="student-status">
              <div :style="{width: signInR + 'px', height: signInR + 'px', marginLeft: (progressItemW/2-signInR/2) + 'px'}" class="student-status-bg"></div>
              <div class="info-title">{{signInItem.name}}</div>
              <div v-for="(item, index) in signInItem.list" :key="`${item.name}_${index}}`" class="info-item">
                <div v-if="index < 5">
                  <span class="blue-dot"></span>
                  <span >{{item.name}}</span>
                </div>
                <div v-else>
                  <span class="blue-dot"></span>
                  <span v-on:click="moreHandle(item)">更多...</span>
                </div>
              </div>
            </div>
            <!-- 图书借阅 -->
            <div :style="{width: progressItemW + 'px', left: booksLeft + 'px', top: secClassroomTop + 'px'}" class="student-status">
              <div :style="{width: booksR + 'px', height: booksR + 'px', marginLeft: (progressItemW/2-booksR/2) + 'px'}" class="student-status-bg"></div>
              <div class="info-title">{{booksItem.name}}</div>
              <div v-for="(item, index) in booksItem.list" :key="`${item.name}_${index}}`" class="info-item">
                <div v-if="index < 5">
                  <span class="blue-dot"></span>
                  <span >{{item.name}}</span>
                </div>
                <div v-else>
                  <span class="blue-dot"></span>
                  <span v-on:click="moreHandle(item)">更多...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="behavior-end">
        <div class="behavior-title behavior-end-title">毕业后方向</div>
        <div class="behavior-content behavior-end-content">
          <div class="behavior-end-text text-job">就业</div>
          <div class="behavior-end-text text-school">升学</div>
          <div class="behavior-end-text text-abroad">出国</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./StudentBehaviorMap"></script>
<style src="./StudentBehaviorMap.less" lang="less" scoped></style>
