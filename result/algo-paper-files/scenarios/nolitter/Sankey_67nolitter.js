let dataV={"nodes": [
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"Compost"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.5580000000000003, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.597, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.3322, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2058, "optimal":"yes"} , 
{"source":"Segregation", "target":"Compost", "value":0.0146, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.3176, "optimal":"yes"} ]}; 
