let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.3338, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.1702, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0301, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.9546, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":1.6492, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1746, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0218, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0034, "optimal":"yes"} ]}; 
