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
{"source":"Households", "target":"Curbside Collection", "value":1.7627, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.3923, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.6072, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1418, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2837, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.3235, "optimal":"yes"} ]}; 
