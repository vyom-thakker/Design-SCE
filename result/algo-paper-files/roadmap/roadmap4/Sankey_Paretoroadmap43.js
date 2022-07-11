let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.2612, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":1.6876, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.2657, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.6983, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0232, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2319, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":1.2906, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1366, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0168, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0026, "optimal":"yes"} ]}; 
