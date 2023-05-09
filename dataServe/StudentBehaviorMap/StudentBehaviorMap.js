export default {
  name: 'StudentBehaviorMap',
  data () {
    return {
      newStudentNode: {
        x: '0',
        y: '0',
        r: 61,
        outerHeight: 22,
        widthGap: 44,
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
                name: '语文：112分'
              },
              {
                name: '数学：98分'
              },
              {
                name: '英语：119分'
              },
              {
                name: '物理：92分'
              },
              {
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
                name: '装饰21-2'
              }
            ]
          }
        ]
      }
    }
  },
  mounted () {},
  created () {
    this.getParentNodeOuterPath()
  },
  methods: {
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
        V = V + childNode.height + childNode.children.length * this.newStudentNode.heightGap
        if (childNode.children) {
          const nodeH = H + childNode.width / 2
          childNode.outerPath = `M ${nodeH} ${bottomV}`
          childNode.children.forEach(item => {
            childNode.outerPath += `V ${bottomV + item.heightGap} M ${nodeH} ${bottomV + 2 * item.heightGap} V ${bottomV + 3 * item.heightGap} M ${nodeH} ${bottomV + 4 * item.heightGap} V ${bottomV + 5 * item.heightGap} M ${nodeH} ${bottomV + 6 * item.heightGap} V ${bottomV + 7 * item.heightGap} M ${nodeH} ${bottomV + 8 * item.heightGap} H ${H + item.widthGap}`
          })
        }
      })
    }
  },
  watch: {}
}
