let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0013, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0087, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0001, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":4.1462, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0066, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0007, "optimal":"yes"} ]}; 
