import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/java/": [
      {
        text: "Java基础",
        collapsible: true,
        icon: "basis",
        // prefix: "basis/",
        children: [
          {
            text: "Java基本程序设计结构",
            collapsible: true,
            // prefix: "basic-programming-structure/",
            children: [
              "/java/basis/basic-programming-structure/javadoc",
              "/java/basis/basic-programming-structure/basis-data-type",
              "/java/basis/basic-programming-structure/control-flow",
              "/java/basis/basic-programming-structure/operator",
              "/java/basis/basic-programming-structure/array",
              "/java/basis/basic-programming-structure/string",
            ]
          },
          {
            text: "Java面向对象编程",
            collapsible: true,
            // prefix: "oop/",
            children: [
              "/java/basis/oop/object-and-class",
              "/java/basis/oop/var",
            ]
          }
        ]
      },
      {
        text: "Java高级",
        collapsible: true,
        icon: "advanced",
        // prefix: "advanced/",
        children: [

        ]
      },
      {
        text: "Java学习路线",
        icon: "wodexuexiluxian",
        link: "/java/learning-route"
      },
  ],
  "/python/": [
    {
      text: "Python基础",
      collapsible: true,
      icon: "basis",
      // prefix: "basis/",
      children: [
        
      ]
    },
    {
      text: "Python进阶",
      collapsible: true,
      icon: "advanced",
      // prefix: "advanced/",
      children: [
        
      ]
    },
    {
      text: "面试题集",
      collapsible: true,
      icon: "mianshianpai",
      children: [
        "/python/interview/basis"
      ]
    }
  ],
  "/collection/websites-and-tools/": [
    {
      text: "机场服务商",
      icon: "jichang",
      link: "/collection/websites-and-tools/airport-list"
    },
    {
      text: "破解网站",
      icon: "baolipojie",
      link: "/collection/websites-and-tools/crack-website"
    },
    {
      text: "编程网站",
      icon: "biancheng",
      link: "/collection/websites-and-tools/programming-website"
    },
    {
      text: "前端字体",
      icon: "ziti",
      link: "/collection/websites-and-tools/frontend-font"
    },
    {
      text: "免费视频",
      icon: "shipin",
      link: "/collection/websites-and-tools/free-video"
    },
    {
      text: "SSL证书",
      icon: "SSL",
      link: "/collection/websites-and-tools/ssl-website"
    },
  ],
  "/life-notes/": [
    {
      text: "新生儿出生后需要做的一些重要的事",
      icon: "",
      collapsible: true,
      children: [
        "/life-notes/newborns-important-things/办理出生证",
        "/life-notes/newborns-important-things/办理户口本&身份证",
        "/life-notes/newborns-important-things/购买少儿医保",
        "/life-notes/newborns-important-things/激活少儿医保凭证",
        "/life-notes/newborns-important-things/办理金融社保卡",
        "/life-notes/newborns-important-things/绑定父母社保卡",
        "/life-notes/newborns-important-things/个人账户支付医保缴费申请",
        "/life-notes/newborns-important-things/报销新生儿科住院费用",
      ]
    }
  ]
});