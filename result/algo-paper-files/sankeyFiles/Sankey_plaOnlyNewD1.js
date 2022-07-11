let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.5555, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.6161, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0457, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4932, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":2.748, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.29100000000000004, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.033, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0052, "optimal":"yes"} ]}; 
