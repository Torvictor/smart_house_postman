let infoAPI = [];
export default infoAPI = [
    { header: "Get endpoints", method: "get", extra: "Активируется при переключении селектора на 'Endpoints'.", text: "Вывод всех активных endpoint-ов с сервера.", example: "any"},
    { header: "Make endpoints", method: "put", extra: "Активируется при клике на activate после загрузки JSON.\nДопускается ввести несколько endpoint-ов.", text: "Добавление endpoint.", example: `{
        "endpoints": [
          {
            "driver_uuid": "4db6ae90-f390-45f9-8b4a-9176863ffb5a",
            "driver_type": "mqtt",
            "name": "mqtt_ivan_rgb",
            "params": {
              "type": "rgb_control",
              "topic_read": "/devices/wb-mrgbw-d_57/controls/RGB",
              "topic_write": null
            }
          }
        ]
      }
      `},
    { header: "Remove endpoints", method: "delete", extra: "Активируется при клике на урну по uuid, полученного с сервера.", 
    text: "Удаление endpoint по uuid",
    example: `{
        "endpoints": ["9041bc26-3360-4d5b-a186-93eca865470a"]
              }`},
      
    { header: "Get devices", method: "get", extra: "Активируется при переключении селектора на 'Devices'.", text: "Вывод всех активных endpoint-ов с сервера.", example: "any"},
    { header: "Make devices", method: "put", extra: "Активируется при клике на activate после загрузки JSON.\nДопускается ввести несколько устройств.", text: "Добавление устройства.", example: 
    `{
      "devices": [
        {
          "name": "dev_ivan_rgb",
          "type": "RGBLightHex",
          "rooms": [
            "room1"
          ],
          "sources": [
            {
              "endpoint": "mqtt_ivan_rgb",
              "endpoint_parameter": "red",
              "device_parameter": "red"
            },
            {
              "endpoint": "mqtt_ivan_rgb",
              "endpoint_parameter": "green",
              "device_parameter": "green"
            },
            {
              "endpoint": "mqtt_ivan_rgb",
              "endpoint_parameter": "blue",
              "device_parameter": "blue"
            }
          ],
        "interface": {
            "export": true,
            "read_acl": 100,
            "write_acl": 999
          }
        },
        {
          "name": "dev_ivan_rgb_second",
          "type": "RGBLightHex",
          "rooms": [
            "room2",
            "room3"
          ],
          "sources": [
            {
              "endpoint": "mqtt_ivan_rgb",
              "endpoint_parameter": "red",
              "device_parameter": "red"
            },
            {
              "endpoint": "mqtt_ivan_rgb",
              "endpoint_parameter": "green",
              "device_parameter": "green"
            },
            {
              "endpoint": "mqtt_ivan_rgb",
              "endpoint_parameter": "blue",
              "device_parameter": "blue"
            }
          ],
        "interface": {
            "export": true,
            "read_acl": 100,
            "write_acl": 999
          }
        }
      ]
    }
    `},
    { header: "Remove devices", method: "delete", extra: "Активируется при клике на урну по uuid, полученного с сервера.", 
    text: "Удаление endpoint по uuid",
    example: `{
            "devices": ["d4cb7844-ac94-4f5d-8f96-526e12dab38c"]
              }`},
    
    { header: "Get rooms", method: "get", extra: "Активируется при переключении селектора на 'Rooms'.", text: "Вывод всех активных комнат с сервера.", example: "any"},
    { header: "Make rooms", method: "put", extra: "Активируется при клике на activate после загрузки JSON.\nДопускается ввести несколько комнат.", text: "Добавление комнаты.", example: 
    `{
      "rooms": [
        "room1",
        "room2",
        "room3"
      ]
    }
    `},
    { header: "Remove rooms", method: "delete", extra: "Активируется при клике на урну по uuid, полученного с сервера.", 
    text: "Удаление комнаты по uuid",
    example: `{
          "rooms": ["9041bc26-3360-4d5b-a186-93eca865470a", 
          "a93da9a8-84ff-4ae4-b3df-3bb2d082d81d"]
              }`},
];
