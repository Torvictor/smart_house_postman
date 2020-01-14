let infoAPI = [];
export default infoAPI = [
    { header: "Получить эндпоинты", method: "get", extra: "Активируется при переключении селектора на 'Эндпоинты'.", text: "Вывод всех активных эндпоинтовов с сервера.", example: "-"},
    { header: "Добавить эндпоинты", method: "put", extra: "Активируется при клике на 'Активировать' после загрузки JSON.\nДопускается ввести несколько эндпоинтовов.", text: "Добавление эндпоинта.", example: `{
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
    { header: "Удалить эндпоинты", method: "delete", extra: "Активируется при клике на урну по uuid, полученного с сервера.", 
    text: "Удаление эндпоинта по uuid",
    example: `{
        "endpoints": ["9041bc26-3360-4d5b-a186-93eca865470a"]
              }`},
      
    { header: "Получить устройства", method: "get", extra: "Активируется при переключении селектора на 'Устройства'.", text: "Вывод всех активных устройств с сервера.", example: "-"},
    { header: "Добавить устройства", method: "put", extra: "Активируется при клике на 'Активировать' после загрузки JSON.\nДопускается ввести несколько устройств.", text: "Добавление устройства.", example: 
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
    { header: "Удалить устройства", method: "delete", extra: "Активируется при клике на урну по uuid, полученного с сервера.", 
    text: "Удаление устройства по uuid",
    example: `{
            "devices": ["d4cb7844-ac94-4f5d-8f96-526e12dab38c"]
              }`},
    
    { header: "Получить комнаты", method: "get", extra: "Активируется при переключении селектора на 'Комнаты'.", text: "Вывод всех активных комнат с сервера.", example: "-"},
    { header: "Добавить комнаты", method: "put", extra: "Активируется при клике на 'Активировать' после загрузки JSON.\nДопускается ввести несколько комнат.", text: "Добавление комнаты.", example: 
    `{
      "rooms": [
        "room1",
        "room2",
        "room3"
      ]
    }
    `},
    { header: "Удалить комнаты", method: "delete", extra: "Активируется при клике на урну по uuid, полученного с сервера.", 
    text: "Удаление комнаты по uuid",
    example: `{
          "rooms": ["9041bc26-3360-4d5b-a186-93eca865470a", 
          "a93da9a8-84ff-4ae4-b3df-3bb2d082d81d"]
              }`},

    { header: "Получить/добавить/удалить сценарии", method: "get/put/delete", extra: "Уже работает", 
      text: "Документации пока нет...",
      example: ``}
];
