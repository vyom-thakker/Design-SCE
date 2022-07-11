let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0956, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6213, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0086, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.4721, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.05, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0062, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.001, "optimal":"yes"} ]}; 
