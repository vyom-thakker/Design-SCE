let dataV={"nodes": [
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.397, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0072, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7508, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.0972, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2733, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0062, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0008, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":3.1034, "optimal":"yes"} ]}; 
