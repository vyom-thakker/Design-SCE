let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.3265, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3558, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.0865, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.1229, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0294, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2899, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":1.6133, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1708, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0213, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0034, "optimal":"yes"} ]}; 
