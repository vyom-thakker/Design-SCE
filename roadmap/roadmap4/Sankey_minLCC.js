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
{"source":"Households", "target":"Curbside Collection", "value":3.6116, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0502, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4932, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":2.7446, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2906, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0363, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0057, "optimal":"yes"} ]}; 
