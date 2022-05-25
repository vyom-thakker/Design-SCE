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
{"source":"Households", "target":"Curbside Collection", "value":3.4621, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6929, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.1565, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2786, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.5571, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.5994, "optimal":"yes"} ]}; 
