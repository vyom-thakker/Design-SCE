let dataV={"nodes": [
{"name":"Landfill"},
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
{"source":"Households", "target":"Curbside Collection", "value":3.6508, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5042, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.3286, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2937, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.5875, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":2.583, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.158, "optimal":"yes"} ]}; 