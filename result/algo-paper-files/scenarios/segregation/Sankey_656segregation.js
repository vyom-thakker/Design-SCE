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
{"source":"Households", "target":"Curbside Collection", "value":3.6561, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0057, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4932, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.3334, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2942, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0049, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0006, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":3.3383, "optimal":"yes"} ]}; 
