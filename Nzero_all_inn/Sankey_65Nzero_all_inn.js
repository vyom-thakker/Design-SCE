let dataV={"nodes": [
{"name":"Landfill"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.1343, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.0207, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.9459, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1717, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3435, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.6025, "optimal":"yes"} ]}; 
