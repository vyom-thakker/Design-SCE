let dataV={"nodes": [
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.6613, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0005, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4932, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.3381, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2946, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0004, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.3258, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":3.0128, "optimal":"yes"} ]}; 
