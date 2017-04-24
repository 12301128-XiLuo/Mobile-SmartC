import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let devices = {
        "msg": "调用成功",
        "code": "0000",
        "data": {
            "deviceStatusList": [
              {
                "id" : 0,
                "buildingNum" : "逸夫楼",
                "classroomNum" : "101",
                "singlechipTypeId" : 0,
                "singlechipStatus" : 1,
                "raspberryTypeId" : 0,
                "raspberryStatus" : 1,
                "raspberryCode" : "1111",
                "raspberryStreamStatus" : 0,
                "singleChipTypeId" : 0,
                "singleChipStatus" : 0,
                "computerTypeId" : 0,
                "computerStatus" : 2,
                "projectorTypeId" : 0,
                "projectorStatus" : 0,
                "cameraStatus" : 1,
                "cameraList":[
                    {
                        "cameraId" : 0,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 2,
                        "cameraAngle" : "正面"
                    },
                    {
                        "cameraId" : 1,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 0,
                        "cameraAngle" : "侧面"
                    },
                    {
                        "cameraId" : 2,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" : "全景"
                    }
                ]
              },
              {
                "id" : 1,
                "buildingNum" : "逸夫楼",
                "classroomNum" : "102",
                "singlechipTypeId" : 0,
                "singlechipStatus" : 1,
                "raspberryTypeId" : 0,
                "raspberryStatus" : 1,
                "raspberryCode" : "222",
                "raspberryStreamStatus" : 1,
                "singleChipTypeId" : 0,
                "singleChipStatus" : 1,
                "computerTypeId" : 0,
                "computerStatus" : 1,
                "projectorTypeId" : 0,
                "projectorStatus" : 1,
                "cameraStatus" : 1,
                "cameraList":[
                    {
                        "cameraId" : 3,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" : "正面"
                    },
                    {
                        "cameraId" : 4,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 0,
                        "cameraAngle" : "侧面"
                    },
                    {
                        "cameraId" : 5,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" :  "全景"
                    }
                ]
              },
                {
                    "id" : 2,
                    "buildingNum" : "思源楼",
                    "classroomNum" : "102",
                    "singlechipTypeId" : 0,
                    "singlechipStatus" : 1,
                    "raspberryTypeId" : 0,
                    "raspberryStatus" : 1,
                    "raspberryCode" : "222",
                    "raspberryStreamStatus" : 2,
                    "singleChipTypeId" : 0,
                    "singleChipStatus" : 1,
                    "computerTypeId" : 0,
                    "computerStatus" : 1,
                    "projectorTypeId" : 0,
                    "projectorStatus" : 1,
                    "cameraStatus" : 1,
                    "cameraList":[
                        {
                            "cameraId" : 6,
                            "cameraTypeId" : 0,
                            "cameraStatus" : 1,
                            "cameraAngle" : "正面"
                        },
                        {
                            "cameraId" : 7,
                            "cameraTypeId" : 0,
                            "cameraStatus" : 0,
                            "cameraAngle" : "侧面"
                        },
                        {
                            "cameraId" : 8,
                            "cameraTypeId" : 0,
                            "cameraStatus" : 1,
                            "cameraAngle" :  "全景"
                        }
                    ]
                },
                {
                    "id" : 3,
                    "buildingNum" : "思源楼",
                    "classroomNum" : "103",
                    "singlechipTypeId" : 0,
                    "singlechipStatus" : 1,
                    "raspberryTypeId" : 0,
                    "raspberryStatus" : 1,
                    "raspberryCode" : "222",
                    "raspberryStreamStatus" : 3,
                    "singleChipTypeId" : 0,
                    "singleChipStatus" : 1,
                    "computerTypeId" : 0,
                    "computerStatus" : 1,
                    "projectorTypeId" : 0,
                    "projectorStatus" : 1,
                    "cameraStatus" : 1,
                    "cameraList":[
                    {
                        "cameraId" : 9,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" : "正面"
                    },
                    {
                        "cameraId" : 10,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 0,
                        "cameraAngle" : "侧面"
                    },
                    {
                        "cameraId" : 11,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" :  "全景"
                    }
                ]
                },
                {
                    "id" : 4,
                    "buildingNum" : "思源楼",
                    "classroomNum" : "104",
                    "singlechipTypeId" : 0,
                    "singlechipStatus" : 1,
                    "raspberryTypeId" : 0,
                    "raspberryStatus" : 1,
                    "raspberryCode" : "222",
                    "raspberryStreamStatus" : 4,
                    "singleChipTypeId" : 0,
                    "singleChipStatus" : 1,
                    "computerTypeId" : 0,
                    "computerStatus" : 1,
                    "cameraStatus" : 1,
                    "projectorTypeId" : 0,
                    "projectorStatus" : 1,
                    "cameraList":[
                    {
                        "cameraId" : 12,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" : "正面"
                    },
                    {
                        "cameraId" : 13,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 0,
                        "cameraAngle" : "侧面"
                    },
                    {
                        "cameraId" : 14,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" :  "全景"
                    }
                ]
                },
                {
                    "id" : 5,
                    "buildingNum" : "思源楼",
                    "classroomNum" : "105",
                    "singlechipTypeId" : 0,
                    "singlechipStatus" : 1,
                    "raspberryTypeId" : 0,
                    "raspberryStatus" : 1,
                    "raspberryCode" : "222",
                    "raspberryStreamStatus" : 5,
                    "singleChipTypeId" : 0,
                    "singleChipStatus" : 1,
                    "computerTypeId" : 0,
                    "computerStatus" : 1,
                    "projectorTypeId" : 0,
                    "projectorStatus" : 1,
                    "cameraStatus" : 1,
                    "cameraList":[
                    {
                        "cameraId" : 15,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" : "正面"
                    },
                    {
                        "cameraId" : 16,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 0,
                        "cameraAngle" : "侧面"
                    },
                    {
                        "cameraId" : 17,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" : "全景"
                    }
                ]
                },
                {
                    "id" : 6,
                    "buildingNum" : "思源楼",
                    "classroomNum" : "106",
                    "singlechipTypeId" : 0,
                    "singlechipStatus" : 1,
                    "raspberryTypeId" : 0,
                    "raspberryStatus" : 1,
                    "raspberryCode" : "222",
                    "raspberryStreamStatus" : 0,
                    "singleChipTypeId" : 0,
                    "singleChipStatus" : 1,
                    "computerTypeId" : 0,
                    "computerStatus" : 1,
                    "projectorTypeId" : 0,
                    "projectorStatus" : 1,
                    "cameraStatus" : 1,
                    "cameraList":[
                    {
                        "cameraId" : 18,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" : "正面"
                    },
                    {
                        "cameraId" : 19,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 0,
                        "cameraAngle" : "侧面"
                    },
                    {
                        "cameraId" : 20,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" :  "全景"
                    }
                ]
                },
                {
                    "id" : 7,
                    "buildingNum" : "思源楼",
                    "classroomNum" : "107",
                    "singlechipTypeId" : 0,
                    "singlechipStatus" : 1,
                    "raspberryTypeId" : 0,
                    "raspberryStatus" : 1,
                    "raspberryCode" : "222",
                    "raspberryStreamStatus" : 0,
                    "singleChipTypeId" : 0,
                    "singleChipStatus" : 1,
                    "computerTypeId" : 0,
                    "computerStatus" : 1,
                    "projectorTypeId" : 0,
                    "projectorStatus" : 1,
                    "cameraStatus" : 1,
                    "cameraList":[
                    {
                        "cameraId" : 21,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" : "正面"
                    },
                    {
                        "cameraId" : 22,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 0,
                        "cameraAngle" : "侧面"
                    },
                    {
                        "cameraId" : 23,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 1,
                        "cameraAngle" :  "全景"
                    }
                ]
                },
                {
                    "id" :8,
                    "buildingNum" : "思源楼",
                    "classroomNum" : "108",
                    "singlechipTypeId" : 0,
                    "singlechipStatus" : 1,
                    "raspberryTypeId" : 0,
                    "raspberryStatus" : 1,
                    "raspberryCode" : "222",
                    "raspberryStreamStatus" : 0,
                    "singleChipTypeId" : 0,
                    "singleChipStatus" : 1,
                    "computerTypeId" : 0,
                    "computerStatus" : 1,
                    "projectorTypeId" : 0,
                    "projectorStatus" : 1,
                    "cameraStatus" : 0,
                    "cameraList":[
                    {
                        "cameraId" : 24,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 0,
                        "cameraAngle" : "正面"
                    },
                    {
                        "cameraId" : 25,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 0,
                        "cameraAngle" : "侧面"
                    },
                    {
                        "cameraId" : 26,
                        "cameraTypeId" : 0,
                        "cameraStatus" : 0,
                        "cameraAngle" :  "全景"
                    }
                ]
                }


            ]
        }
    }

    let buildings = {
        "msg": "调用成功",
        "code": "0000",
        "data": {
            "buildingList": [
                {
                    "id" : 0,
                    "buildingNum" : "逸夫楼",
                },
                {
                    "id" : 1,
                    "buildingNum" : "思源楼",
                },
                {
                    "id" : 2,
                    "buildingNum" : "第二教学楼",
                }
        ]}
    }

    let classrooms = {
        "msg": "调用成功",
        "code": "0000",
        "data": {
            "classroomList": [
                {
                    "id" : 0,
                    "classroomNum" : "101",
                    "bid" : 0
                },
                {
                    "id" : 1,
                    "classroomNum" : "102",
                    "bid" : 0
                },
                {
                    "id" : 2,
                    "classroomNum" : "103",
                    "bid" : 0
                },{
                    "id" : 3,
                    "classroomNum" : "201",
                    "bid" : 1
                },
                {
                    "id" : 4,
                    "classroomNum" : "202",
                    "bid" : 1
                },
                {
                    "id" : 5,
                    "classroomNum" : "203",
                    "bid" : 1
                },{
                    "id" : 6,
                    "classroomNum" : "303",
                    "bid" : 2
                }

        ]}
    }
    let test={        "msg": "调用成功",
        "code": "0000"}
    return {devices,buildings,classrooms,test};
  }
}
