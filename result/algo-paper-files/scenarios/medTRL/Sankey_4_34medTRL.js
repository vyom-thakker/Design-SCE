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
{"source":"Households", "target":"Curbside Collection", "value":2.9164, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.2386, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.659, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2347, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.4693, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.1897, "optimal":"yes"} ]}; 
