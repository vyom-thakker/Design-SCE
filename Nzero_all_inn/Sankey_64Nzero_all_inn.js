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
{"source":"Households", "target":"Curbside Collection", "value":0.8065, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":3.3485, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7353, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0649, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1298, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.6055, "optimal":"yes"} ]}; 
