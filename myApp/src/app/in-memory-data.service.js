var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var devices = {
            "msg": "调用成功",
            "code": "0000",
            "data": {
                "deviceStatusList": [
                    {
                        "id": 0,
                        "buildingNum": "逸夫楼",
                        "classroomNum": "101",
                        "singlechipTypeId": 0,
                        "singlechipStatus": 1,
                        "raspberryTypeId": 0,
                        "raspberryStatus": 1,
                        "raspberryCode": "1111",
                        "raspberryStreamStatus": 0,
                        "singleChipTypeId": 0,
                        "singleChipStatus": 0,
                        "computerTypeId": 0,
                        "computerStatus": 2,
                        "projectorTypeId": 0,
                        "projectorStatus": 0,
                        "cameraStatus": 1,
                        "cameraList": [
                            {
                                "cameraId": 0,
                                "cameraTypeId": 0,
                                "cameraStatus": 2,
                                "cameraAngle": "上",
                                "cameraName": "正面"
                            },
                            {
                                "cameraId": 1,
                                "cameraTypeId": 0,
                                "cameraStatus": 0,
                                "cameraAngle": "下",
                                "cameraName": "侧面"
                            },
                            {
                                "cameraId": 2,
                                "cameraTypeId": 0,
                                "cameraStatus": 1,
                                "cameraAngle": "左",
                                "cameraName": "全景"
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "buildingNum": "逸夫楼",
                        "classroomNum": "102",
                        "singlechipTypeId": 0,
                        "singlechipStatus": 1,
                        "raspberryTypeId": 0,
                        "raspberryStatus": 1,
                        "raspberryCode": "222",
                        "raspberryStreamStatus": 1,
                        "singleChipTypeId": 0,
                        "singleChipStatus": 1,
                        "computerTypeId": 0,
                        "computerStatus": 1,
                        "projectorTypeId": 0,
                        "projectorStatus": 1,
                        "cameraStatus": 1,
                        "cameraList": [
                            {
                                "cameraId": 0,
                                "cameraTypeId": 0,
                                "cameraStatus": 2,
                                "cameraAngle": "上",
                                "cameraName": "正面"
                            },
                            {
                                "cameraId": 1,
                                "cameraTypeId": 0,
                                "cameraStatus": 0,
                                "cameraAngle": "下",
                                "cameraName": "侧面"
                            },
                            {
                                "cameraId": 2,
                                "cameraTypeId": 0,
                                "cameraStatus": 1,
                                "cameraAngle": "左",
                                "cameraName": "全景"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "buildingNum": "思源楼",
                        "classroomNum": "102",
                        "singlechipTypeId": 0,
                        "singlechipStatus": 1,
                        "raspberryTypeId": 0,
                        "raspberryStatus": 1,
                        "raspberryCode": "222",
                        "raspberryStreamStatus": 2,
                        "singleChipTypeId": 0,
                        "singleChipStatus": 1,
                        "computerTypeId": 0,
                        "computerStatus": 1,
                        "projectorTypeId": 0,
                        "projectorStatus": 1,
                        "cameraStatus": 1,
                        "cameraList": [
                            {
                                "cameraId": 0,
                                "cameraTypeId": 0,
                                "cameraStatus": 2,
                                "cameraAngle": "上",
                                "cameraName": "正面"
                            },
                            {
                                "cameraId": 1,
                                "cameraTypeId": 0,
                                "cameraStatus": 0,
                                "cameraAngle": "下",
                                "cameraName": "侧面"
                            },
                            {
                                "cameraId": 2,
                                "cameraTypeId": 0,
                                "cameraStatus": 1,
                                "cameraAngle": "左",
                                "cameraName": "全景"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "buildingNum": "思源楼",
                        "classroomNum": "103",
                        "singlechipTypeId": 0,
                        "singlechipStatus": 1,
                        "raspberryTypeId": 0,
                        "raspberryStatus": 1,
                        "raspberryCode": "222",
                        "raspberryStreamStatus": 3,
                        "singleChipTypeId": 0,
                        "singleChipStatus": 1,
                        "computerTypeId": 0,
                        "computerStatus": 1,
                        "projectorTypeId": 0,
                        "projectorStatus": 1,
                        "cameraStatus": 1,
                        "cameraList": [
                            {
                                "cameraId": 0,
                                "cameraTypeId": 0,
                                "cameraStatus": 2,
                                "cameraAngle": "上",
                                "cameraName": "正面"
                            },
                            {
                                "cameraId": 1,
                                "cameraTypeId": 0,
                                "cameraStatus": 0,
                                "cameraAngle": "下",
                                "cameraName": "侧面"
                            },
                            {
                                "cameraId": 2,
                                "cameraTypeId": 0,
                                "cameraStatus": 1,
                                "cameraAngle": "左",
                                "cameraName": "全景"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "buildingNum": "思源楼",
                        "classroomNum": "104",
                        "singlechipTypeId": 0,
                        "singlechipStatus": 1,
                        "raspberryTypeId": 0,
                        "raspberryStatus": 1,
                        "raspberryCode": "222",
                        "raspberryStreamStatus": 4,
                        "singleChipTypeId": 0,
                        "singleChipStatus": 1,
                        "computerTypeId": 0,
                        "computerStatus": 1,
                        "cameraStatus": 1,
                        "projectorTypeId": 0,
                        "projectorStatus": 1,
                        "cameraList": [
                            {
                                "cameraId": 0,
                                "cameraTypeId": 0,
                                "cameraStatus": 2,
                                "cameraAngle": "上",
                                "cameraName": "正面"
                            },
                            {
                                "cameraId": 1,
                                "cameraTypeId": 0,
                                "cameraStatus": 0,
                                "cameraAngle": "下",
                                "cameraName": "侧面"
                            },
                            {
                                "cameraId": 2,
                                "cameraTypeId": 0,
                                "cameraStatus": 1,
                                "cameraAngle": "左",
                                "cameraName": "全景"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "buildingNum": "思源楼",
                        "classroomNum": "105",
                        "singlechipTypeId": 0,
                        "singlechipStatus": 1,
                        "raspberryTypeId": 0,
                        "raspberryStatus": 1,
                        "raspberryCode": "222",
                        "raspberryStreamStatus": 5,
                        "singleChipTypeId": 0,
                        "singleChipStatus": 1,
                        "computerTypeId": 0,
                        "computerStatus": 1,
                        "projectorTypeId": 0,
                        "projectorStatus": 1,
                        "cameraStatus": 1,
                        "cameraList": [
                            {
                                "cameraId": 0,
                                "cameraTypeId": 0,
                                "cameraStatus": 2,
                                "cameraAngle": "上",
                                "cameraName": "正面"
                            },
                            {
                                "cameraId": 1,
                                "cameraTypeId": 0,
                                "cameraStatus": 0,
                                "cameraAngle": "下",
                                "cameraName": "侧面"
                            },
                            {
                                "cameraId": 2,
                                "cameraTypeId": 0,
                                "cameraStatus": 1,
                                "cameraAngle": "左",
                                "cameraName": "全景"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "buildingNum": "思源楼",
                        "classroomNum": "106",
                        "singlechipTypeId": 0,
                        "singlechipStatus": 1,
                        "raspberryTypeId": 0,
                        "raspberryStatus": 1,
                        "raspberryCode": "222",
                        "raspberryStreamStatus": 0,
                        "singleChipTypeId": 0,
                        "singleChipStatus": 1,
                        "computerTypeId": 0,
                        "computerStatus": 1,
                        "projectorTypeId": 0,
                        "projectorStatus": 1,
                        "cameraStatus": 1,
                        "cameraList": [
                            {
                                "cameraId": 0,
                                "cameraTypeId": 0,
                                "cameraStatus": 2,
                                "cameraAngle": "上",
                                "cameraName": "正面"
                            },
                            {
                                "cameraId": 1,
                                "cameraTypeId": 0,
                                "cameraStatus": 0,
                                "cameraAngle": "下",
                                "cameraName": "侧面"
                            },
                            {
                                "cameraId": 2,
                                "cameraTypeId": 0,
                                "cameraStatus": 1,
                                "cameraAngle": "左",
                                "cameraName": "全景"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "buildingNum": "思源楼",
                        "classroomNum": "107",
                        "singlechipTypeId": 0,
                        "singlechipStatus": 1,
                        "raspberryTypeId": 0,
                        "raspberryStatus": 1,
                        "raspberryCode": "222",
                        "raspberryStreamStatus": 0,
                        "singleChipTypeId": 0,
                        "singleChipStatus": 1,
                        "computerTypeId": 0,
                        "computerStatus": 1,
                        "projectorTypeId": 0,
                        "projectorStatus": 1,
                        "cameraStatus": 1,
                        "cameraList": [
                            {
                                "cameraId": 0,
                                "cameraTypeId": 0,
                                "cameraStatus": 2,
                                "cameraAngle": "上",
                                "cameraName": "正面"
                            },
                            {
                                "cameraId": 1,
                                "cameraTypeId": 0,
                                "cameraStatus": 0,
                                "cameraAngle": "下",
                                "cameraName": "侧面"
                            },
                            {
                                "cameraId": 2,
                                "cameraTypeId": 0,
                                "cameraStatus": 1,
                                "cameraAngle": "左",
                                "cameraName": "全景"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "buildingNum": "思源楼",
                        "classroomNum": "108",
                        "singlechipTypeId": 0,
                        "singlechipStatus": 1,
                        "raspberryTypeId": 0,
                        "raspberryStatus": 1,
                        "raspberryCode": "222",
                        "raspberryStreamStatus": 0,
                        "singleChipTypeId": 0,
                        "singleChipStatus": 1,
                        "computerTypeId": 0,
                        "computerStatus": 1,
                        "projectorTypeId": 0,
                        "projectorStatus": 1,
                        "cameraStatus": 0,
                        "cameraList": [
                            {
                                "cameraId": 0,
                                "cameraTypeId": 0,
                                "cameraStatus": 2,
                                "cameraAngle": "上",
                                "cameraName": "正面"
                            },
                            {
                                "cameraId": 1,
                                "cameraTypeId": 0,
                                "cameraStatus": 0,
                                "cameraAngle": "下",
                                "cameraName": "侧面"
                            },
                            {
                                "cameraId": 2,
                                "cameraTypeId": 0,
                                "cameraStatus": 1,
                                "cameraAngle": "左",
                                "cameraName": "全景"
                            }
                        ]
                    }
                ]
            }
        };
        var buildings = {
            "msg": "调用成功",
            "code": "0000",
            "data": {
                "buildingList": [
                    {
                        "id": 0,
                        "buildingNum": "逸夫楼",
                    },
                    {
                        "id": 1,
                        "buildingNum": "思源楼",
                    },
                    {
                        "id": 2,
                        "buildingNum": "第二教学楼",
                    }
                ]
            }
        };
        var classrooms = {
            "msg": "调用成功",
            "code": "0000",
            "data": {
                "classroomList": [
                    {
                        "id": 0,
                        "classroomNum": "101",
                        "bid": 0
                    },
                    {
                        "id": 1,
                        "classroomNum": "102",
                        "bid": 0
                    },
                    {
                        "id": 2,
                        "classroomNum": "103",
                        "bid": 0
                    }, {
                        "id": 3,
                        "classroomNum": "201",
                        "bid": 1
                    },
                    {
                        "id": 4,
                        "classroomNum": "202",
                        "bid": 1
                    },
                    {
                        "id": 5,
                        "classroomNum": "203",
                        "bid": 1
                    }, {
                        "id": 6,
                        "classroomNum": "303",
                        "bid": 2
                    }
                ]
            }
        };
        var user = {
            "msg": "调用成功",
            "code": "0000",
            "data": {
                "msg": 0,
                "user": {
                    "id": 1,
                    "username": "xixi",
                    "password": "haha",
                    "rname": "超级管理员"
                }
            }
        };
        var messages = {
            "msg": "调用成功",
            "code": "0000",
            "data": {
                "messageListCenter": [
                    {
                        "judge": "success",
                        "nowTime": "2017-04-28 16:22:06",
                        "message": "开始推流",
                        "ownId": "1111",
                        "buildClass": "逸夫楼101",
                        "tab": "video",
                        "userId": 1
                    },
                    {
                        "judge": "fail",
                        "nowTime": "2017-04-28 16:22:06",
                        "message": "开始推流",
                        "ownId": "1111",
                        "buildClass": "逸夫楼102",
                        "tab": "device",
                        "userId": 1
                    },
                    {
                        "judge": "timeout",
                        "nowTime": "2017-04-28 16:22:06",
                        "message": "开始推流",
                        "ownId": "1111",
                        "buildClass": "逸夫楼103",
                        "tab": "all",
                        "userId": 1
                    }
                ]
            }
        };
        return { user: user, devices: devices, buildings: buildings, classrooms: classrooms, messages: messages };
    };
    return InMemoryDataService;
}());
export { InMemoryDataService };
//# sourceMappingURL=in-memory-data.service.js.map