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
{"source":"Households", "target":"Curbside Collection", "value":3.1313, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.004, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.0197, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.8549, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2519, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0035, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":2.8478, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0106, "optimal":"yes"} ]}; 
