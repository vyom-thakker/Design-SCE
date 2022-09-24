let dataV={"nodes": [
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.3275, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.8275, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.2103, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1068, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.2103, "optimal":"yes"} ]}; 
