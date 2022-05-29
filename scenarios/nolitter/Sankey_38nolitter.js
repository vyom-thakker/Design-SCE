let dataV={"nodes": [
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.6618, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4932, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.3386, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2946, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.8048, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.5338, "optimal":"yes"} ]}; 
