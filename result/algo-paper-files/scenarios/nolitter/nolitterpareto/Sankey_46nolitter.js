let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0252, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.6599, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0019, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4932, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.126, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.1857, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2945, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0001, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0016, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":3.1873, "optimal":"yes"} ]}; 
