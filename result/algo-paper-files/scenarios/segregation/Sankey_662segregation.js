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
{"source":"Households", "target":"Curbside Collection", "value":0.6034, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":3.5516, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5502, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0486, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.5502, "optimal":"yes"} ]}; 
