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
{"source":"Households", "target":"Curbside Collection", "value":1.7966, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.3584, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.6380000000000001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1446, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2891, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.3489, "optimal":"yes"} ]}; 
