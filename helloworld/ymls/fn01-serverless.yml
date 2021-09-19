service: helloworld

functions:
  hello:
    handler: handler.hello
    events:
      - http:
          path: hello/get
          method: get
          cors: true

  func01:
    handler: ./functions/func01.func01
    events:
      - schedule:
          name: func01-cron
          description: 'func01-cron'
          rate: cron(0 12 * * ? *)
          enabled: true
          input:
            keyValue: { "svr_value" : '${opt:stage}' }

  func02:
    handler: ./functions/func02.func02
    events:
      - http:
          path: func02/get
          method: get
          cors: true

  func03:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func03/get
          method: get
          cors: true

  func04:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func04/get
          method: get
          cors: true

  func05:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func05/get
          method: get
          cors: true

  func06:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func06/get
          method: get
          cors: true

  func07:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func07/get
          method: get
          cors: true

  func08:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func08/get
          method: get
          cors: true

  func09:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func09/get
          method: get
          cors: true

  func10:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func10/get
          method: get
          cors: true

  func11:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func11/get
          method: get
          cors: true

  func12:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func12/get
          method: get
          cors: true

  func13:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func13/get
          method: get
          cors: true

  func14:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func14/get
          method: get
          cors: true

  func15:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func15/get
          method: get
          cors: true

  func16:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func16/get
          method: get
          cors: true

  func17:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func17/get
          method: get
          cors: true

  func18:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func18/get
          method: get
          cors: true                                                                                                                                  

  func19:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func19/get
          method: get
          cors: true  

  func20:
    handler: ./functions/func03.func03
    events:
      - http:
          path: func20/get
          method: get
          cors: true  

