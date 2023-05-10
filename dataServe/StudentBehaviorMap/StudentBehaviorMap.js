export default {
  name: 'StudentBehaviorMap',
  data () {
    return {
      newStudentNode: {
        x: '0',
        y: '0',
        r: 61,
        outerHeight: 22,
        widthGap: 16,
        heightGap: 40,
        outerPath: '',
        textObject: {
          x: '46',
          y: '40',
          height: '42',
          width: '30',
          text: '学习行为'
        },
        children: [
          {
            name: '入学成绩',
            textObject: {
              x: '',
              y: '',
              text: '入学成绩'
            },
            width: 84,
            height: 32,
            widthGap: 20,
            heightGap: 5,
            outerPath: '',
            nodePath: '',
            children: [
              {
                x: '0',
                y: '0',
                name: '语文：112分'
              },
              {
                x: '0',
                y: '0',
                name: '数学：98分'
              },
              {
                x: '0',
                y: '0',
                name: '英语：119分'
              },
              {
                x: '0',
                y: '0',
                name: '物理：92分'
              },
              {
                x: '0',
                y: '0',
                name: '化学：82分'
              }
            ]
          },
          {
            name: '入学专业',
            textObject: {
              x: '',
              y: '',
              text: '入学专业'
            },
            width: 84,
            height: 32,
            widthGap: 20,
            heightGap: 5,
            outerPath: '',
            nodePath: '',
            children: [
              {
                x: '0',
                y: '0',
                name: '建筑装饰工程技术'
              }
            ]
          },
          {
            name: '入学院系',
            textObject: {
              x: '',
              y: '',
              text: '入学院系'
            },
            width: 84,
            height: 32,
            widthGap: 20,
            heightGap: 5,
            outerPath: '',
            nodePath: '',
            children: [
              {
                x: '0',
                y: '0',
                name: '建筑艺术学院'
              }
            ]
          },
          {
            name: '入学班级',
            textObject: {
              x: '',
              y: '',
              text: '入学班级'
            },
            widthGap: 20,
            heightGap: 5,
            outerPath: '',
            nodePath: '',
            width: 84,
            height: 32,
            children: [
              {
                x: '0',
                y: '0',
                name: '装饰21-2'
              }
            ]
          }
        ]
      },
      studentStatusItem: {
        name: '学籍异动',
        list: [
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          }
        ]
      },
      secClassroomItem: {
        name: '第二课堂',
        list: [
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          }
        ]
      },
      achievementItem: {
        name: '课堂成绩',
        list: [
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          }
        ]
      },
      signInItem: {
        name: '上课签到',
        list: [
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          }
        ]
      },
      booksItem: {
        name: '图书借阅',
        list: [
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          },
          {
            name: '2019-09-18 转专业 工程造价学院>建筑设备学院'
          }
        ]
      },
      progressWidth: 0,
      progressHeight: 0,
      pNodeR: 0,
      pNodeLeft: 0,
      pNodeTop: 0,
      orbit: 0,
      studentStatusR: 0,
      progressItemW: 0,
      studentStatusLeft: 0,
      studentStatusTop: 0,
      secClassroomR: 0,
      secClassroomLeft: 0,
      secClassroomTop: 0,
      achievementR: 0,
      achievementLeft: 0,
      achievementTop: 0,
      signInR: 0,
      signInLeft: 0,
      signInTop: 0,
      booksR: 0,
      booksLeft: 0,
      booksop: 0
    }
  },
  mounted () {
    this.progressHandle()
    window.onresize = () => this.progressHandle()
  },
  created () {
    this.getParentNodeOuterPath()
  },
  methods: {
    progressHandle () {
      const progressDom = document.querySelector('.behavior-progress-content')
      console.log(progressDom.clientWidth)
      this.progressWidth = progressDom.clientWidth
      this.progressHeight = this.progressWidth * 0.6057
      this.pNodeR = this.progressWidth * 0.2171
      this.pNodeLeft = this.progressWidth / 2 - this.pNodeR / 2
      this.orbit = this.progressWidth * 0.2857
      this.progressItemW = this.progressWidth * 0.1657
      this.studentStatusR = this.progressWidth * 0.0571
      this.studentStatusLeft = this.progressWidth * 0.0228
      this.studentStatusTop = this.progressWidth * 0.1743 - 12
      this.secClassroomR = this.progressWidth * 0.0914
      this.secClassroomLeft = this.progressWidth * 0.2057
      this.secClassroomTop = this.progressWidth * 0.2342 - 12
      this.achievementR = this.progressWidth * 0.1029
      this.achievementLeft = this.progressWidth * 0.4314 - 16
      this.achievementTop = this.progressWidth * 0.2714 - 30
      this.signInR = this.progressWidth * 0.0914
      this.signInLeft = this.progressWidth * 0.6686 - 50
      this.signInTop = this.progressWidth * 0.2342 - 20
      this.booksR = this.progressWidth * 0.0571
      this.booksLeft = this.progressWidth * 0.8171 - 40
      this.booksTop = this.progressWidth * 0.1743
    },
    moreHandle (item) {
      console.log(item)
    },
    getParentNodeOuterPath () {
      const x = this.newStudentNode.r
      const y = 2 * this.newStudentNode.r - this.newStudentNode.outerHeight
      const H = x + this.newStudentNode.widthGap
      let V = y + this.newStudentNode.outerHeight + this.newStudentNode.heightGap
      this.newStudentNode.outerPath = `M ${x} ${y}`
      this.newStudentNode.children.forEach(childNode => {
        const cr = childNode.height / 2
        const topV = V - cr
        const bottomV = V + cr
        const rH = H + childNode.width
        const rLH = rH - cr
        childNode.textObject.x = H + 12
        childNode.textObject.y = V + 4
        this.newStudentNode.outerPath += `V ${V} H ${H} M ${x} ${V}`
        childNode.nodePath = `M ${H} ${V} Q ${H} ${topV} ${H + cr} ${topV} H ${rLH} Q ${rH} ${topV} ${rH} ${V} Q ${rH} ${bottomV} ${rLH} ${bottomV} H ${H + cr} Q ${H} ${bottomV} ${H} ${V}`
        V = V + childNode.height + childNode.children.length * this.newStudentNode.heightGap + this.newStudentNode.heightGap / 2
        if (childNode.children) {
          const nodeH = H + childNode.width / 2
          const { heightGap, widthGap } = childNode
          let nodeV = bottomV
          childNode.outerPath = `M ${nodeH} ${nodeV}`
          childNode.children.forEach(item => {
            childNode.outerPath += ` V ${nodeV + heightGap} M ${nodeH} ${nodeV + 2 * heightGap} V ${nodeV + 3 * heightGap} M ${nodeH} ${nodeV + 4 * heightGap} V ${nodeV + 5 * heightGap} M ${nodeH} ${nodeV + 6 * heightGap} V ${nodeV + 7 * heightGap} M ${nodeH} ${nodeV + 8 * heightGap} H ${nodeH + widthGap} M ${nodeH} ${nodeV + 8 * heightGap}`
            nodeV += this.newStudentNode.heightGap
            item.x = nodeH + 4
            item.y = nodeV - 4
          })
        }
      })
    }
  },
  watch: {}
}
