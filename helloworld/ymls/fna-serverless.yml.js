service: helloworld

functions:

  funcb:
    handler: ./functions/func01.func01
    events:
      - schedule:
          name: funcb-cron
          description: 'funcb-cron'
          rate: cron(0 12 * * ? *)
          enabled: true
          input:
            keyValue: { "svr_value" : '${opt:stage}' }

  funcc:
    handler: ./functions/func02.func02
    events:
      - http:
          path: funcc/get
          method: get
          cors: true

  funcd:
    handler: ./functions/func02.func02
    events:
      - http:
          path: funcd/get
          method: get
          cors: true

  funce:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funce/get
          method: get
          cors: true

  funcf:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcf/get
          method: get
          cors: true

  funcg:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcg/get
          method: get
          cors: true

  funch:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funch/get
          method: get
          cors: true

  funci:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funci/get
          method: get
          cors: true

  funcj:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcj/get
          method: get
          cors: true

  funck:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funck10/get
          method: get
          cors: true

  funcl:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcl/get
          method: get
          cors: true

  funcm:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcm/get
          method: get
          cors: true

  funcn:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcn/get
          method: get
          cors: true

  funco:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funco/get
          method: get
          cors: true

  funcp:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcp/get
          method: get
          cors: true

  funcq:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcq/get
          method: get
          cors: true

  funcr:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcr/get
          method: get
          cors: true

  funcs:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcs/get
          method: get
          cors: true                                                                                                                                  

  funct:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funct/get
          method: get
          cors: true  

  funcu:
    handler: ./functions/func03.func03
    events:
      - http:
          path: funcu/get
          method: get
          cors: true  

