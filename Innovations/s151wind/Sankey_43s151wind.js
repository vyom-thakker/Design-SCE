let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0782, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0107, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7102, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0095, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.5087, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0069, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2148, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.3866, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0409, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.005, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0008, "optimal":"yes"} ]}; 
