/*
Navicat MySQL Data Transfer

Source Server         : graduate
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : sramportal

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2019-05-24 20:46:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `company`
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `companyId` char(14) NOT NULL,
  `companyName` char(20) NOT NULL,
  `companyIntro` text NOT NULL,
  `companyImage` char(20) NOT NULL,
  PRIMARY KEY (`companyId`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES ('20160519161756', '太原分公司', '<span style=\"font-family:Microsoft YaHei;font-size:32px;color:#ff0000;\"><strong>热庆祝烈太原分公司成立<img alt=\"微笑\" src=\"/SramPortalWeb/xheditor/xheditor_emot/default/smile.gif\" /><img alt=\"微笑\" src=\"xheditor/xheditor_emot/default/smile.gif\" /></strong></span>', '20160519161756.jpg');
INSERT INTO `company` VALUES ('20160604102833', '公司简介', '<img alt=\"吐舌头\" src=\"xheditor/xheditor_emot/default/tongue.gif\" />公司简介在这里', '20160604102833.jpg');
INSERT INTO `company` VALUES ('20160604113656', '我的简介', '<img alt=\"安静\" src=\"/SramPortalWeb/xheditor/xheditor_emot/default/quiet.gif\" />', '20160604113656.jpg');

-- ----------------------------
-- Table structure for `course`
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `courseId` char(14) NOT NULL,
  `courseName` char(20) NOT NULL,
  `courseDetail` text NOT NULL,
  `courseSystem` char(20) NOT NULL,
  `jobDirection` char(20) NOT NULL,
  `courseImage` char(20) NOT NULL,
  PRIMARY KEY (`courseId`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('20160519162206', 'Android实训', '<span style=\"font-family:System;font-size:48px;color:#333333;background-color: rgb(102, 51, 255);\">教授Android<img alt=\"再见\" src=\"/SramPortalWeb/xheditor/xheditor_emot/default/bye.gif\" /></span>', 'Android', 'Android高级工程师', '20160519162206.jpg');
INSERT INTO `course` VALUES ('20160603230804', '20160603230804', '<img alt=\"疑问\" src=\"/SramPortalWeb/xheditor/xheditor_emot/default/doubt.gif\" />', '20160603230804', '20160603230804', '20160603230804.jpg');
INSERT INTO `course` VALUES ('20160603230828', '20160603230828', '<img alt=\"哭\" src=\"/SramPortalWeb/xheditor/xheditor_emot/default/cry.gif\" />', '20160603230828', '20160603230828', '20160603230828.png');
INSERT INTO `course` VALUES ('无', '无', '无', '无', '无', '0.jpg');

-- ----------------------------
-- Table structure for `grade`
-- ----------------------------
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `gradeId` char(14) NOT NULL,
  `gradeCourse` char(14) NOT NULL,
  `gradeName` char(20) NOT NULL,
  `gradeCount` char(2) NOT NULL,
  PRIMARY KEY (`gradeId`),
  KEY `gradeCourse` (`gradeCourse`),
  CONSTRAINT `gradeCourse` FOREIGN KEY (`gradeCourse`) REFERENCES `course` (`courseId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of grade
-- ----------------------------
INSERT INTO `grade` VALUES ('20160519160303', '20160519162206', '理工SJT1509', '11');
INSERT INTO `grade` VALUES ('20160604102806', '20160603230828', '软件1225班', '30');
INSERT INTO `grade` VALUES ('20160604112646', '20160603230804', '理工SJT1511', '99');
INSERT INTO `grade` VALUES ('20170802154536', '20160603230828', 'iodine', '31');
INSERT INTO `grade` VALUES ('无', '无', '无', '无');

-- ----------------------------
-- Table structure for `manager`
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager` (
  `id` char(18) NOT NULL,
  `name` char(20) NOT NULL,
  `gender` char(2) NOT NULL,
  `birthday` char(8) NOT NULL,
  `phone` char(11) NOT NULL,
  `address` char(40) NOT NULL,
  `school` char(40) NOT NULL,
  `image` char(20) NOT NULL,
  `managerId` char(14) NOT NULL,
  `managerPassword` char(20) NOT NULL,
  `managerPosition` char(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `managerId` (`managerId`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of manager
-- ----------------------------
INSERT INTO `manager` VALUES ('140000000000000000', '刘志峰', '男', '00000000', '18334706003', '山西省', '太原理工大学', 'liuzhifeng.jpg', 'liuzhifeng', 'liuzhifeng', '超级管理');
INSERT INTO `manager` VALUES ('140607201605186767', 'ghy', '男', '20160518', '15588888885', 'cfgfghj', 'cbvh', '20160519164404.png', '20160519164404', '20160519164404', '公司管理');
INSERT INTO `manager` VALUES ('142222198005051234', '奥巴马', '男', '19800505', '13234534543', '美国', '纽约大学', '20160519145432.jpg', '20160519145432', '20160519145432', '超级管理');
INSERT INTO `manager` VALUES ('142222201605298767', '14222220160529876', '女', '20160529', '14222220160', '142222201605298767', '142222201605298767', '20160603230056.png', '20160603230056', '142322201605292341', '超级管理');
INSERT INTO `manager` VALUES ('142322201605292341', '14232220160529234', '男', '20160529', '14232220160', '142322201605292341', '142322201605292341', '20160603225928.png', '20160603225928', '20160603225928', '学生管理');

-- ----------------------------
-- Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `newsId` char(14) NOT NULL,
  `newsTitle` char(20) NOT NULL,
  `newsDetail` text NOT NULL,
  `newsImage` char(20) NOT NULL,
  PRIMARY KEY (`newsId`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('20160604112732', '人力招聘', '联系电话：13833333333', '20160604112732.jpg');
INSERT INTO `news` VALUES ('20160604113156', '这是新闻哦', '<span style=\"font-size:48px;\">新闻</span>', '20160604113156.jpg');
INSERT INTO `news` VALUES ('20160716152249', '人力招聘', 'nmnkn', '20160716152249.jpg');

-- ----------------------------
-- Table structure for `student`
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` char(18) NOT NULL,
  `name` char(20) NOT NULL,
  `gender` char(2) NOT NULL,
  `birthday` char(8) NOT NULL,
  `phone` char(11) NOT NULL,
  `address` char(40) NOT NULL,
  `school` char(40) NOT NULL,
  `image` char(20) NOT NULL,
  `stuId` char(14) NOT NULL,
  `stuPassword` char(20) NOT NULL,
  `stuGrade` char(14) NOT NULL,
  `stuJobCompany` char(20) NOT NULL,
  `stuJobAddress` char(40) NOT NULL,
  `stuJobPay` char(7) NOT NULL,
  `stuJobTime` char(8) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `stuId` (`stuId`),
  KEY `stuGrade` (`stuGrade`),
  CONSTRAINT `stuGrade` FOREIGN KEY (`stuGrade`) REFERENCES `grade` (`gradeId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('13422220160502345x', 'sdfa', '女', '20160502', '18334566655', 'fdsaf', 'fdsaf', '20160525124001.png', '20160525124001', '20160525124001', '20160519160303', '不知道', '不知道', '1234000', '20160530');
INSERT INTO `student` VALUES ('140602199505081111', '啦', '男', '19950508', '18334700000', '太原', '太原理工大学', '20160519161412.jpg', '20160519161412', 'abcd123', '20160519160303', '起伏跌宕', '是打发', '1435346', '20160601');
INSERT INTO `student` VALUES ('142222201605012341', '14222220160501234', '女', '20160501', '14222220160', '142222201605012341', '山西大学', '20160519152504.jpg', '20160519152504', '20160519152504', '20160519160303', '思软', '山西省', '12', '20160529');
INSERT INTO `student` VALUES ('142328201707301122', '撒旦法', '男', '20170730', '17090232930', '阿斯顿发份', '防生的是打发', '20170802163141.jpg', '20170802163141', '6003', '无', '问', '22', '12233', '20170802');
INSERT INTO `student` VALUES ('142333201605293344', 'fdsf', '女', '20160529', '18333342343', 'fdsaf', 'sdff', '20160606150209.jpg', '20160606150209', '20160606150209', '20160604112646', 'sd', '', '', '');
INSERT INTO `student` VALUES ('149898201606012345', '关晓彤', '男', '20160601', '15324345345', '山西省太原市', '北京XXXXXXXXXXX', '20160604103051.jpg', '20160604103051', '20160604103051', '20160604102806', 'XX公司', '北京市', '1200000', '20160601');

-- ----------------------------
-- Table structure for `teacher`
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` char(18) NOT NULL,
  `name` char(20) NOT NULL,
  `gender` char(2) NOT NULL,
  `birthday` char(8) NOT NULL,
  `phone` char(11) NOT NULL,
  `address` char(40) NOT NULL,
  `school` char(40) NOT NULL,
  `image` char(20) NOT NULL,
  `teacherId` char(14) NOT NULL,
  `teacherPassword` char(20) NOT NULL,
  `teacherGrade` char(14) NOT NULL,
  `teacherExperience` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `teacherId` (`teacherId`),
  KEY `teacherGrade` (`teacherGrade`),
  CONSTRAINT `teacherGrade` FOREIGN KEY (`teacherGrade`) REFERENCES `grade` (`gradeId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('123123201207301234', '大发', '男', '20120730', '13242345678', '法撒旦法户口呀', '我破坏双方各', '20170802161306.jpg', '20170802161306', '20170802161306', '20170802154536', '为发传单YURYIKNVC&nbsp;');
INSERT INTO `teacher` VALUES ('142222198105193333', '周杰伦', '男', '19810519', '18243243243', '台湾', '国立大学', '20160519215808.jpg', '20160519215808', '20160519215808', '20160519160303', '工作经历好多写不完');
INSERT INTO `teacher` VALUES ('142321201708011209', '阿道夫', '男', '20170801', '13123121456', '阿斯顿发如何也同样', '多个一日游', '20170802161145.jpg', '20170802161145', '20170802161145', '20170802154536', '<blockquote style=\"margin: 0 0 0 40px; border: none; padding: 0px;\">大发</blockquote>');
INSERT INTO `teacher` VALUES ('142327201708011029', '阿斯顿发', '男', '20170801', '18233333333', '的飞洒发', '发达', '20170802161844.jpg', '20170802161844', '20170802161844', '20170802154536', '方当事人个人');

-- ----------------------------
-- View structure for `gradecourse`
-- ----------------------------
DROP VIEW IF EXISTS `gradecourse`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `gradecourse` AS select `grade`.`gradeId` AS `gradeId`,`grade`.`gradeName` AS `gradeName`,`grade`.`gradeCount` AS `gradeCount`,`course`.`courseId` AS `courseId`,`course`.`courseName` AS `courseName`,`course`.`courseDetail` AS `courseDetail`,`course`.`courseSystem` AS `courseSystem`,`course`.`jobDirection` AS `jobDirection`,`course`.`courseImage` AS `courseImage` from (`grade` left join `course` on((`grade`.`gradeCourse` = `course`.`courseId`))) ;

-- ----------------------------
-- View structure for `studentgrade`
-- ----------------------------
DROP VIEW IF EXISTS `studentgrade`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `studentgrade` AS select `student`.`id` AS `id`,`student`.`name` AS `name`,`student`.`gender` AS `gender`,`student`.`birthday` AS `birthday`,`student`.`phone` AS `phone`,`student`.`address` AS `address`,`student`.`school` AS `school`,`student`.`image` AS `image`,`student`.`stuId` AS `stuId`,`student`.`stuPassword` AS `stuPassword`,`student`.`stuJobCompany` AS `stuJobCompany`,`student`.`stuJobAddress` AS `stuJobAddress`,`student`.`stuJobPay` AS `stuJobPay`,`student`.`stuJobTime` AS `stuJobTime`,`gradecourse`.`gradeId` AS `gradeId`,`gradecourse`.`gradeName` AS `gradeName`,`gradecourse`.`gradeCount` AS `gradeCount`,`gradecourse`.`courseId` AS `courseId`,`gradecourse`.`courseName` AS `courseName`,`gradecourse`.`courseDetail` AS `courseDetail`,`gradecourse`.`courseSystem` AS `courseSystem`,`gradecourse`.`jobDirection` AS `jobDirection`,`gradecourse`.`courseImage` AS `courseImage` from (`student` left join `gradecourse` on((`student`.`stuGrade` = `gradecourse`.`gradeId`))) ;

-- ----------------------------
-- View structure for `teachergrade`
-- ----------------------------
DROP VIEW IF EXISTS `teachergrade`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `teachergrade` AS select `teacher`.`id` AS `id`,`teacher`.`name` AS `name`,`teacher`.`gender` AS `gender`,`teacher`.`birthday` AS `birthday`,`teacher`.`phone` AS `phone`,`teacher`.`address` AS `address`,`teacher`.`school` AS `school`,`teacher`.`image` AS `image`,`teacher`.`teacherId` AS `teacherId`,`teacher`.`teacherPassword` AS `teacherPassword`,`teacher`.`teacherExperience` AS `teacherExperience`,`gradecourse`.`gradeId` AS `gradeId`,`gradecourse`.`gradeName` AS `gradeName`,`gradecourse`.`gradeCount` AS `gradeCount`,`gradecourse`.`courseId` AS `courseId`,`gradecourse`.`courseName` AS `courseName`,`gradecourse`.`courseDetail` AS `courseDetail`,`gradecourse`.`courseSystem` AS `courseSystem`,`gradecourse`.`jobDirection` AS `jobDirection`,`gradecourse`.`courseImage` AS `courseImage` from (`teacher` left join `gradecourse` on((`teacher`.`teacherGrade` = `gradecourse`.`gradeId`))) ;
