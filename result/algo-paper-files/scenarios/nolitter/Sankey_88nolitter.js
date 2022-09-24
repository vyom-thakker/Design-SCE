let dataV={"nodes": [
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.3138, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0041, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.8370000000000001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.0214, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2666, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0036, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":3.025, "optimal":"yes"} ]}; 
