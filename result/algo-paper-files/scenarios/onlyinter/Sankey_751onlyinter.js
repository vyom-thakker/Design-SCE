let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0927, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6025, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0083, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1039, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.4579, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0485, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.006, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0009, "optimal":"yes"} ]}; 
